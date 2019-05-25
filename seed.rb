require 'twirp'

client = Twirp::ClientJSON.new("http://localhost:8080/twirp", package: "foos", service: "Foos")
cyrus = client.rpc(:CreateUser, name: "Cyrus").data["user"]
dk = client.rpc(:CreateUser, name: "DK").data["user"]
vincent = client.rpc(:CreateUser, name: "Vincent").data["user"]
kd = client.rpc(:CreateUser, name: "KD").data["user"]
nic = client.rpc(:CreateUser, name: "Nic").data["user"]

resp = client.rpc(:InputGame, winners: [cyrus["id"], dk["id"]], losers: [nic["id"], vincent["id"]], winning_score: 10, losing_score: 8)
puts resp.data.inspect

resp = client.rpc(:GetUsers)
puts resp.data.inspect