"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcProvider = void 0;
var grpc_js_1 = require("@grpc/grpc-js");
/**
 * Returns root CA credentails if secure.
 * @returns ChannelCredentials to connect to gRPC
 */
function generateCredentials(isSecure) {
    return (isSecure || false) ? grpc_js_1.credentials.createSsl() : grpc_js_1.credentials.createInsecure();
}
var GrpcProvider = /** @class */ (function () {
    function GrpcProvider(network, isSecure, options) {
        this.network = network;
        this.isSecure = isSecure || false;
        this.credentials = generateCredentials(this.isSecure);
        this.options = options;
    }
    return GrpcProvider;
}());
exports.GrpcProvider = GrpcProvider;
