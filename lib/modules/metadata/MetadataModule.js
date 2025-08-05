"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataModule = void 0;
var query_grpc_pb_1 = require("../../proto/provenance/metadata/v1/query_grpc_pb");
var MetadataModule = /** @class */ (function () {
    function MetadataModule(provider, txClient) {
        this.provider = provider;
        this.txClient = txClient;
        this.queryClient = new query_grpc_pb_1.QueryClient(this.provider.network.uri.toString(), provider.credentials, this.provider.options);
    }
    return MetadataModule;
}());
exports.MetadataModule = MetadataModule;
;
