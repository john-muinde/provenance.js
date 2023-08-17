import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
import { createHmac } from 'crypto';
import { ProvenanceHDPath } from './HDPath';
import { Key } from './Key';

const MASTER_SECRET = Buffer.from('Bitcoin seed', 'utf8');
const PRIVATE_KEY_SIZE = 32
const CHAINCODE_SIZE = 32

const MAINNET_BECH32_HRP = 'pb';
const TESTNET_BECH32_HRP = 'tp';

export class ProvenanceWallet {
    public static fromBip32(bip32enc: string, mainnet: boolean = true): ProvenanceWallet {
        return new ProvenanceWallet(
            (mainnet ? MAINNET_BECH32_HRP : TESTNET_BECH32_HRP), 
            bip32.fromBase58(bip32enc),
            mainnet
        );
    }

    public static fromSeed(seed: Buffer, mainnet: boolean = true): ProvenanceWallet {
        return new ProvenanceWallet(
            (mainnet ? MAINNET_BECH32_HRP : TESTNET_BECH32_HRP), 
            bip32.fromSeed(seed),
            mainnet
        );
    }

    public static fromPrivateKey(privateKey: Buffer, chainCode: Buffer, mainnet: boolean = true): ProvenanceWallet {
        return new ProvenanceWallet(
            (mainnet ? MAINNET_BECH32_HRP : TESTNET_BECH32_HRP), 
            bip32.fromPrivateKey(privateKey, chainCode),
            mainnet
        );
    }

    public static fromMnemonic(mnemonic: string, mainnet: boolean = true, passphrase?: string): ProvenanceWallet {
        const seed = bip39.mnemonicToSeedSync(mnemonic, passphrase);
        const hmac = createHmac('sha512', MASTER_SECRET);
        hmac.update(seed);
        const digest = hmac.digest();
        const privateKey = Buffer.from(digest.subarray(0, PRIVATE_KEY_SIZE));
        const chainCode = Buffer.from(digest.subarray(PRIVATE_KEY_SIZE, PRIVATE_KEY_SIZE + CHAINCODE_SIZE));

        return ProvenanceWallet.fromPrivateKey(privateKey, chainCode, mainnet);
    }


    constructor(hrp: string, key: bip32.BIP32Interface, mainnet: boolean) {
        this.hrp = hrp;
        this.key = key;
        this.mainnet = mainnet;
    }

    public getKey(hdPath: string): Key {
        return new Key(this.hrp, this.key.derivePath(hdPath), this.mainnet);
    }

    public getKeyFromHDPath(hdPath: ProvenanceHDPath): Key {
        return this.getKey(hdPath.getFullPath());
    }

    private readonly hrp: string;
    private readonly key: bip32.BIP32Interface;
    private readonly mainnet: boolean;
}
