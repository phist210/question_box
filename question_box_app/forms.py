
from django.forms import ModelForm
from .models import Question, Answer, QuestionComment, AnswerComment


class AskQuestion(ModelForm):
    class Meta:
        model = Question
        fields = ['title', 'text', 'tags']


class AnswerQuestion(ModelForm):
    class Meta:
        model = Answer
        fields = ['text']


class CommentOnQ(ModelForm):
    class Meta:
        model = QuestionComment
        fields = ['text']


class CommentOnAns(ModelForm):
    class Meta:
        model = AnswerComment
        fields = ['text']
