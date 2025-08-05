import { GasEstimate } from './GasEstimate';
import { Key } from '../wallet/Key';
import { IProvider } from '../providers/IProvider';
import * as cosmos_tx_v1beta1_tx_pb from "../proto/cosmos/tx/v1beta1/tx_pb";
export declare const DEFAULT_GAS_DENOM = "nhash";
export declare class BaseRequest {
    constructor(provider: IProvider, body: cosmos_tx_v1beta1_tx_pb.TxBody, signers: Key[], signerSequenceOffsets?: number[], gasAdjustment?: number, feeGranter?: string);
    buildAuthInfo(gasEstimate?: GasEstimate): Promise<cosmos_tx_v1beta1_tx_pb.AuthInfo>;
    buildSignDocList(authInfoBytes: Buffer, bodyBytes: Buffer): Promise<Array<cosmos_tx_v1beta1_tx_pb.SignDoc>>;
    buildSignDocBytesList(authInfoBytes: Buffer, bodyBytes: Buffer): Promise<Array<Buffer>>;
    chainId: string;
    body: cosmos_tx_v1beta1_tx_pb.TxBody;
    signers: Key[];
    signerSequenceOffsets?: number[];
    gasAdjustment?: number;
    feeGranter?: string;
    private readonly provider;
}
