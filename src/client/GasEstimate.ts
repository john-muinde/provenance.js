import { Coin } from "../proto/cosmos/base/v1beta1/coin_pb";
import { GasPriceProvider } from "../providers";
import { DEFAULT_GAS_DENOM } from "./BaseRequest";

const DEFAULT_FEE_ADJUSTMENT = 1.25;

export interface GasEstimate {
    estimate: number;
    feeAdjustment?: number;
    limit: number;
    totalFees: Coin[];
    additionalFees: Coin[];
};

export class EmptyGasEstimate {
    constructor() {}

    public estimate: number = 0;
    public feeAdjustment?: number = DEFAULT_FEE_ADJUSTMENT;
    public limit: number = 0;
    public totalFees: Coin[] = [];
    public additionalFees: Coin[] = []
}

export class SimulationGasEstimate {

    constructor(estimate: number, feeAdjustment?: number) {
        this.estimate = estimate;
        this.feeAdjustment = feeAdjustment;

        if (typeof this.feeAdjustment !== 'undefined') {
            this.adjustment = this.feeAdjustment;
        }
        this.limit = Math.ceil(this.estimate * this.adjustment);

        this.additionalFees = [];
        this.totalFees = [(new Coin()).setAmount(this.estimate.toString()).setDenom(DEFAULT_GAS_DENOM)];
    }

    public estimate: number;
    public feeAdjustment?: number = DEFAULT_FEE_ADJUSTMENT;
    public limit: number;
    public totalFees: Coin[];
    public additionalFees: Coin[];

    private adjustment: number = DEFAULT_FEE_ADJUSTMENT;

}

export class CalculateTxGasEstimate {

    constructor(
        estimate: number,
        additionalFees: Coin[],
        totalFees: Coin[],
        feeAdjustment?: number
    ) {
        this.estimate = estimate;
        this.totalFees = totalFees;
        this.additionalFees = additionalFees;

        this.feeAdjustment = feeAdjustment;
        if (typeof this.feeAdjustment !== 'undefined') {
            this.adjustment = this.feeAdjustment;
        }

        // Limit is given by the estimate
        this.limit = this.estimate;
    }

    public estimate: number;
    public feeAdjustment?: number = DEFAULT_FEE_ADJUSTMENT;
    public limit: number;
    public totalFees: Coin[];
    public additionalFees: Coin[];

    private adjustment: number = DEFAULT_FEE_ADJUSTMENT;

}
