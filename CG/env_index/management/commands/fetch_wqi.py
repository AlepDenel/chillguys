import random
from datetime import datetime, timezone, timedelta
from django.core.management.base import BaseCommand
from env_index.models import WaterQualityIndex
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

class Command(BaseCommand):
    help = "Dummy data for Water Quality Index"

    def handle(self, *args, **kwargs):
        stations = [
            # Available stations in Sarawak
            "Sg. Sarawak",
            "Sg. Btg. Sadong"
        ]

        # Malaysia timezone (UTC+8)
        MALAYSIA_TZ = timezone(timedelta(hours=8))

        # Get the current Malaysia time
        current_time = datetime.now(MALAYSIA_TZ).strftime("%Y-%m-%d %H:%M:%S")
        recorded_at = datetime.strptime(current_time, "%Y-%m-%d %H:%M:%S")
        
        # Generate dummy data for each station
        for station in stations:
            wqi = int(round(random.uniform(45, 100), 2))
            status = self.classify_wqi_status(wqi)

            # Insert/Update the data into the database
            water_quality, created = WaterQualityIndex.objects.update_or_create(
                station = station,
                defaults = {
                    'wqi': wqi,
                    'recorded_at': recorded_at.strftime("%Y-%m-%d %H:%M:%S"),
                    'status': status
                }
            )

            # Send data to WebSocket
            channel_layer = get_channel_layer()
            async_to_sync(channel_layer.group_send)(
                "wqi_updates",
                {
                    "type": "send_wqi_update",
                    "data": {
                        "station": station,
                        "wqi": wqi,
                        "status": status,
                        "recorded_at": recorded_at.strftime("%Y-%m-%d %H:%M:%S"),
                    },
                },
            )

            if created:
                self.stdout.write(self.style.SUCCESS(f'Inserted new data for {station} at {recorded_at}'))
            else:
                self.stdout.write(self.style.SUCCESS(f'Updated data for {station} at {recorded_at}'))
                
    def classify_wqi_status(self, wqi):
        """Classify WQI status based on value"""
        if wqi >= 80:
            return "Clean"
        elif wqi >= 60:
            return "Slightly Polluted"
        else:
            return "Polluted"