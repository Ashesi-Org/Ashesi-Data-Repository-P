
from django.core.exceptions import ObjectDoesNotExist
from botocore.exceptions import NoCredentialsError, PartialCredentialsError, BotoCoreError
from .dataset_service_repository import *
from ..collections_service.collections_service_repository import get_collection_by_id
from ADRP.models import DatasetFile
from ADRP.serializers import DatasetFileSerializer
import boto3
import logging

from django.core.exceptions import ObjectDoesNotExist

from .dataset_service_repository import *
from ..collections_service.collections_service_repository import get_collection_by_id

logger = logging.getLogger(__name__)

MAX_FILE_SIZE_MB = 500
MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024


class DatasetService:


    def get_dataset(request_obj):
        collection_id = request_obj.query_params.get('collection_id')
        
        dataset_data = get_dataset(collection_id)

        # Return only approved columns
        serialized_data = DatasetFileSerializer(instance=dataset_data, many=True)

        return serialized_data.data
        

        

    def handle_dataset_upload(collection_id, file_obj):
        """ takes files uploaded and creates the Collection file object"""

        if not collection_id or not file_obj:
            return {"error": "Collection ID and file are required.", "status": 400}

        try:
            collection = get_collection_by_id(collection_id)
        except ObjectDoesNotExist:
            return {"error": "Collection not found.", "status": 404}

        if file_obj.size > MAX_FILE_SIZE_BYTES:
            return {"error": f"File size exceeds {MAX_FILE_SIZE_MB}MB limit.", "status": 400}

        ##add check for zip file

        try:
            file_url = upload_dataset_to_bucket(file_obj, file_obj.name, collection_id)
        except:
            return {"message": "File upload failed", "status": 400}

        try:
            save_dataset(collection, file_url, file_obj.content_type) # youll need to add the aws query params forthe link stored in the db to work
            return {"message": "File uploaded successfully", "status": 201}

        except ValueError as ve:
            return {"message": str(ve), "status": 400}
        except Exception as e:
            return {"message": "An unexpected error occurred", "details": str(e), "status": 500}

    def handle_dataset_download(collection_id, filename):
        """Download file from bucket"""

        if not collection_id or not filename:
            return {"error": "collection ID and filename are required.", "status": 400}

        try:
            dataset_filename = f'{collection_id}-{filename}'
            file_url = generate_dataset_url_from_bucket(dataset_filename)
            return {"message": "URL generated successfully", "file_url": file_url, "status": 200}

        except:
            return {"error": "An error occurred while generating download url.", "status": 400}

    def handle_dataset_delete(collection_id, filename):
        """ takes the dataset id and file name and deletes them from the bucket and db"""

        if not collection_id or not filename:
            return {"error": "collection ID and filename are required.", "status": 400}

        try:
            collection = get_collection_by_id(collection_id)
        except ObjectDoesNotExist:
            return {"error": "Collection not found.", "status": 404}

        try:
            dataset_filename = f'{collection_id}-{filename}'
            delete_dataset_from_bucket(dataset_filename)
            deleted_count = delete_dataset_file(collection, filename)

            if deleted_count == 0:
                return {"error": "File not found in database.", "status": 404}

            return {"message": "File deleted successfully.", "status": 200}
        except Exception as e:
            logger.error(f"Error deleting file {filename}: {str(e)}")
            return {"error": "An error occurred while deleting the file.", "status": 500}

    def handle_dataset_update(collection_id, file_obj):
        """ takes files uploaded and updates the dataset file object"""

        if not collection_id or not file_obj:
            return {"error": "collection ID and file are required.", "status": 400}

        try:
            collection = get_collection_by_id(collection_id)
        except ObjectDoesNotExist:
            return {"error": "Collection not found.", "status": 404}

        if file_obj.size > MAX_FILE_SIZE_BYTES:
            return {"error": f"File size exceeds {MAX_FILE_SIZE_MB}MB limit.", "status": 400}

        try:
            file_url = update_dataset_on_bucket(file_obj.name, file_obj)
            update_dataset_file(collection, file_url, file_obj.content_type)

            return {"message": "File uploaded successfully", "file_url": file_url, "status": 201}

        except Exception as e:
            logger.error(f"Error updating file {file_obj.name}: {str(e)}")
            return {"error": "An error occurred while updating the file.", "status": 500}
