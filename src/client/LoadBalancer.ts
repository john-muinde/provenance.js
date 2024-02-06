import { BackoffStrategy, DefaultBackoffStrategy } from "../utils";

export enum LoadBalancerStrategy {
    FALLBACK = "FALLBACK",
    ROUND_ROBIN = "ROUND_ROBIN",
    RANDOM = "RANDOM"
};
export interface ILoadBalancer<T> {
    records: T[];
    
    get(): T

    handleSuccess(record: T)

    handleFailure(record: T, e: Error)

    getAndExecute<R>(fun: (record: T) => R): R

    getAndExecuteAsync<R>(fun: (record: T) => Promise<R>): Promise<R>
}

interface LoadBalancerProps<T> {
    records: T[];
};
export abstract class AbstractLoadBalancer<T> implements ILoadBalancer<T> {
    records: T[];

    constructor(props: LoadBalancerProps<T>) {
        if (props.records.length === 0) {
            throw new Error("Expected at least 1 record");
        }
        this.records = props.records;
    }

    abstract get(): T

    handleSuccess(record: T) {
        // Override if necessary
    }

    handleFailure(record: T, e: Error) {
        // Override if necessary
    }

    getAndExecute<R>(fun: (record: T) => R): R {
        let record = this.get();
        try {
            let result = fun(record);
            this.handleSuccess(record);
            return result;
        } catch (e) {
            this.handleFailure(record, e);
            throw e
        }
    }

    async getAndExecuteAsync<R>(fun: (record: T) => Promise<R>): Promise<R> {
        let record = this.get();
        try {
            let result: R = await fun(record);
            this.handleSuccess(record);
            return result;
        } catch (e) {
            this.handleFailure(record, e);
            throw e
        }
    }
}

interface Failure {
    errors: Error[];
    nextAttemptEpochMillis: number;
}

interface FallbackLoadBalancerProps<T> extends LoadBalancerProps<T> {
    backoffStrategy?: BackoffStrategy;
}
export class FallbackLoadBalancer<T> extends AbstractLoadBalancer<T> {
    records: T[];
    private failures: Failure[];
    private backoff: BackoffStrategy;

    constructor(props: FallbackLoadBalancerProps<T>) {
        super(props);

        this.failures = this.records.map(r => { return { errors: [], nextAttemptEpochMillis: 0 }});
        this.backoff = props.backoffStrategy || new DefaultBackoffStrategy({ waitTimeMillis: 2000 });
    }

    get(): T {
        let recordIndex: number = this.failures.findIndex(r => r.nextAttemptEpochMillis < Date.now());
        if (recordIndex < 0) {
            return this.records[0];
        } else {
            return this.records[recordIndex];
        }
    }

    handleSuccess(record: T) {
        let failedRecordIndex = this.records.indexOf(record);
        if (failedRecordIndex < 0) {
            return;
        }

        this.failures[failedRecordIndex].errors = [];
        this.failures[failedRecordIndex].nextAttemptEpochMillis = Date.now();
    }

    handleFailure(record: T, e: Error) {
        let failedRecordIndex = this.records.indexOf(record);
        if (failedRecordIndex < 0) {
            return;
        }

        this.failures[failedRecordIndex].errors.push(e);
        let errorCount = this.failures[failedRecordIndex].errors.length;

        let delayMillis =  this.backoff.getDelayMillis(this.failures[failedRecordIndex].errors.length);
        this.failures[failedRecordIndex].nextAttemptEpochMillis = Date.now() + delayMillis;

        if (errorCount > 10) {
            this.failures[failedRecordIndex].errors = this.failures[failedRecordIndex].errors.slice(1, undefined);
        }
    }
}

export class RoundRobinLoadBalancer<T> extends AbstractLoadBalancer<T> {
    records: T[];
    private nextIndex: number;

    constructor(props: LoadBalancerProps<T>) {
        super(props);
        this.nextIndex = 0;
    }

    get(): T {
        let indexToReturn = this.nextIndex;
        this.nextIndex = (this.nextIndex + 1) % this.records.length;
        return this.records[indexToReturn];
    }

    handleSuccess(record: T) {}

    handleFailure(record: T, e: Error) {
        // TODO? no-op
    }
}

export class RandomLoadBalancer<T> extends AbstractLoadBalancer<T> {
    records: T[];

    get(): T {
        let indexToReturn = Math.floor(Math.random() * this.records.length);
        return this.records[indexToReturn];
    }

    handleSuccess(record: T) {}

    handleFailure(record: T, e: Error) {
        // TODO? no-op
    }
}