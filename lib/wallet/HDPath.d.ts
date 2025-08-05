export interface HDPathItem {
    index: number;
    hardened: boolean;
}
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
}
export interface HDPath {
    getFullPath(): string;
}
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
}
export declare class ProvenanceHDPath implements HDPath {
    protected marker: string;
    protected purpose: HDPathItem;
    protected coinType: HDPathItem;
    protected account: HDPathItem;
    protected change: HDPathItem;
    protected address: HDPathItem;
    constructor(props: ProvenanceHDPathProps);
    getFullPath(): string;
    private getHDPathItemAsString;
    static COIN_TYPE_MAINNET: HDPathItem;
    static COIN_TYPE_TESTNET: HDPathItem;
}
