from django.shortcuts import render
from django.http import HttpResponse
from .models import Covid
from bs4 import BeautifulSoup
import requests






urls = ["https://www.worldometers.info/coronavirus/", "https://www.worldometers.info/coronavirus/country/india/", "https://news.google.com/covid19/map?hl=en-IN&mid=/m/055vr&gl=IN&ceid=IN:en"]
Cases_world = []
cases_mh = []

for url in urls:
   covid_world = requests.get(url)
   soup_world = BeautifulSoup(covid_world.content, 'html.parser')
   Cases_world += soup_world.find_all("div", class_="maincounter-number")
   cases_mh += soup_world.find_all("div", class_="UvMayb")


#todo:optimize multithreading

def index(request):
    covid = Covid()
    covid.cc_world = Cases_world[0].text
    covid.dt_world = Cases_world[1].text
    covid.cc_India = Cases_world[3].text
    covid.dt_India = Cases_world[4].text
    covid.rec_world = Cases_world[2].text
    covid.rec_India = Cases_world[5].text
    covid.cc_mh = cases_mh[0].get_text()
    covid.rec_mh = cases_mh[1].get_text()
    covid.dt_mh = cases_mh[2].get_text()

    return render(request,'index.html',{'covid':covid})

