export interface BackoffStrategy {
    /**
     * Return millis to wait
     */
    getDelayMillis(failureCount: number): number;
}

export interface BackoffStrategyProps {};

export interface DefaultBackoffStrategyProps extends BackoffStrategyProps {
    waitTimeMillis: number;
};

export class DefaultBackoffStrategy implements BackoffStrategy {
    private waitTimeMillis: number;

    constructor(props: DefaultBackoffStrategyProps) {
        this.waitTimeMillis = props.waitTimeMillis;
    }

    getDelayMillis(failureCount: number): number {
        return this.waitTimeMillis;
    }
}

export interface ExponentialBackoffStrategyProps extends BackoffStrategyProps {
    baseDelayMillis?: number;
    multiplier?: number;
    maxDelayMillis?: number;
};

export class ExponentialBackoffStrategy implements BackoffStrategy {
    private baseDelayMillis: number;
    private multiplier: number;
    private maxDelayMillis: number | undefined;

    constructor(props: ExponentialBackoffStrategyProps) {
        this.baseDelayMillis = props.baseDelayMillis || 1000;
        this.multiplier = props.multiplier || 2;
        this.maxDelayMillis = props.maxDelayMillis;
    }

    getDelayMillis(failureCount: number): number {
        let delayMillis = this.baseDelayMillis + Math.pow(this.multiplier, failureCount)
        return (this.maxDelayMillis === undefined || this.maxDelayMillis > delayMillis) ? delayMillis : this.maxDelayMillis;
    }
}