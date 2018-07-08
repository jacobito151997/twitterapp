

# Create your models here.
import datetime
from django.db import models
from django.utils import timezone

# Functions that handle twitter data
# Create your models here.
class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def str(self):
        return self.question_text

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def str(self):
        return self.choice_text
class Tweet(models.Model):
    raw_text= models.CharField(max_length=350)
    truncated = models.CharField(max_length=300)
    fav_count = models.IntegerField(default=0)
    source = models.CharField(max_length=200)
    retweets = models.IntegerField(default=0)
    lang = models.CharField(max_length=10)
    retweeted = models.BooleanField('retweeted')
    hashtags = models.CharField(max_length=200)

    def __str__(self):
        return self.raw_text
