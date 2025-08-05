import * as bip32 from 'bip32';
import { ProvenanceHDPath } from './HDPath';
import { Key } from './Key';
export declare class ProvenanceWallet {
    static fromBip32(bip32enc: string, mainnet?: boolean): ProvenanceWallet;
    static fromSeed(seed: Buffer, mainnet?: boolean): ProvenanceWallet;
    static fromPrivateKey(privateKey: Buffer, chainCode: Buffer, mainnet?: boolean): ProvenanceWallet;
    static fromMnemonic(mnemonic: string, mainnet?: boolean, passphrase?: string): ProvenanceWallet;
    constructor(hrp: string, key: bip32.BIP32Interface, mainnet: boolean);
    getKey(hdPath: string): Key;
    getKeyFromHDPath(hdPath: ProvenanceHDPath): Key;
    private readonly hrp;
    private readonly key;
    private readonly mainnet;
}
