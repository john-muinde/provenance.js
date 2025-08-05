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
exports.BaseRequest = exports.DEFAULT_GAS_DENOM = void 0;
var types_1 = require("../types");
var core_1 = require("../core");
var GasEstimate_1 = require("./GasEstimate");
var MessageUtils_1 = require("../utils/MessageUtils");
var cosmos_crypto_secp256k1_keys_pb = require("../proto/cosmos/crypto/secp256k1/keys_pb");
var cosmos_tx_v1beta1_tx_pb = require("../proto/cosmos/tx/v1beta1/tx_pb");
exports.DEFAULT_GAS_DENOM = 'nhash';
var BaseRequest = /** @class */ (function () {
    function BaseRequest(provider, body, signers, signerSequenceOffsets, gasAdjustment, feeGranter) {
        this.provider = provider;
        this.chainId = this.provider.network.chainId;
        this.body = body;
        this.signers = signers;
        this.signerSequenceOffsets = signerSequenceOffsets;
        this.gasAdjustment = gasAdjustment;
        this.feeGranter = feeGranter;
    }
    BaseRequest.prototype.buildAuthInfo = function (gasEstimate) {
        var _this = this;
        if (gasEstimate === void 0) { gasEstimate = new GasEstimate_1.EmptyGasEstimate(); }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var signerInfos, fee, ex_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        signerInfos = [];
                        return [4 /*yield*/, this.signers.reduce(function (promise, signer, idx) { return __awaiter(_this, void 0, void 0, function () {
                                var sequenceOffset, _a, ex_2;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _b.trys.push([0, 3, , 4]);
                                            return [4 /*yield*/, promise];
                                        case 1:
                                            _b.sent();
                                            sequenceOffset = ((typeof this.signerSequenceOffsets !== 'undefined') ? this.signerSequenceOffsets[idx] : 0);
                                            _a = signer;
                                            return [4 /*yield*/, core_1.AuthCore.getBaseAccount(this.provider, signer.address)];
                                        case 2:
                                            _a.baseAccount = _b.sent();
                                            signerInfos.push((new cosmos_tx_v1beta1_tx_pb.SignerInfo())
                                                .setPublicKey((0, MessageUtils_1.messageToAny)((new cosmos_crypto_secp256k1_keys_pb.PubKey())
                                                .setKey(signer.publicKeyData)))
                                                .setModeInfo((new cosmos_tx_v1beta1_tx_pb.ModeInfo())
                                                .setSingle((new cosmos_tx_v1beta1_tx_pb.ModeInfo.Single())
                                                .setMode(types_1.SignMode.SIGN_MODE_DIRECT)))
                                                .setSequence(signer.baseAccount.sequence + sequenceOffset));
                                            return [3 /*break*/, 4];
                                        case 3:
                                            ex_2 = _b.sent();
                                            Promise.reject(ex_2);
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); }, Promise.resolve())];
                    case 1:
                        _a.sent();
                        fee = (new cosmos_tx_v1beta1_tx_pb.Fee())
                            .setAmountList(gasEstimate.totalFees)
                            .setGasLimit(gasEstimate.limit);
                        if (this.feeGranter !== undefined) {
                            fee = fee.setGranter(this.feeGranter);
                        }
                        resolve((new cosmos_tx_v1beta1_tx_pb.AuthInfo())
                            .setFee(fee)
                            .setSignerInfosList(signerInfos));
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        reject(ex_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    BaseRequest.prototype.buildSignDocList = function (authInfoBytes, bodyBytes) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var signDocList, ex_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        signDocList = new Array();
                        return [4 /*yield*/, this.signers.reduce(function (promise, signer) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, ex_4;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _b.trys.push([0, 4, , 5]);
                                            return [4 /*yield*/, promise];
                                        case 1:
                                            _b.sent();
                                            if (!(signer.baseAccount === undefined)) return [3 /*break*/, 3];
                                            _a = signer;
                                            return [4 /*yield*/, core_1.AuthCore.getBaseAccount(this.provider, signer.address)];
                                        case 2:
                                            _a.baseAccount = _b.sent();
                                            _b.label = 3;
                                        case 3:
                                            signDocList.push((new cosmos_tx_v1beta1_tx_pb.SignDoc)
                                                .setBodyBytes(bodyBytes)
                                                .setAuthInfoBytes(authInfoBytes)
                                                .setChainId(this.chainId)
                                                .setAccountNumber(signer.baseAccount.accountNumber));
                                            return [3 /*break*/, 5];
                                        case 4:
                                            ex_4 = _b.sent();
                                            Promise.reject(ex_4);
                                            return [3 /*break*/, 5];
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); }, Promise.resolve())];
                    case 1:
                        _a.sent();
                        resolve(signDocList);
                        return [3 /*break*/, 3];
                    case 2:
                        ex_3 = _a.sent();
                        reject(ex_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    BaseRequest.prototype.buildSignDocBytesList = function (authInfoBytes, bodyBytes) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var signDocBytesList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        signDocBytesList = new Array();
                        return [4 /*yield*/, this.buildSignDocList(authInfoBytes, bodyBytes)];
                    case 1:
                        (_a.sent()).forEach(function (signDoc) {
                            signDocBytesList.push(Buffer.from(signDoc.serializeBinary()));
                        });
                        resolve(signDocBytesList);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return BaseRequest;
}());
exports.BaseRequest = BaseRequest;
