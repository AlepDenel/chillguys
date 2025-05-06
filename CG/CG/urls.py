from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('env_index.urls')),
    path('', lambda request: HttpResponse('Hello, ChillGuys members! If you see this, the server is running, and backend is working!'), name='home'),
]
