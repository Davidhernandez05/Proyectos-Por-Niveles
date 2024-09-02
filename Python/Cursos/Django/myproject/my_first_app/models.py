from django.db import models

# Create your models here.
class car(models.Model):
    tittle = models.TextField(max_length=250)