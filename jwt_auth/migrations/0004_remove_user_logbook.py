# Generated by Django 3.2 on 2021-04-16 15:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0003_rename_diary_user_logbook'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='logbook',
        ),
    ]
