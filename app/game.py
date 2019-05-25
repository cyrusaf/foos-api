from trueskill import *

class Game:
    def __init__(self, winning_team, losing_team, winning_score, losing_score):
        self.winning_team = winning_team
        self.losing_team = losing_team
        self.winning_score = winning_score
        self.losing_score = losing_score
        
    @staticmethod    
    def calculate_ratings(winning_team, losing_team, winning_score, losing_score):
        wt = [user.rating for user in winning_team]
        lt = [user.rating for user in losing_team]

        new_wt_ratings, new_lt_ratings = rate([wt, lt], ranks=[0, 1])

        wt_data = {}
        for i, player in enumerate(winning_team):
            wt_data[player.id] = {
                "old_rating": player.rating,
                "new_rating": new_wt_ratings[i]
            }
            player.rating = new_wt_ratings[i]

        lt_data = {}
        for i, player in enumerate(losing_team):
            wt_data[player.id] = {
                "old_rating": player.rating,
                "new_rating": new_lt_ratings[i]
            }
            player.rating = new_lt_ratings[i]

        return Game(wt_data, lt_data, winning_score, losing_score)
            

class GameStoreLocal:
    def __init__(self):
        self.games = []
    
    def insert_game(self, game):
        self.games.append(game)

    def get_user_games(self, user_id):
        user_games = []
        for game in self.games:
            if user_id in game.winning_team or user_id in game.losing_team:
                user_games.append(game)
        return user_games