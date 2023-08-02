const DEFAULT_GAS_PRICE = 1905.00;

export interface GasPriceProvider {
    readonly gasPrice: number;
}

export class DefaultGasPriceProvider implements GasPriceProvider {
    readonly gasPrice: number = DEFAULT_GAS_PRICE;
}