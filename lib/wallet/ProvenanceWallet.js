"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvenanceWallet = void 0;
var bip32 = require("bip32");
var bip39 = require("bip39");
var crypto_1 = require("crypto");
var Key_1 = require("./Key");
var MASTER_SECRET = Buffer.from('Bitcoin seed', 'utf8');
var PRIVATE_KEY_SIZE = 32;
var CHAINCODE_SIZE = 32;
var MAINNET_BECH32_HRP = 'pb';
var TESTNET_BECH32_HRP = 'tp';
var ProvenanceWallet = /** @class */ (function () {
    function ProvenanceWallet(hrp, key, mainnet) {
        this.hrp = hrp;
        this.key = key;
        this.mainnet = mainnet;
    }
    ProvenanceWallet.fromBip32 = function (bip32enc, mainnet) {
        if (mainnet === void 0) { mainnet = true; }
        return new ProvenanceWallet((mainnet ? MAINNET_BECH32_HRP : TESTNET_BECH32_HRP), bip32.fromBase58(bip32enc), mainnet);
    };
    ProvenanceWallet.fromSeed = function (seed, mainnet) {
        if (mainnet === void 0) { mainnet = true; }
        return new ProvenanceWallet((mainnet ? MAINNET_BECH32_HRP : TESTNET_BECH32_HRP), bip32.fromSeed(seed), mainnet);
    };
    ProvenanceWallet.fromPrivateKey = function (privateKey, chainCode, mainnet) {
        if (mainnet === void 0) { mainnet = true; }
        return new ProvenanceWallet((mainnet ? MAINNET_BECH32_HRP : TESTNET_BECH32_HRP), bip32.fromPrivateKey(privateKey, chainCode), mainnet);
    };
    ProvenanceWallet.fromMnemonic = function (mnemonic, mainnet, passphrase) {
        if (mainnet === void 0) { mainnet = true; }
        var seed = bip39.mnemonicToSeedSync(mnemonic, passphrase);
        var hmac = (0, crypto_1.createHmac)('sha512', MASTER_SECRET);
        hmac.update(seed);
        var digest = hmac.digest();
        var privateKey = Buffer.from(digest.subarray(0, PRIVATE_KEY_SIZE));
        var chainCode = Buffer.from(digest.subarray(PRIVATE_KEY_SIZE, PRIVATE_KEY_SIZE + CHAINCODE_SIZE));
        return ProvenanceWallet.fromPrivateKey(privateKey, chainCode, mainnet);
    };
    ProvenanceWallet.prototype.getKey = function (hdPath) {
        return new Key_1.Key(this.hrp, this.key.derivePath(hdPath), this.mainnet);
    };
    ProvenanceWallet.prototype.getKeyFromHDPath = function (hdPath) {
        return this.getKey(hdPath.getFullPath());
    };
    return ProvenanceWallet;
}());
exports.ProvenanceWallet = ProvenanceWallet;
