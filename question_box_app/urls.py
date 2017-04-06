from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^question/(?P<question_id>[0-9]+)', views.question, name='question'),
]
