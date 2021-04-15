from django.urls import path
from .views import LogbookListView

urlpatterns = [
    path('', LogbookListView.as_view())
]