# Generated by Django 3.2 on 2021-04-16 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foods', '0005_food_logbook'),
        ('logbook', '0005_logbook_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='logbook',
            name='food',
            field=models.ManyToManyField(related_name='logbooks', to='foods.Food'),
        ),
    ]
