from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.request import Request
from rest_framework.response import Response

from .collections_service_repository import *
from ...serializers import CollectionSerializer
from ..dataset_service.dataset_service_main import DatasetService
from django.db import transaction

class CollectionsService:
    """Service for managing collections on the ADRP"""

    @staticmethod
    def create_collection(request_obj: Request):
        """ Creates a new collection"""

        serializer = CollectionSerializer(data=request_obj.data, context={'request': request_obj})

        if serializer.is_valid():
            new_collection = serializer.save()
            save_authors(request_obj, new_collection)

            return serializer.data.get('id')

        raise ValidationError(serializer.errors)
    

    @staticmethod
    def upload_collection(request_obj: Request):
        """ uploads collection then dataset if one fails delete prevent any from entring database"""
        dataset_fileobj = request_obj.FILES.get("file")
        if not dataset_fileobj:
            return Response({"error": "No file uploaded."}, status=400)
    
        serializer = CollectionSerializer(data=request_obj.data, context={'request': request_obj})

        if serializer.is_valid():
            print("valid obj")
            try: 
               with transaction.atomic():
                    
                    new_collection = serializer.save()
                    save_authors(request_obj, new_collection)

                    collection_id = new_collection.id 
                    result = DatasetService.handle_dataset_upload(collection_id, dataset_fileobj)
                    print('data set result', result)
                    if isinstance(result, Response):
                        if result.status_code != 201:
                            raise Exception("Dataset upload failed")
                    else:
                        if result.get("status") != 201:
                            raise Exception("Dataset upload failed")

                    return Response({"message": "Collection and dataset uploaded successfully.",
                                     "collection": CollectionSerializer(new_collection, context={'request': request_obj}).data
                                    }, status=status.HTTP_201_CREATED)

            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    @staticmethod
    def delete_collection(request_obj: Request):
        """Delete a collection by the ID"""

        delete_collection(request_obj)
        return

    @staticmethod
    def update_collection(self):
        return

    @staticmethod
    def get_all_collections(request_obj: Request):
        """ Gets all collections. Returns a paginated response"""
        # TODO Clean this up

        if request_obj.user.is_authenticated and request_obj.user.role == 'admin':
            collection_status = request_obj.query_params.get('status')
            collection_status = CollectionSerializer.validate_status(collection_status)
            results = get_all_collections(request_obj, collection_status, True)
        else:
            results = get_all_collections(request_obj, "approved")

        return results

    @staticmethod
    def get_collection(request_obj: Request):
        """Gets a collection by the ID if user has sufficient permissions"""

        collection_id = request_obj.query_params.get('collection_id')
        collection_data = get_collection_by_id(collection_id)

        if request_obj.user.role == 'admin':
            increment_collection_views(collection_data)
        else:
            if collection_data.approval_status != 'approved':
                return

        increment_collection_views(collection_data)

        # Return only approved columns
        serialized_data = CollectionSerializer(instance=collection_data)

        return serialized_data.data

    @staticmethod
    def change_collection_status(request_obj: Request):
        """ Change the status of a collection"""

        try:
            collection = get_collection_by_id(request_obj.data.get('id'))

            serializer = CollectionSerializer(instance=collection, data=request_obj.data, partial=True)

            if serializer.is_valid():
                collection.approval_status = serializer.validated_data['approval_status']
                collection.save()
                return Response(serializer.data, status=status.HTTP_200_OK)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
