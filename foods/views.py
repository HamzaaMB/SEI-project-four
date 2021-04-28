from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied



from .models import Food
from .serializers.common import FoodSerializer

class FoodListView(APIView):


    def get(self, _request):
        foods = Food.objects.all() #This returns everything from the database.
        serialized_foods = FoodSerializer(foods, many=True) # This converts the data.
        return Response(serialized_foods.data, status = status.HTTP_200_OK)


class FoodDetailView(APIView):
    
    def get_food(self, pk):
        try:
            return Food.objects.get(pk=pk)
        except Food.DoesNotExist:
            raise NotFound(detail="Cannot find food")


    def get(self, _request, pk):
        foods = self.get_food(pk=pk)
        serialized_foods = FoodSerializer(foods)
        return Response(serialized_foods.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        food_to_delete = Food.objects.get(pk=pk)
        food_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        

