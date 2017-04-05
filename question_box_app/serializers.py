from rest_framework import serializers
from .models import *


class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('user', 'rank')


class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ('title', 'text', 'user_id', 'created')


class AnswerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Answer
        fields = ('text', 'question_id', 'user_id', 'created', 'accepted_answer')


class QuestionCommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = QuestionComment
        fields = ('text', 'question_id', 'user_id', 'created')


class AnswerCommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AnswerComment
        fields = ('text', 'answer_id', 'user_id', 'created')


class QuestionVoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = QuestionVote
        fields = ('score', 'question_id', 'user_id')


class AnswerVoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AnswerVote
        fields = ('score', 'answer_id', 'user_id')


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ('text', 'question_id')
