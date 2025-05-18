import requests
from requests.exceptions import RequestException, ConnectionError, Timeout, HTTPError
from datetime import datetime, timezone, timedelta
from django.core.management.base import BaseCommand
from env_index.models import AirQualityIndex
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

class Command(BaseCommand):
    help = "Fetch and save air quality data from AQICN API"

    def handle(self, *args, **kwargs):
        API_KEY = "77a74252a1b9767b379da56b2f50817cf3c0973c"
        BASE_URL = "https://api.waqi.info/feed"

        # AQICN Station IDs
        locations = {
            "@2614": "Sibu",
            "@2610": "Kuching",
            "@2612": "Miri",
            "@2613": "Bintulu",
            "@2615": "Samarahan",
            "@2616": "Sri Aman",
            "@2617": "Sarikei",
            "@2618": "Kapit",
            "@2619": "Limbang",
            "@9501": "Mukah",
            "@2620": "Samalaju",
            "@2608": "ILP Miri",
        }

        # Malaysia timezone (UTC+8)
        MALAYSIA_TZ = timezone(timedelta(hours=8))
        current_time = datetime.now(MALAYSIA_TZ).strftime("%Y-%m-%d %H:%M:%S")
        recorded_at = datetime.strptime(current_time, "%Y-%m-%d %H:%M:%S")

        # Set up channel layer once
        channel_layer = get_channel_layer()

        for station_id, full_location in locations.items():

            # EXCEPTION HANDLING from line 42 to 105
            try:
                url = f"{BASE_URL}/{station_id}/?token={API_KEY}"
                response = requests.get(url)
                data = response.json()

                if data.get("status") == "ok":
                    aqi = data["data"].get("aqi")
                    temperature = data["data"].get("iaqi", {}).get("t", {}).get("v")
                    humidity = data["data"].get("iaqi", {}).get("h", {}).get("v")
                    pressure = data["data"].get("iaqi", {}).get("p", {}).get("v")

                    # Determine AQI status
                    status = self.classify_aqi_status(aqi) if aqi is not None else "Unknown"

                    # Save or update in DB
                    air_quality, created = AirQualityIndex.objects.update_or_create(
                        location=full_location,
                        defaults={
                            "aqi": aqi,
                            "temperature": temperature,
                            "humidity": humidity,
                            "pressure": pressure,
                            "recorded_at": recorded_at.strftime("%Y-%m-%d %H:%M:%S"),
                            "status": status,
                        },
                    )

                    # Send to WebSocket
                    async_to_sync(channel_layer.group_send)(
                        "aqi_updates",
                        {
                            "type": "send_aqi_update",
                            "data": {
                                "location": full_location,
                                "aqi": aqi,
                                "status": status,
                                "temperature": temperature,
                                "humidity": humidity,
                                "pressure": pressure,
                                "recorded_at": recorded_at.strftime("%Y-%m-%d %H:%M:%S"),
                            },
                        },
                    )

                    if created:
                        self.stdout.write(self.style.SUCCESS(f"Inserted new data for {full_location} at {recorded_at}"))
                    else:
                        self.stdout.write(self.style.SUCCESS(f"Updated data for {full_location} at {recorded_at}"))

                else:
                    self.stdout.write(self.style.ERROR(f"Failed to fetch data for {full_location}. Error: {data}"))

            except HTTPError as e:
                self.stdout.write(self.style.ERROR(f"HTTP error occurred for {full_location}: {e}"))
            except Timeout as e:
                self.stdout.write(self.style.ERROR(f"Timeout error occurred for {full_location}: {e}"))
            except ConnectionError as e:
                self.stdout.write(self.style.ERROR(f"Connection error occurred for {full_location}: {e}"))
            except RequestException as e:
                self.stdout.write(self.style.ERROR(f"Request error occurred for {full_location}: {e}"))
            except Exception as e:
                self.stdout.write(self.style.ERROR(f"An unexpected error occurred for {full_location}: {e}"))
            finally:
                self.stdout.write(self.style.SUCCESS(f"Finished fetching data for {full_location}"))

    def classify_aqi_status(self, aqi):
        """Classify AQI status based on value"""
        if aqi <= 50:
            return "Good"
        elif aqi <= 100:
            return "Moderate"
        elif aqi <= 150:
            return "Risky"
        elif aqi <= 200:
            return "Unhealthy"
        elif aqi <= 300:
            return "Very Unhealthy"
        else:
            return "Hazardous"