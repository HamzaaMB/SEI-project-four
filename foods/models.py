from django.db import models

class Food(models.Model):
    title = models.CharField(max_length=100)
    calories = models.FloatField()
    protein = models.CharField(max_length=50)
    carbs = models.CharField(max_length=50)
    fat = models.CharField(max_length=50)
    weight = models.CharField(max_length=50)
    serving = models.CharField(max_length=50)
    servingAs = models.CharField(max_length=50)
    logbook = models.ManyToManyField('logbook.Logbook', related_name='logbooks')

    def __str__(self):
        return f"{self.title} - {self.calories}"
