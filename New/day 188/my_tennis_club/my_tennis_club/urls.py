from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('members.urls')),  # 👈 root route
    path('admin/', admin.site.urls),
]
