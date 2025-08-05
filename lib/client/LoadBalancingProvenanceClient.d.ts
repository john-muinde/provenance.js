import { AttributeModule, BaseRequest, BroadcastMode, ConstructArgument, EstimateFunction, GasEstimate, IPbClient, MarkerModule, Message, MetadataModule, MsgFeesModule, NameModule, ProvenanceClient, SignerArgument } from '..';
import { TxResponse } from '../proto/cosmos/base/abci/v1beta1/abci_pb';
import { ILoadBalancer } from './LoadBalancer';
import { AuthCore, BankCore, WasmCore } from '../core';
interface LoadBalancingProvenanceClientProps {
    balancer: ILoadBalancer<ProvenanceClient>;
    maxRetryAttempts?: number;
}
export declare class LoadBalancingProvenanceClient implements IPbClient {
    balancer: ILoadBalancer<ProvenanceClient>;
    maxRetryAttempts: number;
    constructor(props: LoadBalancingProvenanceClientProps);
    get(): ProvenanceClient;
    getAndExecute<T>(fun: (client: ProvenanceClient) => T): T;
    getAndExecuteAsync<T>(fun: (client: ProvenanceClient) => Promise<T>): Promise<T>;
    getAndExecuteWithRetry<T>(fun: (client: ProvenanceClient) => T): T;
    getAndExecuteAsyncWithRetry<T>(fun: (client: ProvenanceClient) => Promise<T>): Promise<T>;
    constructWith(messages: Message[], signerArg: SignerArgument): BaseRequest;
    construct(constructArg: ConstructArgument, signers: SignerArgument): Promise<BaseRequest>;
    constructAndEstimateTx(constructArg: ConstructArgument, signers: SignerArgument): Promise<GasEstimate>;
    constructAndBroadcastTx(constructArg: ConstructArgument, gasEstimate: GasEstimate, signers: SignerArgument, mode: BroadcastMode): Promise<TxResponse.AsObject>;
    constructEstimateAndBroadcastTx(constructArg: ConstructArgument, estimateCallback: EstimateFunction, signers: SignerArgument, mode: BroadcastMode): Promise<TxResponse.AsObject>;
    broadcastTx(baseReq: BaseRequest, gasEstimate: GasEstimate, mode: BroadcastMode): Promise<TxResponse.AsObject>;
    estimateTx(baseReq: BaseRequest): Promise<GasEstimate>;
    get auth(): AuthCore;
    get bank(): BankCore;
    get wasm(): WasmCore;
    get attribute(): AttributeModule;
    get marker(): MarkerModule;
    get metadata(): MetadataModule;
    get msgFees(): MsgFeesModule;
    get name(): NameModule;
}
export {};
