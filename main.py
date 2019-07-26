# from trueskill import *
from app.player import *
from app.game import *
from app.league import *
import bjoern
import twirp as twirp
import traceback
from wsgicors import CORS
# (Errors, FoosImpl, FoosServer, TwirpException)

class Foos(twirp.FoosImpl):
    def __init__(self, player_store, game_store, league_store):
        self.player_store = player_store
        self.game_store = game_store
        self.league_store = league_store

    def CreatePlayer(self, req, ctx):
        new_player = Player.new(req.name)
        league = self.league_store.get_league(req.league_id)
        league.add_player(new_player.id)
        self.player_store.insert_player(new_player)
        self.league_store.update_league(league)
        return twirp.CreatePlayerResponse(player=twirp.Player(id=new_player.id, name=new_player.name, rating=new_player.rating.mu))

    def GetPlayers(self, req, ctx):
        players = sorted(self.player_store.get_players(), key=lambda player: player.rating.mu*-1)
        return twirp.GetPlayersResponse(players=[twirp.Player(id=player.id, name=player.name, rating=player.rating.mu) for player in players])

    def InputGame(self, req, ctx):
        winners = [self.player_store.get_player(winner_id) for winner_id in req.winners]
        losers = [self.player_store.get_player(loser_id) for loser_id in req.losers]
        players = winners + losers

        game = Game.calculate_ratings(winners, losers, req.winning_score, req.losing_score)
        self.game_store.insert_game(game)

        for player in players:
            self.player_store.update_player(player)
        
        return twirp.InputGameResponse()
    
    def GetGamesForPlayer(self, req, ctx):
        games = self.game_store.get_player_games(req.player_id)
        return twirp.GetGamesForPlayerResponse(games=[twirp.Game() for game in games])

    def CreateLeague(self, req, ctx):
        league = League.new(req.name)
        self.league_store.insert_league(league)
        return twirp.CreateLeagueResponse(league=twirp.League(id=league.id, name=league.name, player_ids=league.player_ids))

    def GetLeagues(self, req, ctx):
        leagues = self.league_store.get_leagues()
        return twirp.GetLeaguesResponse(leagues=[twirp.League(id=league.id, name=league.name, player_ids=league.player_ids) for league in leagues])

@twirp.error_occurred.connect
def error_occurred(ctx):
    print("error")
    print(ctx)
    print(ctx["exception"])
    print(ctx["exc_info"])
    print(ctx["exc_info"][2])
    traceback.print_tb(ctx["exc_info"][2])

if __name__ == "__main__":
    app = twirp.FoosServer(Foos(PlayerStoreLocal(), GameStoreLocal(), LeagueStoreLocal()))
    bjoern.run(CORS(app, headers="*", methods="*", maxage="180", origin="*"), "0.0.0.0", 8080)