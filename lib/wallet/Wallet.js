"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = exports.KeyError = void 0;
var bip32 = require("bip32");
var bip39 = require("bip39");
var crypto_1 = require("crypto");
var Key_1 = require("./Key");
var HDPathIndex;
(function (HDPathIndex) {
    HDPathIndex[HDPathIndex["MARKER"] = 0] = "MARKER";
    HDPathIndex[HDPathIndex["PURPOSE"] = 1] = "PURPOSE";
    HDPathIndex[HDPathIndex["COIN_TYPE"] = 2] = "COIN_TYPE";
    HDPathIndex[HDPathIndex["ACCOUNT"] = 3] = "ACCOUNT";
    HDPathIndex[HDPathIndex["CHANGE"] = 4] = "CHANGE";
    HDPathIndex[HDPathIndex["ADDRESS_INDEX"] = 5] = "ADDRESS_INDEX";
})(HDPathIndex || (HDPathIndex = {}));
var MASTER_SECRET = Buffer.from('Bitcoin seed', 'utf8');
var PRIVATE_KEY_SIZE = 32;
var CHAINCODE_SIZE = 32;
var MAINNET_BECH32_HRP = 'pb';
var MAINNET_BIP32_HDPATH = "m/44'/505'/0'/0/0'";
var TESTNET_BECH32_HRP = 'tp';
var TESTNET_BIP32_HDPATH = "m/44'/1'/0'/0/0'";
var KeyError = /** @class */ (function (_super) {
    __extends(KeyError, _super);
    function KeyError(msg) {
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, KeyError.prototype);
        return _this;
    }
    return KeyError;
}(Error));
exports.KeyError = KeyError;
var Wallet = /** @class */ (function () {
    function Wallet(hrp, hdpath, key, mainnet) {
        this.hrp = hrp;
        this.hdpath = hdpath;
        this.key = key;
        this.mainnet = mainnet;
    }
    Wallet.fromBip32 = function (bip32enc, mainnet) {
        if (mainnet === void 0) { mainnet = true; }
        return new Wallet((mainnet ? MAINNET_BECH32_HRP : TESTNET_BECH32_HRP), (mainnet ? MAINNET_BIP32_HDPATH : TESTNET_BIP32_HDPATH), bip32.fromBase58(bip32enc), mainnet);
    };
    Wallet.fromSeed = function (seed, mainnet) {
        if (mainnet === void 0) { mainnet = true; }
        return new Wallet((mainnet ? MAINNET_BECH32_HRP : TESTNET_BECH32_HRP), (mainnet ? MAINNET_BIP32_HDPATH : TESTNET_BIP32_HDPATH), bip32.fromSeed(seed), mainnet);
    };
    Wallet.fromPrivateKey = function (privateKey, chainCode, mainnet) {
        if (mainnet === void 0) { mainnet = true; }
        return new Wallet((mainnet ? MAINNET_BECH32_HRP : TESTNET_BECH32_HRP), (mainnet ? MAINNET_BIP32_HDPATH : TESTNET_BIP32_HDPATH), bip32.fromPrivateKey(privateKey, chainCode), mainnet);
    };
    Wallet.fromMnemonic = function (mnemonic, mainnet, passphrase) {
        if (mainnet === void 0) { mainnet = true; }
        var seed = bip39.mnemonicToSeedSync(mnemonic, passphrase);
        var hmac = (0, crypto_1.createHmac)('sha512', MASTER_SECRET);
        hmac.update(seed);
        var digest = hmac.digest();
        var privateKey = Buffer.from(digest.subarray(0, PRIVATE_KEY_SIZE));
        var chainCode = Buffer.from(digest.subarray(PRIVATE_KEY_SIZE, PRIVATE_KEY_SIZE + CHAINCODE_SIZE));
        return Wallet.fromPrivateKey(privateKey, chainCode, mainnet);
    };
    Wallet.prototype.getKey = function (keyring, key) {
        if (!Number.isInteger(keyring)) {
            throw new KeyError("Keyring ".concat(keyring, " is not an integer"));
        }
        if (!Number.isInteger(key)) {
            throw new KeyError("Key ".concat(key, " is not an integer"));
        }
        var hdpath_parts = this.hdpath.split('/');
        hdpath_parts[HDPathIndex.CHANGE] = keyring.toString();
        hdpath_parts[HDPathIndex.ADDRESS_INDEX] = key.toString() + "'";
        var chpath = hdpath_parts.join('/');
        return new Key_1.Key(this.hrp, this.key.derivePath(chpath), this.mainnet);
    };
    return Wallet;
}());
exports.Wallet = Wallet;
