from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    url(r'home.html', views.home),
    url(r'demographics.html', views.demographics),
    url(r'health_vitals.html', views.health_vitals),
    url(r'reports.html', views.reports),
]
