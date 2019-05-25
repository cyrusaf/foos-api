from uuid import uuid4
from trueskill import Rating

class User:
    def __init__(self, id, name, rating):
        self.id = id
        self.name = name
        self.rating = rating
    
    @staticmethod
    def new(name):
        return User(str(uuid4()), name, Rating())

class UserStoreLocal:
    def __init__(self):
            self.data = {}

    def insert_user(self, user):
        self.data[user.id] = user

    def update_user(self, user):
        self.data[user.id] = user

    def get_users(self):
        users = []
        for _, value in self.data.items():
            users.append(value)
        return users
    
    def get_user(self, user_id):
        return self.data[user_id]
    