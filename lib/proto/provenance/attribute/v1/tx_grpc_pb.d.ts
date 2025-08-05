// package: provenance.attribute.v1
// file: provenance/attribute/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as provenance_attribute_v1_tx_pb from "../../../provenance/attribute/v1/tx_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as provenance_attribute_v1_attribute_pb from "../../../provenance/attribute/v1/attribute_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addAttribute: IMsgService_IAddAttribute;
    updateAttribute: IMsgService_IUpdateAttribute;
    updateAttributeExpiration: IMsgService_IUpdateAttributeExpiration;
    deleteAttribute: IMsgService_IDeleteAttribute;
    deleteDistinctAttribute: IMsgService_IDeleteDistinctAttribute;
    setAccountData: IMsgService_ISetAccountData;
    updateParams: IMsgService_IUpdateParams;
}

interface IMsgService_IAddAttribute extends grpc.MethodDefinition<provenance_attribute_v1_tx_pb.MsgAddAttributeRequest, provenance_attribute_v1_tx_pb.MsgAddAttributeResponse> {
    path: "/provenance.attribute.v1.Msg/AddAttribute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgAddAttributeRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgAddAttributeRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgAddAttributeResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgAddAttributeResponse>;
}
interface IMsgService_IUpdateAttribute extends grpc.MethodDefinition<provenance_attribute_v1_tx_pb.MsgUpdateAttributeRequest, provenance_attribute_v1_tx_pb.MsgUpdateAttributeResponse> {
    path: "/provenance.attribute.v1.Msg/UpdateAttribute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgUpdateAttributeRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgUpdateAttributeRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgUpdateAttributeResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgUpdateAttributeResponse>;
}
interface IMsgService_IUpdateAttributeExpiration extends grpc.MethodDefinition<provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationRequest, provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationResponse> {
    path: "/provenance.attribute.v1.Msg/UpdateAttributeExpiration";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationResponse>;
}
interface IMsgService_IDeleteAttribute extends grpc.MethodDefinition<provenance_attribute_v1_tx_pb.MsgDeleteAttributeRequest, provenance_attribute_v1_tx_pb.MsgDeleteAttributeResponse> {
    path: "/provenance.attribute.v1.Msg/DeleteAttribute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgDeleteAttributeRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgDeleteAttributeRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgDeleteAttributeResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgDeleteAttributeResponse>;
}
interface IMsgService_IDeleteDistinctAttribute extends grpc.MethodDefinition<provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeRequest, provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeResponse> {
    path: "/provenance.attribute.v1.Msg/DeleteDistinctAttribute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeResponse>;
}
interface IMsgService_ISetAccountData extends grpc.MethodDefinition<provenance_attribute_v1_tx_pb.MsgSetAccountDataRequest, provenance_attribute_v1_tx_pb.MsgSetAccountDataResponse> {
    path: "/provenance.attribute.v1.Msg/SetAccountData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgSetAccountDataRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgSetAccountDataRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgSetAccountDataResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgSetAccountDataResponse>;
}
interface IMsgService_IUpdateParams extends grpc.MethodDefinition<provenance_attribute_v1_tx_pb.MsgUpdateParamsRequest, provenance_attribute_v1_tx_pb.MsgUpdateParamsResponse> {
    path: "/provenance.attribute.v1.Msg/UpdateParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgUpdateParamsRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgUpdateParamsRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_tx_pb.MsgUpdateParamsResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_tx_pb.MsgUpdateParamsResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
    addAttribute: grpc.handleUnaryCall<provenance_attribute_v1_tx_pb.MsgAddAttributeRequest, provenance_attribute_v1_tx_pb.MsgAddAttributeResponse>;
    updateAttribute: grpc.handleUnaryCall<provenance_attribute_v1_tx_pb.MsgUpdateAttributeRequest, provenance_attribute_v1_tx_pb.MsgUpdateAttributeResponse>;
    updateAttributeExpiration: grpc.handleUnaryCall<provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationRequest, provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationResponse>;
    deleteAttribute: grpc.handleUnaryCall<provenance_attribute_v1_tx_pb.MsgDeleteAttributeRequest, provenance_attribute_v1_tx_pb.MsgDeleteAttributeResponse>;
    deleteDistinctAttribute: grpc.handleUnaryCall<provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeRequest, provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeResponse>;
    setAccountData: grpc.handleUnaryCall<provenance_attribute_v1_tx_pb.MsgSetAccountDataRequest, provenance_attribute_v1_tx_pb.MsgSetAccountDataResponse>;
    updateParams: grpc.handleUnaryCall<provenance_attribute_v1_tx_pb.MsgUpdateParamsRequest, provenance_attribute_v1_tx_pb.MsgUpdateParamsResponse>;
}

