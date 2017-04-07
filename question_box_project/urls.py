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
from question_box_app import views
from django.contrib.auth.views import login
from django.contrib.auth.views import logout


router = routers.DefaultRouter()
router.register(r'user', views.UserProfileViewSet)
router.register(r'question', views.QuestionViewSet)
router.register(r'answer', views.AnswerViewSet)
router.register(r'comment/question', views.QuestionCommentViewSet)
router.register(r'comment/answer', views.AnswerCommentViewSet)
router.register(r'vote/question', views.QuestionVoteViewSet)
router.register(r'vote/answer', views.AnswerVoteViewSet)
router.register(r'tag', views.TagViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(
        regex=r'^login/$',
        view=login,
        kwargs={'template_name': 'registration/login.html'},
        name='login'
    ),
    url(
        regex=r'^logout/$',
        view=logout,
        kwargs={'next_page': '/'},
        name='logout'
    ),
    url(r'^signup/$', views.signup, name='signup'),
    url(r'^answer/$', views.question, name="answer"),
    url(r'^', include('question_box_app.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
