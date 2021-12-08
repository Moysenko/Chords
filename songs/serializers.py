from rest_framework import serializers
from .models import Song
from app.serializers import UserSerializer

class SongSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)

  class Meta:
    model = Song
    fields = ['id', 'singer', 'song_name', 'song_text', 'views', 'user', 'date_upload']
