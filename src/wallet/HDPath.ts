export interface HDPathItem {
    index: number;
    hardened: boolean;
};

/**
 * Typically use `account` + `address` HDPathItems to derive separate accounts from a mnemonic
 */
export interface HDPathProps {
    marker?: string;
    purpose?: HDPathItem;
    coinType?: HDPathItem;
    account?: HDPathItem;
    change?: HDPathItem;
    address?: HDPathItem;
};

export interface HDPath {
    getFullPath(): string
};

/**
 * Used specificallly for Provenance Blockchain account derivation
 */
export interface ProvenanceHDPathProps extends HDPathProps {
    marker?: string;
    purpose?: HDPathItem;
    coinType: HDPathItem;
    account?: HDPathItem;
    change?: HDPathItem;
    address?: HDPathItem;
};

// const MAINNET_BIP32_HDPATH = "m/44'/505'/0'/0/0'";
// const TESTNET_BIP32_HDPATH = "m/44'/1'/0'/0/0'";
export class ProvenanceHDPath implements HDPath {
    protected marker: string;
    protected purpose: HDPathItem;
    protected coinType: HDPathItem;
    protected account: HDPathItem;
    protected change: HDPathItem;
    protected address: HDPathItem;

    constructor(props: ProvenanceHDPathProps) {
        this.marker = props.marker || 'm';
        this.purpose = props.purpose || { index: 44, hardened: true};
        this.coinType = props.coinType;
        
        this.account = props.account || { index: 0, hardened: true };
        this.change = props.change || { index: 0, hardened: false };
        this.address = props.address || { index: 0, hardened: true };
    }

    getFullPath(): string {
        return [
            this.marker,
            this.getHDPathItemAsString(this.purpose),
            this.getHDPathItemAsString(this.coinType),
            this.getHDPathItemAsString(this.account),
            this.getHDPathItemAsString(this.change),
            this.getHDPathItemAsString(this.address),            
        ].join('/');
    }

    private getHDPathItemAsString(item: HDPathItem): string {
        let s = item.index.toString();
        if (item.hardened) {
            s += "'";
        }
        return s;
    }
    
    public static COIN_TYPE_MAINNET: HDPathItem = { index: 505, hardened: true };
    public static COIN_TYPE_TESTNET: HDPathItem = { index: 1, hardened: true };
}
