from django.urls import path
from .views import SongPage, SongList, index

urlpatterns = [
    path('react', index),
    path('', SongList.as_view(), name="song_list"),
    path('<slug:pk>', SongPage.as_view(), name="song_page")
]