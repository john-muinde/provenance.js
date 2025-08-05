import * as jspb from 'google-protobuf';
import { BroadcastMode, TxResponse } from '../types';
import { GasEstimate } from './GasEstimate';
import { ITxClient, SignerArgument } from './ITxClient';
export declare class Message {
    constructor(msgs: Array<jspb.Message>, txClient: ITxClient);
    broadcastTx(signers: SignerArgument, mode?: BroadcastMode): Promise<TxResponse>;
    estimateTx(signers: SignerArgument): Promise<GasEstimate>;
    msgs: Array<jspb.Message>;
    private readonly txClient;
}
