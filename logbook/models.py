from django.db import models


class Logbook(models.Model):
    category = models.CharField(max_length=50)
    food = models.ForeignKey(
        "foods.Food",
        related_name="foods",
        on_delete= models.CASCADE
    )

    def __str__(self):
        return f"{self.category}"

