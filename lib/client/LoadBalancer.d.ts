import { BackoffStrategy } from "../utils";
export declare enum LoadBalancerStrategy {
    FALLBACK = "FALLBACK",
    ROUND_ROBIN = "ROUND_ROBIN",
    RANDOM = "RANDOM"
}
export interface ILoadBalancer<T> {
    records: T[];
    get(): T;
    handleSuccess(record: T): any;
    handleFailure(record: T, e: Error): any;
    getAndExecute<R>(fun: (record: T) => R): R;
    getAndExecuteAsync<R>(fun: (record: T) => Promise<R>): Promise<R>;
}
interface LoadBalancerProps<T> {
    records: T[];
}
export declare abstract class AbstractLoadBalancer<T> implements ILoadBalancer<T> {
    records: T[];
    constructor(props: LoadBalancerProps<T>);
    abstract get(): T;
    handleSuccess(record: T): void;
    handleFailure(record: T, e: Error): void;
    getAndExecute<R>(fun: (record: T) => R): R;
    getAndExecuteAsync<R>(fun: (record: T) => Promise<R>): Promise<R>;
}
interface Failure {
    errors: Error[];
    nextAttemptEpochMillis: number;
}
interface FallbackLoadBalancerProps<T> extends LoadBalancerProps<T> {
    backoffStrategy?: BackoffStrategy;
}
export declare class FallbackLoadBalancer<T> extends AbstractLoadBalancer<T> {
    records: T[];
    protected failures: Failure[];
    protected backoff: BackoffStrategy;
    constructor(props: FallbackLoadBalancerProps<T>);
    get(): T;
    handleSuccess(record: T): void;
    handleFailure(record: T, e: Error): void;
}
export declare class RoundRobinLoadBalancer<T> extends AbstractLoadBalancer<T> {
    records: T[];
    protected nextIndex: number;
    constructor(props: LoadBalancerProps<T>);
    get(): T;
    handleSuccess(record: T): void;
    handleFailure(record: T, e: Error): void;
}
export declare class RandomLoadBalancer<T> extends AbstractLoadBalancer<T> {
    records: T[];
    get(): T;
    handleSuccess(record: T): void;
    handleFailure(record: T, e: Error): void;
}
export {};
