from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from .forms import AskQuestion
from django.contrib.auth import authenticate, login
from rest_framework import viewsets
from .models import *
from .serializers import *
from .forms import *
from .vote_tally import *


# Create your views here.
def index(request):
    return render(request, 'question_box_app/index.html')


def profile(request):
    myuser = request.user
    questionlist = [q.title for q in Question.objects.filter(user_id=myuser)]
    answerlist = [a.text for a in Answer.objects.filter(user_id=myuser)]
    context = {'questionlist': questionlist, 'answerlist': answerlist}
    return render(request, 'question_box_app/profile.html', context)


def question(request, question_id):
    question = Question.objects.get(pk=question_id)
    answers_list = [ans.id for ans in Answer.objects.filter(question=question_id)]
    q_votes = q_vote_total(question_id)
    ans_votes_list = []
    for ans in answers_list:
        ans_votes_list.append(ans_vote_total(question_id, ans))
    context = {'question': question, 'form': AnswerQuestion, 'q_score': q_votes, "ans_score_list": ans_votes_list}
    return render(request, 'question_box_app/question.html', context)


def ans_comment(request, question_id=1):
    return render(request, 'question_box_app/anscomment.html', {'form': CommentOnAns})


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('/')
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})


def ask(request):
    return render(request, 'question_box_app/ask.html', {'form': AskQuestion})


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all().order_by('created')
    serializer_class = QuestionSerializer


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all().order_by('score')
    serializer_class = UserProfileSerializer


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all().order_by('created')
    serializer_class = AnswerSerializer


class QuestionCommentViewSet(viewsets.ModelViewSet):
    queryset = QuestionComment.objects.all().order_by('created')
    serializer_class = QuestionCommentSerializer


class AnswerCommentViewSet(viewsets.ModelViewSet):
    queryset = AnswerComment.objects.all().order_by('created')
    serializer_class = AnswerCommentSerializer


class QuestionVoteViewSet(viewsets.ModelViewSet):
    queryset = QuestionVote.objects.all().order_by('score')
    serializer_class = QuestionVoteSerializer


class AnswerVoteViewSet(viewsets.ModelViewSet):
    queryset = AnswerVote.objects.all().order_by('score')
    serializer_class = AnswerVoteSerializer


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all().order_by('text')
    serializer_class = TagSerializer
