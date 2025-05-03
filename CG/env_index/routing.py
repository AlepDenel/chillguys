from django.urls import re_path
from .consumers import AirQualityConsumer, WaterQualityConsumer

websocket_urlpatterns = [
    re_path(r'^ws/aqi/$', AirQualityConsumer.as_asgi()),
    re_path(r'^ws/wqi/$', WaterQualityConsumer.as_asgi()),
]