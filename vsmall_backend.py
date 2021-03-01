from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from vsmallDB import User, Item
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

@app.route('/users', methods=['GET', 'POST'])
def get_user():
    if request.method == 'GET':
        search_name = request.args.get('name')
        if search_name:
            result = User().find_by_name(search_name)
        else:
            result = User().find_all()
        return {"user_list": result}
    elif request.method == 'POST':
        userToAdd = request.get_json()
        newUser = User()
        newUser.save()
        resp = jsonify(newUser), 201
        return resp