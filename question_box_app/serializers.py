from rest_framework import serializers
from .models import *


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('user', 'score')


class QuestionSerializer(serializers.ModelSerializer):  # might be useful to list answers for respective question, it might not be

    #  possibly set a serializer for related objects (answers, "foreign key related field")

    class Meta:
        model = Question
        fields = ('title', 'text', 'user', 'created', 'id', 'answer_set', 'questioncomment_set')  # answer_set to view answers


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('id', 'text', 'question', 'user', 'created', 'answercomment_set')


class QuestionCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionComment
        fields = ('text', 'question', 'user', 'created', 'id')


class AnswerCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnswerComment
        fields = ('id', 'text', 'answer', 'user', 'created')


class QuestionVoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionVote
        fields = ('score', 'question', 'user')


class AnswerVoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnswerVote
        fields = ('score', 'answer', 'user', 'question')


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('text', 'question')
