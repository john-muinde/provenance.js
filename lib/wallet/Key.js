"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;
var bech32_1 = require("bech32");
var crypto_1 = require("crypto");
var RIPEMD160 = require("ripemd160");
var LEGACY_DIME_CURVE = "secp256k1";
var Key = /** @class */ (function () {
    function Key(hrp, key, mainnet) {
        this.account = undefined;
        this.hrp = hrp;
        this.key = key;
        this.mainnet = mainnet;
    }
    Object.defineProperty(Key.prototype, "address", {
        get: function () {
            var hash = Key.sha256hash160(this.key.publicKey);
            return bech32_1.bech32.encode(this.hrp, bech32_1.bech32.toWords(hash));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Key.prototype, "publicKey", {
        get: function () {
            return this.key.publicKey.toString('hex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Key.prototype, "publicKeyData", {
        get: function () {
            return this.key.publicKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Key.prototype, "baseAccount", {
        get: function () {
            return this.account;
        },
        set: function (account) {
            this.account = account;
        },
        enumerable: false,
        configurable: true
    });
    Key.prototype.sign = function (bytes) {
        return this.key.sign(Key.sha256(bytes));
    };
    Key.sha256 = function (input) {
        return (0, crypto_1.createHash)('sha256').update(input).digest();
    };
    Key.sha256hash160 = function (input) {
        var sha256 = Key.sha256(input);
        var ripemd160 = new RIPEMD160();
        return ripemd160.update(sha256).digest();
    };
    return Key;
}());
exports.Key = Key;
