from django.shortcuts import render

# Create your views here.
def index(request):
    return render(response, 'question_box_app/index.html')
