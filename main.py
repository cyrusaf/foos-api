# from trueskill import *
from app.user import *
from app.game import *
import bjoern
import twirp as twirp
import traceback
# (Errors, FoosImpl, FoosServer, TwirpException)

class Foos(twirp.FoosImpl):
    def __init__(self, user_store, game_store):
        self.user_store = user_store
        self.game_store = game_store

    def CreateUser(self, req, ctx):
        new_user = User.new(req.name)
        self.user_store.insert_user(new_user)
        return twirp.CreateUserResponse(user=twirp.User(id=new_user.id, name=new_user.name, rating=new_user.rating.mu))

    def GetUsers(self, req, ctx):
        users = sorted(self.user_store.get_users(), key=lambda user: user.rating.mu*-1)
        return twirp.GetUsersResponse(users=[twirp.User(id=user.id, name=user.name, rating=user.rating.mu) for user in users])

    def InputGame(self, req, ctx):
        winners = [self.user_store.get_user(winner_id) for winner_id in req.winners]
        losers = [self.user_store.get_user(loser_id) for loser_id in req.losers]
        players = winners + losers

        game = Game.calculate_ratings(winners, losers, req.winning_score, req.losing_score)
        self.game_store.insert_game(game)

        for player in players:
            self.user_store.update_user(player)
        
        return twirp.InputGameResponse()
    
    def GetGamesForUser(self, req, ctx):
        games = self.game_store.get_user_games(req.user_id)
        return twirp.GetGamesForUserResponse(games=[twirp.Game() for game in games])

@twirp.error_occurred.connect
def error_occurred(ctx):
    print("error")
    print(ctx)
    print(ctx["exception"])
    print(ctx["exc_info"])
    print(ctx["exc_info"][2])
    traceback.print_tb(ctx["exc_info"][2])

if __name__ == "__main__":
    app = twirp.FoosServer(Foos(UserStoreLocal(), GameStoreLocal()))
    bjoern.run(app, "0.0.0.0", 8080)