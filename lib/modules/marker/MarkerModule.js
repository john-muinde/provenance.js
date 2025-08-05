"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkerModule = void 0;
var client_1 = require("../../client");
var query_grpc_pb_1 = require("../../proto/provenance/marker/v1/query_grpc_pb");
var cosmos_bank_v1beta1_bank_pb = require("../../proto/cosmos/bank/v1beta1/bank_pb");
var cosmos_base_v1beta1_coin_pb = require("../../proto/cosmos/base/v1beta1/coin_pb");
var provenance_marker_v1_accessgrant_pb = require("../../proto/provenance/marker/v1/accessgrant_pb");
var provenance_marker_v1_pb = require("../../proto/provenance/marker/v1/marker_pb");
var provenance_marker_v1_query_pb = require("../../proto/provenance/marker/v1/query_pb");
var provenance_marker_v1_tx_pb = require("../../proto/provenance/marker/v1/tx_pb");
var MarkerModule = /** @class */ (function () {
    function MarkerModule(provider, txClient) {
        this.provider = provider;
        this.txClient = txClient;
        this.queryClient = new query_grpc_pb_1.QueryClient(this.provider.network.uri.toString(), provider.credentials, this.provider.options);
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Query
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Get all marker registrations on the Provenance Blockchain
    MarkerModule.prototype.getAllMarkers = function (status) {
        var _this = this;
        if (status === void 0) { status = provenance_marker_v1_pb.MarkerStatus.MARKER_STATUS_UNSPECIFIED; }
        return new Promise(function (resolve, reject) {
            var req = (new provenance_marker_v1_query_pb.QueryAllMarkersRequest())
                .setStatus(provenance_marker_v1_pb.MarkerStatus.MARKER_STATUS_UNSPECIFIED);
            _this.queryClient.allMarkers(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var markers = [];
                    res.getMarkersList().forEach(function (marker) {
                        var markerAccount = provenance_marker_v1_pb.MarkerAccount.deserializeBinary(marker.getValue_asU8());
                        markers.push(markerAccount.toObject());
                    });
                    resolve(markers);
                }
            });
        });
    };
    // Get marker details
    MarkerModule.prototype.getMarker = function (denom) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new provenance_marker_v1_query_pb.QueryMarkerRequest())
                .setId(denom);
            _this.queryClient.marker(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var markerAccount = provenance_marker_v1_pb.MarkerAccount.deserializeBinary(res.getMarker().getValue_asU8());
                    resolve(markerAccount.toObject());
                }
            });
        });
    };
    // Get all accounts holding the given marker on the Provenance Blockchain
    MarkerModule.prototype.getAllAccountsHoldingMarker = function (denom) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new provenance_marker_v1_query_pb.QueryHoldingRequest())
                .setId(denom);
            _this.queryClient.holding(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var balances = [];
                    res.getBalancesList().forEach(function (balance) {
                        balances.push(balance.toObject());
                    });
                    resolve(balances);
                }
            });
        });
    };
    // Get total supply for marker
    MarkerModule.prototype.getTotalSupply = function (denom) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new provenance_marker_v1_query_pb.QuerySupplyRequest())
                .setId(denom);
            _this.queryClient.supply(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(res.getAmount().toObject());
                }
            });
        });
    };
    // Get coins in escrow by marker
    MarkerModule.prototype.getCoinsInEscrow = function (denom) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new provenance_marker_v1_query_pb.QueryEscrowRequest())
                .setId(denom);
            _this.queryClient.escrow(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var coins = [];
                    res.getEscrowList().forEach(function (coin) {
                        coins.push(coin.toObject());
                    });
                    resolve(coins);
                }
            });
        });
    };
    // Get access grants defined for marker
    MarkerModule.prototype.getAccessGrantsForMarker = function (denom) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new provenance_marker_v1_query_pb.QueryAccessRequest())
                .setId(denom);
            _this.queryClient.access(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var grants = [];
                    res.getAccountsList().forEach(function (grant) {
                        grants.push(grant.toObject());
                    });
                    resolve(grants);
                }
            });
        });
    };
    // Get metadata for marker
    MarkerModule.prototype.getMetadata = function (denom) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new provenance_marker_v1_query_pb.QueryDenomMetadataRequest())
                .setDenom(denom);
            _this.queryClient.denomMetadata(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(res.getMetadata().toObject());
                }
            });
        });
    };
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // TX
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Finalize the marker account
    MarkerModule.prototype.finalize = function (denom, admin) {
        var req = (new provenance_marker_v1_tx_pb.MsgFinalizeRequest())
            .setDenom(denom)
            .setAdministrator(admin);
        return new client_1.Message([req], this.txClient);
    };
    // Activate the marker account
    MarkerModule.prototype.activate = function (denom, admin) {
        var req = (new provenance_marker_v1_tx_pb.MsgActivateRequest())
            .setDenom(denom)
            .setAdministrator(admin);
        return new client_1.Message([req], this.txClient);
    };
    // Cancel the marker account
    MarkerModule.prototype.cancel = function (denom, admin) {
        var req = (new provenance_marker_v1_tx_pb.MsgCancelRequest())
            .setDenom(denom)
            .setAdministrator(admin);
        return new client_1.Message([req], this.txClient);
    };
    // Mark the marker for deletion
    MarkerModule.prototype.delete = function (denom, admin) {
        var req = (new provenance_marker_v1_tx_pb.MsgDeleteRequest())
            .setDenom(denom)
            .setAdministrator(admin);
        return new client_1.Message([req], this.txClient);
    };
    // Mint coins against the marker
    MarkerModule.prototype.mint = function (coin, admin) {
        var req = (new provenance_marker_v1_tx_pb.MsgMintRequest())
            .setAmount((new cosmos_base_v1beta1_coin_pb.Coin())
            .setAmount(coin.amount)
            .setDenom(coin.denom))
            .setAdministrator(admin);
        return new client_1.Message([req], this.txClient);
    };
    // Burn coins from the marker
    MarkerModule.prototype.burn = function (coin, admin) {
        var req = (new provenance_marker_v1_tx_pb.MsgBurnRequest())
            .setAmount((new cosmos_base_v1beta1_coin_pb.Coin())
            .setAmount(coin.amount)
            .setDenom(coin.denom))
            .setAdministrator(admin);
        return new client_1.Message([req], this.txClient);
    };
    // Grant access to a marker for the address
    MarkerModule.prototype.addAccess = function (denom, accessList, admin) {
        var grants = [];
        accessList.forEach(function (accessGrant) {
            grants.push((new provenance_marker_v1_accessgrant_pb.AccessGrant())
                .setAddress(accessGrant.address)
                .setPermissionsList(accessGrant.permissionsList));
        });
        var req = (new provenance_marker_v1_tx_pb.MsgAddAccessRequest())
            .setDenom(denom)
            .setAccessList(grants)
            .setAdministrator(admin);
        return new client_1.Message([req], this.txClient);
    };
    // Revoke all access to a marker for the address
    MarkerModule.prototype.deleteAccess = function (denom, addr, admin) {
        var req = (new provenance_marker_v1_tx_pb.MsgDeleteAccessRequest())
            .setDenom(denom)
            .setRemovedAddress(addr)
            .setAdministrator(admin);
        return new client_1.Message([req], this.txClient);
    };
    // Withdraw coins from the marker
    MarkerModule.prototype.withdraw = function (denom, to, amountList, admin) {
        var amounts = [];
        amountList.forEach(function (amount) {
            amounts.push((new cosmos_base_v1beta1_coin_pb.Coin)
                .setAmount(amount.amount)
                .setDenom(amount.denom));
        });
        var req = (new provenance_marker_v1_tx_pb.MsgWithdrawRequest())
            .setDenom(denom)
            .setToAddress(to)
            .setAmountList(amounts)
            .setAdministrator(admin);
        return new client_1.Message([req], this.txClient);
    };
    // Create a new marker
    MarkerModule.prototype.addMarker = function (coin, from, type, status, accessList, allowGovernance, fixedSupply, manager) {
        var grants = [];
        accessList.forEach(function (accessGrant) {
            grants.push((new provenance_marker_v1_accessgrant_pb.AccessGrant())
                .setAddress(accessGrant.address)
                .setPermissionsList(accessGrant.permissionsList));
        });
        var req = (new provenance_marker_v1_tx_pb.MsgAddMarkerRequest())
            .setAmount((new cosmos_base_v1beta1_coin_pb.Coin())
            .setAmount(coin.amount)
            .setDenom(coin.denom))
            .setFromAddress(from)
            .setMarkerType(type)
            .setStatus(status)
            .setAccessListList(grants)
            .setAllowGovernanceControl(allowGovernance)
            .setSupplyFixed(fixedSupply)
            .setManager(manager);
        return new client_1.Message([req], this.txClient);
    };
    // Transfer coins from one account to another
    MarkerModule.prototype.transfer = function (coin, from, to, admin) {
        var req = (new provenance_marker_v1_tx_pb.MsgTransferRequest())
            .setAmount((new cosmos_base_v1beta1_coin_pb.Coin())
            .setAmount(coin.amount)
            .setDenom(coin.denom))
            .setFromAddress(from)
            .setToAddress(to)
            .setAdministrator(admin);
        return new client_1.Message([req], this.txClient);
    };
    // Set metadata for a marker
    MarkerModule.prototype.setMetadata = function (metadata, admin) {
        var denomUnits = [];
        metadata.denomUnitsList.forEach(function (denomUnit) {
            denomUnits.push((new cosmos_bank_v1beta1_bank_pb.DenomUnit())
                .setAliasesList(denomUnit.aliasesList)
                .setDenom(denomUnit.denom)
                .setExponent(denomUnit.exponent));
        });
        var req = (new provenance_marker_v1_tx_pb.MsgSetDenomMetadataRequest())
            .setMetadata((new cosmos_bank_v1beta1_bank_pb.Metadata())
            .setBase(metadata.base)
            .setDenomUnitsList(denomUnits)
            .setDescription(metadata.description)
            .setDisplay(metadata.display)
            .setName(metadata.name)
            .setSymbol(metadata.symbol))
            .setAdministrator(admin);
        return new client_1.Message([req], this.txClient);
    };
    return MarkerModule;
}());
exports.MarkerModule = MarkerModule;
;
