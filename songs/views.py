from .models import Song
from django.views.generic import ListView, DetailView
from .serializers import SongSerializer
from rest_framework import viewsets, filters
from django.http.response import JsonResponse
from rest_framework.pagination import PageNumberPagination

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'


class SongListView(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.OrderingFilter, filters.SearchFilter]
    search_fields = ['singer', 'song_name', 'song_text']
    queryset = Song.objects.all()
    ordering = ['-views']

    def perform_create(self, serializer):
        serializer.validated_data['user'] = self.request.user
        return super().perform_create(serializer)

    def perform_update(self, serializer):
        return super().perform_update(serializer)
