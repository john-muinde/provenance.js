export interface GasPriceProvider {
    readonly gasPrice: number;
}
export declare class DefaultGasPriceProvider implements GasPriceProvider {
    readonly gasPrice: number;
}
