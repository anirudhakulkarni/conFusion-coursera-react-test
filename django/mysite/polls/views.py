from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.http import Http404
from .models import Question

from django.template import loader

# Create your views here.
def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    output = ','.join([q.question_text for q in latest_question_list])
    template=loader.get_template('polls/index.html')
    context ={
        'latest_question_list':latest_question_list,
    }
    return render(request,'polls/index.html', context)
    return HttpResponse(template.render(context,request))
    return HttpResponse(output)


    return HttpResponse('Hello there, This is my first django view')
def detail(request,question_id):
    # try:
    #     question = Question.objects.get(pk=question_id)
    # except Question.DoesNotExist:
    #     raise Http404
    question=get_object_or_404(Question, pk=question_id)
    return render(request,'polls/detail.html', {'question':question})
def results(request,question_id):
    response = "You are looking at results for %s" 
    return HttpResponse(response % question_id)
def vote(request,question_id):
    return HttpResponse("You are voting for %s" % question_id)