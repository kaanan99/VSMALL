from lxml import html
import requests
from flask import jsonify


class Cloth:
    def __init__(self, brand, name, price, image, sale, link):
        self.name = name
        self.price = price
        self.image = image
        self.sale = sale
        self.brand = brand
        self.link = link


def scrapeHollister(link, admin):
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
      temp = ""
      if sale[x] == "discount":
         temp = "Sale"
      clothes.append(Cloth("Hollister" , name[x], price[x].strip(), new_image, temp, "https://www.hollisterco.com" + link[x]))
   return clothes

def scrapeUniqlo(link, admin):
   apparel = []
   admin_user_agents = {"Kaanan": {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:85.0) Gecko/20100101 Firefox/85.0'}}
   pageContent = requests.get(link, headers = admin_user_agents["Kaanan"])
   tree = html.fromstring(pageContent.content)
   name = tree.xpath('/html/body/div[1]/div[6]/div[3]/div[2]/div[6]/div[2]/div/div[1]/ul/li/div/div/div[2]/a/text()')
   image = tree.xpath('/html/body/div[1]/div[6]/div[3]/div[2]/div[6]/div[2]/div/div[1]/ul/li/div/div/div[1]/div/div[1]/a/img/@src')
   price = tree.xpath('/html/body/div[1]/div[6]/div[3]/div[2]/div[6]/div[2]/div/div[1]/ul/li/div/div/div[4]/div[1]/span[@class = "product-sales-price saleprice" or @class = "product-sales-price"]/text()')
   sale = tree.xpath('/html/body/div[1]/div[6]/div[3]/div[2]/div[6]/div[2]/div/div[1]/ul/li/div/div/div[4]/div[1]/span[@class = "product-sales-price saleprice" or @class = "product-sales-price"]/@class')
   link = tree.xpath('/html/body/div[1]/div[6]/div[3]/div[2]/div[6]/div[2]/div/div[1]/ul/li/div/div/div[2]/a/@href')
   for i in range(len(name)):
      temp = ""
      if sale[i] == "product-sales-price":
         temp = "Sale"
      apparel.append(Cloth("Uniqlo", name[i], price[i], image[i], temp, link[i]))
   return apparel

def scrapeUnderArmour(link, admin):
   apparel = []
   admin_user_agents = {"Kaanan": {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:85.0) Gecko/20100101 Firefox/85.0'}}
   pageContent = requests.get(link, headers = admin_user_agents["Kaanan"])
   tree = html.fromstring(pageContent.content)
   names = tree.xpath('/html/body/div[1]/main/div/div[1]/div[1]/div[2]/div[2]/div[1]/section/div[1]/div[2]/div[1]/a/text()')
   images = tree.xpath('/html/body/div[1]/main/div/div[1]/div[1]/div[2]/div[2]/div[1]/section/div/div[1]/a/picture[2]/img/@src')
   links = tree.xpath('/html/body/div[1]/main/div/div[1]/div[1]/div[2]/div[2]/div[1]/section/div/div[2]/div[1]/a/@href')
   prices = tree.xpath('/html/body/div[1]/main/div/div[1]/div[1]/div[2]/div[2]/div[1]/section/div/div[2]/div[1]/div[2]/span/text()')
   for i in range(len(names)):
      apparel.append(Cloth("Underarmour", names[i], prices[i], images[i], "", "https://www.underarmour.com" + links[i]))
   return apparel