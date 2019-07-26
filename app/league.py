from uuid import uuid4

class League:
    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.player_ids = []
    
    @staticmethod
    def new(name):
        return League(str(uuid4()), name)

    def add_player(self, player_id):
        self.player_ids.append(player_id)

class LeagueStoreLocal:
    def __init__(self):
        self.data = {}
    
    def insert_league(self, league):
        self.data[league.id] = league
    
    def update_league(self, league):
        self.data[league.id] = league

    def get_leagues(self):
        leagues = []
        for _, value in self.data.items():
            leagues.append(value)
        return leagues
    
    def get_league(self, league_id):
        return self.data[league_id]