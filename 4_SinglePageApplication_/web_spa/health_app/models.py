from django.db import models


# Create your models here.
class Patient(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    gender = models.CharField(max_length=7)
    medications = models.CharField(max_length=100)
    notes = models.CharField(max_length=100)

    def __str__(self):
        return f"({self.name}/{self.gender}/{self.age})"
