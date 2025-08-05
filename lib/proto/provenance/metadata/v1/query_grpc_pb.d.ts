// package: provenance.metadata.v1
// file: provenance/metadata/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as provenance_metadata_v1_query_pb from "../../../provenance/metadata/v1/query_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as provenance_metadata_v1_metadata_pb from "../../../provenance/metadata/v1/metadata_pb";
import * as provenance_metadata_v1_scope_pb from "../../../provenance/metadata/v1/scope_pb";
import * as provenance_metadata_v1_specification_pb from "../../../provenance/metadata/v1/specification_pb";
import * as provenance_metadata_v1_objectstore_pb from "../../../provenance/metadata/v1/objectstore_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
    scope: IQueryService_IScope;
    scopesAll: IQueryService_IScopesAll;
    sessions: IQueryService_ISessions;
    sessionsAll: IQueryService_ISessionsAll;
    records: IQueryService_IRecords;
    recordsAll: IQueryService_IRecordsAll;
    ownership: IQueryService_IOwnership;
    valueOwnership: IQueryService_IValueOwnership;
    scopeSpecification: IQueryService_IScopeSpecification;
    scopeSpecificationsAll: IQueryService_IScopeSpecificationsAll;
    contractSpecification: IQueryService_IContractSpecification;
    contractSpecificationsAll: IQueryService_IContractSpecificationsAll;
    recordSpecificationsForContractSpecification: IQueryService_IRecordSpecificationsForContractSpecification;
    recordSpecification: IQueryService_IRecordSpecification;
    recordSpecificationsAll: IQueryService_IRecordSpecificationsAll;
    getByAddr: IQueryService_IGetByAddr;
    oSLocatorParams: IQueryService_IOSLocatorParams;
    oSLocator: IQueryService_IOSLocator;
    oSLocatorsByURI: IQueryService_IOSLocatorsByURI;
    oSLocatorsByScope: IQueryService_IOSLocatorsByScope;
    oSAllLocators: IQueryService_IOSAllLocators;
    accountData: IQueryService_IAccountData;
    scopeNetAssetValues: IQueryService_IScopeNetAssetValues;
}

