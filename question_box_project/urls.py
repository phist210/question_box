"""question_box_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from django.contrib.auth import views as auth_views
from question_box_app import views


router = routers.DefaultRouter()
router.register(r'question_box_app/api/user', views.UserProfileViewSet)
router.register(r'question_box_app/api/question', views.QuestionViewSet)
router.register(r'question_box_app/api/answer', views.AnswerViewSet)
router.register(r'question_box_app/api/comment/question', views.QuestionCommentViewSet)
router.register(r'question_box_app/api/comment/answer', views.AnswerCommentViewSet)
router.register(r'question_box_app/api/vote/question', views.QuestionVoteViewSet)
router.register(r'question_box_app/api/vote/answer', views.AnswerVoteViewSet)
router.register(r'question_box_app/api/tag', views.TagViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^login/$', auth_views.login, name="login"),
    url(r'^logout/$', auth_views.logout, name='logout'),
    url(r'^question_box_app/', include('question_box_app.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
