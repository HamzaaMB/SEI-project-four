from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticated

from foods.models import Food
from .models import Logbook
from .serializers.common import LogbookSerializer
from .serializers.populated import PopulatedLogbookSerializer



class LogbookListView(APIView): 
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        logbooks = Logbook.objects.filter(owner_id=request.user.id)
        print(logbooks)
        serialized_logbooks = PopulatedLogbookSerializer(logbooks, many=True)
        return Response(serialized_logbooks.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data["owner"] = request.user.id
        logbook_to_add = LogbookSerializer(data=request.data)
        if logbook_to_add.is_valid():
            logbook_to_add.save()
            return Response(logbook_to_add.data, status=status.HTTP_201_CREATED)
        return Response(logbook_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)



class LogbookDetailView(APIView): 
    permission_classes = (IsAuthenticated,)

    def get(self, _request, pk):
        logbook = Logbook.objects.get(pk=pk)
        serialized_logbook = PopulatedLogbookSerializer(logbook)
        return Response(serialized_logbook.data, status=status.HTTP_200_OK)

    def post(self, request, pk):
        request.data["owner"] = request.user.id
        logbook = Logbook.objects.get(pk=pk)
        food_to_add = Food.objects.get(pk=request.data["id"])
        logbook.food.add(food_to_add)
        logbook.save()
        serialized_logbooks = PopulatedLogbookSerializer(logbook)
        return Response(serialized_logbooks.data, status=status.HTTP_201_CREATED)

    def delete(self, request, pk):
        try:
            logbook_to_delete = Logbook.objects.get(pk=pk)
        except Logbook.DoesNotExist:
            raise NotFound()
        if logbook_to_delete.owner != request.user:
            raise PermissionDenied()
        logbook_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


