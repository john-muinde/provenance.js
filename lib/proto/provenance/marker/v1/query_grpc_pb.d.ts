// package: provenance.marker.v1
// file: provenance/marker/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as provenance_marker_v1_query_pb from "../../../provenance/marker/v1/query_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_bank_v1beta1_bank_pb from "../../../cosmos/bank/v1beta1/bank_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as provenance_marker_v1_marker_pb from "../../../provenance/marker/v1/marker_pb";
import * as provenance_marker_v1_accessgrant_pb from "../../../provenance/marker/v1/accessgrant_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
    allMarkers: IQueryService_IAllMarkers;
    marker: IQueryService_IMarker;
    holding: IQueryService_IHolding;
    supply: IQueryService_ISupply;
    escrow: IQueryService_IEscrow;
    access: IQueryService_IAccess;
    denomMetadata: IQueryService_IDenomMetadata;
    accountData: IQueryService_IAccountData;
    netAssetValues: IQueryService_INetAssetValues;
}

interface IQueryService_IParams extends grpc.MethodDefinition<provenance_marker_v1_query_pb.QueryParamsRequest, provenance_marker_v1_query_pb.QueryParamsResponse> {
    path: "/provenance.marker.v1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryParamsResponse>;
}
interface IQueryService_IAllMarkers extends grpc.MethodDefinition<provenance_marker_v1_query_pb.QueryAllMarkersRequest, provenance_marker_v1_query_pb.QueryAllMarkersResponse> {
    path: "/provenance.marker.v1.Query/AllMarkers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryAllMarkersRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryAllMarkersRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryAllMarkersResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryAllMarkersResponse>;
}
interface IQueryService_IMarker extends grpc.MethodDefinition<provenance_marker_v1_query_pb.QueryMarkerRequest, provenance_marker_v1_query_pb.QueryMarkerResponse> {
    path: "/provenance.marker.v1.Query/Marker";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryMarkerRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryMarkerRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryMarkerResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryMarkerResponse>;
}
interface IQueryService_IHolding extends grpc.MethodDefinition<provenance_marker_v1_query_pb.QueryHoldingRequest, provenance_marker_v1_query_pb.QueryHoldingResponse> {
    path: "/provenance.marker.v1.Query/Holding";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryHoldingRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryHoldingRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryHoldingResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryHoldingResponse>;
}
interface IQueryService_ISupply extends grpc.MethodDefinition<provenance_marker_v1_query_pb.QuerySupplyRequest, provenance_marker_v1_query_pb.QuerySupplyResponse> {
    path: "/provenance.marker.v1.Query/Supply";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_query_pb.QuerySupplyRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QuerySupplyRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_query_pb.QuerySupplyResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QuerySupplyResponse>;
}
interface IQueryService_IEscrow extends grpc.MethodDefinition<provenance_marker_v1_query_pb.QueryEscrowRequest, provenance_marker_v1_query_pb.QueryEscrowResponse> {
    path: "/provenance.marker.v1.Query/Escrow";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryEscrowRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryEscrowRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryEscrowResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryEscrowResponse>;
}
interface IQueryService_IAccess extends grpc.MethodDefinition<provenance_marker_v1_query_pb.QueryAccessRequest, provenance_marker_v1_query_pb.QueryAccessResponse> {
    path: "/provenance.marker.v1.Query/Access";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryAccessRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryAccessRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryAccessResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryAccessResponse>;
}
interface IQueryService_IDenomMetadata extends grpc.MethodDefinition<provenance_marker_v1_query_pb.QueryDenomMetadataRequest, provenance_marker_v1_query_pb.QueryDenomMetadataResponse> {
    path: "/provenance.marker.v1.Query/DenomMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryDenomMetadataRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryDenomMetadataRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryDenomMetadataResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryDenomMetadataResponse>;
}
interface IQueryService_IAccountData extends grpc.MethodDefinition<provenance_marker_v1_query_pb.QueryAccountDataRequest, provenance_marker_v1_query_pb.QueryAccountDataResponse> {
    path: "/provenance.marker.v1.Query/AccountData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryAccountDataRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryAccountDataRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryAccountDataResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryAccountDataResponse>;
}
interface IQueryService_INetAssetValues extends grpc.MethodDefinition<provenance_marker_v1_query_pb.QueryNetAssetValuesRequest, provenance_marker_v1_query_pb.QueryNetAssetValuesResponse> {
    path: "/provenance.marker.v1.Query/NetAssetValues";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryNetAssetValuesRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryNetAssetValuesRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_query_pb.QueryNetAssetValuesResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_query_pb.QueryNetAssetValuesResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
    params: grpc.handleUnaryCall<provenance_marker_v1_query_pb.QueryParamsRequest, provenance_marker_v1_query_pb.QueryParamsResponse>;
    allMarkers: grpc.handleUnaryCall<provenance_marker_v1_query_pb.QueryAllMarkersRequest, provenance_marker_v1_query_pb.QueryAllMarkersResponse>;
    marker: grpc.handleUnaryCall<provenance_marker_v1_query_pb.QueryMarkerRequest, provenance_marker_v1_query_pb.QueryMarkerResponse>;
    holding: grpc.handleUnaryCall<provenance_marker_v1_query_pb.QueryHoldingRequest, provenance_marker_v1_query_pb.QueryHoldingResponse>;
    supply: grpc.handleUnaryCall<provenance_marker_v1_query_pb.QuerySupplyRequest, provenance_marker_v1_query_pb.QuerySupplyResponse>;
    escrow: grpc.handleUnaryCall<provenance_marker_v1_query_pb.QueryEscrowRequest, provenance_marker_v1_query_pb.QueryEscrowResponse>;
    access: grpc.handleUnaryCall<provenance_marker_v1_query_pb.QueryAccessRequest, provenance_marker_v1_query_pb.QueryAccessResponse>;
    denomMetadata: grpc.handleUnaryCall<provenance_marker_v1_query_pb.QueryDenomMetadataRequest, provenance_marker_v1_query_pb.QueryDenomMetadataResponse>;
    accountData: grpc.handleUnaryCall<provenance_marker_v1_query_pb.QueryAccountDataRequest, provenance_marker_v1_query_pb.QueryAccountDataResponse>;
    netAssetValues: grpc.handleUnaryCall<provenance_marker_v1_query_pb.QueryNetAssetValuesRequest, provenance_marker_v1_query_pb.QueryNetAssetValuesResponse>;
}

