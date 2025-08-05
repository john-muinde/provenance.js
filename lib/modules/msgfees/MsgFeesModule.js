"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgFeesModule = void 0;
var client_1 = require("../../client");
var query_grpc_pb_1 = require("../../proto/provenance/msgfees/v1/query_grpc_pb");
var query_pb_1 = require("../../proto/provenance/msgfees/v1/query_pb");
var DEFAULT_FEE_ADJUSTMENT = 1.25;
var MsgFeesModule = /** @class */ (function () {
    function MsgFeesModule(provider, txClient) {
        this.provider = provider;
        this.txClient = txClient;
        this.queryClient = new query_grpc_pb_1.QueryClient(this.provider.network.uri.toString(), provider.credentials, this.provider.options);
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Query
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Reverse lookup of all names bound to a given address
    MsgFeesModule.prototype.calculateTxFees = function (txBytes, adjustment) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var feeAdjustment = adjustment || DEFAULT_FEE_ADJUSTMENT;
            var req = new query_pb_1.CalculateTxFeesRequest()
                .setTxBytes(txBytes)
                .setGasAdjustment(feeAdjustment);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.calculateTxFees(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(new client_1.CalculateTxGasEstimate(res.getEstimatedGas(), res.getAdditionalFeesList(), res.getTotalFeesList(), feeAdjustment));
                }
            });
        });
    };
    return MsgFeesModule;
}());
exports.MsgFeesModule = MsgFeesModule;
;
