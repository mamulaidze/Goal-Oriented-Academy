from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import UserInfo

@api_view(["GET", "POST"])
def hello(request):
    if request.method == "POST":
        name = request.data.get("name")
        email = request.data.get("email")
        if name and email:
            user = UserInfo.objects.create(name=name, email=email)
            return Response({"message": "User created", "user": {"name": user.name, "email": user.email}})
        return Response({"error": "Name and email required"}, status=400)
    users = UserInfo.objects.all()
    user_list = [{"name": user.name, "email": user.email} for user in users]
    return Response({"users": user_list})