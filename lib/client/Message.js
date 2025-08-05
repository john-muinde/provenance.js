"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var types_1 = require("../types");
var Message = /** @class */ (function () {
    function Message(msgs, txClient) {
        this.msgs = msgs;
        this.txClient = txClient;
    }
    Message.prototype.broadcastTx = function (signers, mode) {
        if (mode === void 0) { mode = types_1.BroadcastMode.BROADCAST_MODE_BLOCK; }
        return this.txClient.constructEstimateAndBroadcastTx(this, function () { return true; }, signers, mode);
    };
    Message.prototype.estimateTx = function (signers) {
        return this.txClient.constructAndEstimateTx(this, signers);
    };
    return Message;
}());
exports.Message = Message;
