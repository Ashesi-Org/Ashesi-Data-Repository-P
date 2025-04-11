from django_filters import rest_framework as filters
from ADRP.models import Collection
from django.db.models import Q


class CollectionFilter(filters.FilterSet):
    title = filters.CharFilter(method='filter_title')
    # keywords = filters.CharFilter(method='filter_keywords')
    keywords = filters.BaseInFilter(field_name='keywords', lookup_expr='overlap')  
    authors = filters.CharFilter(method="filter_by_author")
    date_of_publication_from = filters.DateTimeFilter(field_name="date_of_publication", lookup_expr="gte")
    date_of_publication_to = filters.DateTimeFilter(field_name="date_of_publication", lookup_expr="lte")


    def filter_by_author(self, queryset, name, value):
        return queryset.filter(authors__name__icontains=value)
    

    def filter_title(self, queryset, name, value):
        return queryset.filter(Q(title__iexact=value) | Q(title__icontains=value))

    def filter_keywords(self, queryset, name, value):
        keywords = value.split(",") 
        query = Q()
        for keyword in keywords:
            query |= Q(keywords__icontains=keyword)
        return queryset.filter(query).distinct()    
    

    ordering = filters.OrderingFilter(
        fields=(
            ("date_of_publication", "date_of_publication"),
            ("title", "title"),
        )
    )

   
    class Meta:
        model = Collection
        fields = [
            "title",
            "keywords",
            "authors",
            "date_of_publication_from",
            "date_of_publication_to",
        ]