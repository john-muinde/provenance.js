import * as bip32 from 'bip32';
import { ISigner } from './ISigner';
import { BaseAccount } from '../types/Cosmos';
export declare class Key implements ISigner {
    constructor(hrp: string, key: bip32.BIP32Interface, mainnet: boolean);
    get address(): string;
    get publicKey(): string;
    get publicKeyData(): Buffer;
    set baseAccount(account: BaseAccount);
    get baseAccount(): BaseAccount;
    sign(bytes: Buffer): Buffer;
    private readonly hrp;
    private readonly key;
    private readonly mainnet;
    private account?;
    private static sha256;
    private static sha256hash160;
}
