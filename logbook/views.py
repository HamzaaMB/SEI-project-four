from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers.common import LogbookSerializer


class LogbookListView(APIView):

    def post(self, request):
        logbook_to_add =  LogbookSerializer(data=request.data)
        if logbook_to_add.is_valid():
            logbook_to_add.save()
            return Response(logbook_to_add.data, status=status.HTTP_201_CREATED)
        return Response(logbook_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
