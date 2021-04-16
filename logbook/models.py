from django.db import models


class Logbook(models.Model):
    food = models.ForeignKey(
        "foods.Food",
        related_name="foods",
        on_delete= models.CASCADE
    )

    def __str__(self):
        return f"{self.food}"

