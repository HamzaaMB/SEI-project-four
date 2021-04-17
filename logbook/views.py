from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Logbook
# from .serializers.common import LogbookSerializer
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