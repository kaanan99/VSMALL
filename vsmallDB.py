import pymongo
from bson import ObjectId

localhost = 27017


class Model(dict):

    """
    A simple model that wraps mongodb document
    """
    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    __setattr__ = dict.__setitem__

    def save(self):
        if not self._id:
            self.collection.insert(self)
        else:
            self.collection.update(
                {"_id": ObjectId(self._id)}, self)
        self._id = str(self._id)

    def reload(self):
        if self._id:
            result = self.collection.find_one({"_id": ObjectId(self._id)})
            if result:
                self.update(result)
                self._id = str(self._id)
                return True
        return False

    def remove(self):
        if self._id:
            resp = self.collection.remove({"_id": ObjectId(self._id)})
            self.clear()
            return resp

class Item(Model):  # catalog items collection
    db_client = pymongo.MongoClient('localhost', localhost)
    collection = db_client["VSMALL"]["items_list"]

    def find_all(self):
        items = list(self.collection.find())
        for item in items:
            item["_id"] = str(item["_id"])
        return items

    def find_by_brand(self, brand):
        items = list(self.collection.find({"brand": brand}))
        for item in items:
            item["_id"] = str(item["_id"])
        return items

    def find_by_type(self, type):
        items = list(self.collection.find({"type": type}))
        for item in items:
            item["_id"] = str(item["_id"])
        return items

    def find_by_sale(self, sale):
        items = list(self.collection.find({"sale": sale}))
        for item in items:
            item["_id"] = str(item["_id"])
        return items
        
    def find_by_link(self, link):
        items = list(self.collection.find({"link": link}))
        for item in items:
            item["_id"] = str(item["_id"])
        return items

    def find_by_brand_type(self, brand, type):
        items = list(self.collection.find({"brand": brand, "type": type}))
        for item in items:
            item["_id"] = str(item["_id"])
        return items

    def find_by_brand_sale(self, brand, sale):
        items = list(self.collection.find({"brand": brand, "sale": sale}))
        for item in items:
            item["_id"] = str(item["_id"])
        return items

    def find_by_sale_type(self, sale, type):
        items = list(self.collection.find({"sale": sale, "type": type}))
        for item in items:
            item["_id"] = str(item["_id"])
        return items

    def find_by_brand_sale_type(self, brand, sale, type):
        items = list
        (self.collection.find({"brand": brand, "sale": type, "type": type}))
        for item in items:
            item["_id"] = str(item["_id"])
        return items

class WishList(Model):  # users collection
    db_client = pymongo.MongoClient('localhost', localhost)
    collection = db_client["VSMALL"]["wish_list"]

    def find_all(self):
        users = list(self.collection.find())
        for user in users:
            user["_id"] = str(user["_id"])
        return users

    def find_by_name(self, name):
        users = list(self.collection.find({"name": name}))
        for user in users:
            user["_id"] = str(user["_id"])
        return users
