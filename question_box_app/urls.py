from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^ans_comment/', views.ans_comment, name='ans_comment'),
    url(r'^$', views.index, name='index'),
    url(r'^question/(?P<question_id>[0-9]+)', views.question, name='question'),
    url(r'^ask/', views.ask, name='ask'),
]
