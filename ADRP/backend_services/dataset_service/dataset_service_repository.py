from ADRP.models import DatasetFile
import boto3
from django.conf import settings
from ADRP.settings import AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY, AWS_STORAGE_BUCKET_NAME, AWS_S3_REGION_NAME
from botocore.exceptions import NoCredentialsError, PartialCredentialsError, BotoCoreError
from .helper import extract_filename
import logging

logger = logging.getLogger(__name__)
LINK_EXPIRY_TIME = 3600 * 48


### s3  interactions



def s3_client_connection():

    return boto3.client(
        "s3",
        aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
        aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
        region_name=settings.AWS_S3_REGION_NAME,
    )


def upload_dataset_to_bucket(file_obj, filename, collection_id):
    """ Uploads files to bucket and return URL """
    try:
        s3_client = s3_client_connection()
        bucket_name = AWS_STORAGE_BUCKET_NAME
        key = f'{collection_id}-{filename}' # unique id for files in bucket
        s3_client.upload_fileobj(file_obj, bucket_name, key) # will allow anyone with the link to read the file
        # ExtraArgs={"ACL": "private"} Only the owner (AWS account that uploaded the file) can access it.

        return f"https://{bucket_name}.s3.amazonaws.com/{collection_id}-{filename}"

    except FileNotFoundError:
        logger.error(f"File not found: {file_obj}")
    except (NoCredentialsError, PartialCredentialsError):
        logger.error("AWS credentials not found or misconfigured")
    except BotoCoreError as e:
        logger.error(f"An error occurred with Boto3: {e}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
    return None


def generate_dataset_url_from_bucket(filename):
    try:
        s3_client = s3_client_connection()
        return s3_client.generate_presigned_url(
            'get_object', 
            Params={'Bucket':AWS_STORAGE_BUCKET_NAME,'Key':filename}, 
            ExpiresIn=LINK_EXPIRY_TIME) 
    
    except Exception as e:
        logger.error(f"Unexpected error generated presigned URL: {e}")

    return None


def delete_dataset_from_bucket(filename):
    try:
        s3_client = s3_client_connection()
        return s3_client.delete_object(Bucket=AWS_STORAGE_BUCKET_NAME,Key=filename)
    
    except (NoCredentialsError, PartialCredentialsError):
        logger.error("AWS credentials not found or misconfigured")
    except BotoCoreError as e:
        logger.error(f"An error occurred with Boto3: {e}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")

def update_dataset_on_bucket(filename, file_obj):
    try:
        s3_client = s3_client_connection()
        return s3_client.put_object(
            Bucket=AWS_STORAGE_BUCKET_NAME,
            Body=file_obj,
            Key=filename,
        )
    
    except (NoCredentialsError, PartialCredentialsError):
        logger.error("AWS credentials not found or misconfigured")
    except BotoCoreError as e:
        logger.error(f"An error occurred with Boto3: {e}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
    
    return None


# collection interactions

def get_dataset(collection_id):
    """Get dataset file from the collection"""
    return DatasetFile.objects.filter(collection_id=collection_id)


def save_dataset(collection, file_url, file_type):
    """Saves a dataset file record in the collection"""
    try:
            return DatasetFile.objects.create(
                collection=collection,
                file_name=extract_filename(file_url),
                file_url=file_url,
                file_type=file_type
            )
    except Exception as e:
        raise ValueError(f"Failed to save dataset file: {str(e)}")


def update_dataset_file(collection, file_url, file_type):
    """Update dataset file in the collection"""
    return DatasetFile.objects.filter(collection=collection).update(
        file_url=file_url,
        file_type=file_type
    )


def delete_dataset_file(collection, filename):
    """Delete dataset file from the collection"""
    return DatasetFile.objects.filter(collection=collection, file_url__endswith=filename).delete()[0]
