// package: provenance.name.v1
// file: provenance/name/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as provenance_name_v1_tx_pb from "../../../provenance/name/v1/tx_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as provenance_name_v1_name_pb from "../../../provenance/name/v1/name_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    bindName: IMsgService_IBindName;
    deleteName: IMsgService_IDeleteName;
    modifyName: IMsgService_IModifyName;
    createRootName: IMsgService_ICreateRootName;
    updateParams: IMsgService_IUpdateParams;
}

interface IMsgService_IBindName extends grpc.MethodDefinition<provenance_name_v1_tx_pb.MsgBindNameRequest, provenance_name_v1_tx_pb.MsgBindNameResponse> {
    path: "/provenance.name.v1.Msg/BindName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_name_v1_tx_pb.MsgBindNameRequest>;
    requestDeserialize: grpc.deserialize<provenance_name_v1_tx_pb.MsgBindNameRequest>;
    responseSerialize: grpc.serialize<provenance_name_v1_tx_pb.MsgBindNameResponse>;
    responseDeserialize: grpc.deserialize<provenance_name_v1_tx_pb.MsgBindNameResponse>;
}
interface IMsgService_IDeleteName extends grpc.MethodDefinition<provenance_name_v1_tx_pb.MsgDeleteNameRequest, provenance_name_v1_tx_pb.MsgDeleteNameResponse> {
    path: "/provenance.name.v1.Msg/DeleteName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_name_v1_tx_pb.MsgDeleteNameRequest>;
    requestDeserialize: grpc.deserialize<provenance_name_v1_tx_pb.MsgDeleteNameRequest>;
    responseSerialize: grpc.serialize<provenance_name_v1_tx_pb.MsgDeleteNameResponse>;
    responseDeserialize: grpc.deserialize<provenance_name_v1_tx_pb.MsgDeleteNameResponse>;
}
interface IMsgService_IModifyName extends grpc.MethodDefinition<provenance_name_v1_tx_pb.MsgModifyNameRequest, provenance_name_v1_tx_pb.MsgModifyNameResponse> {
    path: "/provenance.name.v1.Msg/ModifyName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_name_v1_tx_pb.MsgModifyNameRequest>;
    requestDeserialize: grpc.deserialize<provenance_name_v1_tx_pb.MsgModifyNameRequest>;
    responseSerialize: grpc.serialize<provenance_name_v1_tx_pb.MsgModifyNameResponse>;
    responseDeserialize: grpc.deserialize<provenance_name_v1_tx_pb.MsgModifyNameResponse>;
}
interface IMsgService_ICreateRootName extends grpc.MethodDefinition<provenance_name_v1_tx_pb.MsgCreateRootNameRequest, provenance_name_v1_tx_pb.MsgCreateRootNameResponse> {
    path: "/provenance.name.v1.Msg/CreateRootName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_name_v1_tx_pb.MsgCreateRootNameRequest>;
    requestDeserialize: grpc.deserialize<provenance_name_v1_tx_pb.MsgCreateRootNameRequest>;
    responseSerialize: grpc.serialize<provenance_name_v1_tx_pb.MsgCreateRootNameResponse>;
    responseDeserialize: grpc.deserialize<provenance_name_v1_tx_pb.MsgCreateRootNameResponse>;
}
interface IMsgService_IUpdateParams extends grpc.MethodDefinition<provenance_name_v1_tx_pb.MsgUpdateParamsRequest, provenance_name_v1_tx_pb.MsgUpdateParamsResponse> {
    path: "/provenance.name.v1.Msg/UpdateParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_name_v1_tx_pb.MsgUpdateParamsRequest>;
    requestDeserialize: grpc.deserialize<provenance_name_v1_tx_pb.MsgUpdateParamsRequest>;
    responseSerialize: grpc.serialize<provenance_name_v1_tx_pb.MsgUpdateParamsResponse>;
    responseDeserialize: grpc.deserialize<provenance_name_v1_tx_pb.MsgUpdateParamsResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
    bindName: grpc.handleUnaryCall<provenance_name_v1_tx_pb.MsgBindNameRequest, provenance_name_v1_tx_pb.MsgBindNameResponse>;
    deleteName: grpc.handleUnaryCall<provenance_name_v1_tx_pb.MsgDeleteNameRequest, provenance_name_v1_tx_pb.MsgDeleteNameResponse>;
    modifyName: grpc.handleUnaryCall<provenance_name_v1_tx_pb.MsgModifyNameRequest, provenance_name_v1_tx_pb.MsgModifyNameResponse>;
    createRootName: grpc.handleUnaryCall<provenance_name_v1_tx_pb.MsgCreateRootNameRequest, provenance_name_v1_tx_pb.MsgCreateRootNameResponse>;
    updateParams: grpc.handleUnaryCall<provenance_name_v1_tx_pb.MsgUpdateParamsRequest, provenance_name_v1_tx_pb.MsgUpdateParamsResponse>;
}

