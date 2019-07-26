/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.foos = (function() {

    /**
     * Namespace foos.
     * @exports foos
     * @namespace
     */
    var foos = {};

    foos.Foos = (function() {

        /**
         * Constructs a new Foos service.
         * @memberof foos
         * @classdesc Represents a Foos
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Foos(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Foos.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Foos;

        /**
         * Creates new Foos service using the specified rpc implementation.
         * @function create
         * @memberof foos.Foos
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Foos} RPC service. Useful where requests and/or responses are streamed.
         */
        Foos.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link foos.Foos#createPlayer}.
         * @memberof foos.Foos
         * @typedef CreatePlayerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {foos.CreatePlayerResponse} [response] CreatePlayerResponse
         */

        /**
         * Calls CreatePlayer.
         * @function createPlayer
         * @memberof foos.Foos
         * @instance
         * @param {foos.ICreatePlayerRequest} request CreatePlayerRequest message or plain object
         * @param {foos.Foos.CreatePlayerCallback} callback Node-style callback called with the error, if any, and CreatePlayerResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Foos.prototype.createPlayer = function createPlayer(request, callback) {
            return this.rpcCall(createPlayer, $root.foos.CreatePlayerRequest, $root.foos.CreatePlayerResponse, request, callback);
        }, "name", { value: "CreatePlayer" });

        /**
         * Calls CreatePlayer.
         * @function createPlayer
         * @memberof foos.Foos
         * @instance
         * @param {foos.ICreatePlayerRequest} request CreatePlayerRequest message or plain object
         * @returns {Promise<foos.CreatePlayerResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link foos.Foos#getPlayers}.
         * @memberof foos.Foos
         * @typedef GetPlayersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {foos.GetPlayersResponse} [response] GetPlayersResponse
         */

        /**
         * Calls GetPlayers.
         * @function getPlayers
         * @memberof foos.Foos
         * @instance
         * @param {foos.IGetPlayersRequest} request GetPlayersRequest message or plain object
         * @param {foos.Foos.GetPlayersCallback} callback Node-style callback called with the error, if any, and GetPlayersResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Foos.prototype.getPlayers = function getPlayers(request, callback) {
            return this.rpcCall(getPlayers, $root.foos.GetPlayersRequest, $root.foos.GetPlayersResponse, request, callback);
        }, "name", { value: "GetPlayers" });

        /**
         * Calls GetPlayers.
         * @function getPlayers
         * @memberof foos.Foos
         * @instance
         * @param {foos.IGetPlayersRequest} request GetPlayersRequest message or plain object
         * @returns {Promise<foos.GetPlayersResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link foos.Foos#inputGame}.
         * @memberof foos.Foos
         * @typedef InputGameCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {foos.InputGameResponse} [response] InputGameResponse
         */

        /**
         * Calls InputGame.
         * @function inputGame
         * @memberof foos.Foos
         * @instance
         * @param {foos.IInputGameRequest} request InputGameRequest message or plain object
         * @param {foos.Foos.InputGameCallback} callback Node-style callback called with the error, if any, and InputGameResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Foos.prototype.inputGame = function inputGame(request, callback) {
            return this.rpcCall(inputGame, $root.foos.InputGameRequest, $root.foos.InputGameResponse, request, callback);
        }, "name", { value: "InputGame" });

        /**
         * Calls InputGame.
         * @function inputGame
         * @memberof foos.Foos
         * @instance
         * @param {foos.IInputGameRequest} request InputGameRequest message or plain object
         * @returns {Promise<foos.InputGameResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link foos.Foos#getGamesForPlayer}.
         * @memberof foos.Foos
         * @typedef GetGamesForPlayerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {foos.GetGamesForPlayerResponse} [response] GetGamesForPlayerResponse
         */

        /**
         * Calls GetGamesForPlayer.
         * @function getGamesForPlayer
         * @memberof foos.Foos
         * @instance
         * @param {foos.IGetGamesForPlayerRequest} request GetGamesForPlayerRequest message or plain object
         * @param {foos.Foos.GetGamesForPlayerCallback} callback Node-style callback called with the error, if any, and GetGamesForPlayerResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Foos.prototype.getGamesForPlayer = function getGamesForPlayer(request, callback) {
            return this.rpcCall(getGamesForPlayer, $root.foos.GetGamesForPlayerRequest, $root.foos.GetGamesForPlayerResponse, request, callback);
        }, "name", { value: "GetGamesForPlayer" });

        /**
         * Calls GetGamesForPlayer.
         * @function getGamesForPlayer
         * @memberof foos.Foos
         * @instance
         * @param {foos.IGetGamesForPlayerRequest} request GetGamesForPlayerRequest message or plain object
         * @returns {Promise<foos.GetGamesForPlayerResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link foos.Foos#createLeague}.
         * @memberof foos.Foos
         * @typedef CreateLeagueCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {foos.CreateLeagueResponse} [response] CreateLeagueResponse
         */

        /**
         * Calls CreateLeague.
         * @function createLeague
         * @memberof foos.Foos
         * @instance
         * @param {foos.ICreateLeagueRequest} request CreateLeagueRequest message or plain object
         * @param {foos.Foos.CreateLeagueCallback} callback Node-style callback called with the error, if any, and CreateLeagueResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Foos.prototype.createLeague = function createLeague(request, callback) {
            return this.rpcCall(createLeague, $root.foos.CreateLeagueRequest, $root.foos.CreateLeagueResponse, request, callback);
        }, "name", { value: "CreateLeague" });

        /**
         * Calls CreateLeague.
         * @function createLeague
         * @memberof foos.Foos
         * @instance
         * @param {foos.ICreateLeagueRequest} request CreateLeagueRequest message or plain object
         * @returns {Promise<foos.CreateLeagueResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link foos.Foos#getLeagues}.
         * @memberof foos.Foos
         * @typedef GetLeaguesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {foos.GetLeaguesResponse} [response] GetLeaguesResponse
         */

        /**
         * Calls GetLeagues.
         * @function getLeagues
         * @memberof foos.Foos
         * @instance
         * @param {foos.IGetLeaguesRequest} request GetLeaguesRequest message or plain object
         * @param {foos.Foos.GetLeaguesCallback} callback Node-style callback called with the error, if any, and GetLeaguesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Foos.prototype.getLeagues = function getLeagues(request, callback) {
            return this.rpcCall(getLeagues, $root.foos.GetLeaguesRequest, $root.foos.GetLeaguesResponse, request, callback);
        }, "name", { value: "GetLeagues" });

        /**
         * Calls GetLeagues.
         * @function getLeagues
         * @memberof foos.Foos
         * @instance
         * @param {foos.IGetLeaguesRequest} request GetLeaguesRequest message or plain object
         * @returns {Promise<foos.GetLeaguesResponse>} Promise
         * @variation 2
         */

        return Foos;
    })();

    foos.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof foos
         * @interface IPlayer
         * @property {string|null} [id] Player id
         * @property {string|null} [name] Player name
         * @property {number|null} [rating] Player rating
         */

        /**
         * Constructs a new Player.
         * @memberof foos
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {foos.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player id.
         * @member {string} id
         * @memberof foos.Player
         * @instance
         */
        Player.prototype.id = "";

        /**
         * Player name.
         * @member {string} name
         * @memberof foos.Player
         * @instance
         */
        Player.prototype.name = "";

        /**
         * Player rating.
         * @member {number} rating
         * @memberof foos.Player
         * @instance
         */
        Player.prototype.rating = 0;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof foos.Player
         * @static
         * @param {foos.IPlayer=} [properties] Properties to set
         * @returns {foos.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link foos.Player.verify|verify} messages.
         * @function encode
         * @memberof foos.Player
         * @static
         * @param {foos.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.rating != null && message.hasOwnProperty("rating"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.rating);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link foos.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.Player
         * @static
         * @param {foos.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof foos.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.rating = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof foos.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.rating != null && message.hasOwnProperty("rating"))
                if (typeof message.rating !== "number")
                    return "rating: number expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.Player)
                return object;
            var message = new $root.foos.Player();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.rating != null)
                message.rating = Number(object.rating);
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.Player
         * @static
         * @param {foos.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.rating = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.rating != null && message.hasOwnProperty("rating"))
                object.rating = options.json && !isFinite(message.rating) ? String(message.rating) : message.rating;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof foos.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    foos.Game = (function() {

        /**
         * Properties of a Game.
         * @memberof foos
         * @interface IGame
         */

        /**
         * Constructs a new Game.
         * @memberof foos
         * @classdesc Represents a Game.
         * @implements IGame
         * @constructor
         * @param {foos.IGame=} [properties] Properties to set
         */
        function Game(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Game instance using the specified properties.
         * @function create
         * @memberof foos.Game
         * @static
         * @param {foos.IGame=} [properties] Properties to set
         * @returns {foos.Game} Game instance
         */
        Game.create = function create(properties) {
            return new Game(properties);
        };

        /**
         * Encodes the specified Game message. Does not implicitly {@link foos.Game.verify|verify} messages.
         * @function encode
         * @memberof foos.Game
         * @static
         * @param {foos.IGame} message Game message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Game.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Game message, length delimited. Does not implicitly {@link foos.Game.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.Game
         * @static
         * @param {foos.IGame} message Game message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Game.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Game message from the specified reader or buffer.
         * @function decode
         * @memberof foos.Game
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.Game} Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Game.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.Game();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Game message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.Game
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.Game} Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Game.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Game message.
         * @function verify
         * @memberof foos.Game
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Game.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Game message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.Game
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.Game} Game
         */
        Game.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.Game)
                return object;
            return new $root.foos.Game();
        };

        /**
         * Creates a plain object from a Game message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.Game
         * @static
         * @param {foos.Game} message Game
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Game.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Game to JSON.
         * @function toJSON
         * @memberof foos.Game
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Game.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Game;
    })();

    foos.League = (function() {

        /**
         * Properties of a League.
         * @memberof foos
         * @interface ILeague
         * @property {string|null} [id] League id
         * @property {string|null} [name] League name
         * @property {Array.<string>|null} [playerIds] League playerIds
         */

        /**
         * Constructs a new League.
         * @memberof foos
         * @classdesc Represents a League.
         * @implements ILeague
         * @constructor
         * @param {foos.ILeague=} [properties] Properties to set
         */
        function League(properties) {
            this.playerIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * League id.
         * @member {string} id
         * @memberof foos.League
         * @instance
         */
        League.prototype.id = "";

        /**
         * League name.
         * @member {string} name
         * @memberof foos.League
         * @instance
         */
        League.prototype.name = "";

        /**
         * League playerIds.
         * @member {Array.<string>} playerIds
         * @memberof foos.League
         * @instance
         */
        League.prototype.playerIds = $util.emptyArray;

        /**
         * Creates a new League instance using the specified properties.
         * @function create
         * @memberof foos.League
         * @static
         * @param {foos.ILeague=} [properties] Properties to set
         * @returns {foos.League} League instance
         */
        League.create = function create(properties) {
            return new League(properties);
        };

        /**
         * Encodes the specified League message. Does not implicitly {@link foos.League.verify|verify} messages.
         * @function encode
         * @memberof foos.League
         * @static
         * @param {foos.ILeague} message League message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        League.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.playerIds != null && message.playerIds.length)
                for (var i = 0; i < message.playerIds.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.playerIds[i]);
            return writer;
        };

        /**
         * Encodes the specified League message, length delimited. Does not implicitly {@link foos.League.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.League
         * @static
         * @param {foos.ILeague} message League message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        League.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a League message from the specified reader or buffer.
         * @function decode
         * @memberof foos.League
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.League} League
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        League.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.League();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    if (!(message.playerIds && message.playerIds.length))
                        message.playerIds = [];
                    message.playerIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a League message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.League
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.League} League
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        League.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a League message.
         * @function verify
         * @memberof foos.League
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        League.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.playerIds != null && message.hasOwnProperty("playerIds")) {
                if (!Array.isArray(message.playerIds))
                    return "playerIds: array expected";
                for (var i = 0; i < message.playerIds.length; ++i)
                    if (!$util.isString(message.playerIds[i]))
                        return "playerIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a League message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.League
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.League} League
         */
        League.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.League)
                return object;
            var message = new $root.foos.League();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.playerIds) {
                if (!Array.isArray(object.playerIds))
                    throw TypeError(".foos.League.playerIds: array expected");
                message.playerIds = [];
                for (var i = 0; i < object.playerIds.length; ++i)
                    message.playerIds[i] = String(object.playerIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a League message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.League
         * @static
         * @param {foos.League} message League
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        League.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.playerIds = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.playerIds && message.playerIds.length) {
                object.playerIds = [];
                for (var j = 0; j < message.playerIds.length; ++j)
                    object.playerIds[j] = message.playerIds[j];
            }
            return object;
        };

        /**
         * Converts this League to JSON.
         * @function toJSON
         * @memberof foos.League
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        League.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return League;
    })();

    foos.CreatePlayerRequest = (function() {

        /**
         * Properties of a CreatePlayerRequest.
         * @memberof foos
         * @interface ICreatePlayerRequest
         * @property {string|null} [name] CreatePlayerRequest name
         * @property {string|null} [leagueId] CreatePlayerRequest leagueId
         */

        /**
         * Constructs a new CreatePlayerRequest.
         * @memberof foos
         * @classdesc Represents a CreatePlayerRequest.
         * @implements ICreatePlayerRequest
         * @constructor
         * @param {foos.ICreatePlayerRequest=} [properties] Properties to set
         */
        function CreatePlayerRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePlayerRequest name.
         * @member {string} name
         * @memberof foos.CreatePlayerRequest
         * @instance
         */
        CreatePlayerRequest.prototype.name = "";

        /**
         * CreatePlayerRequest leagueId.
         * @member {string} leagueId
         * @memberof foos.CreatePlayerRequest
         * @instance
         */
        CreatePlayerRequest.prototype.leagueId = "";

        /**
         * Creates a new CreatePlayerRequest instance using the specified properties.
         * @function create
         * @memberof foos.CreatePlayerRequest
         * @static
         * @param {foos.ICreatePlayerRequest=} [properties] Properties to set
         * @returns {foos.CreatePlayerRequest} CreatePlayerRequest instance
         */
        CreatePlayerRequest.create = function create(properties) {
            return new CreatePlayerRequest(properties);
        };

        /**
         * Encodes the specified CreatePlayerRequest message. Does not implicitly {@link foos.CreatePlayerRequest.verify|verify} messages.
         * @function encode
         * @memberof foos.CreatePlayerRequest
         * @static
         * @param {foos.ICreatePlayerRequest} message CreatePlayerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePlayerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.leagueId != null && message.hasOwnProperty("leagueId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.leagueId);
            return writer;
        };

        /**
         * Encodes the specified CreatePlayerRequest message, length delimited. Does not implicitly {@link foos.CreatePlayerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.CreatePlayerRequest
         * @static
         * @param {foos.ICreatePlayerRequest} message CreatePlayerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePlayerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePlayerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof foos.CreatePlayerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.CreatePlayerRequest} CreatePlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePlayerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.CreatePlayerRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.leagueId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePlayerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.CreatePlayerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.CreatePlayerRequest} CreatePlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePlayerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePlayerRequest message.
         * @function verify
         * @memberof foos.CreatePlayerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePlayerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.leagueId != null && message.hasOwnProperty("leagueId"))
                if (!$util.isString(message.leagueId))
                    return "leagueId: string expected";
            return null;
        };

        /**
         * Creates a CreatePlayerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.CreatePlayerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.CreatePlayerRequest} CreatePlayerRequest
         */
        CreatePlayerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.CreatePlayerRequest)
                return object;
            var message = new $root.foos.CreatePlayerRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.leagueId != null)
                message.leagueId = String(object.leagueId);
            return message;
        };

        /**
         * Creates a plain object from a CreatePlayerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.CreatePlayerRequest
         * @static
         * @param {foos.CreatePlayerRequest} message CreatePlayerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePlayerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.leagueId = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.leagueId != null && message.hasOwnProperty("leagueId"))
                object.leagueId = message.leagueId;
            return object;
        };

        /**
         * Converts this CreatePlayerRequest to JSON.
         * @function toJSON
         * @memberof foos.CreatePlayerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePlayerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePlayerRequest;
    })();

    foos.CreatePlayerResponse = (function() {

        /**
         * Properties of a CreatePlayerResponse.
         * @memberof foos
         * @interface ICreatePlayerResponse
         * @property {foos.IPlayer|null} [player] CreatePlayerResponse player
         */

        /**
         * Constructs a new CreatePlayerResponse.
         * @memberof foos
         * @classdesc Represents a CreatePlayerResponse.
         * @implements ICreatePlayerResponse
         * @constructor
         * @param {foos.ICreatePlayerResponse=} [properties] Properties to set
         */
        function CreatePlayerResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePlayerResponse player.
         * @member {foos.IPlayer|null|undefined} player
         * @memberof foos.CreatePlayerResponse
         * @instance
         */
        CreatePlayerResponse.prototype.player = null;

        /**
         * Creates a new CreatePlayerResponse instance using the specified properties.
         * @function create
         * @memberof foos.CreatePlayerResponse
         * @static
         * @param {foos.ICreatePlayerResponse=} [properties] Properties to set
         * @returns {foos.CreatePlayerResponse} CreatePlayerResponse instance
         */
        CreatePlayerResponse.create = function create(properties) {
            return new CreatePlayerResponse(properties);
        };

        /**
         * Encodes the specified CreatePlayerResponse message. Does not implicitly {@link foos.CreatePlayerResponse.verify|verify} messages.
         * @function encode
         * @memberof foos.CreatePlayerResponse
         * @static
         * @param {foos.ICreatePlayerResponse} message CreatePlayerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePlayerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.hasOwnProperty("player"))
                $root.foos.Player.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreatePlayerResponse message, length delimited. Does not implicitly {@link foos.CreatePlayerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.CreatePlayerResponse
         * @static
         * @param {foos.ICreatePlayerResponse} message CreatePlayerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePlayerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePlayerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof foos.CreatePlayerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.CreatePlayerResponse} CreatePlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePlayerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.CreatePlayerResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.foos.Player.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePlayerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.CreatePlayerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.CreatePlayerResponse} CreatePlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePlayerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePlayerResponse message.
         * @function verify
         * @memberof foos.CreatePlayerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePlayerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.foos.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            return null;
        };

        /**
         * Creates a CreatePlayerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.CreatePlayerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.CreatePlayerResponse} CreatePlayerResponse
         */
        CreatePlayerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.CreatePlayerResponse)
                return object;
            var message = new $root.foos.CreatePlayerResponse();
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".foos.CreatePlayerResponse.player: object expected");
                message.player = $root.foos.Player.fromObject(object.player);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreatePlayerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.CreatePlayerResponse
         * @static
         * @param {foos.CreatePlayerResponse} message CreatePlayerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePlayerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.player = null;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.foos.Player.toObject(message.player, options);
            return object;
        };

        /**
         * Converts this CreatePlayerResponse to JSON.
         * @function toJSON
         * @memberof foos.CreatePlayerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePlayerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePlayerResponse;
    })();

    foos.GetPlayersRequest = (function() {

        /**
         * Properties of a GetPlayersRequest.
         * @memberof foos
         * @interface IGetPlayersRequest
         */

        /**
         * Constructs a new GetPlayersRequest.
         * @memberof foos
         * @classdesc Represents a GetPlayersRequest.
         * @implements IGetPlayersRequest
         * @constructor
         * @param {foos.IGetPlayersRequest=} [properties] Properties to set
         */
        function GetPlayersRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetPlayersRequest instance using the specified properties.
         * @function create
         * @memberof foos.GetPlayersRequest
         * @static
         * @param {foos.IGetPlayersRequest=} [properties] Properties to set
         * @returns {foos.GetPlayersRequest} GetPlayersRequest instance
         */
        GetPlayersRequest.create = function create(properties) {
            return new GetPlayersRequest(properties);
        };

        /**
         * Encodes the specified GetPlayersRequest message. Does not implicitly {@link foos.GetPlayersRequest.verify|verify} messages.
         * @function encode
         * @memberof foos.GetPlayersRequest
         * @static
         * @param {foos.IGetPlayersRequest} message GetPlayersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayersRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetPlayersRequest message, length delimited. Does not implicitly {@link foos.GetPlayersRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.GetPlayersRequest
         * @static
         * @param {foos.IGetPlayersRequest} message GetPlayersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayersRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayersRequest message from the specified reader or buffer.
         * @function decode
         * @memberof foos.GetPlayersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.GetPlayersRequest} GetPlayersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayersRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.GetPlayersRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPlayersRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.GetPlayersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.GetPlayersRequest} GetPlayersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayersRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPlayersRequest message.
         * @function verify
         * @memberof foos.GetPlayersRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayersRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetPlayersRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.GetPlayersRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.GetPlayersRequest} GetPlayersRequest
         */
        GetPlayersRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.GetPlayersRequest)
                return object;
            return new $root.foos.GetPlayersRequest();
        };

        /**
         * Creates a plain object from a GetPlayersRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.GetPlayersRequest
         * @static
         * @param {foos.GetPlayersRequest} message GetPlayersRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPlayersRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetPlayersRequest to JSON.
         * @function toJSON
         * @memberof foos.GetPlayersRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPlayersRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPlayersRequest;
    })();

    foos.GetPlayersResponse = (function() {

        /**
         * Properties of a GetPlayersResponse.
         * @memberof foos
         * @interface IGetPlayersResponse
         * @property {Array.<foos.IPlayer>|null} [players] GetPlayersResponse players
         */

        /**
         * Constructs a new GetPlayersResponse.
         * @memberof foos
         * @classdesc Represents a GetPlayersResponse.
         * @implements IGetPlayersResponse
         * @constructor
         * @param {foos.IGetPlayersResponse=} [properties] Properties to set
         */
        function GetPlayersResponse(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPlayersResponse players.
         * @member {Array.<foos.IPlayer>} players
         * @memberof foos.GetPlayersResponse
         * @instance
         */
        GetPlayersResponse.prototype.players = $util.emptyArray;

        /**
         * Creates a new GetPlayersResponse instance using the specified properties.
         * @function create
         * @memberof foos.GetPlayersResponse
         * @static
         * @param {foos.IGetPlayersResponse=} [properties] Properties to set
         * @returns {foos.GetPlayersResponse} GetPlayersResponse instance
         */
        GetPlayersResponse.create = function create(properties) {
            return new GetPlayersResponse(properties);
        };

        /**
         * Encodes the specified GetPlayersResponse message. Does not implicitly {@link foos.GetPlayersResponse.verify|verify} messages.
         * @function encode
         * @memberof foos.GetPlayersResponse
         * @static
         * @param {foos.IGetPlayersResponse} message GetPlayersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayersResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.foos.Player.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetPlayersResponse message, length delimited. Does not implicitly {@link foos.GetPlayersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.GetPlayersResponse
         * @static
         * @param {foos.IGetPlayersResponse} message GetPlayersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayersResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof foos.GetPlayersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.GetPlayersResponse} GetPlayersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayersResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.GetPlayersResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.foos.Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPlayersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.GetPlayersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.GetPlayersResponse} GetPlayersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayersResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPlayersResponse message.
         * @function verify
         * @memberof foos.GetPlayersResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayersResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.foos.Player.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetPlayersResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.GetPlayersResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.GetPlayersResponse} GetPlayersResponse
         */
        GetPlayersResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.GetPlayersResponse)
                return object;
            var message = new $root.foos.GetPlayersResponse();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".foos.GetPlayersResponse.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".foos.GetPlayersResponse.players: object expected");
                    message.players[i] = $root.foos.Player.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetPlayersResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.GetPlayersResponse
         * @static
         * @param {foos.GetPlayersResponse} message GetPlayersResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPlayersResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.foos.Player.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this GetPlayersResponse to JSON.
         * @function toJSON
         * @memberof foos.GetPlayersResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPlayersResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetPlayersResponse;
    })();

    foos.InputGameRequest = (function() {

        /**
         * Properties of an InputGameRequest.
         * @memberof foos
         * @interface IInputGameRequest
         * @property {Array.<string>|null} [winners] InputGameRequest winners
         * @property {Array.<string>|null} [losers] InputGameRequest losers
         * @property {number|null} [winningScore] InputGameRequest winningScore
         * @property {number|null} [losingScore] InputGameRequest losingScore
         */

        /**
         * Constructs a new InputGameRequest.
         * @memberof foos
         * @classdesc Represents an InputGameRequest.
         * @implements IInputGameRequest
         * @constructor
         * @param {foos.IInputGameRequest=} [properties] Properties to set
         */
        function InputGameRequest(properties) {
            this.winners = [];
            this.losers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InputGameRequest winners.
         * @member {Array.<string>} winners
         * @memberof foos.InputGameRequest
         * @instance
         */
        InputGameRequest.prototype.winners = $util.emptyArray;

        /**
         * InputGameRequest losers.
         * @member {Array.<string>} losers
         * @memberof foos.InputGameRequest
         * @instance
         */
        InputGameRequest.prototype.losers = $util.emptyArray;

        /**
         * InputGameRequest winningScore.
         * @member {number} winningScore
         * @memberof foos.InputGameRequest
         * @instance
         */
        InputGameRequest.prototype.winningScore = 0;

        /**
         * InputGameRequest losingScore.
         * @member {number} losingScore
         * @memberof foos.InputGameRequest
         * @instance
         */
        InputGameRequest.prototype.losingScore = 0;

        /**
         * Creates a new InputGameRequest instance using the specified properties.
         * @function create
         * @memberof foos.InputGameRequest
         * @static
         * @param {foos.IInputGameRequest=} [properties] Properties to set
         * @returns {foos.InputGameRequest} InputGameRequest instance
         */
        InputGameRequest.create = function create(properties) {
            return new InputGameRequest(properties);
        };

        /**
         * Encodes the specified InputGameRequest message. Does not implicitly {@link foos.InputGameRequest.verify|verify} messages.
         * @function encode
         * @memberof foos.InputGameRequest
         * @static
         * @param {foos.IInputGameRequest} message InputGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputGameRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.winners != null && message.winners.length)
                for (var i = 0; i < message.winners.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.winners[i]);
            if (message.losers != null && message.losers.length)
                for (var i = 0; i < message.losers.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.losers[i]);
            if (message.winningScore != null && message.hasOwnProperty("winningScore"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.winningScore);
            if (message.losingScore != null && message.hasOwnProperty("losingScore"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.losingScore);
            return writer;
        };

        /**
         * Encodes the specified InputGameRequest message, length delimited. Does not implicitly {@link foos.InputGameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.InputGameRequest
         * @static
         * @param {foos.IInputGameRequest} message InputGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InputGameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof foos.InputGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.InputGameRequest} InputGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputGameRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.InputGameRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.winners && message.winners.length))
                        message.winners = [];
                    message.winners.push(reader.string());
                    break;
                case 2:
                    if (!(message.losers && message.losers.length))
                        message.losers = [];
                    message.losers.push(reader.string());
                    break;
                case 3:
                    message.winningScore = reader.int32();
                    break;
                case 4:
                    message.losingScore = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InputGameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.InputGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.InputGameRequest} InputGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputGameRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InputGameRequest message.
         * @function verify
         * @memberof foos.InputGameRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InputGameRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.winners != null && message.hasOwnProperty("winners")) {
                if (!Array.isArray(message.winners))
                    return "winners: array expected";
                for (var i = 0; i < message.winners.length; ++i)
                    if (!$util.isString(message.winners[i]))
                        return "winners: string[] expected";
            }
            if (message.losers != null && message.hasOwnProperty("losers")) {
                if (!Array.isArray(message.losers))
                    return "losers: array expected";
                for (var i = 0; i < message.losers.length; ++i)
                    if (!$util.isString(message.losers[i]))
                        return "losers: string[] expected";
            }
            if (message.winningScore != null && message.hasOwnProperty("winningScore"))
                if (!$util.isInteger(message.winningScore))
                    return "winningScore: integer expected";
            if (message.losingScore != null && message.hasOwnProperty("losingScore"))
                if (!$util.isInteger(message.losingScore))
                    return "losingScore: integer expected";
            return null;
        };

        /**
         * Creates an InputGameRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.InputGameRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.InputGameRequest} InputGameRequest
         */
        InputGameRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.InputGameRequest)
                return object;
            var message = new $root.foos.InputGameRequest();
            if (object.winners) {
                if (!Array.isArray(object.winners))
                    throw TypeError(".foos.InputGameRequest.winners: array expected");
                message.winners = [];
                for (var i = 0; i < object.winners.length; ++i)
                    message.winners[i] = String(object.winners[i]);
            }
            if (object.losers) {
                if (!Array.isArray(object.losers))
                    throw TypeError(".foos.InputGameRequest.losers: array expected");
                message.losers = [];
                for (var i = 0; i < object.losers.length; ++i)
                    message.losers[i] = String(object.losers[i]);
            }
            if (object.winningScore != null)
                message.winningScore = object.winningScore | 0;
            if (object.losingScore != null)
                message.losingScore = object.losingScore | 0;
            return message;
        };

        /**
         * Creates a plain object from an InputGameRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.InputGameRequest
         * @static
         * @param {foos.InputGameRequest} message InputGameRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InputGameRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.winners = [];
                object.losers = [];
            }
            if (options.defaults) {
                object.winningScore = 0;
                object.losingScore = 0;
            }
            if (message.winners && message.winners.length) {
                object.winners = [];
                for (var j = 0; j < message.winners.length; ++j)
                    object.winners[j] = message.winners[j];
            }
            if (message.losers && message.losers.length) {
                object.losers = [];
                for (var j = 0; j < message.losers.length; ++j)
                    object.losers[j] = message.losers[j];
            }
            if (message.winningScore != null && message.hasOwnProperty("winningScore"))
                object.winningScore = message.winningScore;
            if (message.losingScore != null && message.hasOwnProperty("losingScore"))
                object.losingScore = message.losingScore;
            return object;
        };

        /**
         * Converts this InputGameRequest to JSON.
         * @function toJSON
         * @memberof foos.InputGameRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InputGameRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InputGameRequest;
    })();

    foos.InputGameResponse = (function() {

        /**
         * Properties of an InputGameResponse.
         * @memberof foos
         * @interface IInputGameResponse
         */

        /**
         * Constructs a new InputGameResponse.
         * @memberof foos
         * @classdesc Represents an InputGameResponse.
         * @implements IInputGameResponse
         * @constructor
         * @param {foos.IInputGameResponse=} [properties] Properties to set
         */
        function InputGameResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new InputGameResponse instance using the specified properties.
         * @function create
         * @memberof foos.InputGameResponse
         * @static
         * @param {foos.IInputGameResponse=} [properties] Properties to set
         * @returns {foos.InputGameResponse} InputGameResponse instance
         */
        InputGameResponse.create = function create(properties) {
            return new InputGameResponse(properties);
        };

        /**
         * Encodes the specified InputGameResponse message. Does not implicitly {@link foos.InputGameResponse.verify|verify} messages.
         * @function encode
         * @memberof foos.InputGameResponse
         * @static
         * @param {foos.IInputGameResponse} message InputGameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputGameResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified InputGameResponse message, length delimited. Does not implicitly {@link foos.InputGameResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.InputGameResponse
         * @static
         * @param {foos.IInputGameResponse} message InputGameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputGameResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InputGameResponse message from the specified reader or buffer.
         * @function decode
         * @memberof foos.InputGameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.InputGameResponse} InputGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputGameResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.InputGameResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InputGameResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.InputGameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.InputGameResponse} InputGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputGameResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InputGameResponse message.
         * @function verify
         * @memberof foos.InputGameResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InputGameResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an InputGameResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.InputGameResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.InputGameResponse} InputGameResponse
         */
        InputGameResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.InputGameResponse)
                return object;
            return new $root.foos.InputGameResponse();
        };

        /**
         * Creates a plain object from an InputGameResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.InputGameResponse
         * @static
         * @param {foos.InputGameResponse} message InputGameResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InputGameResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this InputGameResponse to JSON.
         * @function toJSON
         * @memberof foos.InputGameResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InputGameResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InputGameResponse;
    })();

    foos.GetGamesForPlayerRequest = (function() {

        /**
         * Properties of a GetGamesForPlayerRequest.
         * @memberof foos
         * @interface IGetGamesForPlayerRequest
         * @property {string|null} [playerId] GetGamesForPlayerRequest playerId
         */

        /**
         * Constructs a new GetGamesForPlayerRequest.
         * @memberof foos
         * @classdesc Represents a GetGamesForPlayerRequest.
         * @implements IGetGamesForPlayerRequest
         * @constructor
         * @param {foos.IGetGamesForPlayerRequest=} [properties] Properties to set
         */
        function GetGamesForPlayerRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGamesForPlayerRequest playerId.
         * @member {string} playerId
         * @memberof foos.GetGamesForPlayerRequest
         * @instance
         */
        GetGamesForPlayerRequest.prototype.playerId = "";

        /**
         * Creates a new GetGamesForPlayerRequest instance using the specified properties.
         * @function create
         * @memberof foos.GetGamesForPlayerRequest
         * @static
         * @param {foos.IGetGamesForPlayerRequest=} [properties] Properties to set
         * @returns {foos.GetGamesForPlayerRequest} GetGamesForPlayerRequest instance
         */
        GetGamesForPlayerRequest.create = function create(properties) {
            return new GetGamesForPlayerRequest(properties);
        };

        /**
         * Encodes the specified GetGamesForPlayerRequest message. Does not implicitly {@link foos.GetGamesForPlayerRequest.verify|verify} messages.
         * @function encode
         * @memberof foos.GetGamesForPlayerRequest
         * @static
         * @param {foos.IGetGamesForPlayerRequest} message GetGamesForPlayerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGamesForPlayerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified GetGamesForPlayerRequest message, length delimited. Does not implicitly {@link foos.GetGamesForPlayerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.GetGamesForPlayerRequest
         * @static
         * @param {foos.IGetGamesForPlayerRequest} message GetGamesForPlayerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGamesForPlayerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGamesForPlayerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof foos.GetGamesForPlayerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.GetGamesForPlayerRequest} GetGamesForPlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGamesForPlayerRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.GetGamesForPlayerRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGamesForPlayerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.GetGamesForPlayerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.GetGamesForPlayerRequest} GetGamesForPlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGamesForPlayerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGamesForPlayerRequest message.
         * @function verify
         * @memberof foos.GetGamesForPlayerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGamesForPlayerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            return null;
        };

        /**
         * Creates a GetGamesForPlayerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.GetGamesForPlayerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.GetGamesForPlayerRequest} GetGamesForPlayerRequest
         */
        GetGamesForPlayerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.GetGamesForPlayerRequest)
                return object;
            var message = new $root.foos.GetGamesForPlayerRequest();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            return message;
        };

        /**
         * Creates a plain object from a GetGamesForPlayerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.GetGamesForPlayerRequest
         * @static
         * @param {foos.GetGamesForPlayerRequest} message GetGamesForPlayerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGamesForPlayerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.playerId = "";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            return object;
        };

        /**
         * Converts this GetGamesForPlayerRequest to JSON.
         * @function toJSON
         * @memberof foos.GetGamesForPlayerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGamesForPlayerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGamesForPlayerRequest;
    })();

    foos.GetGamesForPlayerResponse = (function() {

        /**
         * Properties of a GetGamesForPlayerResponse.
         * @memberof foos
         * @interface IGetGamesForPlayerResponse
         * @property {Array.<foos.IGame>|null} [games] GetGamesForPlayerResponse games
         */

        /**
         * Constructs a new GetGamesForPlayerResponse.
         * @memberof foos
         * @classdesc Represents a GetGamesForPlayerResponse.
         * @implements IGetGamesForPlayerResponse
         * @constructor
         * @param {foos.IGetGamesForPlayerResponse=} [properties] Properties to set
         */
        function GetGamesForPlayerResponse(properties) {
            this.games = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGamesForPlayerResponse games.
         * @member {Array.<foos.IGame>} games
         * @memberof foos.GetGamesForPlayerResponse
         * @instance
         */
        GetGamesForPlayerResponse.prototype.games = $util.emptyArray;

        /**
         * Creates a new GetGamesForPlayerResponse instance using the specified properties.
         * @function create
         * @memberof foos.GetGamesForPlayerResponse
         * @static
         * @param {foos.IGetGamesForPlayerResponse=} [properties] Properties to set
         * @returns {foos.GetGamesForPlayerResponse} GetGamesForPlayerResponse instance
         */
        GetGamesForPlayerResponse.create = function create(properties) {
            return new GetGamesForPlayerResponse(properties);
        };

        /**
         * Encodes the specified GetGamesForPlayerResponse message. Does not implicitly {@link foos.GetGamesForPlayerResponse.verify|verify} messages.
         * @function encode
         * @memberof foos.GetGamesForPlayerResponse
         * @static
         * @param {foos.IGetGamesForPlayerResponse} message GetGamesForPlayerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGamesForPlayerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.games != null && message.games.length)
                for (var i = 0; i < message.games.length; ++i)
                    $root.foos.Game.encode(message.games[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetGamesForPlayerResponse message, length delimited. Does not implicitly {@link foos.GetGamesForPlayerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.GetGamesForPlayerResponse
         * @static
         * @param {foos.IGetGamesForPlayerResponse} message GetGamesForPlayerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGamesForPlayerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGamesForPlayerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof foos.GetGamesForPlayerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.GetGamesForPlayerResponse} GetGamesForPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGamesForPlayerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.GetGamesForPlayerResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.games && message.games.length))
                        message.games = [];
                    message.games.push($root.foos.Game.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGamesForPlayerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.GetGamesForPlayerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.GetGamesForPlayerResponse} GetGamesForPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGamesForPlayerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGamesForPlayerResponse message.
         * @function verify
         * @memberof foos.GetGamesForPlayerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGamesForPlayerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.games != null && message.hasOwnProperty("games")) {
                if (!Array.isArray(message.games))
                    return "games: array expected";
                for (var i = 0; i < message.games.length; ++i) {
                    var error = $root.foos.Game.verify(message.games[i]);
                    if (error)
                        return "games." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetGamesForPlayerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.GetGamesForPlayerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.GetGamesForPlayerResponse} GetGamesForPlayerResponse
         */
        GetGamesForPlayerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.GetGamesForPlayerResponse)
                return object;
            var message = new $root.foos.GetGamesForPlayerResponse();
            if (object.games) {
                if (!Array.isArray(object.games))
                    throw TypeError(".foos.GetGamesForPlayerResponse.games: array expected");
                message.games = [];
                for (var i = 0; i < object.games.length; ++i) {
                    if (typeof object.games[i] !== "object")
                        throw TypeError(".foos.GetGamesForPlayerResponse.games: object expected");
                    message.games[i] = $root.foos.Game.fromObject(object.games[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetGamesForPlayerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.GetGamesForPlayerResponse
         * @static
         * @param {foos.GetGamesForPlayerResponse} message GetGamesForPlayerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGamesForPlayerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.games = [];
            if (message.games && message.games.length) {
                object.games = [];
                for (var j = 0; j < message.games.length; ++j)
                    object.games[j] = $root.foos.Game.toObject(message.games[j], options);
            }
            return object;
        };

        /**
         * Converts this GetGamesForPlayerResponse to JSON.
         * @function toJSON
         * @memberof foos.GetGamesForPlayerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGamesForPlayerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGamesForPlayerResponse;
    })();

    foos.CreateLeagueRequest = (function() {

        /**
         * Properties of a CreateLeagueRequest.
         * @memberof foos
         * @interface ICreateLeagueRequest
         * @property {string|null} [name] CreateLeagueRequest name
         */

        /**
         * Constructs a new CreateLeagueRequest.
         * @memberof foos
         * @classdesc Represents a CreateLeagueRequest.
         * @implements ICreateLeagueRequest
         * @constructor
         * @param {foos.ICreateLeagueRequest=} [properties] Properties to set
         */
        function CreateLeagueRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateLeagueRequest name.
         * @member {string} name
         * @memberof foos.CreateLeagueRequest
         * @instance
         */
        CreateLeagueRequest.prototype.name = "";

        /**
         * Creates a new CreateLeagueRequest instance using the specified properties.
         * @function create
         * @memberof foos.CreateLeagueRequest
         * @static
         * @param {foos.ICreateLeagueRequest=} [properties] Properties to set
         * @returns {foos.CreateLeagueRequest} CreateLeagueRequest instance
         */
        CreateLeagueRequest.create = function create(properties) {
            return new CreateLeagueRequest(properties);
        };

        /**
         * Encodes the specified CreateLeagueRequest message. Does not implicitly {@link foos.CreateLeagueRequest.verify|verify} messages.
         * @function encode
         * @memberof foos.CreateLeagueRequest
         * @static
         * @param {foos.ICreateLeagueRequest} message CreateLeagueRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateLeagueRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified CreateLeagueRequest message, length delimited. Does not implicitly {@link foos.CreateLeagueRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.CreateLeagueRequest
         * @static
         * @param {foos.ICreateLeagueRequest} message CreateLeagueRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateLeagueRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateLeagueRequest message from the specified reader or buffer.
         * @function decode
         * @memberof foos.CreateLeagueRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.CreateLeagueRequest} CreateLeagueRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateLeagueRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.CreateLeagueRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateLeagueRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.CreateLeagueRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.CreateLeagueRequest} CreateLeagueRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateLeagueRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateLeagueRequest message.
         * @function verify
         * @memberof foos.CreateLeagueRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateLeagueRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a CreateLeagueRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.CreateLeagueRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.CreateLeagueRequest} CreateLeagueRequest
         */
        CreateLeagueRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.CreateLeagueRequest)
                return object;
            var message = new $root.foos.CreateLeagueRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a CreateLeagueRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.CreateLeagueRequest
         * @static
         * @param {foos.CreateLeagueRequest} message CreateLeagueRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateLeagueRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this CreateLeagueRequest to JSON.
         * @function toJSON
         * @memberof foos.CreateLeagueRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateLeagueRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateLeagueRequest;
    })();

    foos.CreateLeagueResponse = (function() {

        /**
         * Properties of a CreateLeagueResponse.
         * @memberof foos
         * @interface ICreateLeagueResponse
         * @property {foos.ILeague|null} [league] CreateLeagueResponse league
         */

        /**
         * Constructs a new CreateLeagueResponse.
         * @memberof foos
         * @classdesc Represents a CreateLeagueResponse.
         * @implements ICreateLeagueResponse
         * @constructor
         * @param {foos.ICreateLeagueResponse=} [properties] Properties to set
         */
        function CreateLeagueResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateLeagueResponse league.
         * @member {foos.ILeague|null|undefined} league
         * @memberof foos.CreateLeagueResponse
         * @instance
         */
        CreateLeagueResponse.prototype.league = null;

        /**
         * Creates a new CreateLeagueResponse instance using the specified properties.
         * @function create
         * @memberof foos.CreateLeagueResponse
         * @static
         * @param {foos.ICreateLeagueResponse=} [properties] Properties to set
         * @returns {foos.CreateLeagueResponse} CreateLeagueResponse instance
         */
        CreateLeagueResponse.create = function create(properties) {
            return new CreateLeagueResponse(properties);
        };

        /**
         * Encodes the specified CreateLeagueResponse message. Does not implicitly {@link foos.CreateLeagueResponse.verify|verify} messages.
         * @function encode
         * @memberof foos.CreateLeagueResponse
         * @static
         * @param {foos.ICreateLeagueResponse} message CreateLeagueResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateLeagueResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.league != null && message.hasOwnProperty("league"))
                $root.foos.League.encode(message.league, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateLeagueResponse message, length delimited. Does not implicitly {@link foos.CreateLeagueResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.CreateLeagueResponse
         * @static
         * @param {foos.ICreateLeagueResponse} message CreateLeagueResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateLeagueResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateLeagueResponse message from the specified reader or buffer.
         * @function decode
         * @memberof foos.CreateLeagueResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.CreateLeagueResponse} CreateLeagueResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateLeagueResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.CreateLeagueResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.league = $root.foos.League.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateLeagueResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.CreateLeagueResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.CreateLeagueResponse} CreateLeagueResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateLeagueResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateLeagueResponse message.
         * @function verify
         * @memberof foos.CreateLeagueResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateLeagueResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.league != null && message.hasOwnProperty("league")) {
                var error = $root.foos.League.verify(message.league);
                if (error)
                    return "league." + error;
            }
            return null;
        };

        /**
         * Creates a CreateLeagueResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.CreateLeagueResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.CreateLeagueResponse} CreateLeagueResponse
         */
        CreateLeagueResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.CreateLeagueResponse)
                return object;
            var message = new $root.foos.CreateLeagueResponse();
            if (object.league != null) {
                if (typeof object.league !== "object")
                    throw TypeError(".foos.CreateLeagueResponse.league: object expected");
                message.league = $root.foos.League.fromObject(object.league);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateLeagueResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.CreateLeagueResponse
         * @static
         * @param {foos.CreateLeagueResponse} message CreateLeagueResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateLeagueResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.league = null;
            if (message.league != null && message.hasOwnProperty("league"))
                object.league = $root.foos.League.toObject(message.league, options);
            return object;
        };

        /**
         * Converts this CreateLeagueResponse to JSON.
         * @function toJSON
         * @memberof foos.CreateLeagueResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateLeagueResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateLeagueResponse;
    })();

    foos.GetLeaguesRequest = (function() {

        /**
         * Properties of a GetLeaguesRequest.
         * @memberof foos
         * @interface IGetLeaguesRequest
         */

        /**
         * Constructs a new GetLeaguesRequest.
         * @memberof foos
         * @classdesc Represents a GetLeaguesRequest.
         * @implements IGetLeaguesRequest
         * @constructor
         * @param {foos.IGetLeaguesRequest=} [properties] Properties to set
         */
        function GetLeaguesRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetLeaguesRequest instance using the specified properties.
         * @function create
         * @memberof foos.GetLeaguesRequest
         * @static
         * @param {foos.IGetLeaguesRequest=} [properties] Properties to set
         * @returns {foos.GetLeaguesRequest} GetLeaguesRequest instance
         */
        GetLeaguesRequest.create = function create(properties) {
            return new GetLeaguesRequest(properties);
        };

        /**
         * Encodes the specified GetLeaguesRequest message. Does not implicitly {@link foos.GetLeaguesRequest.verify|verify} messages.
         * @function encode
         * @memberof foos.GetLeaguesRequest
         * @static
         * @param {foos.IGetLeaguesRequest} message GetLeaguesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLeaguesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetLeaguesRequest message, length delimited. Does not implicitly {@link foos.GetLeaguesRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.GetLeaguesRequest
         * @static
         * @param {foos.IGetLeaguesRequest} message GetLeaguesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLeaguesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetLeaguesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof foos.GetLeaguesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.GetLeaguesRequest} GetLeaguesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLeaguesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.GetLeaguesRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetLeaguesRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.GetLeaguesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.GetLeaguesRequest} GetLeaguesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLeaguesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetLeaguesRequest message.
         * @function verify
         * @memberof foos.GetLeaguesRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetLeaguesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetLeaguesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.GetLeaguesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.GetLeaguesRequest} GetLeaguesRequest
         */
        GetLeaguesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.GetLeaguesRequest)
                return object;
            return new $root.foos.GetLeaguesRequest();
        };

        /**
         * Creates a plain object from a GetLeaguesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.GetLeaguesRequest
         * @static
         * @param {foos.GetLeaguesRequest} message GetLeaguesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetLeaguesRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetLeaguesRequest to JSON.
         * @function toJSON
         * @memberof foos.GetLeaguesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetLeaguesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetLeaguesRequest;
    })();

    foos.GetLeaguesResponse = (function() {

        /**
         * Properties of a GetLeaguesResponse.
         * @memberof foos
         * @interface IGetLeaguesResponse
         * @property {Array.<foos.ILeague>|null} [leagues] GetLeaguesResponse leagues
         */

        /**
         * Constructs a new GetLeaguesResponse.
         * @memberof foos
         * @classdesc Represents a GetLeaguesResponse.
         * @implements IGetLeaguesResponse
         * @constructor
         * @param {foos.IGetLeaguesResponse=} [properties] Properties to set
         */
        function GetLeaguesResponse(properties) {
            this.leagues = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetLeaguesResponse leagues.
         * @member {Array.<foos.ILeague>} leagues
         * @memberof foos.GetLeaguesResponse
         * @instance
         */
        GetLeaguesResponse.prototype.leagues = $util.emptyArray;

        /**
         * Creates a new GetLeaguesResponse instance using the specified properties.
         * @function create
         * @memberof foos.GetLeaguesResponse
         * @static
         * @param {foos.IGetLeaguesResponse=} [properties] Properties to set
         * @returns {foos.GetLeaguesResponse} GetLeaguesResponse instance
         */
        GetLeaguesResponse.create = function create(properties) {
            return new GetLeaguesResponse(properties);
        };

        /**
         * Encodes the specified GetLeaguesResponse message. Does not implicitly {@link foos.GetLeaguesResponse.verify|verify} messages.
         * @function encode
         * @memberof foos.GetLeaguesResponse
         * @static
         * @param {foos.IGetLeaguesResponse} message GetLeaguesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLeaguesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.leagues != null && message.leagues.length)
                for (var i = 0; i < message.leagues.length; ++i)
                    $root.foos.League.encode(message.leagues[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetLeaguesResponse message, length delimited. Does not implicitly {@link foos.GetLeaguesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foos.GetLeaguesResponse
         * @static
         * @param {foos.IGetLeaguesResponse} message GetLeaguesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLeaguesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetLeaguesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof foos.GetLeaguesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foos.GetLeaguesResponse} GetLeaguesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLeaguesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.foos.GetLeaguesResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.leagues && message.leagues.length))
                        message.leagues = [];
                    message.leagues.push($root.foos.League.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetLeaguesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foos.GetLeaguesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foos.GetLeaguesResponse} GetLeaguesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLeaguesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetLeaguesResponse message.
         * @function verify
         * @memberof foos.GetLeaguesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetLeaguesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.leagues != null && message.hasOwnProperty("leagues")) {
                if (!Array.isArray(message.leagues))
                    return "leagues: array expected";
                for (var i = 0; i < message.leagues.length; ++i) {
                    var error = $root.foos.League.verify(message.leagues[i]);
                    if (error)
                        return "leagues." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetLeaguesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foos.GetLeaguesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foos.GetLeaguesResponse} GetLeaguesResponse
         */
        GetLeaguesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.foos.GetLeaguesResponse)
                return object;
            var message = new $root.foos.GetLeaguesResponse();
            if (object.leagues) {
                if (!Array.isArray(object.leagues))
                    throw TypeError(".foos.GetLeaguesResponse.leagues: array expected");
                message.leagues = [];
                for (var i = 0; i < object.leagues.length; ++i) {
                    if (typeof object.leagues[i] !== "object")
                        throw TypeError(".foos.GetLeaguesResponse.leagues: object expected");
                    message.leagues[i] = $root.foos.League.fromObject(object.leagues[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetLeaguesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foos.GetLeaguesResponse
         * @static
         * @param {foos.GetLeaguesResponse} message GetLeaguesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetLeaguesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.leagues = [];
            if (message.leagues && message.leagues.length) {
                object.leagues = [];
                for (var j = 0; j < message.leagues.length; ++j)
                    object.leagues[j] = $root.foos.League.toObject(message.leagues[j], options);
            }
            return object;
        };

        /**
         * Converts this GetLeaguesResponse to JSON.
         * @function toJSON
         * @memberof foos.GetLeaguesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetLeaguesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetLeaguesResponse;
    })();

    return foos;
})();

module.exports = $root;
