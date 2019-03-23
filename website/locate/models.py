from django.db import models

# Create your models here.


class ChildcareCentre(models.Model):
    name = models.CharField(max_length=250)
    fees = models.FloatField(max_length=10000)
    infantVacancies = models.CharField(max_length=100)
    k2Vacancies = models.CharField(max_length=100)
    address = models.CharField(max_length=1000)