interface IQueryService_IParams extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.QueryParamsRequest, provenance_metadata_v1_query_pb.QueryParamsResponse> {
    path: "/provenance.metadata.v1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.QueryParamsResponse>;
}
interface IQueryService_IScope extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.ScopeRequest, provenance_metadata_v1_query_pb.ScopeResponse> {
    path: "/provenance.metadata.v1.Query/Scope";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ScopeRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ScopeRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ScopeResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ScopeResponse>;
}
interface IQueryService_IScopesAll extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.ScopesAllRequest, provenance_metadata_v1_query_pb.ScopesAllResponse> {
    path: "/provenance.metadata.v1.Query/ScopesAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ScopesAllRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ScopesAllRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ScopesAllResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ScopesAllResponse>;
}
interface IQueryService_ISessions extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.SessionsRequest, provenance_metadata_v1_query_pb.SessionsResponse> {
    path: "/provenance.metadata.v1.Query/Sessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.SessionsRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.SessionsRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.SessionsResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.SessionsResponse>;
}
interface IQueryService_ISessionsAll extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.SessionsAllRequest, provenance_metadata_v1_query_pb.SessionsAllResponse> {
    path: "/provenance.metadata.v1.Query/SessionsAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.SessionsAllRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.SessionsAllRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.SessionsAllResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.SessionsAllResponse>;
}
interface IQueryService_IRecords extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.RecordsRequest, provenance_metadata_v1_query_pb.RecordsResponse> {
    path: "/provenance.metadata.v1.Query/Records";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.RecordsRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.RecordsRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.RecordsResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.RecordsResponse>;
}
interface IQueryService_IRecordsAll extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.RecordsAllRequest, provenance_metadata_v1_query_pb.RecordsAllResponse> {
    path: "/provenance.metadata.v1.Query/RecordsAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.RecordsAllRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.RecordsAllRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.RecordsAllResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.RecordsAllResponse>;
}
interface IQueryService_IOwnership extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.OwnershipRequest, provenance_metadata_v1_query_pb.OwnershipResponse> {
    path: "/provenance.metadata.v1.Query/Ownership";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.OwnershipRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.OwnershipRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.OwnershipResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.OwnershipResponse>;
}
interface IQueryService_IValueOwnership extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.ValueOwnershipRequest, provenance_metadata_v1_query_pb.ValueOwnershipResponse> {
    path: "/provenance.metadata.v1.Query/ValueOwnership";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ValueOwnershipRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ValueOwnershipRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ValueOwnershipResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ValueOwnershipResponse>;
}
interface IQueryService_IScopeSpecification extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.ScopeSpecificationRequest, provenance_metadata_v1_query_pb.ScopeSpecificationResponse> {
    path: "/provenance.metadata.v1.Query/ScopeSpecification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ScopeSpecificationRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ScopeSpecificationRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ScopeSpecificationResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ScopeSpecificationResponse>;
}
interface IQueryService_IScopeSpecificationsAll extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.ScopeSpecificationsAllRequest, provenance_metadata_v1_query_pb.ScopeSpecificationsAllResponse> {
    path: "/provenance.metadata.v1.Query/ScopeSpecificationsAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ScopeSpecificationsAllRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ScopeSpecificationsAllRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ScopeSpecificationsAllResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ScopeSpecificationsAllResponse>;
}
interface IQueryService_IContractSpecification extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.ContractSpecificationRequest, provenance_metadata_v1_query_pb.ContractSpecificationResponse> {
    path: "/provenance.metadata.v1.Query/ContractSpecification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ContractSpecificationRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ContractSpecificationRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ContractSpecificationResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ContractSpecificationResponse>;
}
interface IQueryService_IContractSpecificationsAll extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.ContractSpecificationsAllRequest, provenance_metadata_v1_query_pb.ContractSpecificationsAllResponse> {
    path: "/provenance.metadata.v1.Query/ContractSpecificationsAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ContractSpecificationsAllRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ContractSpecificationsAllRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.ContractSpecificationsAllResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.ContractSpecificationsAllResponse>;
}
interface IQueryService_IRecordSpecificationsForContractSpecification extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationRequest, provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationResponse> {
    path: "/provenance.metadata.v1.Query/RecordSpecificationsForContractSpecification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationResponse>;
}
interface IQueryService_IRecordSpecification extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.RecordSpecificationRequest, provenance_metadata_v1_query_pb.RecordSpecificationResponse> {
    path: "/provenance.metadata.v1.Query/RecordSpecification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.RecordSpecificationRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.RecordSpecificationRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.RecordSpecificationResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.RecordSpecificationResponse>;
}
interface IQueryService_IRecordSpecificationsAll extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.RecordSpecificationsAllRequest, provenance_metadata_v1_query_pb.RecordSpecificationsAllResponse> {
    path: "/provenance.metadata.v1.Query/RecordSpecificationsAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.RecordSpecificationsAllRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.RecordSpecificationsAllRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.RecordSpecificationsAllResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.RecordSpecificationsAllResponse>;
}
interface IQueryService_IGetByAddr extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.GetByAddrRequest, provenance_metadata_v1_query_pb.GetByAddrResponse> {
    path: "/provenance.metadata.v1.Query/GetByAddr";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.GetByAddrRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.GetByAddrRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.GetByAddrResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.GetByAddrResponse>;
}
interface IQueryService_IOSLocatorParams extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.OSLocatorParamsRequest, provenance_metadata_v1_query_pb.OSLocatorParamsResponse> {
    path: "/provenance.metadata.v1.Query/OSLocatorParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.OSLocatorParamsRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.OSLocatorParamsRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.OSLocatorParamsResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.OSLocatorParamsResponse>;
}
interface IQueryService_IOSLocator extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.OSLocatorRequest, provenance_metadata_v1_query_pb.OSLocatorResponse> {
    path: "/provenance.metadata.v1.Query/OSLocator";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.OSLocatorRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.OSLocatorRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.OSLocatorResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.OSLocatorResponse>;
}
interface IQueryService_IOSLocatorsByURI extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.OSLocatorsByURIRequest, provenance_metadata_v1_query_pb.OSLocatorsByURIResponse> {
    path: "/provenance.metadata.v1.Query/OSLocatorsByURI";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.OSLocatorsByURIRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.OSLocatorsByURIRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.OSLocatorsByURIResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.OSLocatorsByURIResponse>;
}
interface IQueryService_IOSLocatorsByScope extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.OSLocatorsByScopeRequest, provenance_metadata_v1_query_pb.OSLocatorsByScopeResponse> {
    path: "/provenance.metadata.v1.Query/OSLocatorsByScope";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.OSLocatorsByScopeRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.OSLocatorsByScopeRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.OSLocatorsByScopeResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.OSLocatorsByScopeResponse>;
}
interface IQueryService_IOSAllLocators extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.OSAllLocatorsRequest, provenance_metadata_v1_query_pb.OSAllLocatorsResponse> {
    path: "/provenance.metadata.v1.Query/OSAllLocators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.OSAllLocatorsRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.OSAllLocatorsRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.OSAllLocatorsResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.OSAllLocatorsResponse>;
}
interface IQueryService_IAccountData extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.AccountDataRequest, provenance_metadata_v1_query_pb.AccountDataResponse> {
    path: "/provenance.metadata.v1.Query/AccountData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.AccountDataRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.AccountDataRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.AccountDataResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.AccountDataResponse>;
}
interface IQueryService_IScopeNetAssetValues extends grpc.MethodDefinition<provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesRequest, provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesResponse> {
    path: "/provenance.metadata.v1.Query/ScopeNetAssetValues";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
    params: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.QueryParamsRequest, provenance_metadata_v1_query_pb.QueryParamsResponse>;
    scope: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.ScopeRequest, provenance_metadata_v1_query_pb.ScopeResponse>;
    scopesAll: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.ScopesAllRequest, provenance_metadata_v1_query_pb.ScopesAllResponse>;
    sessions: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.SessionsRequest, provenance_metadata_v1_query_pb.SessionsResponse>;
    sessionsAll: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.SessionsAllRequest, provenance_metadata_v1_query_pb.SessionsAllResponse>;
    records: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.RecordsRequest, provenance_metadata_v1_query_pb.RecordsResponse>;
    recordsAll: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.RecordsAllRequest, provenance_metadata_v1_query_pb.RecordsAllResponse>;
    ownership: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.OwnershipRequest, provenance_metadata_v1_query_pb.OwnershipResponse>;
    valueOwnership: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.ValueOwnershipRequest, provenance_metadata_v1_query_pb.ValueOwnershipResponse>;
    scopeSpecification: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.ScopeSpecificationRequest, provenance_metadata_v1_query_pb.ScopeSpecificationResponse>;
    scopeSpecificationsAll: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.ScopeSpecificationsAllRequest, provenance_metadata_v1_query_pb.ScopeSpecificationsAllResponse>;
    contractSpecification: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.ContractSpecificationRequest, provenance_metadata_v1_query_pb.ContractSpecificationResponse>;
    contractSpecificationsAll: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.ContractSpecificationsAllRequest, provenance_metadata_v1_query_pb.ContractSpecificationsAllResponse>;
    recordSpecificationsForContractSpecification: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationRequest, provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationResponse>;
    recordSpecification: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.RecordSpecificationRequest, provenance_metadata_v1_query_pb.RecordSpecificationResponse>;
    recordSpecificationsAll: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.RecordSpecificationsAllRequest, provenance_metadata_v1_query_pb.RecordSpecificationsAllResponse>;
    getByAddr: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.GetByAddrRequest, provenance_metadata_v1_query_pb.GetByAddrResponse>;
    oSLocatorParams: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.OSLocatorParamsRequest, provenance_metadata_v1_query_pb.OSLocatorParamsResponse>;
    oSLocator: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.OSLocatorRequest, provenance_metadata_v1_query_pb.OSLocatorResponse>;
    oSLocatorsByURI: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.OSLocatorsByURIRequest, provenance_metadata_v1_query_pb.OSLocatorsByURIResponse>;
    oSLocatorsByScope: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.OSLocatorsByScopeRequest, provenance_metadata_v1_query_pb.OSLocatorsByScopeResponse>;
    oSAllLocators: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.OSAllLocatorsRequest, provenance_metadata_v1_query_pb.OSAllLocatorsResponse>;
    accountData: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.AccountDataRequest, provenance_metadata_v1_query_pb.AccountDataResponse>;
    scopeNetAssetValues: grpc.handleUnaryCall<provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesRequest, provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesResponse>;
}

