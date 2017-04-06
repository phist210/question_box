from rest_framework import serializers
from .models import *


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('user_id', 'score')


class QuestionSerializer(serializers.ModelSerializer):  # might be useful to list answers for respective question, it might not be
    class Meta:
        model = Question
        fields = ('title', 'text', 'user_id', 'created')


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('text', 'question_id', 'user_id', 'created')


class QuestionCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionComment
        fields = ('text', 'question_id', 'user_id', 'created')


class AnswerCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnswerComment
        fields = ('text', 'answer_id', 'user_id', 'created')


class QuestionVoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionVote
        fields = ('score', 'question_id', 'user_id')


class AnswerVoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnswerVote
        fields = ('score', 'answer_id', 'user_id')


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('text', 'question_id')
