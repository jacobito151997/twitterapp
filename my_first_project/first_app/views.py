from django.shortcuts import render
from django.http import HttpResponse
from .models import Tweet

#REST-API imports
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer, TweetSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


# Create your views here.
def index(request):
    return HttpResponse("Hello World")
def tweetinfo(request, tweet_id):
    temp = Tweet.objects.get(id=tweet_id)
    rsp = str(temp.raw_text)
    return HttpResponse('Raw text: \n' + rsp)

def tweettext(request, tweet_id):
    return  HttpResponse(str(tweet_id))

def tweethash(request, tweet_id):
    return  HttpResponse(str(tweet_id+5))
