"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameModule = void 0;
var async_1 = require("async");
var client_1 = require("../../client");
var query_grpc_pb_1 = require("../../proto/provenance/name/v1/query_grpc_pb");
var provenance_name_v1_name_pb = require("../../proto/provenance/name/v1/name_pb");
var provenance_name_v1_query_pb = require("../../proto/provenance/name/v1/query_pb");
var provenance_name_v1_tx_pb = require("../../proto/provenance/name/v1/tx_pb");
var NameModule = /** @class */ (function () {
    function NameModule(provider, txClient) {
        this.provider = provider;
        this.txClient = txClient;
        this.queryClient = new query_grpc_pb_1.QueryClient(this.provider.network.uri.toString(), provider.credentials, this.provider.options);
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Query
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Reverse lookup of all names bound to a given address
    NameModule.prototype.lookupNamesForAddress = function (addr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = new provenance_name_v1_query_pb.QueryReverseLookupRequest()
                .setAddress(addr);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.reverseLookup(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(res.getNameList());
                }
            });
        });
    };
    // Resolve the address for a name
    NameModule.prototype.resolveName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = new provenance_name_v1_query_pb.QueryResolveRequest()
                .setName(name);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.resolve(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(res.getAddress());
                }
            });
        });
    };
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // TX
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Bind a name to an address under the given root (parent) name in the Provenance blockchain
    NameModule.prototype.bindName = function (name, parent, addr) {
        var nameRecord;
        var parentRecord;
        if (typeof name === 'string') {
            nameRecord = {
                name: name,
                address: addr,
                restricted: false
            };
        }
        else {
            nameRecord = name;
        }
        if (typeof parent === 'string') {
            parentRecord = {
                name: parent,
                address: addr,
                restricted: false
            };
        }
        else {
            parentRecord = parent;
        }
        var req = (new provenance_name_v1_tx_pb.MsgBindNameRequest())
            .setRecord((new provenance_name_v1_name_pb.NameRecord())
            .setName(nameRecord.name)
            .setAddress(nameRecord.address)
            .setRestricted(nameRecord.restricted))
            .setParent((new provenance_name_v1_name_pb.NameRecord())
            .setName(parentRecord.name)
            .setAddress(parentRecord.address)
            .setRestricted(parentRecord.restricted));
        return new client_1.Message([req], this.txClient);
    };
    // Delete a bound name from the Provenance blockchain
    NameModule.prototype.deleteName = function (name, addr) {
        var nameRecord;
        if (typeof name === 'string') {
            nameRecord = {
                name: name,
                address: addr,
                restricted: false
            };
        }
        else {
            nameRecord = name;
        }
        var req = (new provenance_name_v1_tx_pb.MsgDeleteNameRequest())
            .setRecord((new provenance_name_v1_name_pb.NameRecord())
            .setName(nameRecord.name)
            .setAddress(nameRecord.address)
            .setRestricted(nameRecord.restricted));
        return new client_1.Message([req], this.txClient);
    };
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // TX Extensions
    //----------------------------------------------------------------------------------------------------------------------------------------------
    NameModule.prototype.bindNamePath = function (namePath, owner) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var msgs = new Array();
                        // split name path into segments
                        var names = namePath.split('.').reverse();
                        // capture the root name/address that exists on chain
                        var parent = {
                            name: '',
                            address: '',
                            restricted: false
                        };
                        // find the root name/address (NameRecord)
                        (0, async_1.eachSeries)(names, function (name, callback) {
                            var checkName = parent.name;
                            if (checkName === '') {
                                checkName = name;
                            }
                            else {
                                checkName = "".concat(name, ".").concat(checkName);
                            }
                            _this.resolveName(checkName).then(function (addr) {
                                parent.name = checkName;
                                parent.address = addr;
                                callback();
                            }).catch(function (err) {
                                callback(new Error());
                            });
                        }, function (err) {
                            var rootNames = parent.name.split('.').reverse();
                            var record;
                            for (var idx = rootNames.length; idx < names.length; idx++) {
                                record = {
                                    name: names[idx],
                                    address: owner,
                                    restricted: false
                                };
                                parent.address = owner;
                                msgs = msgs.concat(_this.bindName(record, parent).msgs);
                                parent = {
                                    name: "".concat(record.name, ".").concat(parent.name),
                                    address: record.address,
                                    restricted: record.restricted
                                };
                            }
                            resolve(new client_1.Message(msgs, _this.txClient));
                        });
                    })];
            });
        });
    };
    NameModule.prototype.deleteNamePath = function (namePath, numElems, addr) {
        if (namePath.split('.').length < numElems) {
            throw new Error("Invalid number of elements ".concat(numElems, " in name path ").concat(namePath));
        }
        var msgs = new Array();
        for (var idx = 0; idx < numElems; idx++) {
            msgs = msgs.concat(this.deleteName(namePath.split('.').slice(idx).join('.'), addr).msgs);
        }
        return new client_1.Message(msgs, this.txClient);
    };
    return NameModule;
}());
exports.NameModule = NameModule;
;
