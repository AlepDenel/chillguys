from rest_framework import serializers
from .models import AirQualityIndex, WaterQualityIndex

class AirQualityIndexSerializer(serializers.ModelSerializer):
    recorded_at = serializers.DateTimeField(format="%Y-%m-%d, %H:%M:%S")

    class Meta:
        model = AirQualityIndex
        fields = '__all__'

class WaterQualityIndexSerializer(serializers.ModelSerializer):
    recorded_at = serializers.DateTimeField(format="%Y-%m-%d, %H:%M:%S")

    class Meta:
        model = WaterQualityIndex
        fields = '__all__'