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
exports.LoadBalancingProvenanceClient = void 0;
var LoadBalancingProvenanceClient = /** @class */ (function () {
    function LoadBalancingProvenanceClient(props) {
        this.balancer = props.balancer;
        this.maxRetryAttempts = props.maxRetryAttempts || 3;
    }
    // TODO: make this private?
    LoadBalancingProvenanceClient.prototype.get = function () {
        return this.balancer.get();
    };
    LoadBalancingProvenanceClient.prototype.getAndExecute = function (fun) {
        return this.balancer.getAndExecute(fun);
    };
    LoadBalancingProvenanceClient.prototype.getAndExecuteAsync = function (fun) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.balancer.getAndExecuteAsync(fun)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadBalancingProvenanceClient.prototype.getAndExecuteWithRetry = function (fun) {
        for (var i = 0; i < this.maxRetryAttempts; i++) {
            try {
                return this.getAndExecute(fun);
            }
            catch (e) {
                if (i < (this.maxRetryAttempts - 1)) {
                    continue;
                }
                throw e;
            }
        }
    };
    LoadBalancingProvenanceClient.prototype.getAndExecuteAsyncWithRetry = function (fun) {
        return __awaiter(this, void 0, void 0, function () {
            var i, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.maxRetryAttempts)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.getAndExecuteAsync(fun)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        e_1 = _a.sent();
                        if (i < (this.maxRetryAttempts - 1)) {
                            return [3 /*break*/, 5];
                        }
                        throw e_1;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoadBalancingProvenanceClient.prototype.constructWith = function (messages, signerArg) {
        return this.getAndExecute(function (client) { return client.constructWith(messages, signerArg); });
    };
    LoadBalancingProvenanceClient.prototype.construct = function (constructArg, signers) {
        var _this = this;
        return this.getAndExecuteAsync(function (client) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.construct(constructArg, signers)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); });
    };
    LoadBalancingProvenanceClient.prototype.constructAndEstimateTx = function (constructArg, signers) {
        var _this = this;
        return this.getAndExecuteAsync(function (client) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.constructAndEstimateTx(constructArg, signers)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); });
    };
    LoadBalancingProvenanceClient.prototype.constructAndBroadcastTx = function (constructArg, gasEstimate, signers, mode) {
        var _this = this;
        return this.getAndExecuteAsync(function (client) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.constructAndBroadcastTx(constructArg, gasEstimate, signers, mode)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); });
    };
    LoadBalancingProvenanceClient.prototype.constructEstimateAndBroadcastTx = function (constructArg, estimateCallback, signers, mode) {
        var _this = this;
        return this.getAndExecuteAsync(function (client) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.constructEstimateAndBroadcastTx(constructArg, estimateCallback, signers, mode)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); });
    };
    LoadBalancingProvenanceClient.prototype.broadcastTx = function (baseReq, gasEstimate, mode) {
        var _this = this;
        return this.getAndExecuteAsync(function (client) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.broadcastTx(baseReq, gasEstimate, mode)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); });
    };
    LoadBalancingProvenanceClient.prototype.estimateTx = function (baseReq) {
        var _this = this;
        return this.getAndExecuteAsync(function (client) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.estimateTx(baseReq)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); });
    };
    Object.defineProperty(LoadBalancingProvenanceClient.prototype, "auth", {
        get: function () {
            return this.get().auth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancingProvenanceClient.prototype, "bank", {
        get: function () {
            return this.get().bank;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancingProvenanceClient.prototype, "wasm", {
        get: function () {
            return this.get().wasm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancingProvenanceClient.prototype, "attribute", {
        get: function () {
            return this.get().attribute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancingProvenanceClient.prototype, "marker", {
        get: function () {
            return this.get().marker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancingProvenanceClient.prototype, "metadata", {
        get: function () {
            return this.get().metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancingProvenanceClient.prototype, "msgFees", {
        get: function () {
            return this.get().msgFees;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancingProvenanceClient.prototype, "name", {
        get: function () {
            return this.get().name;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancingProvenanceClient;
}());
exports.LoadBalancingProvenanceClient = LoadBalancingProvenanceClient;
