# Generated by Django 2.2rc1 on 2019-03-23 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('locate', '0003_auto_20190323_1742'),
    ]

    operations = [
        migrations.AddField(
            model_name='childcarecentre',
            name='address',
            field=models.CharField(default=1, max_length=1000),
            preserve_default=False,
        ),
    ]
