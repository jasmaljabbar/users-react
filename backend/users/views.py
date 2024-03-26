# from django.shortcuts import render

# from rest_framework import generics
# from .models import User
# from .serializers import UserListSerializer

# class UsersDetailView(generics.RetrieveAPIView):
#     queryset =User.objects.all()
#     serializer_class = UserListSerializer

























# from rest_framework.views import APIView
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from django.contrib.auth import get_user_model
# from .serializers import UserListSerializer

# User = get_user_model()

# class ListUsers(APIView):
#     # permission_classes = [IsAuthenticated]  # Or any other permissions you deem necessary

#     def get(self, request):
#         users = User.objects.all()
#         serializer = UserListSerializer(users, many=True)
#         print(users)
#         return Response(serializer.data)
    

# @api_view(['GET'])
# def userList(req):
#     users = User.objects.all()
#     serializer = UserListSerializer(users, many=True)
#     print(serializer.data)
#     return Response(serializer.data)


# # ab = ListUsers()

# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.parsers import JSONParser
# from django.http.response import JsonResponse
# from users.serializers import UserListSerializer
# from users.models import User

# @csrf_exempt
# def usersApi(request,id=0):
#     if request.method == 'GET':
#         user = User.objects.all()
#         user_serializer = UserListSerializer(user,many=True)
#         return JsonResponse(user_serializer.data,safe=False)
#     elif request.method == 'POST':
#         user_data = JSONParser().parse(request)
#         user_serializer = UserListSerializer(data=user_data)
#         if user_serializer.is_valid():
#             user_serializer.save()
#             return JsonResponse("Added Succeffully",safe=False)
#         return JsonResponse("Failed to Add",safe=False)
#     elif request.method == 'PUT':
#         user_data = JSONParser().parse(request)
#         user = User.objects.get(id=id)
#         user_serializer = UserListSerializer(user,data=user_data)
#         if user_serializer.is_valid():
#             user_serializer.save()
#             return JsonResponse("Udated Succesfully",safe=False)
#         return JsonResponse("Faled to Updata")
#     elif request.method == 'DELETE':
#         user = User.objects.get(id=id)
#         user.delete()
#         return JsonResponse("Deleted Successfully",safe=False)