export interface IQueryClient {
    params(request: provenance_metadata_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: provenance_metadata_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: provenance_metadata_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    scope(request: provenance_metadata_v1_query_pb.ScopeRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeResponse) => void): grpc.ClientUnaryCall;
    scope(request: provenance_metadata_v1_query_pb.ScopeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeResponse) => void): grpc.ClientUnaryCall;
    scope(request: provenance_metadata_v1_query_pb.ScopeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeResponse) => void): grpc.ClientUnaryCall;
    scopesAll(request: provenance_metadata_v1_query_pb.ScopesAllRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopesAllResponse) => void): grpc.ClientUnaryCall;
    scopesAll(request: provenance_metadata_v1_query_pb.ScopesAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopesAllResponse) => void): grpc.ClientUnaryCall;
    scopesAll(request: provenance_metadata_v1_query_pb.ScopesAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopesAllResponse) => void): grpc.ClientUnaryCall;
    sessions(request: provenance_metadata_v1_query_pb.SessionsRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.SessionsResponse) => void): grpc.ClientUnaryCall;
    sessions(request: provenance_metadata_v1_query_pb.SessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.SessionsResponse) => void): grpc.ClientUnaryCall;
    sessions(request: provenance_metadata_v1_query_pb.SessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.SessionsResponse) => void): grpc.ClientUnaryCall;
    sessionsAll(request: provenance_metadata_v1_query_pb.SessionsAllRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.SessionsAllResponse) => void): grpc.ClientUnaryCall;
    sessionsAll(request: provenance_metadata_v1_query_pb.SessionsAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.SessionsAllResponse) => void): grpc.ClientUnaryCall;
    sessionsAll(request: provenance_metadata_v1_query_pb.SessionsAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.SessionsAllResponse) => void): grpc.ClientUnaryCall;
    records(request: provenance_metadata_v1_query_pb.RecordsRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordsResponse) => void): grpc.ClientUnaryCall;
    records(request: provenance_metadata_v1_query_pb.RecordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordsResponse) => void): grpc.ClientUnaryCall;
    records(request: provenance_metadata_v1_query_pb.RecordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordsResponse) => void): grpc.ClientUnaryCall;
    recordsAll(request: provenance_metadata_v1_query_pb.RecordsAllRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordsAllResponse) => void): grpc.ClientUnaryCall;
    recordsAll(request: provenance_metadata_v1_query_pb.RecordsAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordsAllResponse) => void): grpc.ClientUnaryCall;
    recordsAll(request: provenance_metadata_v1_query_pb.RecordsAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordsAllResponse) => void): grpc.ClientUnaryCall;
    ownership(request: provenance_metadata_v1_query_pb.OwnershipRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OwnershipResponse) => void): grpc.ClientUnaryCall;
    ownership(request: provenance_metadata_v1_query_pb.OwnershipRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OwnershipResponse) => void): grpc.ClientUnaryCall;
    ownership(request: provenance_metadata_v1_query_pb.OwnershipRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OwnershipResponse) => void): grpc.ClientUnaryCall;
    valueOwnership(request: provenance_metadata_v1_query_pb.ValueOwnershipRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ValueOwnershipResponse) => void): grpc.ClientUnaryCall;
    valueOwnership(request: provenance_metadata_v1_query_pb.ValueOwnershipRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ValueOwnershipResponse) => void): grpc.ClientUnaryCall;
    valueOwnership(request: provenance_metadata_v1_query_pb.ValueOwnershipRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ValueOwnershipResponse) => void): grpc.ClientUnaryCall;
    scopeSpecification(request: provenance_metadata_v1_query_pb.ScopeSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    scopeSpecification(request: provenance_metadata_v1_query_pb.ScopeSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    scopeSpecification(request: provenance_metadata_v1_query_pb.ScopeSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    scopeSpecificationsAll(request: provenance_metadata_v1_query_pb.ScopeSpecificationsAllRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    scopeSpecificationsAll(request: provenance_metadata_v1_query_pb.ScopeSpecificationsAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    scopeSpecificationsAll(request: provenance_metadata_v1_query_pb.ScopeSpecificationsAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    contractSpecification(request: provenance_metadata_v1_query_pb.ContractSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    contractSpecification(request: provenance_metadata_v1_query_pb.ContractSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    contractSpecification(request: provenance_metadata_v1_query_pb.ContractSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    contractSpecificationsAll(request: provenance_metadata_v1_query_pb.ContractSpecificationsAllRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ContractSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    contractSpecificationsAll(request: provenance_metadata_v1_query_pb.ContractSpecificationsAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ContractSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    contractSpecificationsAll(request: provenance_metadata_v1_query_pb.ContractSpecificationsAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ContractSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    recordSpecificationsForContractSpecification(request: provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    recordSpecificationsForContractSpecification(request: provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    recordSpecificationsForContractSpecification(request: provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    recordSpecification(request: provenance_metadata_v1_query_pb.RecordSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    recordSpecification(request: provenance_metadata_v1_query_pb.RecordSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    recordSpecification(request: provenance_metadata_v1_query_pb.RecordSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    recordSpecificationsAll(request: provenance_metadata_v1_query_pb.RecordSpecificationsAllRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    recordSpecificationsAll(request: provenance_metadata_v1_query_pb.RecordSpecificationsAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    recordSpecificationsAll(request: provenance_metadata_v1_query_pb.RecordSpecificationsAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    getByAddr(request: provenance_metadata_v1_query_pb.GetByAddrRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.GetByAddrResponse) => void): grpc.ClientUnaryCall;
    getByAddr(request: provenance_metadata_v1_query_pb.GetByAddrRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.GetByAddrResponse) => void): grpc.ClientUnaryCall;
    getByAddr(request: provenance_metadata_v1_query_pb.GetByAddrRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.GetByAddrResponse) => void): grpc.ClientUnaryCall;
    oSLocatorParams(request: provenance_metadata_v1_query_pb.OSLocatorParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorParamsResponse) => void): grpc.ClientUnaryCall;
    oSLocatorParams(request: provenance_metadata_v1_query_pb.OSLocatorParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorParamsResponse) => void): grpc.ClientUnaryCall;
    oSLocatorParams(request: provenance_metadata_v1_query_pb.OSLocatorParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorParamsResponse) => void): grpc.ClientUnaryCall;
    oSLocator(request: provenance_metadata_v1_query_pb.OSLocatorRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorResponse) => void): grpc.ClientUnaryCall;
    oSLocator(request: provenance_metadata_v1_query_pb.OSLocatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorResponse) => void): grpc.ClientUnaryCall;
    oSLocator(request: provenance_metadata_v1_query_pb.OSLocatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorResponse) => void): grpc.ClientUnaryCall;
    oSLocatorsByURI(request: provenance_metadata_v1_query_pb.OSLocatorsByURIRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorsByURIResponse) => void): grpc.ClientUnaryCall;
    oSLocatorsByURI(request: provenance_metadata_v1_query_pb.OSLocatorsByURIRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorsByURIResponse) => void): grpc.ClientUnaryCall;
    oSLocatorsByURI(request: provenance_metadata_v1_query_pb.OSLocatorsByURIRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorsByURIResponse) => void): grpc.ClientUnaryCall;
    oSLocatorsByScope(request: provenance_metadata_v1_query_pb.OSLocatorsByScopeRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorsByScopeResponse) => void): grpc.ClientUnaryCall;
    oSLocatorsByScope(request: provenance_metadata_v1_query_pb.OSLocatorsByScopeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorsByScopeResponse) => void): grpc.ClientUnaryCall;
    oSLocatorsByScope(request: provenance_metadata_v1_query_pb.OSLocatorsByScopeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorsByScopeResponse) => void): grpc.ClientUnaryCall;
    oSAllLocators(request: provenance_metadata_v1_query_pb.OSAllLocatorsRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSAllLocatorsResponse) => void): grpc.ClientUnaryCall;
    oSAllLocators(request: provenance_metadata_v1_query_pb.OSAllLocatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSAllLocatorsResponse) => void): grpc.ClientUnaryCall;
    oSAllLocators(request: provenance_metadata_v1_query_pb.OSAllLocatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSAllLocatorsResponse) => void): grpc.ClientUnaryCall;
    accountData(request: provenance_metadata_v1_query_pb.AccountDataRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.AccountDataResponse) => void): grpc.ClientUnaryCall;
    accountData(request: provenance_metadata_v1_query_pb.AccountDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.AccountDataResponse) => void): grpc.ClientUnaryCall;
    accountData(request: provenance_metadata_v1_query_pb.AccountDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.AccountDataResponse) => void): grpc.ClientUnaryCall;
    scopeNetAssetValues(request: provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    scopeNetAssetValues(request: provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    scopeNetAssetValues(request: provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public params(request: provenance_metadata_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: provenance_metadata_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: provenance_metadata_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public scope(request: provenance_metadata_v1_query_pb.ScopeRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeResponse) => void): grpc.ClientUnaryCall;
    public scope(request: provenance_metadata_v1_query_pb.ScopeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeResponse) => void): grpc.ClientUnaryCall;
    public scope(request: provenance_metadata_v1_query_pb.ScopeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeResponse) => void): grpc.ClientUnaryCall;
    public scopesAll(request: provenance_metadata_v1_query_pb.ScopesAllRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopesAllResponse) => void): grpc.ClientUnaryCall;
    public scopesAll(request: provenance_metadata_v1_query_pb.ScopesAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopesAllResponse) => void): grpc.ClientUnaryCall;
    public scopesAll(request: provenance_metadata_v1_query_pb.ScopesAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopesAllResponse) => void): grpc.ClientUnaryCall;
    public sessions(request: provenance_metadata_v1_query_pb.SessionsRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.SessionsResponse) => void): grpc.ClientUnaryCall;
    public sessions(request: provenance_metadata_v1_query_pb.SessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.SessionsResponse) => void): grpc.ClientUnaryCall;
    public sessions(request: provenance_metadata_v1_query_pb.SessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.SessionsResponse) => void): grpc.ClientUnaryCall;
    public sessionsAll(request: provenance_metadata_v1_query_pb.SessionsAllRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.SessionsAllResponse) => void): grpc.ClientUnaryCall;
    public sessionsAll(request: provenance_metadata_v1_query_pb.SessionsAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.SessionsAllResponse) => void): grpc.ClientUnaryCall;
    public sessionsAll(request: provenance_metadata_v1_query_pb.SessionsAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.SessionsAllResponse) => void): grpc.ClientUnaryCall;
    public records(request: provenance_metadata_v1_query_pb.RecordsRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordsResponse) => void): grpc.ClientUnaryCall;
    public records(request: provenance_metadata_v1_query_pb.RecordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordsResponse) => void): grpc.ClientUnaryCall;
    public records(request: provenance_metadata_v1_query_pb.RecordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordsResponse) => void): grpc.ClientUnaryCall;
    public recordsAll(request: provenance_metadata_v1_query_pb.RecordsAllRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordsAllResponse) => void): grpc.ClientUnaryCall;
    public recordsAll(request: provenance_metadata_v1_query_pb.RecordsAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordsAllResponse) => void): grpc.ClientUnaryCall;
    public recordsAll(request: provenance_metadata_v1_query_pb.RecordsAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordsAllResponse) => void): grpc.ClientUnaryCall;
    public ownership(request: provenance_metadata_v1_query_pb.OwnershipRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OwnershipResponse) => void): grpc.ClientUnaryCall;
    public ownership(request: provenance_metadata_v1_query_pb.OwnershipRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OwnershipResponse) => void): grpc.ClientUnaryCall;
    public ownership(request: provenance_metadata_v1_query_pb.OwnershipRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OwnershipResponse) => void): grpc.ClientUnaryCall;
    public valueOwnership(request: provenance_metadata_v1_query_pb.ValueOwnershipRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ValueOwnershipResponse) => void): grpc.ClientUnaryCall;
    public valueOwnership(request: provenance_metadata_v1_query_pb.ValueOwnershipRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ValueOwnershipResponse) => void): grpc.ClientUnaryCall;
    public valueOwnership(request: provenance_metadata_v1_query_pb.ValueOwnershipRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ValueOwnershipResponse) => void): grpc.ClientUnaryCall;
    public scopeSpecification(request: provenance_metadata_v1_query_pb.ScopeSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    public scopeSpecification(request: provenance_metadata_v1_query_pb.ScopeSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    public scopeSpecification(request: provenance_metadata_v1_query_pb.ScopeSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    public scopeSpecificationsAll(request: provenance_metadata_v1_query_pb.ScopeSpecificationsAllRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    public scopeSpecificationsAll(request: provenance_metadata_v1_query_pb.ScopeSpecificationsAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    public scopeSpecificationsAll(request: provenance_metadata_v1_query_pb.ScopeSpecificationsAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ScopeSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    public contractSpecification(request: provenance_metadata_v1_query_pb.ContractSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    public contractSpecification(request: provenance_metadata_v1_query_pb.ContractSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    public contractSpecification(request: provenance_metadata_v1_query_pb.ContractSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    public contractSpecificationsAll(request: provenance_metadata_v1_query_pb.ContractSpecificationsAllRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ContractSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    public contractSpecificationsAll(request: provenance_metadata_v1_query_pb.ContractSpecificationsAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ContractSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    public contractSpecificationsAll(request: provenance_metadata_v1_query_pb.ContractSpecificationsAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.ContractSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    public recordSpecificationsForContractSpecification(request: provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    public recordSpecificationsForContractSpecification(request: provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    public recordSpecificationsForContractSpecification(request: provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationsForContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    public recordSpecification(request: provenance_metadata_v1_query_pb.RecordSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    public recordSpecification(request: provenance_metadata_v1_query_pb.RecordSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    public recordSpecification(request: provenance_metadata_v1_query_pb.RecordSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    public recordSpecificationsAll(request: provenance_metadata_v1_query_pb.RecordSpecificationsAllRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    public recordSpecificationsAll(request: provenance_metadata_v1_query_pb.RecordSpecificationsAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    public recordSpecificationsAll(request: provenance_metadata_v1_query_pb.RecordSpecificationsAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.RecordSpecificationsAllResponse) => void): grpc.ClientUnaryCall;
    public getByAddr(request: provenance_metadata_v1_query_pb.GetByAddrRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.GetByAddrResponse) => void): grpc.ClientUnaryCall;
    public getByAddr(request: provenance_metadata_v1_query_pb.GetByAddrRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.GetByAddrResponse) => void): grpc.ClientUnaryCall;
    public getByAddr(request: provenance_metadata_v1_query_pb.GetByAddrRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.GetByAddrResponse) => void): grpc.ClientUnaryCall;
    public oSLocatorParams(request: provenance_metadata_v1_query_pb.OSLocatorParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorParamsResponse) => void): grpc.ClientUnaryCall;
    public oSLocatorParams(request: provenance_metadata_v1_query_pb.OSLocatorParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorParamsResponse) => void): grpc.ClientUnaryCall;
    public oSLocatorParams(request: provenance_metadata_v1_query_pb.OSLocatorParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorParamsResponse) => void): grpc.ClientUnaryCall;
    public oSLocator(request: provenance_metadata_v1_query_pb.OSLocatorRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorResponse) => void): grpc.ClientUnaryCall;
    public oSLocator(request: provenance_metadata_v1_query_pb.OSLocatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorResponse) => void): grpc.ClientUnaryCall;
    public oSLocator(request: provenance_metadata_v1_query_pb.OSLocatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorResponse) => void): grpc.ClientUnaryCall;
    public oSLocatorsByURI(request: provenance_metadata_v1_query_pb.OSLocatorsByURIRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorsByURIResponse) => void): grpc.ClientUnaryCall;
    public oSLocatorsByURI(request: provenance_metadata_v1_query_pb.OSLocatorsByURIRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorsByURIResponse) => void): grpc.ClientUnaryCall;
    public oSLocatorsByURI(request: provenance_metadata_v1_query_pb.OSLocatorsByURIRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorsByURIResponse) => void): grpc.ClientUnaryCall;
    public oSLocatorsByScope(request: provenance_metadata_v1_query_pb.OSLocatorsByScopeRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorsByScopeResponse) => void): grpc.ClientUnaryCall;
    public oSLocatorsByScope(request: provenance_metadata_v1_query_pb.OSLocatorsByScopeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorsByScopeResponse) => void): grpc.ClientUnaryCall;
    public oSLocatorsByScope(request: provenance_metadata_v1_query_pb.OSLocatorsByScopeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSLocatorsByScopeResponse) => void): grpc.ClientUnaryCall;
    public oSAllLocators(request: provenance_metadata_v1_query_pb.OSAllLocatorsRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSAllLocatorsResponse) => void): grpc.ClientUnaryCall;
    public oSAllLocators(request: provenance_metadata_v1_query_pb.OSAllLocatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSAllLocatorsResponse) => void): grpc.ClientUnaryCall;
    public oSAllLocators(request: provenance_metadata_v1_query_pb.OSAllLocatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.OSAllLocatorsResponse) => void): grpc.ClientUnaryCall;
    public accountData(request: provenance_metadata_v1_query_pb.AccountDataRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.AccountDataResponse) => void): grpc.ClientUnaryCall;
    public accountData(request: provenance_metadata_v1_query_pb.AccountDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.AccountDataResponse) => void): grpc.ClientUnaryCall;
    public accountData(request: provenance_metadata_v1_query_pb.AccountDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.AccountDataResponse) => void): grpc.ClientUnaryCall;
    public scopeNetAssetValues(request: provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    public scopeNetAssetValues(request: provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    public scopeNetAssetValues(request: provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_query_pb.QueryScopeNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
}
