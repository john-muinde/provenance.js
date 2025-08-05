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
exports.ProvenanceClient = void 0;
var BaseRequest_1 = require("./BaseRequest");
var GasEstimate_1 = require("./GasEstimate");
var types_1 = require("../types");
var MessageUtils_1 = require("../utils/MessageUtils");
var core_1 = require("../core");
var modules_1 = require("../modules");
var service_grpc_pb_1 = require("../proto/cosmos/tx/v1beta1/service_grpc_pb");
var cosmos_tx_v1beta1_service_pb = require("../proto/cosmos/tx/v1beta1/service_pb");
var cosmos_tx_v1beta1_tx_pb = require("../proto/cosmos/tx/v1beta1/tx_pb");
var providers_1 = require("../providers");
var ProvenanceClient = /** @class */ (function () {
    /**
     * Constructor.
     * @param provider The provenance node network provider.
     */
    function ProvenanceClient(provider, gasPriceProvider) {
        ProvenanceClient.singleton = this;
        this.provider = provider;
        if (gasPriceProvider === undefined) {
            this.gasPriceProvider = gasPriceProvider;
        }
        else {
            this.gasPriceProvider = new providers_1.DefaultGasPriceProvider();
        }
        this.txClient = new service_grpc_pb_1.ServiceClient(this.provider.network.uri.toString(), this.provider.credentials, this.provider);
        // core modules
        this.auth = new core_1.AuthCore(this.provider, this);
        this.bank = new core_1.BankCore(this.provider, this);
        this.wasm = new core_1.WasmCore(this.provider, this);
        // provenance modules
        this.attribute = new modules_1.AttributeModule(this.provider, this);
        this.marker = new modules_1.MarkerModule(this.provider, this);
        this.metadata = new modules_1.MetadataModule(this.provider, this);
        this.name = new modules_1.NameModule(this.provider, this);
        this.msgFees = new modules_1.MsgFeesModule(this.provider, this);
    }
    /**
     * Broadcasts the request.
     * @param baseReq The request containing one or more messages to broadcast.
     * @returns ???
     */
    ProvenanceClient.prototype.broadcastTx = function (baseReq, gasEstimate, mode) {
        var _this = this;
        if (mode === void 0) { mode = types_1.BroadcastMode.BROADCAST_MODE_SYNC; }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var authInfoBytes, txBodyBytes, signatures, txRaw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, baseReq.buildAuthInfo(gasEstimate)];
                    case 1:
                        authInfoBytes = (_a.sent()).serializeBinary();
                        txBodyBytes = baseReq.body.serializeBinary();
                        signatures = new Array();
                        return [4 /*yield*/, baseReq.buildSignDocBytesList(Buffer.from(authInfoBytes), Buffer.from(txBodyBytes))];
                    case 2:
                        (_a.sent()).forEach(function (signDocBytes, index) {
                            if (index > (baseReq.signers.length - 1)) {
                                signatures.push(baseReq.signers[baseReq.signers.length - 1].sign(signDocBytes));
                            }
                            else {
                                signatures.push(baseReq.signers[index].sign(signDocBytes));
                            }
                        });
                        txRaw = (new cosmos_tx_v1beta1_tx_pb.TxRaw())
                            .setAuthInfoBytes(authInfoBytes)
                            .setBodyBytes(txBodyBytes)
                            .setSignaturesList(signatures);
                        // TODO: Move GRPC unary call to the provider
                        // broadcast the transaction
                        this.txClient.broadcastTx((new cosmos_tx_v1beta1_service_pb.BroadcastTxRequest()).setTxBytes(txRaw.serializeBinary()).setMode(mode), function (err, res) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(res.getTxResponse().toObject());
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * ???
     * @param baseReq ???
     * @returns ???
     */
    ProvenanceClient.prototype.estimateTx = function (baseReq) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var tx, _a, _b, signatures;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = (new cosmos_tx_v1beta1_tx_pb.Tx())
                            .setBody(baseReq.body))
                            .setAuthInfo;
                        return [4 /*yield*/, baseReq.buildAuthInfo()];
                    case 1:
                        tx = _b.apply(_a, [_c.sent()]);
                        signatures = new Array();
                        return [4 /*yield*/, baseReq.buildSignDocBytesList(Buffer.from(tx.getAuthInfo().serializeBinary()), Buffer.from(tx.getBody().serializeBinary()))];
                    case 2:
                        (_c.sent()).forEach(function (signDocBytes, index) {
                            if (baseReq.signers.length < index) {
                                signatures.push(baseReq.signers[index].sign(signDocBytes));
                            }
                            else {
                                signatures.push(baseReq.signers[baseReq.signers.length - 1].sign(signDocBytes));
                            }
                        });
                        // add the signatures to the TX message
                        tx.setSignaturesList(signatures);
                        // TODO: Move GRPC unary call to the provider
                        // simulate the transaction
                        this.txClient.simulate((new cosmos_tx_v1beta1_service_pb.SimulateRequest()).setTx(tx), function (err, res) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(new GasEstimate_1.SimulationGasEstimate(res.getGasInfo().getGasUsed(), baseReq.gasAdjustment));
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * ???
     * @param messages ???
     * @param signerArg The signing key(s) for the transaction.
     * @returns ???
     */
    ProvenanceClient.prototype.constructWith = function (messages, signerArg) {
        // convert the messages to the protobuf 'any' type
        var msgs = new Array();
        messages.forEach(function (message) {
            message.msgs.forEach(function (msg) {
                msgs.push((0, MessageUtils_1.messageToAny)(msg));
            });
        });
        var signers = [].concat(signerArg);
        return new BaseRequest_1.BaseRequest(this.provider, (new cosmos_tx_v1beta1_tx_pb.TxBody()).setMessagesList(msgs), signers);
    };
    /**
     * ???
     * @param constructArg ???
     * @param signers The signing key(s) for the transaction.
     * @returns ???
     */
    ProvenanceClient.prototype.construct = function (constructArg, signers) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (typeof constructArg === 'function') {
                constructArg().then(function (msgs) {
                    resolve(_this.constructWith(msgs, signers));
                }).catch(function (err) {
                    reject(err);
                });
            }
            else {
                if (constructArg.constructor.name === 'Array') {
                    resolve(_this.constructWith(constructArg, signers));
                }
                else {
                    resolve(_this.constructWith([constructArg], signers));
                }
            }
        });
    };
    /**
     *
     * @param constructArg ???
     * @param signers The signing key(s) for the transaction.
     * @returns ???
     */
    ProvenanceClient.prototype.constructAndEstimateTx = function (constructArg, signers) {
        return __awaiter(this, void 0, void 0, function () {
            var baseReq;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.construct(constructArg, signers)];
                    case 1:
                        baseReq = _a.sent();
                        return [2 /*return*/, this.estimateTx(baseReq)];
                }
            });
        });
    };
    /**
     * ???
     * @param constructArg ???
     * @param gasEstimate ???
     * @param signers The signing key(s) for the transaction.
     * @param mode ???
     * @returns ???
     */
    ProvenanceClient.prototype.constructAndBroadcastTx = function (constructArg_1, gasEstimate_1, signers_1) {
        return __awaiter(this, arguments, void 0, function (constructArg, gasEstimate, signers, mode) {
            var baseReq;
            if (mode === void 0) { mode = types_1.BroadcastMode.BROADCAST_MODE_SYNC; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.construct(constructArg, signers)];
                    case 1:
                        baseReq = _a.sent();
                        return [2 /*return*/, this.broadcastTx(baseReq, gasEstimate, mode)];
                }
            });
        });
    };
    /**
     * ???
     * @param constructArg ???
     * @param estimateCallback ???
     * @param signers The signing key(s) for the transaction.
     * @param mode ???
     * @returns ???
     */
    ProvenanceClient.prototype.constructEstimateAndBroadcastTx = function (constructArg, estimateCallback, signers, mode) {
        var _this = this;
        if (mode === void 0) { mode = types_1.BroadcastMode.BROADCAST_MODE_SYNC; }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var baseReq;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.construct(constructArg, signers)];
                    case 1:
                        baseReq = _a.sent();
                        this.estimateTx(baseReq).then(function (gasEstimate) {
                            // give the caller an opportunity to opt-out
                            if (estimateCallback(gasEstimate)) {
                                // broadcast the transaction
                                _this.broadcastTx(baseReq, gasEstimate, mode).then(function (res) {
                                    resolve(res);
                                }).catch(function (err) {
                                    reject(err);
                                });
                            }
                            else {
                                reject(new Error("Caller rejected transaction estimate"));
                            }
                        }).catch(function (err) {
                            reject(err);
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ProvenanceClient.getSingleton = function () {
        return ProvenanceClient.singleton;
    };
    ProvenanceClient.buildClientList = function (providers, gasPriceProvider) {
        return providers.map(function (provider) { return new ProvenanceClient(provider, gasPriceProvider); });
    };
    return ProvenanceClient;
}());
exports.ProvenanceClient = ProvenanceClient;
