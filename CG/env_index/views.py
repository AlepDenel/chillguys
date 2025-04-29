from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import AirQualityIndex, WaterQualityIndex
from .serializers import AirQualityIndexSerializer, WaterQualityIndexSerializer

@api_view(['GET'])
def latest_aqi(request):
    """Return all latest air quality data"""
    air_quality_data = AirQualityIndex.objects.all()
    serializer = AirQualityIndexSerializer(air_quality_data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def latest_wqi(request):
    """Return all latest water quality data"""
    water_quality_data = WaterQualityIndex.objects.all()
    serializer = WaterQualityIndexSerializer(water_quality_data, many=True)
    return Response(serializer.data)