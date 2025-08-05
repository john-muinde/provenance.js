"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthCore = void 0;
var MessageUtils_1 = require("../../utils/MessageUtils");
var query_grpc_pb_1 = require("../../proto/cosmos/auth/v1beta1/query_grpc_pb");
var cosmos_auth_v1beta1_auth_pb = require("../../proto/cosmos/auth/v1beta1/auth_pb");
var cosmos_auth_v1beta1_query_pb = require("../../proto/cosmos/auth/v1beta1/query_pb");
var provenance_marker_v1_marker_pb = require("../../proto/provenance/marker/v1/marker_pb");
var AuthCore = /** @class */ (function () {
    function AuthCore(provider, txClient) {
        this.provider = provider;
        this.txClient = txClient;
        this.queryClient = new query_grpc_pb_1.QueryClient(this.provider.network.uri.toString(), provider.credentials);
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Static Queries
    //----------------------------------------------------------------------------------------------------------------------------------------------
    AuthCore.getBaseAccount = function (provider, addr) {
        return (new AuthCore(provider, null).getBaseAccount(addr));
    };
    AuthCore.getMarkerAccount = function (provider, addr) {
        return (new AuthCore(provider, null).getMarkerAccount(addr));
    };
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Query
    //----------------------------------------------------------------------------------------------------------------------------------------------
    AuthCore.prototype.getBaseAccount = function (addr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmos_auth_v1beta1_query_pb.QueryAccountRequest())
                .setAddress(addr);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.account(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var account = res.getAccount();
                    if (account.getTypeUrl() === (0, MessageUtils_1.getMessageTypeUrl)(new cosmos_auth_v1beta1_auth_pb.BaseAccount())) {
                        var baseAccount = (0, MessageUtils_1.anyToMessage)(account);
                        resolve(baseAccount.toObject());
                    }
                    else {
                        reject(new Error("Account type not handled: ".concat(account.getTypeUrl())));
                    }
                }
            });
        });
    };
    AuthCore.prototype.getMarkerAccount = function (addr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmos_auth_v1beta1_query_pb.QueryAccountRequest())
                .setAddress(addr);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.account(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var account = res.getAccount();
                    if (account.getTypeUrl() === (0, MessageUtils_1.getMessageTypeUrl)(new provenance_marker_v1_marker_pb.MarkerAccount())) {
                        var baseAccount = (0, MessageUtils_1.anyToMessage)(account);
                        resolve(baseAccount.toObject());
                    }
                    else {
                        reject(new Error("Account type not handled: ".concat(account.getTypeUrl())));
                    }
                }
            });
        });
    };
    return AuthCore;
}());
exports.AuthCore = AuthCore;
