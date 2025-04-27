from django.http import HttpResponse

def air_quality_index(request):
    return HttpResponse("This page is for Air Quality Index. See this message means you are dumb.")

def water_quality_index(request):
    return HttpResponse("This page is for Water Quality Index. Yes, you are dumb.")
