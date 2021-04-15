from django.urls import path
from .views import FoodListView

urlpatterns = [
    path('', FoodListView.as_view())
]