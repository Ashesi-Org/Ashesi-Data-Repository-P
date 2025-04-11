from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.request import Request
from rest_framework.response import Response

from .statistics_service_repository import *
from ...serializers import StatisticsSerializer

class StatisticsService():

    @staticmethod
    def get_statistics() -> Response:
        """ Fetches usage statistics for the platform including:
        num downloads, num views, num contributrs, num collections"""

        stats = get_all_stats()
        serialized_data = StatisticsSerializer(instance=stats)
        print(serialized_data)
        return serialized_data.data


