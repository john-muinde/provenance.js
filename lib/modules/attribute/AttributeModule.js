"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeModule = exports.AccountAttribute = void 0;
var client_1 = require("../../client");
var types_1 = require("../../types");
var query_grpc_pb_1 = require("../../proto/provenance/attribute/v1/query_grpc_pb");
var provenance_attribute_v1_query_pb = require("../../proto/provenance/attribute/v1/query_pb");
var provenance_attribute_v1_tx_pb = require("../../proto/provenance/attribute/v1/tx_pb");
var AccountAttribute = /** @class */ (function () {
    function AccountAttribute(attr) {
        this.name = attr.name;
        this.value = attr.value;
        this.attributeType = attr.attributeType;
        this.address = attr.address;
    }
    Object.defineProperty(AccountAttribute.prototype, "jsonValue", {
        get: function () {
            if (this.attributeType == types_1.AttributeType.ATTRIBUTE_TYPE_JSON) {
                return JSON.parse(Buffer.from(this.value, 'base64').toString('binary'));
            }
            else {
                throw new Error('Attribute is not a JSON object');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountAttribute.prototype, "stringValue", {
        get: function () {
            if (this.attributeType == types_1.AttributeType.ATTRIBUTE_TYPE_STRING) {
                return Buffer.from(this.value, 'base64').toString('binary');
            }
            else {
                throw new Error('Attribute is not a string');
            }
        },
        enumerable: false,
        configurable: true
    });
    return AccountAttribute;
}());
exports.AccountAttribute = AccountAttribute;
var AttributeModule = /** @class */ (function () {
    function AttributeModule(provider, txClient) {
        this.provider = provider;
        this.txClient = txClient;
        this.queryClient = new query_grpc_pb_1.QueryClient(this.provider.network.uri.toString(), provider.credentials, this.provider.options);
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Query
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Get account attributes by name
    AttributeModule.prototype.getAccountAttributesByName = function (addr, name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new provenance_attribute_v1_query_pb.QueryAttributeRequest())
                .setAccount(addr)
                .setName(name);
            _this.queryClient.attribute(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var attributes = [];
                    res.getAttributesList().forEach(function (attr) {
                        attributes.push(new AccountAttribute(attr.toObject()));
                    });
                    resolve(attributes);
                }
            });
        });
    };
    // Get all account attributes
    AttributeModule.prototype.getAllAccountAttributes = function (addr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new provenance_attribute_v1_query_pb.QueryAttributesRequest())
                .setAccount(addr);
            _this.queryClient.attributes(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var attributes = [];
                    res.getAttributesList().forEach(function (attr) {
                        attributes.push(new AccountAttribute(attr.toObject()));
                    });
                    resolve(attributes);
                }
            });
        });
    };
    // Scan account attributes by name suffix
    AttributeModule.prototype.scanAccountAttributesByNameSuffix = function (addr, suffix) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new provenance_attribute_v1_query_pb.QueryScanRequest())
                .setAccount(addr)
                .setSuffix(suffix);
            _this.queryClient.scan(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var attributes = [];
                    res.getAttributesList().forEach(function (attr) {
                        attributes.push(new AccountAttribute(attr.toObject()));
                    });
                    resolve(attributes);
                }
            });
        });
    };
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // TX
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Add an account attribute to the Provenance blockchain
    AttributeModule.prototype.addAttribute = function (addr, type, name, value, owner) {
        var val;
        if (typeof value === 'object') {
            val = Buffer.from(JSON.stringify(value));
        }
        else {
            val = Buffer.from(value);
        }
        var req = (new provenance_attribute_v1_tx_pb.MsgAddAttributeRequest())
            .setAccount(addr)
            .setAttributeType(type)
            .setName(name)
            .setValue(val)
            .setOwner(owner);
        return new client_1.Message([req], this.txClient);
    };
    // Delete an account attribute from the Provenance blockchain
    AttributeModule.prototype.deleteAttribute = function (addr, name, owner) {
        var req = (new provenance_attribute_v1_tx_pb.MsgDeleteAttributeRequest())
            .setAccount(addr)
            .setName(name)
            .setOwner(owner);
        return new client_1.Message([req], this.txClient);
    };
    // Delete an account attribute with specific name and value on the Provenance blockchain
    AttributeModule.prototype.deleteDistinctAttribute = function (addr, name, value, owner) {
        var val;
        if (typeof value === 'object') {
            val = Buffer.from(JSON.stringify(value));
        }
        else {
            val = Buffer.from(value);
        }
        var req = (new provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeRequest())
            .setAccount(addr)
            .setName(name)
            .setValue(val)
            .setOwner(owner);
        return new client_1.Message([req], this.txClient);
    };
    // Update an account attribute on the Provenance blockchain
    AttributeModule.prototype.updateAttribute = function (addr, name, oldType, newType, oldValue, newValue, owner) {
        var oldVal;
        if (typeof oldValue === 'object') {
            oldVal = Buffer.from(JSON.stringify(oldValue));
        }
        else {
            oldVal = Buffer.from(oldValue);
        }
        var newVal;
        if (typeof newValue === 'object') {
            newVal = Buffer.from(JSON.stringify(newValue));
        }
        else {
            newVal = Buffer.from(newValue);
        }
        var req = (new provenance_attribute_v1_tx_pb.MsgUpdateAttributeRequest())
            .setAccount(addr)
            .setName(name)
            .setOriginalAttributeType(oldType)
            .setUpdateAttributeType(newType)
            .setOriginalValue(oldVal)
            .setUpdateValue(newVal)
            .setOwner(owner);
        return new client_1.Message([req], this.txClient);
    };
    return AttributeModule;
}());
exports.AttributeModule = AttributeModule;
;
