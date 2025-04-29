from django.urls import path
from . import views

urlpatterns = [
    path('latest-aqi/', views.latest_aqi, name='latest-aqi'),
    path('latest-wqi/', views.latest_wqi, name='latest-wqi'),
]