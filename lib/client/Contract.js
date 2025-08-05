"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = exports.DEFAULT_MESSAGE_DEFINITIONS = void 0;
var Case = require("case");
var __1 = require("../");
exports.DEFAULT_MESSAGE_DEFINITIONS = {
    instantiate: 'InstantiateMsg',
    execute: 'ExecuteMsg',
    migrate: 'MigrateMsg',
    query: 'QueryMsg',
};
function instanceOfCoin(object) {
    return ('denom' in object && 'amount' in object);
}
function instanceOfCoinArray(object) {
    var isCoinArray = false;
    if (object.constructor.name === 'Array') {
        isCoinArray = true;
        object.forEach(function (coin) {
            isCoinArray = isCoinArray && instanceOfCoin(coin);
        });
    }
    return isCoinArray;
}
var Contract = /** @class */ (function () {
    function Contract(addr, ajv, msgDefs, client, signer, admin) {
        if (msgDefs === void 0) { msgDefs = exports.DEFAULT_MESSAGE_DEFINITIONS; }
        this.address = addr;
        this.ajv = ajv;
        this.msgDefs = msgDefs;
        this.signer = signer;
        this.admin = admin;
        if (client === undefined) {
            this.client = __1.ProvenanceClient.getSingleton();
        }
        else {
            this.client = client;
        }
        for (var key in ajv.schemas) {
            var schema = ajv.schemas[key];
            switch (schema.schema['title']) {
                case msgDefs.execute:
                    {
                        this.generateExecuteFunctions(schema);
                    }
                    break;
                case msgDefs.migrate:
                    {
                        this.generateMigrateFunctions(schema);
                    }
                    break;
                case msgDefs.query:
                    {
                        this.generateQueryFunctions(schema);
                    }
                    break;
            }
        }
    }
    Contract.prototype.connect = function (signer, admin) {
        return new Contract(this.address, this.ajv, this.msgDefs, this.client, signer, admin);
    };
    Contract.prototype.generateExecuteFunctions = function (schema) {
        var _this = this;
        var executeFuncSchemas = schema.schema['anyOf'];
        executeFuncSchemas.forEach(function (executeFuncSchema) {
            if (executeFuncSchema['type'] === 'object' && executeFuncSchema['required'].length === 1) {
                var func_1 = executeFuncSchema['required'][0];
                var funcName = Case.camel(func_1);
                _this[funcName] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var msg = {};
                    msg[func_1] = {};
                    var funds = undefined;
                    if (args.length < 2) {
                        if (args.length === 1) {
                            if (typeof args[0] === 'object') {
                                msg[func_1] = args[0];
                            }
                            else {
                                throw new Error("Invalid argument(0): Must be an object");
                            }
                        }
                    }
                    else {
                        if (typeof args[0] === 'object') {
                            msg[func_1] = args[0];
                            if (typeof args[1] === 'object') {
                                if (instanceOfCoin(args[1])) {
                                    funds = [args[1]];
                                }
                                else if (instanceOfCoinArray(args[1])) {
                                    funds = args[1];
                                }
                                else {
                                    throw new Error("Invalid argument(1): Executing with funds requires a Coin or Coin[]");
                                }
                            }
                            else {
                                throw new Error("Invalid argument(1): Executing with funds requires a Coin or Coin[]");
                            }
                        }
                        else {
                            throw new Error("Invalid argument(0): Must be an object");
                        }
                    }
                    // validate the message
                    var validator = this.ajv.compile(executeFuncSchema);
                    if (!validator(msg)) {
                        throw new Error("Invalid argument(s): Schema validation failed");
                    }
                    // construct the contract execute message
                    return this.client.wasm.executeContract(this.address, this.signer !== undefined ? this.signer.address : undefined, msg, this.admin !== undefined ? this.admin.address : undefined, funds);
                };
            }
        });
    };
    Contract.prototype.generateMigrateFunctions = function (schema) {
        var _this = this;
        var migrateFuncSchemas = schema.schema['anyOf'];
        migrateFuncSchemas.forEach(function (migrateFuncSchema) {
            if (migrateFuncSchema['type'] === 'object' && migrateFuncSchema['required'].length === 1) {
                var func_2 = migrateFuncSchema['required'][0];
                var funcName = Case.camel(func_2);
                _this[funcName] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var codeId;
                    var msg = {};
                    msg[func_2] = {};
                    if (args.length > 0) {
                        if (typeof args[0] === 'number') {
                            codeId = args[0];
                            if (args.length > 1) {
                                msg[func_2] = args[0];
                            }
                        }
                        else {
                            throw new Error("Invalid argument(0): Must be a number");
                        }
                    }
                    else {
                        throw new Error("Missing argument(s): Must include the codeId to migrate to");
                    }
                    // validate the message
                    var validator = this.ajv.compile(migrateFuncSchema);
                    if (!validator(msg)) {
                        throw new Error("Invalid argument(s): Schema validation failed");
                    }
                    // construct the contract migrate message
                    return this.client.wasm.migrateContract(this.address, codeId, this.signer !== undefined ? this.signer.address : undefined, msg);
                };
            }
        });
    };
    Contract.prototype.generateQueryFunctions = function (schema) {
        var _this = this;
        var queryFuncSchemas = schema.schema['anyOf'];
        queryFuncSchemas.forEach(function (queryFuncSchema) {
            if (queryFuncSchema['type'] === 'object' && queryFuncSchema['required'].length === 1) {
                var func_3 = queryFuncSchema['required'][0];
                var funcName = Case.camel(func_3);
                _this[funcName] = function () {
                    var _this = this;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return new Promise(function (resolve, reject) {
                        var query = {};
                        query[func_3] = {};
                        if (args.length > 0) {
                            if (typeof args[0] === 'object') {
                                query[func_3] = args[0];
                            }
                            else {
                                throw new Error("Invalid argument(0): Must be an object");
                            }
                        }
                        // validate the message
                        var validator = _this.ajv.compile(queryFuncSchema);
                        if (!validator(query)) {
                            throw new Error("Invalid argument(s): Schema validation failed");
                        }
                        // query the contract state
                        _this.client.wasm.smartContractState(_this.address, query).then(function (state) {
                            resolve(state);
                        }).catch(function (err) {
                            reject(err);
                        });
                    });
                };
            }
        });
    };
    return Contract;
}());
exports.Contract = Contract;
