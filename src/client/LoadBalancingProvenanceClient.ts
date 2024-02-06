import { AttributeModule, BaseRequest, BroadcastMode, ConstructArgument, EstimateFunction, GasEstimate, IPbClient, MarkerModule, Message, MetadataModule, MsgFeesModule, NameModule, ProvenanceClient, SignerArgument } from '..';
import { TxResponse } from '../proto/cosmos/base/abci/v1beta1/abci_pb';
import { ILoadBalancer } from './LoadBalancer';
import { AuthCore, BankCore, WasmCore } from '../core';

interface LoadBalancingProvenanceClientProps {
    balancer: ILoadBalancer<ProvenanceClient>;
    maxRetryAttempts?: number;
}

export class LoadBalancingProvenanceClient implements IPbClient {
    balancer: ILoadBalancer<ProvenanceClient>;
    maxRetryAttempts: number;

    constructor(props: LoadBalancingProvenanceClientProps) {
        this.balancer = props.balancer;
        this.maxRetryAttempts = props.maxRetryAttempts || 3;
    }

    // TODO: make this private?
    get(): ProvenanceClient {
        return this.balancer.get();
    }

    getAndExecute<T>(fun: (client: ProvenanceClient) => T): T {
        return this.balancer.getAndExecute(fun);
    }

    async getAndExecuteAsync<T>(fun: (client: ProvenanceClient) => Promise<T>): Promise<T> {
        return await this.balancer.getAndExecuteAsync(fun);
    }

    getAndExecuteWithRetry<T>(fun: (client: ProvenanceClient) => T): T {
        for (let i = 0; i < this.maxRetryAttempts; i++) {
            try {
                return this.getAndExecute(fun);
            } catch (e) {
                if (i < (this.maxRetryAttempts - 1)) {
                    continue;
                }
                throw e;
            }
        }
    }

    async getAndExecuteAsyncWithRetry<T>(fun: (client: ProvenanceClient) => Promise<T>): Promise<T> {
        for (let i = 0; i < this.maxRetryAttempts; i++) {
            try {
                return await this.getAndExecuteAsync(fun);
            } catch (e) {
                if (i < (this.maxRetryAttempts - 1)) {
                    continue;
                }
                throw e;
            }
        }
    }

    constructWith(messages: Message[], signerArg: SignerArgument): BaseRequest {
        return this.getAndExecute(client => client.constructWith(messages, signerArg));
    }

    construct(constructArg: ConstructArgument, signers: SignerArgument): Promise<BaseRequest> {
        return this.getAndExecuteAsync(async client => await client.construct(constructArg, signers));
    }

    constructAndEstimateTx(constructArg: ConstructArgument, signers: SignerArgument): Promise<GasEstimate> {
        return this.getAndExecuteAsync(async client => await client.constructAndEstimateTx(constructArg, signers));
    }

    constructAndBroadcastTx(constructArg: ConstructArgument, gasEstimate: GasEstimate, signers: SignerArgument, mode: BroadcastMode): Promise<TxResponse.AsObject> {
        return this.getAndExecuteAsync(async client => await client.constructAndBroadcastTx(constructArg, gasEstimate, signers, mode));
    }

    constructEstimateAndBroadcastTx(constructArg: ConstructArgument, estimateCallback: EstimateFunction, signers: SignerArgument, mode: BroadcastMode): Promise<TxResponse.AsObject> {
        return this.getAndExecuteAsync(async client => await client.constructEstimateAndBroadcastTx(constructArg, estimateCallback, signers, mode));
    }

    broadcastTx(baseReq: BaseRequest, gasEstimate: GasEstimate, mode: BroadcastMode): Promise<TxResponse.AsObject> {
        return this.getAndExecuteAsync(async client => await client.broadcastTx(baseReq, gasEstimate, mode));
    }

    estimateTx(baseReq: BaseRequest): Promise<GasEstimate> {
        return this.getAndExecuteAsync(async client => await client.estimateTx(baseReq));
    }

    public get auth(): AuthCore {
        return this.get().auth;
    }

    public get bank(): BankCore {
        return this.get().bank;
    }

    public get wasm(): WasmCore {
        return this.get().wasm;
    }

    public get attribute(): AttributeModule {
        return this.get().attribute;
    }

    public get marker(): MarkerModule {
        return this.get().marker;
    }

    public get metadata(): MetadataModule {
        return this.get().metadata;
    }

    public get msgFees(): MsgFeesModule {
        return this.get().msgFees;
    }
    
    public get name(): NameModule {
        return this.get().name;
    }
}
