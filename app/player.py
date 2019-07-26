from uuid import uuid4
from trueskill import Rating

class Player:
    def __init__(self, id, name, rating):
        self.id = id
        self.name = name
        self.rating = rating
    
    @staticmethod
    def new(name):
        return Player(str(uuid4()), name, Rating(1000, 332.333333))

class PlayerStoreLocal:
    def __init__(self):
            self.data = {}

    def insert_player(self, player):
        self.data[player.id] = player

    def update_player(self, player):
        self.data[player.id] = player

    def get_players(self):
        players = []
        for _, value in self.data.items():
            players.append(value)
        return players
    
    def get_player(self, player_id):
        return self.data[player_id]
    