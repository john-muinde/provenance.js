import * as bip32 from 'bip32';
import { Key } from './Key';
export declare class KeyError extends Error {
    constructor(msg: string);
}
export declare class Wallet {
    static fromBip32(bip32enc: string, mainnet?: boolean): Wallet;
    static fromSeed(seed: Buffer, mainnet?: boolean): Wallet;
    static fromPrivateKey(privateKey: Buffer, chainCode: Buffer, mainnet?: boolean): Wallet;
    static fromMnemonic(mnemonic: string, mainnet?: boolean, passphrase?: string): Wallet;
    constructor(hrp: string, hdpath: string, key: bip32.BIP32Interface, mainnet: boolean);
    getKey(keyring: number, key: number): Key;
    private readonly hrp;
    private readonly hdpath;
    private readonly key;
    private readonly mainnet;
}
