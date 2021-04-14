from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=100)
    calories = models.CharField(max_length=50)