export interface IQueryClient {
    params(request: provenance_marker_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: provenance_marker_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: provenance_marker_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    allMarkers(request: provenance_marker_v1_query_pb.QueryAllMarkersRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAllMarkersResponse) => void): grpc.ClientUnaryCall;
    allMarkers(request: provenance_marker_v1_query_pb.QueryAllMarkersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAllMarkersResponse) => void): grpc.ClientUnaryCall;
    allMarkers(request: provenance_marker_v1_query_pb.QueryAllMarkersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAllMarkersResponse) => void): grpc.ClientUnaryCall;
    marker(request: provenance_marker_v1_query_pb.QueryMarkerRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryMarkerResponse) => void): grpc.ClientUnaryCall;
    marker(request: provenance_marker_v1_query_pb.QueryMarkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryMarkerResponse) => void): grpc.ClientUnaryCall;
    marker(request: provenance_marker_v1_query_pb.QueryMarkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryMarkerResponse) => void): grpc.ClientUnaryCall;
    holding(request: provenance_marker_v1_query_pb.QueryHoldingRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryHoldingResponse) => void): grpc.ClientUnaryCall;
    holding(request: provenance_marker_v1_query_pb.QueryHoldingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryHoldingResponse) => void): grpc.ClientUnaryCall;
    holding(request: provenance_marker_v1_query_pb.QueryHoldingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryHoldingResponse) => void): grpc.ClientUnaryCall;
    supply(request: provenance_marker_v1_query_pb.QuerySupplyRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QuerySupplyResponse) => void): grpc.ClientUnaryCall;
    supply(request: provenance_marker_v1_query_pb.QuerySupplyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QuerySupplyResponse) => void): grpc.ClientUnaryCall;
    supply(request: provenance_marker_v1_query_pb.QuerySupplyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QuerySupplyResponse) => void): grpc.ClientUnaryCall;
    escrow(request: provenance_marker_v1_query_pb.QueryEscrowRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryEscrowResponse) => void): grpc.ClientUnaryCall;
    escrow(request: provenance_marker_v1_query_pb.QueryEscrowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryEscrowResponse) => void): grpc.ClientUnaryCall;
    escrow(request: provenance_marker_v1_query_pb.QueryEscrowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryEscrowResponse) => void): grpc.ClientUnaryCall;
    access(request: provenance_marker_v1_query_pb.QueryAccessRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAccessResponse) => void): grpc.ClientUnaryCall;
    access(request: provenance_marker_v1_query_pb.QueryAccessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAccessResponse) => void): grpc.ClientUnaryCall;
    access(request: provenance_marker_v1_query_pb.QueryAccessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAccessResponse) => void): grpc.ClientUnaryCall;
    denomMetadata(request: provenance_marker_v1_query_pb.QueryDenomMetadataRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    denomMetadata(request: provenance_marker_v1_query_pb.QueryDenomMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    denomMetadata(request: provenance_marker_v1_query_pb.QueryDenomMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    accountData(request: provenance_marker_v1_query_pb.QueryAccountDataRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAccountDataResponse) => void): grpc.ClientUnaryCall;
    accountData(request: provenance_marker_v1_query_pb.QueryAccountDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAccountDataResponse) => void): grpc.ClientUnaryCall;
    accountData(request: provenance_marker_v1_query_pb.QueryAccountDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAccountDataResponse) => void): grpc.ClientUnaryCall;
    netAssetValues(request: provenance_marker_v1_query_pb.QueryNetAssetValuesRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    netAssetValues(request: provenance_marker_v1_query_pb.QueryNetAssetValuesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    netAssetValues(request: provenance_marker_v1_query_pb.QueryNetAssetValuesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public params(request: provenance_marker_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: provenance_marker_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: provenance_marker_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public allMarkers(request: provenance_marker_v1_query_pb.QueryAllMarkersRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAllMarkersResponse) => void): grpc.ClientUnaryCall;
    public allMarkers(request: provenance_marker_v1_query_pb.QueryAllMarkersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAllMarkersResponse) => void): grpc.ClientUnaryCall;
    public allMarkers(request: provenance_marker_v1_query_pb.QueryAllMarkersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAllMarkersResponse) => void): grpc.ClientUnaryCall;
    public marker(request: provenance_marker_v1_query_pb.QueryMarkerRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryMarkerResponse) => void): grpc.ClientUnaryCall;
    public marker(request: provenance_marker_v1_query_pb.QueryMarkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryMarkerResponse) => void): grpc.ClientUnaryCall;
    public marker(request: provenance_marker_v1_query_pb.QueryMarkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryMarkerResponse) => void): grpc.ClientUnaryCall;
    public holding(request: provenance_marker_v1_query_pb.QueryHoldingRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryHoldingResponse) => void): grpc.ClientUnaryCall;
    public holding(request: provenance_marker_v1_query_pb.QueryHoldingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryHoldingResponse) => void): grpc.ClientUnaryCall;
    public holding(request: provenance_marker_v1_query_pb.QueryHoldingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryHoldingResponse) => void): grpc.ClientUnaryCall;
    public supply(request: provenance_marker_v1_query_pb.QuerySupplyRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QuerySupplyResponse) => void): grpc.ClientUnaryCall;
    public supply(request: provenance_marker_v1_query_pb.QuerySupplyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QuerySupplyResponse) => void): grpc.ClientUnaryCall;
    public supply(request: provenance_marker_v1_query_pb.QuerySupplyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QuerySupplyResponse) => void): grpc.ClientUnaryCall;
    public escrow(request: provenance_marker_v1_query_pb.QueryEscrowRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryEscrowResponse) => void): grpc.ClientUnaryCall;
    public escrow(request: provenance_marker_v1_query_pb.QueryEscrowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryEscrowResponse) => void): grpc.ClientUnaryCall;
    public escrow(request: provenance_marker_v1_query_pb.QueryEscrowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryEscrowResponse) => void): grpc.ClientUnaryCall;
    public access(request: provenance_marker_v1_query_pb.QueryAccessRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAccessResponse) => void): grpc.ClientUnaryCall;
    public access(request: provenance_marker_v1_query_pb.QueryAccessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAccessResponse) => void): grpc.ClientUnaryCall;
    public access(request: provenance_marker_v1_query_pb.QueryAccessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAccessResponse) => void): grpc.ClientUnaryCall;
    public denomMetadata(request: provenance_marker_v1_query_pb.QueryDenomMetadataRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomMetadata(request: provenance_marker_v1_query_pb.QueryDenomMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public denomMetadata(request: provenance_marker_v1_query_pb.QueryDenomMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public accountData(request: provenance_marker_v1_query_pb.QueryAccountDataRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAccountDataResponse) => void): grpc.ClientUnaryCall;
    public accountData(request: provenance_marker_v1_query_pb.QueryAccountDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAccountDataResponse) => void): grpc.ClientUnaryCall;
    public accountData(request: provenance_marker_v1_query_pb.QueryAccountDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryAccountDataResponse) => void): grpc.ClientUnaryCall;
    public netAssetValues(request: provenance_marker_v1_query_pb.QueryNetAssetValuesRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    public netAssetValues(request: provenance_marker_v1_query_pb.QueryNetAssetValuesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    public netAssetValues(request: provenance_marker_v1_query_pb.QueryNetAssetValuesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_query_pb.QueryNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
}
