import { Coin } from "../proto/cosmos/base/v1beta1/coin_pb";
import { GasPriceProvider } from "../providers";

const DEFAULT_FEE_ADJUSTMENT = 1.25;

export class GasEstimate {

    constructor(estimate: number, additionalFees: Coin[], totalFees: Coin[], feeAdjustment?: number) {
        this.estimate = estimate;
        this.totalFees = totalFees;
        this.additionalFees = additionalFees;

        this.feeAdjustment = feeAdjustment;
        if (typeof this.feeAdjustment !== 'undefined') {
            this.adjustment = this.feeAdjustment;
        }

        this.limit = Math.ceil(this.estimate * this.adjustment);
    }

    async getFees(provider: GasPriceProvider): Promise<number> {
        return await provider.gasPrice;
    }

    public estimate: number;
    public feeAdjustment?: number = DEFAULT_FEE_ADJUSTMENT;
    public limit: number;
    public totalFees: Coin[];
    public additionalFees: Coin[];

    private adjustment: number = DEFAULT_FEE_ADJUSTMENT;

}
