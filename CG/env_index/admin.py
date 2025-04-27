from django.contrib import admin
from env_index.models import WaterQualityIndex, AirQualityIndex

# Air Quality Index Admin
@admin.register(AirQualityIndex)
class AirQualityIndexAdmin(admin.ModelAdmin):
    list_display = ('location', 'aqi', 'temperature', 'humidity', 'pressure', 'recorded_at', 'status')
    search_fields = ('location',)
    list_per_page = 10

# Water Quality Index Admin
@admin.register(WaterQualityIndex)
class WaterQualityIndexAdmin(admin.ModelAdmin):
    list_display = ('station', 'wqi', 'recorded_at', 'status')
    search_fields = ('station',)
    list_per_page = 10