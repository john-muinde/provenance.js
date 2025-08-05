// package: provenance.attribute.v1
// file: provenance/attribute/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as provenance_attribute_v1_query_pb from "../../../provenance/attribute/v1/query_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_attribute_v1_attribute_pb from "../../../provenance/attribute/v1/attribute_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
    attribute: IQueryService_IAttribute;
    attributes: IQueryService_IAttributes;
    scan: IQueryService_IScan;
    attributeAccounts: IQueryService_IAttributeAccounts;
    accountData: IQueryService_IAccountData;
}

interface IQueryService_IParams extends grpc.MethodDefinition<provenance_attribute_v1_query_pb.QueryParamsRequest, provenance_attribute_v1_query_pb.QueryParamsResponse> {
    path: "/provenance.attribute.v1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_query_pb.QueryParamsResponse>;
}
interface IQueryService_IAttribute extends grpc.MethodDefinition<provenance_attribute_v1_query_pb.QueryAttributeRequest, provenance_attribute_v1_query_pb.QueryAttributeResponse> {
    path: "/provenance.attribute.v1.Query/Attribute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_query_pb.QueryAttributeRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_query_pb.QueryAttributeRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_query_pb.QueryAttributeResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_query_pb.QueryAttributeResponse>;
}
interface IQueryService_IAttributes extends grpc.MethodDefinition<provenance_attribute_v1_query_pb.QueryAttributesRequest, provenance_attribute_v1_query_pb.QueryAttributesResponse> {
    path: "/provenance.attribute.v1.Query/Attributes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_query_pb.QueryAttributesRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_query_pb.QueryAttributesRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_query_pb.QueryAttributesResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_query_pb.QueryAttributesResponse>;
}
interface IQueryService_IScan extends grpc.MethodDefinition<provenance_attribute_v1_query_pb.QueryScanRequest, provenance_attribute_v1_query_pb.QueryScanResponse> {
    path: "/provenance.attribute.v1.Query/Scan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_query_pb.QueryScanRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_query_pb.QueryScanRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_query_pb.QueryScanResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_query_pb.QueryScanResponse>;
}
interface IQueryService_IAttributeAccounts extends grpc.MethodDefinition<provenance_attribute_v1_query_pb.QueryAttributeAccountsRequest, provenance_attribute_v1_query_pb.QueryAttributeAccountsResponse> {
    path: "/provenance.attribute.v1.Query/AttributeAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_query_pb.QueryAttributeAccountsRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_query_pb.QueryAttributeAccountsRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_query_pb.QueryAttributeAccountsResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_query_pb.QueryAttributeAccountsResponse>;
}
interface IQueryService_IAccountData extends grpc.MethodDefinition<provenance_attribute_v1_query_pb.QueryAccountDataRequest, provenance_attribute_v1_query_pb.QueryAccountDataResponse> {
    path: "/provenance.attribute.v1.Query/AccountData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_attribute_v1_query_pb.QueryAccountDataRequest>;
    requestDeserialize: grpc.deserialize<provenance_attribute_v1_query_pb.QueryAccountDataRequest>;
    responseSerialize: grpc.serialize<provenance_attribute_v1_query_pb.QueryAccountDataResponse>;
    responseDeserialize: grpc.deserialize<provenance_attribute_v1_query_pb.QueryAccountDataResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
    params: grpc.handleUnaryCall<provenance_attribute_v1_query_pb.QueryParamsRequest, provenance_attribute_v1_query_pb.QueryParamsResponse>;
    attribute: grpc.handleUnaryCall<provenance_attribute_v1_query_pb.QueryAttributeRequest, provenance_attribute_v1_query_pb.QueryAttributeResponse>;
    attributes: grpc.handleUnaryCall<provenance_attribute_v1_query_pb.QueryAttributesRequest, provenance_attribute_v1_query_pb.QueryAttributesResponse>;
    scan: grpc.handleUnaryCall<provenance_attribute_v1_query_pb.QueryScanRequest, provenance_attribute_v1_query_pb.QueryScanResponse>;
    attributeAccounts: grpc.handleUnaryCall<provenance_attribute_v1_query_pb.QueryAttributeAccountsRequest, provenance_attribute_v1_query_pb.QueryAttributeAccountsResponse>;
    accountData: grpc.handleUnaryCall<provenance_attribute_v1_query_pb.QueryAccountDataRequest, provenance_attribute_v1_query_pb.QueryAccountDataResponse>;
}

