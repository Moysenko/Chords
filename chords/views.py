from .serializers import ChordSerializer
from rest_framework import viewsets
from .models import Chord

class ChordListView(viewsets.ModelViewSet):
  serializer_class = ChordSerializer
  queryset = Chord.objects.all()

  def perform_create(self, serializer):
    return super().perform_create(serializer)
