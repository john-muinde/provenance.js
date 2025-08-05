import { BaseRequest } from './BaseRequest';
import { GasEstimate, SimulationGasEstimate } from './GasEstimate';
import { Message } from './Message';
import { IProvider } from '../providers/IProvider';
import { ConstructArgument, EstimateFunction, SignerArgument } from './ITxClient';
import { BroadcastMode, TxResponse } from '../types';
import { AuthCore, BankCore, WasmCore } from '../core';
import { AttributeModule, MarkerModule, MetadataModule, MsgFeesModule, NameModule } from '../modules';
import { GasPriceProvider } from '../providers';
import { IPbClient } from './IPbClient';
export declare class ProvenanceClient implements IPbClient {
    /**
     * Constructor.
     * @param provider The provenance node network provider.
     */
    constructor(provider: IProvider, gasPriceProvider?: GasPriceProvider);
    /**
     * Broadcasts the request.
     * @param baseReq The request containing one or more messages to broadcast.
     * @returns ???
     */
    broadcastTx(baseReq: BaseRequest, gasEstimate: GasEstimate, mode?: BroadcastMode): Promise<TxResponse>;
    /**
     * ???
     * @param baseReq ???
     * @returns ???
     */
    estimateTx(baseReq: BaseRequest): Promise<SimulationGasEstimate>;
    /**
     * ???
     * @param messages ???
     * @param signerArg The signing key(s) for the transaction.
     * @returns ???
     */
    constructWith(messages: Array<Message>, signerArg: SignerArgument): BaseRequest;
    /**
     * ???
     * @param constructArg ???
     * @param signers The signing key(s) for the transaction.
     * @returns ???
     */
    construct(constructArg: ConstructArgument, signers: SignerArgument): Promise<BaseRequest>;
    /**
     *
     * @param constructArg ???
     * @param signers The signing key(s) for the transaction.
     * @returns ???
     */
    constructAndEstimateTx(constructArg: ConstructArgument, signers: SignerArgument): Promise<GasEstimate>;
    /**
     * ???
     * @param constructArg ???
     * @param gasEstimate ???
     * @param signers The signing key(s) for the transaction.
     * @param mode ???
     * @returns ???
     */
    constructAndBroadcastTx(constructArg: ConstructArgument, gasEstimate: GasEstimate, signers: SignerArgument, mode?: BroadcastMode): Promise<TxResponse>;
    /**
     * ???
     * @param constructArg ???
     * @param estimateCallback ???
     * @param signers The signing key(s) for the transaction.
     * @param mode ???
     * @returns ???
     */
    constructEstimateAndBroadcastTx(constructArg: ConstructArgument, estimateCallback: EstimateFunction, signers: SignerArgument, mode?: BroadcastMode): Promise<TxResponse>;
    static getSingleton(): ProvenanceClient;
    static buildClientList(providers: IProvider[], gasPriceProvider?: GasPriceProvider): ProvenanceClient[];
    private static singleton;
    private readonly gasPriceProvider;
    private readonly txClient;
    readonly provider: IProvider;
    auth: AuthCore;
    bank: BankCore;
    wasm: WasmCore;
    attribute: AttributeModule;
    marker: MarkerModule;
    metadata: MetadataModule;
    name: NameModule;
    msgFees: MsgFeesModule;
}
