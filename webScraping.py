from lxml import html
import requests
import re
from flask import jsonify
class Cloth:
   def __init__(self, brand, name, price, image, sale, link):
      self.name = name
      self.price = price
      self.image = image
      self.sale = sale
      self.brand = brand
      #self.ctype = ctype
      self.link = link

def scrapeHollister(link, admin):
   print("Function called")
   clothes = []
   admin_user_agents = {"Kaanan": {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:85.0) Gecko/20100101 Firefox/85.0'}}
   #header = {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:85.0) Gecko/20100101 Firefox/85.0'}
   pageContent = requests.get(link, headers = admin_user_agents[admin])
   tree = html.fromstring(pageContent.content)
   name = tree.xpath('/html/body/div[5]/div[5]/main/div/ul/li/div/div[3]/div[1]/a/text()')
   price = tree.xpath('/html/body/div[5]/div[5]/main/div/ul/li/div/div[3]/div[3]/div[1]/div/span/span[2]/span[@data-state = "" or @data-state = "discount"]/text()')
   image = tree.xpath('/html/body/div[5]/div[5]/main/div/ul/li/div/div[2]/div[1]/a/img/@data-src')
   sale = tree.xpath('/html/body/div[5]/div[5]/main/div/ul/li/div/div[3]/div[3]/div[1]/div/span/span[2]/span[@data-state = "" or @data-state = "discount"]/@data-state')
   link = tree.xpath('/html/body/div[5]/div[5]/main/div/ul/li/div/div[2]/div[1]/a/@href')
   for x in range(len(name)):
      new_image = image[x].replace("imageType", "prod1")
      clothes.append(Cloth("Hollister" , name[x], price[x].strip(), new_image, sale[x], "https://www.hollisterco.com" + link[x]))
   return clothes

