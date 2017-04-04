from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    rank = models.Integer()

class Question(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextArea(max_length=1000)
    tags = models.CharField(max_length=100) # how to parse tags?
    rank = models.Integer()
    user_id = models.OneToOneField(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class Answers(models.Model):
    text = models.TextArea(max_length=10000)
    rank = models.Integer()
    comments = models.TextArea(max_length=10000)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    user_id = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)


class Comments(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer_id = models.ForeignKey(Answers, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
