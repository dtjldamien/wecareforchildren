# Generated by Django 2.2rc1 on 2019-03-23 09:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('locate', '0002_auto_20190323_1741'),
    ]

    operations = [
        migrations.AlterField(
            model_name='childcarecentre',
            name='fees',
            field=models.FloatField(max_length=10000),
        ),
    ]
