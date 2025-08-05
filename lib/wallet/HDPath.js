"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvenanceHDPath = void 0;
;
;
;
;
// const MAINNET_BIP32_HDPATH = "m/44'/505'/0'/0/0'";
// const TESTNET_BIP32_HDPATH = "m/44'/1'/0'/0/0'";
var ProvenanceHDPath = /** @class */ (function () {
    function ProvenanceHDPath(props) {
        this.marker = props.marker || 'm';
        this.purpose = props.purpose || { index: 44, hardened: true };
        this.coinType = props.coinType;
        this.account = props.account || { index: 0, hardened: true };
        this.change = props.change || { index: 0, hardened: false };
        this.address = props.address || { index: 0, hardened: true };
    }
    ProvenanceHDPath.prototype.getFullPath = function () {
        return [
            this.marker,
            this.getHDPathItemAsString(this.purpose),
            this.getHDPathItemAsString(this.coinType),
            this.getHDPathItemAsString(this.account),
            this.getHDPathItemAsString(this.change),
            this.getHDPathItemAsString(this.address),
        ].join('/');
    };
    ProvenanceHDPath.prototype.getHDPathItemAsString = function (item) {
        var s = item.index.toString();
        if (item.hardened) {
            s += "'";
        }
        return s;
    };
    ProvenanceHDPath.COIN_TYPE_MAINNET = { index: 505, hardened: true };
    ProvenanceHDPath.COIN_TYPE_TESTNET = { index: 1, hardened: true };
    return ProvenanceHDPath;
}());
exports.ProvenanceHDPath = ProvenanceHDPath;
