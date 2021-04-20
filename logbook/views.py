from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticated

from .models import Logbook
from .serializers.common import LogbookSerializer
from .serializers.populated import PopulatedLogbookSerializer



class LogbookListView(APIView): 
    # permission_classes = (IsAuthenticated,)
    def get(self, _request):
        logbooks = Logbook.objects.all()
        serialized_logbooks = PopulatedLogbookSerializer(logbooks, many=True)
        return Response(serialized_logbooks.data, status=status.HTTP_200_OK)



class LogbookDetailView(APIView): #individual logbook to GET on front end and POST and DELETE.
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        request.data["owner"] = request.user.id
        logbook_to_add = LogbookSerializer(data=request.data)
        if logbook_to_add.is_valid():
            logbook_to_add.save()
            return Response(logbook_to_add.data, status=status.HTTP_201_CREATED)
        return Response(logbook_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


    def delete(self, request, pk):
        try:
            logbook_to_delete = Logbook.objects.get(pk=pk)
        except Logbook.DoesNotExist:
            raise NotFound()
        if logbook_to_delete.owner != request.user:
            raise PermissionDenied()
        logbook_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



    # def post(self, request):
    #     request.data["owner"] = request.user.id


    # def get(self, request, pk):
        
        # user = request.data.get('id')
        # logbook = Logbook.objects.get(pk=pk)
        
        # serialized_logbook = PopulatedLogbookSerializer(logbook)
        # return Response(serialized_logbook.data, status=status.HTTP_200_OK)