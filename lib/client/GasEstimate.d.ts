import { Coin } from "../proto/cosmos/base/v1beta1/coin_pb";
export interface GasEstimate {
    estimate: number;
    feeAdjustment?: number;
    limit: number;
    totalFees: Coin[];
    additionalFees: Coin[];
}
export declare class EmptyGasEstimate {
    constructor();
    estimate: number;
    feeAdjustment?: number;
    limit: number;
    totalFees: Coin[];
    additionalFees: Coin[];
}
export declare class SimulationGasEstimate {
    constructor(estimate: number, feeAdjustment?: number);
    estimate: number;
    feeAdjustment?: number;
    limit: number;
    totalFees: Coin[];
    additionalFees: Coin[];
    private adjustment;
}
export declare class CalculateTxGasEstimate {
    constructor(estimate: number, additionalFees: Coin[], totalFees: Coin[], feeAdjustment?: number);
    estimate: number;
    feeAdjustment?: number;
    limit: number;
    totalFees: Coin[];
    additionalFees: Coin[];
    private adjustment;
}
