import { AttributeModule, BaseRequest, BroadcastMode, ConstructArgument, EstimateFunction, GasEstimate, IPbClient, MarkerModule, Message, MetadataModule, MsgFeesModule, NameModule, ProvenanceClient, SignerArgument } from '..';
import { TxResponse } from '../proto/cosmos/base/abci/v1beta1/abci_pb';
import { ILoadBalancer } from './LoadBalancer';
import { AuthCore, BankCore, WasmCore } from '../core';

export class LoadBalancingProvenanceClient implements IPbClient {
    private balancer: ILoadBalancer<ProvenanceClient>;

    constructor(balancer: ILoadBalancer<ProvenanceClient>) {
        this.balancer = balancer;
    }

    // TODO: make this private?
    get(): ProvenanceClient {
        return this.balancer.get();
    }

    constructWith(messages: Message[], signerArg: SignerArgument): BaseRequest {
        return this.get().constructWith(messages, signerArg);
    }

    construct(constructArg: ConstructArgument, signers: SignerArgument): Promise<BaseRequest> {
        return this.get().construct(constructArg, signers);
    }

    constructAndEstimateTx(constructArg: ConstructArgument, signers: SignerArgument): Promise<GasEstimate> {
        return this.get().constructAndEstimateTx(constructArg, signers);
    }

    constructAndBroadcastTx(constructArg: ConstructArgument, gasEstimate: GasEstimate, signers: SignerArgument, mode: BroadcastMode): Promise<TxResponse.AsObject> {
        return this.get().constructAndBroadcastTx(constructArg, gasEstimate, signers, mode);
    }

    constructEstimateAndBroadcastTx(constructArg: ConstructArgument, estimateCallback: EstimateFunction, signers: SignerArgument, mode: BroadcastMode): Promise<TxResponse.AsObject> {
        return this.get().constructEstimateAndBroadcastTx(constructArg, estimateCallback, signers, mode);
    }

    broadcastTx(baseReq: BaseRequest, gasEstimate: GasEstimate, mode: BroadcastMode): Promise<TxResponse.AsObject> {
        return this.get().broadcastTx(baseReq, gasEstimate, mode);
    }

    estimateTx(baseReq: BaseRequest): Promise<GasEstimate> {
        return this.get().estimateTx(baseReq);
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
