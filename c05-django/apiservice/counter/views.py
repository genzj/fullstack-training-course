from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone

from .models import Counter

import json

@csrf_exempt
def count(request):
    if request.method == 'GET':
        current_year = timezone.now().year
        l = Counter.objects.filter(pub_date__year=current_year)
        return JsonResponse({
            'ok': True,
            'data': [{
            'value': c.count,
            'pub_date': c.pub_date,
            } for c in l]
        })
    if request.method != 'POST':
        return JsonResponse({
            'ok': False,
        }, status=405)

    try:
        data = json.loads(request.body)
        c = Counter(
            pub_date=timezone.now(),
            count=int(data['value'])
        )
        c.save()
        return JsonResponse({
            'ok': True,
            'value': data['value'],
            'pub_date': c.pub_date,
        }, status=201)
    except Exception as ex:
        return JsonResponse({
            'ok': False,
            'error': str(ex),
        },status=400)
