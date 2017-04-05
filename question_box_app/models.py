from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    rank = models.Integer()


class Question(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextArea(max_length=1000)
    user_id = models.OneToOneField(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)


class Answer(models.Model):
    text = models.TextArea(max_length=10000)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    user_id = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    accepted_answer = models.BooleanField(default=False)


class QuestionComment(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.TextArea(max_length=10000)
    timestamp = models.DateTimeField(auto_now_add=True)


class AnswerComment(models.Model):
    text = models.TextArea(max_length=10000)
    created = models.DataTimeField(auto_now_add=True)
    answer_id = models.ForeignKey(Answer, on_delete=models.CASCADE)
    user_id = models.ForgeinKey(User, on_delete=models.CASCADE)


class AnswerVote(models.Model):
    id_answer = models.ForeignKey(Answer, on_delete=models.CASCADE)
    id_user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.Integer()


class QuestionVote(models.Model):
    id_question = models.ForeignKey(Question, on_delete=models.CASCADE)
    id_user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.Integer()


class Tag(models.Model):
    text = models.TextField(max_length=10)


class TagQuestion(models.Model):
    tag_id = models.ForeignKey(Tag, on_delete=models.CASCADE)
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
