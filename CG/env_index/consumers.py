from channels.generic.websocket import AsyncWebsocketConsumer
import json

# Air Quality WebSocket Consumer
class AirQualityConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("aqi_updates", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("aqi_updates", self.channel_name)

    async def send_aqi_update(self, event):
        print("Sending AQI update to client/WebSocket:", event)
        await self.send(text_data=json.dumps(event["data"]))

# Water Quality WebSocket Consumer
class WaterQualityConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("wqi_updates", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("wqi_updates", self.channel_name)

    async def send_wqi_update(self, event):
        print("Sending WQI update to client/WebSocket:", event)
        await self.send(text_data=json.dumps(event["data"]))