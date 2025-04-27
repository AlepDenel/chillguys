from django.db import models

# Air Quality Index Model
class AirQualityIndex(models.Model):
    location = models.CharField(max_length=255)
    aqi = models.FloatField(null=True, blank=True)

    temperature = models.FloatField(null=True, blank=True)
    humidity = models.FloatField(null=True, blank=True)
    pressure = models.FloatField(null=True, blank=True)

    recorded_at = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        db_table = 'air_quality_index'

    def __str__(self):
        return f"{self.location} - {self.aqi}"
    
# Water Quality Index Model
class WaterQualityIndex(models.Model):
    station = models.CharField(max_length=255)
    wqi = models.IntegerField(null=True, blank=True)

    recorded_at = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        db_table = 'water_quality_index'

    def __str__(self):
        return f"{self.station} - {self.wqi}"