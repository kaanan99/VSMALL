from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from vsmallDB import Item, WishList
from webScraping import *

app = Flask(__name__)

# CORS stands for Cross Origin Requests.
CORS(app)
# Here we'll allow requests coming from any domain.
# Not recommended for production environment.


@app.before_first_request
def webscrape():
    clothes = scrapeHollister(
        'https://www.hollisterco.com/shop/us/guys-new-arrivals', "Kaanan")
    clothes += scrapeUniqlo('https://www.uniqlo.com/us/en/men/new-arrivals', "Kannan")
    for c in clothes:
        json = {"name": c.name, "price": c.price, "image": c.image,
                "sale": c.sale, "brand": c.brand, "link": c.link}
        newItem = Item(json)
        newItem.save()


@app.route('/')
def helloWorld():
    return "Hello World"


@app.route('/catalog', methods=['GET', 'POST'])
def view_catalog():
    if request.method == 'GET':
        search_brand = request.args.get('brand')
        search_type = request.args.get('type')
        search_sale = request.args.get('sale')
        if search_brand and search_type and search_sale:
            result = Item().find_by_brand_sale_type(search_brand, search_sale, search_type)
        elif search_brand and search_type:
            result = Item().find_by_brand_type(search_brand, search_type)
        elif search_brand and search_sale:
            result = Item().find_by_brand_sale(search_brand, search_sale)
        elif search_sale and search_type:
            result = Item().find_by_sale_type(search_sale, search_type)
        elif search_brand:
            result = Item().find_by_brand(search_brand)
        elif search_sale:
            result = Item().find_by_sale(search_sale)
        elif search_type:
            result = Item().find_by_type(search_type)
        else:
            result = Item().find_all()
        return {"items_list": result}
    elif request.method == 'POST':
        itemToAdd = request.get_json()
        newItem = User(itemToAdd)
        newItem.save()
        resp = jsonify(newItem), 201
        return resp


@app.route('/wishlist', methods=['POST'])
def wish_list():
   if request.method == 'POST':
      r = request.get_json()
      found = WishList().find_by_name(r['name'])
      if len(found)==0:
         WishList().collection.insert_one({'name':r['name'], 'wishlist':[r['item']]})
      else:
         old_wishlist = found[0]['wishlist']
         old_wishlist.append(r['item'])
         WishList().collection.update_one({'name': r['name']}, {'$set':{'wishlist':old_wishlist}})
      return jsonify(r), 201

@app.route('/wishlist/<name>', methods=['GET'])
def get_wishlist(name):
   print("ENTERED")
   found = WishList().find_by_name(name)
   print(found[0]['wishlist'])
   return {'wishlist':found[0]['wishlist']}
