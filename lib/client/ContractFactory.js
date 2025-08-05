"use strict";
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
exports.ContractFactory = void 0;
var _ = require("lodash");
var ajv_1 = require("ajv");
var ajv_formats_1 = require("ajv-formats");
var _1 = require("./");
var ContractFactory = /** @class */ (function () {
    function ContractFactory(bytecode, schemas, signer, msgDefs, client) {
        if (msgDefs === void 0) { msgDefs = _1.DEFAULT_MESSAGE_DEFINITIONS; }
        this.bytecode = bytecode;
        this.schemas = schemas;
        this.signer = signer;
        this.msgDefs = _.merge(_1.DEFAULT_MESSAGE_DEFINITIONS, msgDefs);
        if (client === undefined) {
            this.client = _1.ProvenanceClient.getSingleton();
        }
        var schemaObjs = [];
        schemas.forEach(function (schema) {
            var schemaObj = schema;
            if (typeof schema === 'string') {
                schemaObj = JSON.parse(schema);
            }
            if (!schemaObj.hasOwnProperty('id') && !schemaObj.hasOwnProperty('$id')) {
                schemaObj['$id'] = "https://provenance.io/schema/".concat(schemaObj['title']);
            }
            schemaObjs.push(schemaObj);
        });
        this.ajv = new ajv_1.default({
            schemas: schemaObjs,
            strict: false
        });
        (0, ajv_formats_1.default)(this.ajv);
    }
    ContractFactory.prototype.attach = function (addr) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                resolve(new _1.Contract(addr, this.ajv, this.msgDefs, this.client));
                return [2 /*return*/];
            });
        }); });
    };
    ContractFactory.prototype.attachByName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var addr, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.client.name.resolveName(name)];
                    case 1:
                        addr = _a.sent();
                        resolve(new _1.Contract(addr, this.ajv, this.msgDefs, this.client));
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        reject(new Error("Failed to attach to contract by name: ".concat(ex_1.message)));
                        return [3 /*break*/, 3];
                    case 3:
                        reject(new Error('Unimplemented method'));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ContractFactory.prototype.connect = function (signer) {
        return new ContractFactory(this.bytecode, this.schemas, signer, this.msgDefs, this.client);
    };
    ContractFactory.prototype.deploy = function (label, args, admin, funds, access) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var codeId, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.store(access)];
                    case 1:
                        codeId = _a.sent();
                        resolve(this.deployFromCodeId(label, codeId, args, admin, funds));
                        return [3 /*break*/, 3];
                    case 2:
                        ex_2 = _a.sent();
                        reject(ex_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    ContractFactory.prototype.deployFromCodeId = function (label, codeId, args, admin, funds) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var validator, key, schema, txRes, ex_3, contractAddr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        for (key in this.ajv.schemas) {
                            schema = this.ajv.schemas[key];
                            if (schema.schema['title'] === this.msgDefs.instantiate) {
                                validator = this.ajv.compile(schema.schema);
                            }
                        }
                        if (validator === undefined) {
                            throw new Error('Missing schema for instantiate message');
                        }
                        if (!validator(args)) {
                            throw new Error("Invalid argument(s): Schema validation failed");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.client.wasm.instantiateContract(codeId, label, this.signer.address, args, admin, funds).broadcastTx(this.signer)];
                    case 2:
                        txRes = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_3 = _a.sent();
                        reject(new Error("Failed to deploy contract: ".concat(ex_3.message)));
                        return [3 /*break*/, 4];
                    case 4:
                        if (txRes.code !== 0) {
                            reject(new Error("Failed to store contract bytecode: code=".concat(txRes.code)));
                        }
                        else {
                            contractAddr = ContractFactory.getLogAttribute(txRes, 0, 'instantiate', '_contract_address');
                            resolve(new _1.Contract(contractAddr, this.ajv, this.msgDefs, this.client));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ContractFactory.prototype.store = function (access) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var txRes, ex_4, codeId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.client.wasm.storeCode(this.bytecode, this.signer.address, access).broadcastTx(this.signer)];
                    case 1:
                        txRes = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_4 = _a.sent();
                        reject(new Error("Failed to store contract bytecode: ".concat(ex_4.message)));
                        return [3 /*break*/, 3];
                    case 3:
                        if (txRes.code !== 0) {
                            reject(new Error("Failed to store contract bytecode: code=".concat(txRes.code)));
                        }
                        else {
                            codeId = Number(ContractFactory.getLogAttribute(txRes, 0, 'store_code', 'code_id'));
                            if (isNaN(codeId)) {
                                reject(new Error("Contract bytecode was stored but failed to find codeId from tx logs"));
                            }
                            else {
                                resolve(codeId);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    // TODO: message log and event filtering utils needs to be added when event stream support goes in
    ContractFactory.getLogAttribute = function (txRes, msgIdx, eventType, key) {
        var attribute;
        try {
            attribute = txRes.logsList
                .find(function (log) { return (log.msgIndex === msgIdx); }).eventsList
                .find(function (event) { return (event.type === eventType); }).attributesList
                .find(function (attr) { return (attr.key === key); })
                .value;
        }
        catch (ex) { }
        return attribute;
    };
    return ContractFactory;
}());
exports.ContractFactory = ContractFactory;
