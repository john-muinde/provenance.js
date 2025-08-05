// package: provenance.name.v1
// file: provenance/name/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as provenance_name_v1_query_pb from "../../../provenance/name/v1/query_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_name_v1_name_pb from "../../../provenance/name/v1/name_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
    resolve: IQueryService_IResolve;
    reverseLookup: IQueryService_IReverseLookup;
}

interface IQueryService_IParams extends grpc.MethodDefinition<provenance_name_v1_query_pb.QueryParamsRequest, provenance_name_v1_query_pb.QueryParamsResponse> {
    path: "/provenance.name.v1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_name_v1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<provenance_name_v1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<provenance_name_v1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<provenance_name_v1_query_pb.QueryParamsResponse>;
}
interface IQueryService_IResolve extends grpc.MethodDefinition<provenance_name_v1_query_pb.QueryResolveRequest, provenance_name_v1_query_pb.QueryResolveResponse> {
    path: "/provenance.name.v1.Query/Resolve";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_name_v1_query_pb.QueryResolveRequest>;
    requestDeserialize: grpc.deserialize<provenance_name_v1_query_pb.QueryResolveRequest>;
    responseSerialize: grpc.serialize<provenance_name_v1_query_pb.QueryResolveResponse>;
    responseDeserialize: grpc.deserialize<provenance_name_v1_query_pb.QueryResolveResponse>;
}
interface IQueryService_IReverseLookup extends grpc.MethodDefinition<provenance_name_v1_query_pb.QueryReverseLookupRequest, provenance_name_v1_query_pb.QueryReverseLookupResponse> {
    path: "/provenance.name.v1.Query/ReverseLookup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_name_v1_query_pb.QueryReverseLookupRequest>;
    requestDeserialize: grpc.deserialize<provenance_name_v1_query_pb.QueryReverseLookupRequest>;
    responseSerialize: grpc.serialize<provenance_name_v1_query_pb.QueryReverseLookupResponse>;
    responseDeserialize: grpc.deserialize<provenance_name_v1_query_pb.QueryReverseLookupResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
    params: grpc.handleUnaryCall<provenance_name_v1_query_pb.QueryParamsRequest, provenance_name_v1_query_pb.QueryParamsResponse>;
    resolve: grpc.handleUnaryCall<provenance_name_v1_query_pb.QueryResolveRequest, provenance_name_v1_query_pb.QueryResolveResponse>;
    reverseLookup: grpc.handleUnaryCall<provenance_name_v1_query_pb.QueryReverseLookupRequest, provenance_name_v1_query_pb.QueryReverseLookupResponse>;
}

export interface IQueryClient {
    params(request: provenance_name_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: provenance_name_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: provenance_name_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    resolve(request: provenance_name_v1_query_pb.QueryResolveRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryResolveResponse) => void): grpc.ClientUnaryCall;
    resolve(request: provenance_name_v1_query_pb.QueryResolveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryResolveResponse) => void): grpc.ClientUnaryCall;
    resolve(request: provenance_name_v1_query_pb.QueryResolveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryResolveResponse) => void): grpc.ClientUnaryCall;
    reverseLookup(request: provenance_name_v1_query_pb.QueryReverseLookupRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryReverseLookupResponse) => void): grpc.ClientUnaryCall;
    reverseLookup(request: provenance_name_v1_query_pb.QueryReverseLookupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryReverseLookupResponse) => void): grpc.ClientUnaryCall;
    reverseLookup(request: provenance_name_v1_query_pb.QueryReverseLookupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryReverseLookupResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public params(request: provenance_name_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: provenance_name_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: provenance_name_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public resolve(request: provenance_name_v1_query_pb.QueryResolveRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryResolveResponse) => void): grpc.ClientUnaryCall;
    public resolve(request: provenance_name_v1_query_pb.QueryResolveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryResolveResponse) => void): grpc.ClientUnaryCall;
    public resolve(request: provenance_name_v1_query_pb.QueryResolveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryResolveResponse) => void): grpc.ClientUnaryCall;
    public reverseLookup(request: provenance_name_v1_query_pb.QueryReverseLookupRequest, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryReverseLookupResponse) => void): grpc.ClientUnaryCall;
    public reverseLookup(request: provenance_name_v1_query_pb.QueryReverseLookupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryReverseLookupResponse) => void): grpc.ClientUnaryCall;
    public reverseLookup(request: provenance_name_v1_query_pb.QueryReverseLookupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_name_v1_query_pb.QueryReverseLookupResponse) => void): grpc.ClientUnaryCall;
}
