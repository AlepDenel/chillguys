from django.contrib import admin
from django.urls import path, include
import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from env_index.routing import websocket_urlpatterns

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CG.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(URLRouter(websocket_urlpatterns)),
})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('aqi/', include('env_index.urls')),
    path('wqi/', include('env_index.urls')),
]