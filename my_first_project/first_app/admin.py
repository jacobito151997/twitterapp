
# Helps admin portal for django to view the data that is in your
# databases
# Allows you to create data
# Register your models here.

from django.contrib import admin
from .models import Question, Choice, Tweet

# Register your models here.
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(Tweet)
