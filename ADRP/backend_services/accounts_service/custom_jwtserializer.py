from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class OTPTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        return token
