from django.shortcuts import render
from django.http import HttpResponse
from health_app.models import Patient

# Create your views here.
def index(request):
    return render(request, 'index.html')

def home(request):
    return render(request, 'home.html')

def demographics(request):
    # if request.method == "POST":
    #     first_name = request.POST.get('first_name')
    #     last_name = request.POST.get('last_name')
    #     _gender = request.POST.get('gender')
    #     _age = request.POST.get('age')
    #     _notes = request.POST.get('notes')

    #     # print(f"Name: {last_name},{first_name}/Gender: {_gender}/Age: {_age}/Notes: {_notes}")
    #     p = Patient(name=f"{first_name} {last_name}", gender=_gender, age=_age, notes=_notes)
    #     p.save()
    print(request.method)
    return render(request, 'demographics.html')

def health_vitals(request):
    return render(request, 'health_vitals.html')

def reports(request):
    return render(request, 'reports.html')

def save(request):
    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    _gender = request.POST.get('gender')
    _age = request.POST.get('age')
    _notes = request.POST.get('notes')

    # print(f"Name: {last_name},{first_name}/Gender: {_gender}/Age: {_age}/Notes: {_notes}")
    p = Patient(name=f"{first_name} {last_name}", gender=_gender, age=_age, notes=_notes)
    p.save()
    return render(request, 'health_vitals.html')

