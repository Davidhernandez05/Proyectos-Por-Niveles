from django.shortcuts import render

# Create your views here.
def myview(request):
    car_list = [
        {"title": "BMW"},
        {"title": "Ferrari"}
    ]
    context = {
        "car_list": car_list
    }
    return render(request, "my_first_app/car_list.html", context)
