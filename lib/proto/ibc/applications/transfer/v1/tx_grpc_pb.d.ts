// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ibc_applications_transfer_v1_tx_pb from "../../../../ibc/applications/transfer/v1/tx_pb";
import * as amino_amino_pb from "../../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_msg_v1_msg_pb from "../../../../cosmos/msg/v1/msg_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../../cosmos/base/v1beta1/coin_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as ibc_applications_transfer_v1_transfer_pb from "../../../../ibc/applications/transfer/v1/transfer_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    transfer: IMsgService_ITransfer;
    updateParams: IMsgService_IUpdateParams;
}

interface IMsgService_ITransfer extends grpc.MethodDefinition<ibc_applications_transfer_v1_tx_pb.MsgTransfer, ibc_applications_transfer_v1_tx_pb.MsgTransferResponse> {
    path: "/ibc.applications.transfer.v1.Msg/Transfer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_applications_transfer_v1_tx_pb.MsgTransfer>;
    requestDeserialize: grpc.deserialize<ibc_applications_transfer_v1_tx_pb.MsgTransfer>;
    responseSerialize: grpc.serialize<ibc_applications_transfer_v1_tx_pb.MsgTransferResponse>;
    responseDeserialize: grpc.deserialize<ibc_applications_transfer_v1_tx_pb.MsgTransferResponse>;
}
interface IMsgService_IUpdateParams extends grpc.MethodDefinition<ibc_applications_transfer_v1_tx_pb.MsgUpdateParams, ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse> {
    path: "/ibc.applications.transfer.v1.Msg/UpdateParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_applications_transfer_v1_tx_pb.MsgUpdateParams>;
    requestDeserialize: grpc.deserialize<ibc_applications_transfer_v1_tx_pb.MsgUpdateParams>;
    responseSerialize: grpc.serialize<ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse>;
    responseDeserialize: grpc.deserialize<ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
    transfer: grpc.handleUnaryCall<ibc_applications_transfer_v1_tx_pb.MsgTransfer, ibc_applications_transfer_v1_tx_pb.MsgTransferResponse>;
    updateParams: grpc.handleUnaryCall<ibc_applications_transfer_v1_tx_pb.MsgUpdateParams, ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse>;
}

export interface IMsgClient {
    transfer(request: ibc_applications_transfer_v1_tx_pb.MsgTransfer, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    transfer(request: ibc_applications_transfer_v1_tx_pb.MsgTransfer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    transfer(request: ibc_applications_transfer_v1_tx_pb.MsgTransfer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    updateParams(request: ibc_applications_transfer_v1_tx_pb.MsgUpdateParams, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    updateParams(request: ibc_applications_transfer_v1_tx_pb.MsgUpdateParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    updateParams(request: ibc_applications_transfer_v1_tx_pb.MsgUpdateParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public transfer(request: ibc_applications_transfer_v1_tx_pb.MsgTransfer, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    public transfer(request: ibc_applications_transfer_v1_tx_pb.MsgTransfer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    public transfer(request: ibc_applications_transfer_v1_tx_pb.MsgTransfer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    public updateParams(request: ibc_applications_transfer_v1_tx_pb.MsgUpdateParams, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    public updateParams(request: ibc_applications_transfer_v1_tx_pb.MsgUpdateParams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    public updateParams(request: ibc_applications_transfer_v1_tx_pb.MsgUpdateParams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
}
