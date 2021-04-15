from logbook.serializers.common import LogbookSerializer
from ..serializers.common import FoodSerializer

class PopulatedFoodSerializer(FoodSerializer):

    logbooks = LogbookSerializer(many=True)