export interface IMsgClient {
    bindName(request: provenance_name_v1_tx_pb.MsgBindNameRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgBindNameResponse) => void): grpc.ClientUnaryCall;
    bindName(request: provenance_name_v1_tx_pb.MsgBindNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgBindNameResponse) => void): grpc.ClientUnaryCall;
    bindName(request: provenance_name_v1_tx_pb.MsgBindNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgBindNameResponse) => void): grpc.ClientUnaryCall;
    deleteName(request: provenance_name_v1_tx_pb.MsgDeleteNameRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgDeleteNameResponse) => void): grpc.ClientUnaryCall;
    deleteName(request: provenance_name_v1_tx_pb.MsgDeleteNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgDeleteNameResponse) => void): grpc.ClientUnaryCall;
    deleteName(request: provenance_name_v1_tx_pb.MsgDeleteNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgDeleteNameResponse) => void): grpc.ClientUnaryCall;
    modifyName(request: provenance_name_v1_tx_pb.MsgModifyNameRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgModifyNameResponse) => void): grpc.ClientUnaryCall;
    modifyName(request: provenance_name_v1_tx_pb.MsgModifyNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgModifyNameResponse) => void): grpc.ClientUnaryCall;
    modifyName(request: provenance_name_v1_tx_pb.MsgModifyNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgModifyNameResponse) => void): grpc.ClientUnaryCall;
    createRootName(request: provenance_name_v1_tx_pb.MsgCreateRootNameRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgCreateRootNameResponse) => void): grpc.ClientUnaryCall;
    createRootName(request: provenance_name_v1_tx_pb.MsgCreateRootNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgCreateRootNameResponse) => void): grpc.ClientUnaryCall;
    createRootName(request: provenance_name_v1_tx_pb.MsgCreateRootNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgCreateRootNameResponse) => void): grpc.ClientUnaryCall;
    updateParams(request: provenance_name_v1_tx_pb.MsgUpdateParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    updateParams(request: provenance_name_v1_tx_pb.MsgUpdateParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    updateParams(request: provenance_name_v1_tx_pb.MsgUpdateParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public bindName(request: provenance_name_v1_tx_pb.MsgBindNameRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgBindNameResponse) => void): grpc.ClientUnaryCall;
    public bindName(request: provenance_name_v1_tx_pb.MsgBindNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgBindNameResponse) => void): grpc.ClientUnaryCall;
    public bindName(request: provenance_name_v1_tx_pb.MsgBindNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgBindNameResponse) => void): grpc.ClientUnaryCall;
    public deleteName(request: provenance_name_v1_tx_pb.MsgDeleteNameRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgDeleteNameResponse) => void): grpc.ClientUnaryCall;
    public deleteName(request: provenance_name_v1_tx_pb.MsgDeleteNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgDeleteNameResponse) => void): grpc.ClientUnaryCall;
    public deleteName(request: provenance_name_v1_tx_pb.MsgDeleteNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgDeleteNameResponse) => void): grpc.ClientUnaryCall;
    public modifyName(request: provenance_name_v1_tx_pb.MsgModifyNameRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgModifyNameResponse) => void): grpc.ClientUnaryCall;
    public modifyName(request: provenance_name_v1_tx_pb.MsgModifyNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgModifyNameResponse) => void): grpc.ClientUnaryCall;
    public modifyName(request: provenance_name_v1_tx_pb.MsgModifyNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgModifyNameResponse) => void): grpc.ClientUnaryCall;
    public createRootName(request: provenance_name_v1_tx_pb.MsgCreateRootNameRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgCreateRootNameResponse) => void): grpc.ClientUnaryCall;
    public createRootName(request: provenance_name_v1_tx_pb.MsgCreateRootNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgCreateRootNameResponse) => void): grpc.ClientUnaryCall;
    public createRootName(request: provenance_name_v1_tx_pb.MsgCreateRootNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgCreateRootNameResponse) => void): grpc.ClientUnaryCall;
    public updateParams(request: provenance_name_v1_tx_pb.MsgUpdateParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    public updateParams(request: provenance_name_v1_tx_pb.MsgUpdateParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    public updateParams(request: provenance_name_v1_tx_pb.MsgUpdateParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
}
