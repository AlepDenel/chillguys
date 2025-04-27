from channels.generic.websocket import AsyncWebsocketConsumer
import json

# Air Quality Consumer
class AirQualityConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("aqi_updates", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("aqi_updates", self.channel_name)

    async def send_aqi_update(self, event):
        data = event.get("data", {})
        await self.send(text_data=json.dumps(event["data"]))

    async def receive(self, text_data):
        pass

# Water Quality Consumer
class WaterQualityConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("wqi_updates", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("wqi_updates", self.channel_name)

    async def send_wqi_update(self, event):
        data = event.get("data", {})
        await self.send(text_data=json.dumps(event["data"]))

    async def receive(self, text_data):
        pass
