# Generated by Django 3.2 on 2021-04-16 11:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('logbook', '0002_rename_day_logbook_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='logbook',
            name='category',
        ),
    ]