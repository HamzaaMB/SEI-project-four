from django.urls import path
from .views import LogbookListView, LogbookDetailView

urlpatterns = [
    path('', LogbookListView.as_view()),
    path('<int:pk>/', LogbookDetailView.as_view())
]