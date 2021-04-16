from django.db import models
from django.contrib.auth.models import AbstractUser


class user(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profile_image= models.CharField(max_length=300)


    def __str__(self):
        return f"{self.first_name}"