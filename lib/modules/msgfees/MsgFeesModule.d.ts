import { ITxClient, CalculateTxGasEstimate } from '../../client';
import { IProvider } from '../../providers/IProvider';
import { IQueryClient } from '../../proto/provenance/msgfees/v1/query_grpc_pb';
export declare class MsgFeesModule {
    constructor(provider: IProvider, txClient: ITxClient);
    calculateTxFees(txBytes: Uint8Array, adjustment?: number): Promise<CalculateTxGasEstimate>;
    protected readonly provider: IProvider;
    protected readonly txClient: ITxClient;
    protected readonly queryClient: IQueryClient;
}
