from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    score = models.IntegerField()


class Question(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField(max_length=1000)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{}. {}'.format(self.pk, self.title)


class Answer(models.Model):
    text = models.TextField(max_length=10000)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{}'.format(self.text)
    # accepted_answer = models.BooleanField(default=False)
#
#
# class AcceptedAnswer(models.Model):  back burnah
#     answer = models.ForeignKey(Answer, on_delete=models.CASCADE)
#     # question = models.ForeignKey(Question, on_delete=models.CASCADE)


class QuestionComment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.TextField(max_length=10000)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)


class AnswerComment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE)
    text = models.TextField(max_length=10000)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)


class AnswerVote(models.Model):
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()


class QuestionVote(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()


class Tag(models.Model):
    text = models.TextField(max_length=10)
    question = models.ManyToManyField(Question)
