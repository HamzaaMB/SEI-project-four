from foods.serializers.common import FoodSerializer
from ..serializers.common import LogbookSerializer
# from jwt_auth.serializers.common import UserSerializer



class PopulatedLogbookSerializer(LogbookSerializer):

    food = FoodSerializer(many=True)