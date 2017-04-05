from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user_id = models.OneToOneField(User, on_delete=models.CASCADE)
    score = models.IntegerField()


class Question(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField(max_length=1000)
    user_id = models.OneToOneField(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)


class Answer(models.Model):
    text = models.TextField(max_length=10000)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    user_id = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    accepted_answer = models.BooleanField(default=False)


class QuestionComment(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.TextField(max_length=10000)
    created = models.DateTimeField(auto_now_add=True)


class AnswerComment(models.Model):
    text = models.TextField(max_length=10000)
    created = models.DateTimeField(auto_now_add=True)
    answer_id = models.ForeignKey(Answer, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


class AnswerVote(models.Model):
    answer_id = models.ForeignKey(Answer, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()


class QuestionVote(models.Model):
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()


class Tag(models.Model):
    text = models.TextField(max_length=10)
    question_id = models.ManyToManyField(Question)
