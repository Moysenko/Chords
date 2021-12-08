from django.db import models
from django.contrib.auth.models import User
import datetime

class Song(models.Model):
  singer = models.CharField(max_length=100)
  song_name = models.CharField(max_length=100)
  song_text = models.TextField()
  views = models.IntegerField(default=0)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  date_upload = models.DateField(default=datetime.date.today)

  def __str__(self):
    return f'{self.singer} - {self.song_name}; views: {self.views}'