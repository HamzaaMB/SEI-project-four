from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Logbook
from .serializers.populated import PopulatedLogbookSerializer


class LogbookListView(APIView):

    def get(self, _request):
        logbooks = Logbook.objects.all()
        serialized_logbooks = PopulatedLogbookSerializer(logbooks, many=True)
        return Response(serialized_logbooks.data, status=status.HTTP_200_OK)


    def post(self, request):
        logbook_to_add = PopulatedLogbookSerializer(data=request.data)
        if logbook_to_add.is_valid():
            logbook_to_add.save()
            return Response(logbook_to_add.data, status=status.HTTP_201_CREATED)
        return Response(logbook_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class LogbookDetailView(APIView):

    def get(self, _request, pk):
        logbook = Logbook.objects.get(pk=pk)
        serialized_logbook = PopulatedLogbookSerializer(logbook)
        return Response(serialized_logbook.data, status=status.HTTP_200_OK)

    # def post(self, request, pk):
    #Might need to revisit this after testing in the front-end. Requirement for user posting per 'logbook id' -> so the user can add food to a specific logbook.

