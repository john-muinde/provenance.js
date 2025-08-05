// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ibc_applications_transfer_v1_query_pb from "../../../../ibc/applications/transfer/v1/query_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../../cosmos/base/v1beta1/coin_pb";
import * as ibc_applications_transfer_v1_transfer_pb from "../../../../ibc/applications/transfer/v1/transfer_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
    denomHash: IQueryService_IDenomHash;
    escrowAddress: IQueryService_IEscrowAddress;
    totalEscrowForDenom: IQueryService_ITotalEscrowForDenom;
}

interface IQueryService_IParams extends grpc.MethodDefinition<ibc_applications_transfer_v1_query_pb.QueryParamsRequest, ibc_applications_transfer_v1_query_pb.QueryParamsResponse> {
    path: "/ibc.applications.transfer.v1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryParamsResponse>;
}
interface IQueryService_IDenomHash extends grpc.MethodDefinition<ibc_applications_transfer_v1_query_pb.QueryDenomHashRequest, ibc_applications_transfer_v1_query_pb.QueryDenomHashResponse> {
    path: "/ibc.applications.transfer.v1.Query/DenomHash";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryDenomHashRequest>;
    requestDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryDenomHashRequest>;
    responseSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryDenomHashResponse>;
    responseDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryDenomHashResponse>;
}
interface IQueryService_IEscrowAddress extends grpc.MethodDefinition<ibc_applications_transfer_v1_query_pb.QueryEscrowAddressRequest, ibc_applications_transfer_v1_query_pb.QueryEscrowAddressResponse> {
    path: "/ibc.applications.transfer.v1.Query/EscrowAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryEscrowAddressRequest>;
    requestDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryEscrowAddressRequest>;
    responseSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryEscrowAddressResponse>;
    responseDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryEscrowAddressResponse>;
}
interface IQueryService_ITotalEscrowForDenom extends grpc.MethodDefinition<ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomRequest, ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomResponse> {
    path: "/ibc.applications.transfer.v1.Query/TotalEscrowForDenom";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomRequest>;
    requestDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomRequest>;
    responseSerialize: grpc.serialize<ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomResponse>;
    responseDeserialize: grpc.deserialize<ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
    params: grpc.handleUnaryCall<ibc_applications_transfer_v1_query_pb.QueryParamsRequest, ibc_applications_transfer_v1_query_pb.QueryParamsResponse>;
    denomHash: grpc.handleUnaryCall<ibc_applications_transfer_v1_query_pb.QueryDenomHashRequest, ibc_applications_transfer_v1_query_pb.QueryDenomHashResponse>;
    escrowAddress: grpc.handleUnaryCall<ibc_applications_transfer_v1_query_pb.QueryEscrowAddressRequest, ibc_applications_transfer_v1_query_pb.QueryEscrowAddressResponse>;
    totalEscrowForDenom: grpc.handleUnaryCall<ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomRequest, ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomResponse>;
}

export interface IQueryClient {
    params(request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    denomHash(request: ibc_applications_transfer_v1_query_pb.QueryDenomHashRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomHashResponse) => void): grpc.ClientUnaryCall;
    denomHash(request: ibc_applications_transfer_v1_query_pb.QueryDenomHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomHashResponse) => void): grpc.ClientUnaryCall;
    denomHash(request: ibc_applications_transfer_v1_query_pb.QueryDenomHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomHashResponse) => void): grpc.ClientUnaryCall;
    escrowAddress(request: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressResponse) => void): grpc.ClientUnaryCall;
    escrowAddress(request: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressResponse) => void): grpc.ClientUnaryCall;
    escrowAddress(request: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressResponse) => void): grpc.ClientUnaryCall;
    totalEscrowForDenom(request: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomResponse) => void): grpc.ClientUnaryCall;
    totalEscrowForDenom(request: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomResponse) => void): grpc.ClientUnaryCall;
    totalEscrowForDenom(request: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public params(request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: ibc_applications_transfer_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public denomHash(request: ibc_applications_transfer_v1_query_pb.QueryDenomHashRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomHashResponse) => void): grpc.ClientUnaryCall;
    public denomHash(request: ibc_applications_transfer_v1_query_pb.QueryDenomHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomHashResponse) => void): grpc.ClientUnaryCall;
    public denomHash(request: ibc_applications_transfer_v1_query_pb.QueryDenomHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryDenomHashResponse) => void): grpc.ClientUnaryCall;
    public escrowAddress(request: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressResponse) => void): grpc.ClientUnaryCall;
    public escrowAddress(request: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressResponse) => void): grpc.ClientUnaryCall;
    public escrowAddress(request: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryEscrowAddressResponse) => void): grpc.ClientUnaryCall;
    public totalEscrowForDenom(request: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomRequest, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomResponse) => void): grpc.ClientUnaryCall;
    public totalEscrowForDenom(request: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomResponse) => void): grpc.ClientUnaryCall;
    public totalEscrowForDenom(request: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_applications_transfer_v1_query_pb.QueryTotalEscrowForDenomResponse) => void): grpc.ClientUnaryCall;
}
