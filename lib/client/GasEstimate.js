"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateTxGasEstimate = exports.SimulationGasEstimate = exports.EmptyGasEstimate = void 0;
var coin_pb_1 = require("../proto/cosmos/base/v1beta1/coin_pb");
var BaseRequest_1 = require("./BaseRequest");
var DEFAULT_FEE_ADJUSTMENT = 1.25;
;
var EmptyGasEstimate = /** @class */ (function () {
    function EmptyGasEstimate() {
        this.estimate = 0;
        this.feeAdjustment = DEFAULT_FEE_ADJUSTMENT;
        this.limit = 0;
        this.totalFees = [];
        this.additionalFees = [];
    }
    return EmptyGasEstimate;
}());
exports.EmptyGasEstimate = EmptyGasEstimate;
var SimulationGasEstimate = /** @class */ (function () {
    function SimulationGasEstimate(estimate, feeAdjustment) {
        this.feeAdjustment = DEFAULT_FEE_ADJUSTMENT;
        this.adjustment = DEFAULT_FEE_ADJUSTMENT;
        this.estimate = estimate;
        this.feeAdjustment = feeAdjustment;
        if (typeof this.feeAdjustment !== 'undefined') {
            this.adjustment = this.feeAdjustment;
        }
        this.limit = Math.ceil(this.estimate * this.adjustment);
        this.additionalFees = [];
        this.totalFees = [(new coin_pb_1.Coin()).setAmount(this.estimate.toString()).setDenom(BaseRequest_1.DEFAULT_GAS_DENOM)];
    }
    return SimulationGasEstimate;
}());
exports.SimulationGasEstimate = SimulationGasEstimate;
var CalculateTxGasEstimate = /** @class */ (function () {
    function CalculateTxGasEstimate(estimate, additionalFees, totalFees, feeAdjustment) {
        this.feeAdjustment = DEFAULT_FEE_ADJUSTMENT;
        this.adjustment = DEFAULT_FEE_ADJUSTMENT;
        this.estimate = estimate;
        this.totalFees = totalFees;
        this.additionalFees = additionalFees;
        this.feeAdjustment = feeAdjustment;
        if (typeof this.feeAdjustment !== 'undefined') {
            this.adjustment = this.feeAdjustment;
        }
        // Limit is given by the estimate
        this.limit = this.estimate;
    }
    return CalculateTxGasEstimate;
}());
exports.CalculateTxGasEstimate = CalculateTxGasEstimate;
