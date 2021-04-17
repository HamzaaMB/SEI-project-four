# Generated by Django 3.2 on 2021-04-16 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('logbook', '0003_remove_logbook_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='logbook',
            name='food',
        ),
        migrations.AddField(
            model_name='logbook',
            name='name',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]