export interface IMsgClient {
    addAttribute(request: provenance_attribute_v1_tx_pb.MsgAddAttributeRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgAddAttributeResponse) => void): grpc.ClientUnaryCall;
    addAttribute(request: provenance_attribute_v1_tx_pb.MsgAddAttributeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgAddAttributeResponse) => void): grpc.ClientUnaryCall;
    addAttribute(request: provenance_attribute_v1_tx_pb.MsgAddAttributeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgAddAttributeResponse) => void): grpc.ClientUnaryCall;
    updateAttribute(request: provenance_attribute_v1_tx_pb.MsgUpdateAttributeRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateAttributeResponse) => void): grpc.ClientUnaryCall;
    updateAttribute(request: provenance_attribute_v1_tx_pb.MsgUpdateAttributeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateAttributeResponse) => void): grpc.ClientUnaryCall;
    updateAttribute(request: provenance_attribute_v1_tx_pb.MsgUpdateAttributeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateAttributeResponse) => void): grpc.ClientUnaryCall;
    updateAttributeExpiration(request: provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationResponse) => void): grpc.ClientUnaryCall;
    updateAttributeExpiration(request: provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationResponse) => void): grpc.ClientUnaryCall;
    updateAttributeExpiration(request: provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationResponse) => void): grpc.ClientUnaryCall;
    deleteAttribute(request: provenance_attribute_v1_tx_pb.MsgDeleteAttributeRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgDeleteAttributeResponse) => void): grpc.ClientUnaryCall;
    deleteAttribute(request: provenance_attribute_v1_tx_pb.MsgDeleteAttributeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgDeleteAttributeResponse) => void): grpc.ClientUnaryCall;
    deleteAttribute(request: provenance_attribute_v1_tx_pb.MsgDeleteAttributeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgDeleteAttributeResponse) => void): grpc.ClientUnaryCall;
    deleteDistinctAttribute(request: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeResponse) => void): grpc.ClientUnaryCall;
    deleteDistinctAttribute(request: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeResponse) => void): grpc.ClientUnaryCall;
    deleteDistinctAttribute(request: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeResponse) => void): grpc.ClientUnaryCall;
    setAccountData(request: provenance_attribute_v1_tx_pb.MsgSetAccountDataRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    setAccountData(request: provenance_attribute_v1_tx_pb.MsgSetAccountDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    setAccountData(request: provenance_attribute_v1_tx_pb.MsgSetAccountDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    updateParams(request: provenance_attribute_v1_tx_pb.MsgUpdateParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    updateParams(request: provenance_attribute_v1_tx_pb.MsgUpdateParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    updateParams(request: provenance_attribute_v1_tx_pb.MsgUpdateParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addAttribute(request: provenance_attribute_v1_tx_pb.MsgAddAttributeRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgAddAttributeResponse) => void): grpc.ClientUnaryCall;
    public addAttribute(request: provenance_attribute_v1_tx_pb.MsgAddAttributeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgAddAttributeResponse) => void): grpc.ClientUnaryCall;
    public addAttribute(request: provenance_attribute_v1_tx_pb.MsgAddAttributeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgAddAttributeResponse) => void): grpc.ClientUnaryCall;
    public updateAttribute(request: provenance_attribute_v1_tx_pb.MsgUpdateAttributeRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateAttributeResponse) => void): grpc.ClientUnaryCall;
    public updateAttribute(request: provenance_attribute_v1_tx_pb.MsgUpdateAttributeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateAttributeResponse) => void): grpc.ClientUnaryCall;
    public updateAttribute(request: provenance_attribute_v1_tx_pb.MsgUpdateAttributeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateAttributeResponse) => void): grpc.ClientUnaryCall;
    public updateAttributeExpiration(request: provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationResponse) => void): grpc.ClientUnaryCall;
    public updateAttributeExpiration(request: provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationResponse) => void): grpc.ClientUnaryCall;
    public updateAttributeExpiration(request: provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateAttributeExpirationResponse) => void): grpc.ClientUnaryCall;
    public deleteAttribute(request: provenance_attribute_v1_tx_pb.MsgDeleteAttributeRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgDeleteAttributeResponse) => void): grpc.ClientUnaryCall;
    public deleteAttribute(request: provenance_attribute_v1_tx_pb.MsgDeleteAttributeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgDeleteAttributeResponse) => void): grpc.ClientUnaryCall;
    public deleteAttribute(request: provenance_attribute_v1_tx_pb.MsgDeleteAttributeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgDeleteAttributeResponse) => void): grpc.ClientUnaryCall;
    public deleteDistinctAttribute(request: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeResponse) => void): grpc.ClientUnaryCall;
    public deleteDistinctAttribute(request: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeResponse) => void): grpc.ClientUnaryCall;
    public deleteDistinctAttribute(request: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeResponse) => void): grpc.ClientUnaryCall;
    public setAccountData(request: provenance_attribute_v1_tx_pb.MsgSetAccountDataRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    public setAccountData(request: provenance_attribute_v1_tx_pb.MsgSetAccountDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    public setAccountData(request: provenance_attribute_v1_tx_pb.MsgSetAccountDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    public updateParams(request: provenance_attribute_v1_tx_pb.MsgUpdateParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    public updateParams(request: provenance_attribute_v1_tx_pb.MsgUpdateParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    public updateParams(request: provenance_attribute_v1_tx_pb.MsgUpdateParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
}
