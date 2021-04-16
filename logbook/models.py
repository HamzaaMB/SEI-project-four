from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Logbook(models.Model):
    name = models.CharField(max_length=50)
    food = models.ManyToManyField('foods.Food', related_name='logbooks')
    owner = models.ForeignKey(
        User,
        related_name='logbooks',
        on_delete = models.CASCADE
    )

    def __str__(self):
        return f"{self.name}"
