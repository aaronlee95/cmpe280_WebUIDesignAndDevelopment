from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def home(request):
    return render(request, 'home.html')

def demographics(request):
    return render(request, 'demographics.html')

def health_vitals(request):
    return render(request, 'health_vitals.html')

def reports(request):
    return render(request, 'reports.html')
