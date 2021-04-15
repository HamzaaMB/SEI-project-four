from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Food
from .serializers.common import FoodSerializer

class FoodListView(APIView):

    def get(self, _request):
        foods = Food.objects.all() #This returns everything from the database.
        serialised_foods = FoodSerializer(foods, many=True) # This converts the data.
        return Response(serialised_foods.data, status = status.HTTP_200_OK)