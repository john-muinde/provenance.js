import { ProvenanceClient } from "../client/ProvenanceClient";
import { BackoffStrategy, DefaultBackoffStrategy } from "../utils";

export enum LoadBalancerStrategy {
    FALLBACK = "FALLBACK",
    ROUND_ROBIN = "ROUND_ROBIN",
    RANDOM = "RANDOM"
};

export interface ILoadBalancer<T> {
    records: T[];
    
    get(): T

    handleFailure(record: T, e: Error)
}

interface Failure {
    errors: Error[];
    nextAttemptEpochMillis: number;
}

export class FallBackLoadBalancer implements ILoadBalancer<ProvenanceClient> {
    records: ProvenanceClient[];
    private failures: Failure[];
    private backoff: BackoffStrategy;

    constructor(records: ProvenanceClient[], backoffStrategy?: BackoffStrategy) {
        if (records.length === 0) {
            throw new Error("Expected at least 1 record");
        }

        this.records = records;
        this.failures = records.map(r => { return { errors: [], nextAttemptEpochMillis: 0 }});
        this.backoff = backoffStrategy || new DefaultBackoffStrategy({ waitTimeMillis: 2000 });
    }

    get(): ProvenanceClient {
        let recordIndex: number = this.failures.findIndex(r => r.nextAttemptEpochMillis);
        if (recordIndex < 0) {
            return this.records[0];
        } else {
            return this.records[recordIndex];
        }
    }

    handleFailure(record: ProvenanceClient, e: Error) {
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

export class RoundRobinLoadBalancer implements ILoadBalancer<ProvenanceClient> {
    records: ProvenanceClient[];
    private nextIndex: number;

    constructor(records: ProvenanceClient[]) {
        this.records = records;
        this.nextIndex = 0;
    }

    get(): ProvenanceClient {
        let indexToReturn = this.nextIndex;
        this.nextIndex = (this.nextIndex + 1) % this.records.length;
        return this.records[indexToReturn];
    }

    handleFailure(record: ProvenanceClient, e: Error) {
        // TODO? no-op
    }
}

export class RandomLoadBalancer implements ILoadBalancer<ProvenanceClient> {
    records: ProvenanceClient[];

    constructor(records: ProvenanceClient[]) {
        this.records = records;
    }

    get(): ProvenanceClient {
        let indexToReturn = Math.floor(Math.random() * this.records.length);
        return this.records[indexToReturn];
    }

    handleFailure(record: ProvenanceClient, e: Error) {
        // TODO? no-op
    }
}