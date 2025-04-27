from django.urls import path
from . import views

urlpatterns = [
    path('aqi/', views.air_quality_index, name='air_quality_index'), # Air Quality WebSocket
    path('wqi/', views.water_quality_index, name='water_quality_index'), # Water Quality WebSocket
]