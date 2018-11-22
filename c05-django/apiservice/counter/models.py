from django.db import models

class Counter(models.Model):
    pub_date = models.DateTimeField()
    count = models.IntegerField(default=0)
