"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultGasPriceProvider = void 0;
var DEFAULT_GAS_PRICE = 1905.00;
var DefaultGasPriceProvider = /** @class */ (function () {
    function DefaultGasPriceProvider() {
        this.gasPrice = DEFAULT_GAS_PRICE;
    }
    return DefaultGasPriceProvider;
}());
exports.DefaultGasPriceProvider = DefaultGasPriceProvider;
