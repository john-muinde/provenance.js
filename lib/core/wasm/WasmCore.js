"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WasmCore = void 0;
var client_1 = require("../../client");
var query_grpc_pb_1 = require("../../proto/cosmwasm/wasm/v1/query_grpc_pb");
var cosmos_base_v1beta1_coin_pb = require("../../proto/cosmos/base/v1beta1/coin_pb");
var cosmwasm_wasm_v1_query_pb = require("../../proto/cosmwasm/wasm/v1/query_pb");
var cosmwasm_wasm_v1_types_pb = require("../../proto/cosmwasm/wasm/v1/types_pb");
var cosmwasm_wasm_v1_tx_pb = require("../../proto/cosmwasm/wasm/v1/tx_pb");
var WasmCore = /** @class */ (function () {
    function WasmCore(provider, txClient) {
        this.provider = provider;
        this.txClient = txClient;
        this.queryClient = new query_grpc_pb_1.QueryClient(this.provider.network.uri.toString(), provider.credentials, this.provider.options);
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Query
    //----------------------------------------------------------------------------------------------------------------------------------------------
    /**
     * Gets contract info.
     * @param addr The address of the contract.
     * @returns The contract info for the specified contract.
     */
    WasmCore.prototype.contractInfo = function (addr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmwasm_wasm_v1_query_pb.QueryContractInfoRequest())
                .setAddress(addr);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.contractInfo(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(res.getContractInfo().toObject());
                }
            });
        });
    };
    /**
     * Gets the history of a contract.
     * @param addr The address of the contract.
     * @returns The history of the specified contract.
     */
    WasmCore.prototype.contractHistory = function (addr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmwasm_wasm_v1_query_pb.QueryContractHistoryRequest())
                .setAddress(addr);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.contractHistory(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var contractCodeHistoryEntries = [];
                    res.getEntriesList().forEach(function (entry) {
                        contractCodeHistoryEntries.push(entry.toObject());
                    });
                    resolve(contractCodeHistoryEntries);
                }
            });
        });
    };
    /**
     * Gets all contract addresses using a WASM code id.
     * @param codeId The WASM code id.
     * @returns All contract addresses using the specified code id.
     */
    WasmCore.prototype.contractsByCode = function (codeId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmwasm_wasm_v1_query_pb.QueryContractsByCodeRequest())
                .setCodeId(codeId);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.contractsByCode(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(res.getContractsList());
                }
            });
        });
    };
    /**
     * Gets the state of a contract.
     * @param addr The address of the contraact.
     * @returns The state of the specified contract.
     */
    WasmCore.prototype.allContractStates = function (addr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmwasm_wasm_v1_query_pb.QueryAllContractStateRequest())
                .setAddress(addr);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.allContractState(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var contractStates = [];
                    res.getModelsList().forEach(function (model) {
                        contractStates.push(model.toObject());
                    });
                    resolve(contractStates);
                }
            });
        });
    };
    /**
     *
     * @param addr
     * @param query
     * @returns
     */
    WasmCore.prototype.rawContractState = function (addr, query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var queryData;
            if (typeof query === 'object') {
                if (query.constructor.name === 'Buffer') {
                    queryData = query;
                }
                else {
                    queryData = Buffer.from(JSON.stringify(query));
                }
            }
            else if (typeof query === 'string') {
                queryData = Buffer.from(query);
            }
            var req = (new cosmwasm_wasm_v1_query_pb.QueryRawContractStateRequest())
                .setAddress(addr)
                .setQueryData(queryData);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.rawContractState(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(Buffer.from(res.getData_asB64(), 'base64').toString('utf-8'));
                }
            });
        });
    };
    /**
     *
     * @param addr
     * @param query
     * @returns
     */
    WasmCore.prototype.smartContractState = function (addr, query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var queryData;
            if (typeof query === 'object') {
                queryData = Buffer.from(JSON.stringify(query));
            }
            else if (typeof query === 'string') {
                queryData = Buffer.from(query);
            }
            var req = (new cosmwasm_wasm_v1_query_pb.QuerySmartContractStateRequest())
                .setAddress(addr)
                .setQueryData(queryData);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.smartContractState(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(JSON.parse(Buffer.from(res.getData_asB64(), 'base64').toString('utf-8')));
                }
            });
        });
    };
    /**
     *
     * @param codeId
     * @returns
     */
    WasmCore.prototype.code = function (codeId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmwasm_wasm_v1_query_pb.QueryCodeRequest())
                .setCodeId(codeId);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.code(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve({
                        info: res.getCodeInfo().toObject(),
                        bytecode: res.getData()
                    });
                }
            });
        });
    };
    /**
     *
     * @returns
     */
    WasmCore.prototype.codes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmwasm_wasm_v1_query_pb.QueryCodesRequest());
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.codes(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var codeInfoList = [];
                    res.getCodeInfosList().forEach(function (codeInfo) {
                        codeInfoList.push(codeInfo.toObject());
                    });
                    resolve(codeInfoList);
                }
            });
        });
    };
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // TX
    //----------------------------------------------------------------------------------------------------------------------------------------------
    /**
     *
     * @param bytecode
     * @param sender
     * @param access
     * @returns
     */
    WasmCore.prototype.storeCode = function (bytecode, sender, access) {
        var req = (new cosmwasm_wasm_v1_tx_pb.MsgStoreCode())
            .setWasmByteCode(bytecode)
            .setSender(sender);
        if (access !== undefined) {
            req.setInstantiatePermission((new cosmwasm_wasm_v1_types_pb.AccessConfig())
                .setAddress(access.address)
                .setPermission(access.permission));
        }
        return new client_1.Message([req], this.txClient);
    };
    /**
     *
     * @param codeId
     * @param label
     * @param sender
     * @param args
     * @param admin
     * @param funds
     * @returns
     */
    WasmCore.prototype.instantiateContract = function (codeId, label, sender, args, admin, funds) {
        if (admin === undefined) {
            admin = sender;
        }
        var msg;
        if (args !== undefined) {
            if (typeof args === 'object') {
                msg = Buffer.from(JSON.stringify(args));
            }
            else if (typeof args === 'string') {
                msg = Buffer.from(args);
            }
            else {
                msg = args;
            }
        }
        var fundsList = [];
        if (funds !== undefined) {
            funds.forEach(function (fund) {
                fundsList.push((new cosmos_base_v1beta1_coin_pb.Coin)
                    .setAmount(fund.amount)
                    .setDenom(fund.denom));
            });
        }
        var req = (new cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract())
            .setCodeId(codeId)
            .setLabel(label)
            .setSender(sender)
            .setAdmin(admin)
            .setFundsList(fundsList)
            .setMsg(msg);
        return new client_1.Message([req], this.txClient);
    };
    /**
     *
     * @param addr
     * @param sender
     * @param args
     * @param admin
     * @param funds
     * @returns
     */
    WasmCore.prototype.executeContract = function (addr, sender, args, admin, funds) {
        var msg;
        if (args !== undefined) {
            if (typeof args === 'object') {
                msg = Buffer.from(JSON.stringify(args));
            }
            else if (typeof args === 'string') {
                msg = Buffer.from(args);
            }
            else {
                msg = args;
            }
        }
        var fundsList = [];
        if (funds !== undefined) {
            funds.forEach(function (fund) {
                fundsList.push((new cosmos_base_v1beta1_coin_pb.Coin)
                    .setAmount(fund.amount)
                    .setDenom(fund.denom));
            });
        }
        var req = (new cosmwasm_wasm_v1_tx_pb.MsgExecuteContract())
            .setContract(addr)
            .setMsg(msg)
            .setFundsList(fundsList)
            .setSender(sender);
        return new client_1.Message([req], this.txClient);
    };
    /**
     *
     * @param addr
     * @param codeId
     * @param sender
     * @param args
     * @returns
     */
    WasmCore.prototype.migrateContract = function (addr, codeId, sender, args) {
        var msg;
        if (args !== undefined) {
            if (typeof args === 'object') {
                msg = Buffer.from(JSON.stringify(args));
            }
            else if (typeof args === 'string') {
                msg = Buffer.from(args);
            }
            else {
                msg = args;
            }
        }
        var req = (new cosmwasm_wasm_v1_tx_pb.MsgMigrateContract())
            .setContract(addr)
            .setCodeId(codeId)
            .setMsg(msg)
            .setSender(sender);
        return new client_1.Message([req], this.txClient);
    };
    /**
     *
     * @param addr
     * @param newAdmin
     * @param sender
     * @returns
     */
    WasmCore.prototype.updateAdmin = function (addr, newAdmin, sender) {
        var req = (new cosmwasm_wasm_v1_tx_pb.MsgUpdateAdmin())
            .setContract(addr)
            .setNewAdmin(newAdmin)
            .setSender(sender);
        return new client_1.Message([req], this.txClient);
    };
    /**
     *
     * @param addr
     * @param sender
     * @returns
     */
    WasmCore.prototype.clearAdmin = function (addr, sender) {
        var req = (new cosmwasm_wasm_v1_tx_pb.MsgClearAdmin())
            .setContract(addr)
            .setSender(sender);
        return new client_1.Message([req], this.txClient);
    };
    return WasmCore;
}());
exports.WasmCore = WasmCore;
