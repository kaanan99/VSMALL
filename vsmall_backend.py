from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from vsmallDB import User, Item
from webScraping import *

app = Flask(__name__)

#CORS stands for Cross Origin Requests.
CORS(app) #Here we'll allow requests coming from any domain. Not recommended for production environment.

@app.before_first_request
def webscrape():
   clothes = scrapeHollister('https://www.hollisterco.com/shop/us/guys-new-arrivals', "Kaanan")
   for c in clothes:
      json = {"name":c.name, "price":c.price, "image":c.image, "sale":c.sale, "brand":c.brand, "link":c.link}
      newUser = Item(json)
      newUser.save()

@app.route('/')
def helloWorld():
   return "Hello World"

@app.route('/catalouge', methods=['GET', 'POST'])
def view_catalouge():
    if request.method == 'GET':
       print("In get") 
    elif request.method == 'POST':
        userToAdd = request.get_json()
        newUser = User(userToAdd)
        newUser.save() 
        resp = jsonify(newUser), 201
        return resp

'''@app.route('/users', methods=['GET', 'POST'])
def get_users():
    if request.method == 'GET':
        search_username = request.args.get('name')
        search_job = request.args.get('job')
        if search_username and search_job:
            # TODO: Replace with database access
            result = User().find_by_name_job(search_username, search_job)
        elif search_username:
            # using list shorthand for filtering the list.
            # TODO: Replace with database access
            result = User().find_by_name(search_username)
        else:
            result = User().find_all()
        return {"users_list": result}
    elif request.method == 'POST':
        userToAdd = request.get_json() # no need to generate an id ourselves
        newUser = User(userToAdd)
        newUser.save() # pymongo gives the record an "_id" field automatically
        resp = jsonify(newUser), 201
        return resp

@app.route('/users/<id>', methods=['GET', 'DELETE'])
def get_user(id):
    if request.method == 'GET':
        user = User({"_id":id})
        if user.reload() :
            return user
        else :
            return jsonify({"error": "User not found"}), 404
    elif request.method == 'DELETE':
        user = User({"_id":id})
        resp = user.remove()
        if (resp.hasWriteError()):
            return {}, resp.writeError.code
        # TODO: Check the resp object if the removal was successful or not.
        # Return a 404 status code if it was not successful
        return {}, 204

def find_users_by_name_job(name, job):
    subdict = {'users_list' : []}
    for user in users['users_list']:
        if user['name'] == name and user['job'] == job:
            subdict['users_list'].append(user)
    return subdict'''
