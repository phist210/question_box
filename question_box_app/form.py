
from django import ModelForms
from .models import Question, Answer, QuestionComments, AnswerComments


class AskQuestion(ModelForms):
    class Meta:
        model = Question
        fields = ['title', 'text']


class AnswerQuestion(ModelForms):
    class Meta:
        model = Answer
        fields = ['text']


class CommentOnQ(ModelForms):
    class Meta:
        model = QuestionComments
        fields = ['text']


class CommentOnAns(ModelForms):
    class Meta:
        model = AnswerComments
        fields = ['text']
