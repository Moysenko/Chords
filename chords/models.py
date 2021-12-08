from django.db import models

class Chord(models.Model):
  name = models.CharField(max_length=5)
  image = models.ImageField(upload_to="chord_images")

  def __str__(self):
    return self.name
