import { Coin } from "../proto/cosmos/base/v1beta1/coin_pb";

const DEFAULT_FEE_ADJUSTMENT = 1.25;
const DEFAULT_GAS_PRICE = 1905.00;

export class GasEstimate {

    constructor(estimate: number, totalFees: Coin[], additionalFees: Coin[], feeAdjustment?: number) {
        this.estimate = estimate;
        this.feeAdjustment = feeAdjustment;
        this.additionalFees = additionalFees;

        if (typeof this.feeAdjustment !== 'undefined') {
            this.adjustment = this.feeAdjustment;
        }

        this.limit = Math.ceil(this.estimate * this.adjustment);
        this.fees = Math.ceil(this.limit * DEFAULT_GAS_PRICE);
    }

    public estimate: number;
    public feeAdjustment?: number = DEFAULT_FEE_ADJUSTMENT;
    public limit: number;
    public fees: number;
    public totalFees: Coin[];
    public additionalFees: Coin[];

    private adjustment: number = DEFAULT_FEE_ADJUSTMENT;

}
