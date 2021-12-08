from rest_framework import serializers
from .models import Chord
from app.serializers import UserSerializer

class ChordSerializer(serializers.ModelSerializer):
  class Meta:
    model = Chord
    fields = ['id', 'name', 'image']
