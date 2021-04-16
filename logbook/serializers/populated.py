from ...jwt_auth.serializers.common import UserSerializer
from .common import LogbookSerializer
# from ...foods.serializers.common import FoodSerializer


class PopulatedLogbookSerializer(LogbookSerializer):
    owner = UserSerializer()
    # foods = FoodSerializer(many=True)