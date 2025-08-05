export interface BackoffStrategy {
    /**
     * Return millis to wait
     */
    getDelayMillis(failureCount: number): number;
}
export interface BackoffStrategyProps {
}
export interface DefaultBackoffStrategyProps extends BackoffStrategyProps {
    waitTimeMillis: number;
}
export declare class DefaultBackoffStrategy implements BackoffStrategy {
    private waitTimeMillis;
    constructor(props: DefaultBackoffStrategyProps);
    getDelayMillis(failureCount: number): number;
}
export interface ExponentialBackoffStrategyProps extends BackoffStrategyProps {
    baseDelayMillis?: number;
    multiplier?: number;
    maxDelayMillis?: number;
}
export declare class ExponentialBackoffStrategy implements BackoffStrategy {
    private baseDelayMillis;
    private multiplier;
    private maxDelayMillis;
    constructor(props: ExponentialBackoffStrategyProps);
    getDelayMillis(failureCount: number): number;
}
