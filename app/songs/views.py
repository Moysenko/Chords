from django.shortcuts import render
from .models import Song
from django.views.generic import ListView, DetailView

class SongList(ListView):
  template_name = 'songs/songList.html'
  model = Song
  context_object_name = 'songs'

class SongPage(DetailView):
  template_name = 'songs/songDetails.html'
  model = Song
  context_object_name = 'song'