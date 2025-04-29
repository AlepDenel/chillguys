from rest_framework import serializers
from .models import AirQualityIndex, WaterQualityIndex

class AirQualityIndexSerializer(serializers.ModelSerializer):
    class Meta:
        model = AirQualityIndex
        fields = '__all__'

class WaterQualityIndexSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaterQualityIndex
        fields = '__all__'