export interface IQueryClient {
    params(request: provenance_attribute_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: provenance_attribute_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: provenance_attribute_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    attribute(request: provenance_attribute_v1_query_pb.QueryAttributeRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributeResponse) => void): grpc.ClientUnaryCall;
    attribute(request: provenance_attribute_v1_query_pb.QueryAttributeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributeResponse) => void): grpc.ClientUnaryCall;
    attribute(request: provenance_attribute_v1_query_pb.QueryAttributeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributeResponse) => void): grpc.ClientUnaryCall;
    attributes(request: provenance_attribute_v1_query_pb.QueryAttributesRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributesResponse) => void): grpc.ClientUnaryCall;
    attributes(request: provenance_attribute_v1_query_pb.QueryAttributesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributesResponse) => void): grpc.ClientUnaryCall;
    attributes(request: provenance_attribute_v1_query_pb.QueryAttributesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributesResponse) => void): grpc.ClientUnaryCall;
    scan(request: provenance_attribute_v1_query_pb.QueryScanRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryScanResponse) => void): grpc.ClientUnaryCall;
    scan(request: provenance_attribute_v1_query_pb.QueryScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryScanResponse) => void): grpc.ClientUnaryCall;
    scan(request: provenance_attribute_v1_query_pb.QueryScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryScanResponse) => void): grpc.ClientUnaryCall;
    attributeAccounts(request: provenance_attribute_v1_query_pb.QueryAttributeAccountsRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributeAccountsResponse) => void): grpc.ClientUnaryCall;
    attributeAccounts(request: provenance_attribute_v1_query_pb.QueryAttributeAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributeAccountsResponse) => void): grpc.ClientUnaryCall;
    attributeAccounts(request: provenance_attribute_v1_query_pb.QueryAttributeAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributeAccountsResponse) => void): grpc.ClientUnaryCall;
    accountData(request: provenance_attribute_v1_query_pb.QueryAccountDataRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAccountDataResponse) => void): grpc.ClientUnaryCall;
    accountData(request: provenance_attribute_v1_query_pb.QueryAccountDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAccountDataResponse) => void): grpc.ClientUnaryCall;
    accountData(request: provenance_attribute_v1_query_pb.QueryAccountDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAccountDataResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public params(request: provenance_attribute_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: provenance_attribute_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: provenance_attribute_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public attribute(request: provenance_attribute_v1_query_pb.QueryAttributeRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributeResponse) => void): grpc.ClientUnaryCall;
    public attribute(request: provenance_attribute_v1_query_pb.QueryAttributeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributeResponse) => void): grpc.ClientUnaryCall;
    public attribute(request: provenance_attribute_v1_query_pb.QueryAttributeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributeResponse) => void): grpc.ClientUnaryCall;
    public attributes(request: provenance_attribute_v1_query_pb.QueryAttributesRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributesResponse) => void): grpc.ClientUnaryCall;
    public attributes(request: provenance_attribute_v1_query_pb.QueryAttributesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributesResponse) => void): grpc.ClientUnaryCall;
    public attributes(request: provenance_attribute_v1_query_pb.QueryAttributesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributesResponse) => void): grpc.ClientUnaryCall;
    public scan(request: provenance_attribute_v1_query_pb.QueryScanRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryScanResponse) => void): grpc.ClientUnaryCall;
    public scan(request: provenance_attribute_v1_query_pb.QueryScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryScanResponse) => void): grpc.ClientUnaryCall;
    public scan(request: provenance_attribute_v1_query_pb.QueryScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryScanResponse) => void): grpc.ClientUnaryCall;
    public attributeAccounts(request: provenance_attribute_v1_query_pb.QueryAttributeAccountsRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributeAccountsResponse) => void): grpc.ClientUnaryCall;
    public attributeAccounts(request: provenance_attribute_v1_query_pb.QueryAttributeAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributeAccountsResponse) => void): grpc.ClientUnaryCall;
    public attributeAccounts(request: provenance_attribute_v1_query_pb.QueryAttributeAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAttributeAccountsResponse) => void): grpc.ClientUnaryCall;
    public accountData(request: provenance_attribute_v1_query_pb.QueryAccountDataRequest, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAccountDataResponse) => void): grpc.ClientUnaryCall;
    public accountData(request: provenance_attribute_v1_query_pb.QueryAccountDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAccountDataResponse) => void): grpc.ClientUnaryCall;
    public accountData(request: provenance_attribute_v1_query_pb.QueryAccountDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_attribute_v1_query_pb.QueryAccountDataResponse) => void): grpc.ClientUnaryCall;
}
