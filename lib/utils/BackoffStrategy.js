"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExponentialBackoffStrategy = exports.DefaultBackoffStrategy = void 0;
;
;
var DefaultBackoffStrategy = /** @class */ (function () {
    function DefaultBackoffStrategy(props) {
        this.waitTimeMillis = props.waitTimeMillis;
    }
    DefaultBackoffStrategy.prototype.getDelayMillis = function (failureCount) {
        return this.waitTimeMillis;
    };
    return DefaultBackoffStrategy;
}());
exports.DefaultBackoffStrategy = DefaultBackoffStrategy;
;
var ExponentialBackoffStrategy = /** @class */ (function () {
    function ExponentialBackoffStrategy(props) {
        this.baseDelayMillis = props.baseDelayMillis || 1000;
        this.multiplier = props.multiplier || 2;
        this.maxDelayMillis = props.maxDelayMillis;
    }
    ExponentialBackoffStrategy.prototype.getDelayMillis = function (failureCount) {
        var delayMillis = this.baseDelayMillis + Math.pow(this.multiplier, failureCount);
        return (this.maxDelayMillis === undefined || this.maxDelayMillis > delayMillis) ? delayMillis : this.maxDelayMillis;
    };
    return ExponentialBackoffStrategy;
}());
exports.ExponentialBackoffStrategy = ExponentialBackoffStrategy;
