# Generated by Django 3.2 on 2021-04-15 19:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('logbook', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='logbook',
            old_name='day',
            new_name='category',
        ),
    ]
