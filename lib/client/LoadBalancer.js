"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.RandomLoadBalancer = exports.RoundRobinLoadBalancer = exports.FallbackLoadBalancer = exports.AbstractLoadBalancer = exports.LoadBalancerStrategy = void 0;
var utils_1 = require("../utils");
var LoadBalancerStrategy;
(function (LoadBalancerStrategy) {
    LoadBalancerStrategy["FALLBACK"] = "FALLBACK";
    LoadBalancerStrategy["ROUND_ROBIN"] = "ROUND_ROBIN";
    LoadBalancerStrategy["RANDOM"] = "RANDOM";
})(LoadBalancerStrategy || (exports.LoadBalancerStrategy = LoadBalancerStrategy = {}));
;
;
var AbstractLoadBalancer = /** @class */ (function () {
    function AbstractLoadBalancer(props) {
        if (props.records.length === 0) {
            throw new Error("Expected at least 1 record");
        }
        this.records = props.records;
    }
    AbstractLoadBalancer.prototype.handleSuccess = function (record) {
        // Override if necessary
    };
    AbstractLoadBalancer.prototype.handleFailure = function (record, e) {
        // Override if necessary
    };
    AbstractLoadBalancer.prototype.getAndExecute = function (fun) {
        var record = this.get();
        try {
            var result = fun(record);
            this.handleSuccess(record);
            return result;
        }
        catch (e) {
            this.handleFailure(record, e);
            throw e;
        }
    };
    AbstractLoadBalancer.prototype.getAndExecuteAsync = function (fun) {
        return __awaiter(this, void 0, void 0, function () {
            var record, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        record = this.get();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fun(record)];
                    case 2:
                        result = _a.sent();
                        this.handleSuccess(record);
                        return [2 /*return*/, result];
                    case 3:
                        e_1 = _a.sent();
                        this.handleFailure(record, e_1);
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AbstractLoadBalancer;
}());
exports.AbstractLoadBalancer = AbstractLoadBalancer;
var FallbackLoadBalancer = /** @class */ (function (_super) {
    __extends(FallbackLoadBalancer, _super);
    function FallbackLoadBalancer(props) {
        var _this = _super.call(this, props) || this;
        _this.failures = _this.records.map(function (r) { return { errors: [], nextAttemptEpochMillis: 0 }; });
        _this.backoff = props.backoffStrategy || new utils_1.DefaultBackoffStrategy({ waitTimeMillis: 2000 });
        return _this;
    }
    FallbackLoadBalancer.prototype.get = function () {
        var recordIndex = this.failures.findIndex(function (r) { return r.nextAttemptEpochMillis < Date.now(); });
        if (recordIndex < 0) {
            return this.records[0];
        }
        else {
            return this.records[recordIndex];
        }
    };
    FallbackLoadBalancer.prototype.handleSuccess = function (record) {
        var succeededRecordIndex = this.records.indexOf(record);
        if (succeededRecordIndex < 0) {
            return;
        }
        this.failures[succeededRecordIndex].errors = [];
        this.failures[succeededRecordIndex].nextAttemptEpochMillis = 0;
    };
    FallbackLoadBalancer.prototype.handleFailure = function (record, e) {
        var failedRecordIndex = this.records.indexOf(record);
        if (failedRecordIndex < 0) {
            return;
        }
        this.failures[failedRecordIndex].errors.push(e);
        var errorCount = this.failures[failedRecordIndex].errors.length;
        var delayMillis = this.backoff.getDelayMillis(this.failures[failedRecordIndex].errors.length);
        this.failures[failedRecordIndex].nextAttemptEpochMillis = Date.now() + delayMillis;
        if (errorCount > 10) {
            this.failures[failedRecordIndex].errors = this.failures[failedRecordIndex].errors.slice(1, undefined);
        }
    };
    return FallbackLoadBalancer;
}(AbstractLoadBalancer));
exports.FallbackLoadBalancer = FallbackLoadBalancer;
var RoundRobinLoadBalancer = /** @class */ (function (_super) {
    __extends(RoundRobinLoadBalancer, _super);
    function RoundRobinLoadBalancer(props) {
        var _this = _super.call(this, props) || this;
        _this.nextIndex = 0;
        return _this;
    }
    RoundRobinLoadBalancer.prototype.get = function () {
        var indexToReturn = this.nextIndex;
        this.nextIndex = (this.nextIndex + 1) % this.records.length;
        return this.records[indexToReturn];
    };
    RoundRobinLoadBalancer.prototype.handleSuccess = function (record) { };
    RoundRobinLoadBalancer.prototype.handleFailure = function (record, e) {
        // TODO? no-op
    };
    return RoundRobinLoadBalancer;
}(AbstractLoadBalancer));
exports.RoundRobinLoadBalancer = RoundRobinLoadBalancer;
var RandomLoadBalancer = /** @class */ (function (_super) {
    __extends(RandomLoadBalancer, _super);
    function RandomLoadBalancer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RandomLoadBalancer.prototype.get = function () {
        var indexToReturn = Math.floor(Math.random() * this.records.length);
        return this.records[indexToReturn];
    };
    RandomLoadBalancer.prototype.handleSuccess = function (record) { };
    RandomLoadBalancer.prototype.handleFailure = function (record, e) {
        // TODO? no-op
    };
    return RandomLoadBalancer;
}(AbstractLoadBalancer));
exports.RandomLoadBalancer = RandomLoadBalancer;
