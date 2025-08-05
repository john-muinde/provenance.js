// package: ibc.core.client.v1
// file: ibc/core/client/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ibc_core_client_v1_query_pb from "../../../../ibc/core/client/v1/query_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../../cosmos/base/query/v1beta1/pagination_pb";
import * as cosmos_query_v1_query_pb from "../../../../cosmos/query/v1/query_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as ibc_core_commitment_v2_commitment_pb from "../../../../ibc/core/commitment/v2/commitment_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    clientState: IQueryService_IClientState;
    clientStates: IQueryService_IClientStates;
    consensusState: IQueryService_IConsensusState;
    consensusStates: IQueryService_IConsensusStates;
    consensusStateHeights: IQueryService_IConsensusStateHeights;
    clientStatus: IQueryService_IClientStatus;
    clientParams: IQueryService_IClientParams;
    upgradedClientState: IQueryService_IUpgradedClientState;
    upgradedConsensusState: IQueryService_IUpgradedConsensusState;
    verifyMembership: IQueryService_IVerifyMembership;
}

interface IQueryService_IClientState extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryClientStateRequest, ibc_core_client_v1_query_pb.QueryClientStateResponse> {
    path: "/ibc.core.client.v1.Query/ClientState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientStateRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientStateRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientStateResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientStateResponse>;
}
interface IQueryService_IClientStates extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryClientStatesRequest, ibc_core_client_v1_query_pb.QueryClientStatesResponse> {
    path: "/ibc.core.client.v1.Query/ClientStates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientStatesRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientStatesRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientStatesResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientStatesResponse>;
}
interface IQueryService_IConsensusState extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryConsensusStateRequest, ibc_core_client_v1_query_pb.QueryConsensusStateResponse> {
    path: "/ibc.core.client.v1.Query/ConsensusState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryConsensusStateRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryConsensusStateRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryConsensusStateResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryConsensusStateResponse>;
}
interface IQueryService_IConsensusStates extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, ibc_core_client_v1_query_pb.QueryConsensusStatesResponse> {
    path: "/ibc.core.client.v1.Query/ConsensusStates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryConsensusStatesRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryConsensusStatesRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryConsensusStatesResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryConsensusStatesResponse>;
}
interface IQueryService_IConsensusStateHeights extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryConsensusStateHeightsRequest, ibc_core_client_v1_query_pb.QueryConsensusStateHeightsResponse> {
    path: "/ibc.core.client.v1.Query/ConsensusStateHeights";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryConsensusStateHeightsRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryConsensusStateHeightsRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryConsensusStateHeightsResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryConsensusStateHeightsResponse>;
}
interface IQueryService_IClientStatus extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryClientStatusRequest, ibc_core_client_v1_query_pb.QueryClientStatusResponse> {
    path: "/ibc.core.client.v1.Query/ClientStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientStatusRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientStatusRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientStatusResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientStatusResponse>;
}
interface IQueryService_IClientParams extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryClientParamsRequest, ibc_core_client_v1_query_pb.QueryClientParamsResponse> {
    path: "/ibc.core.client.v1.Query/ClientParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientParamsRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientParamsRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryClientParamsResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryClientParamsResponse>;
}
interface IQueryService_IUpgradedClientState extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest, ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse> {
    path: "/ibc.core.client.v1.Query/UpgradedClientState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse>;
}
interface IQueryService_IUpgradedConsensusState extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest, ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse> {
    path: "/ibc.core.client.v1.Query/UpgradedConsensusState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse>;
}
interface IQueryService_IVerifyMembership extends grpc.MethodDefinition<ibc_core_client_v1_query_pb.QueryVerifyMembershipRequest, ibc_core_client_v1_query_pb.QueryVerifyMembershipResponse> {
    path: "/ibc.core.client.v1.Query/VerifyMembership";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryVerifyMembershipRequest>;
    requestDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryVerifyMembershipRequest>;
    responseSerialize: grpc.serialize<ibc_core_client_v1_query_pb.QueryVerifyMembershipResponse>;
    responseDeserialize: grpc.deserialize<ibc_core_client_v1_query_pb.QueryVerifyMembershipResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
    clientState: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryClientStateRequest, ibc_core_client_v1_query_pb.QueryClientStateResponse>;
    clientStates: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryClientStatesRequest, ibc_core_client_v1_query_pb.QueryClientStatesResponse>;
    consensusState: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryConsensusStateRequest, ibc_core_client_v1_query_pb.QueryConsensusStateResponse>;
    consensusStates: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, ibc_core_client_v1_query_pb.QueryConsensusStatesResponse>;
    consensusStateHeights: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryConsensusStateHeightsRequest, ibc_core_client_v1_query_pb.QueryConsensusStateHeightsResponse>;
    clientStatus: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryClientStatusRequest, ibc_core_client_v1_query_pb.QueryClientStatusResponse>;
    clientParams: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryClientParamsRequest, ibc_core_client_v1_query_pb.QueryClientParamsResponse>;
    upgradedClientState: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest, ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse>;
    upgradedConsensusState: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest, ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse>;
    verifyMembership: grpc.handleUnaryCall<ibc_core_client_v1_query_pb.QueryVerifyMembershipRequest, ibc_core_client_v1_query_pb.QueryVerifyMembershipResponse>;
}

export interface IQueryClient {
    clientState(request: ibc_core_client_v1_query_pb.QueryClientStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpc.ClientUnaryCall;
    clientState(request: ibc_core_client_v1_query_pb.QueryClientStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpc.ClientUnaryCall;
    clientState(request: ibc_core_client_v1_query_pb.QueryClientStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpc.ClientUnaryCall;
    clientStates(request: ibc_core_client_v1_query_pb.QueryClientStatesRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpc.ClientUnaryCall;
    clientStates(request: ibc_core_client_v1_query_pb.QueryClientStatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpc.ClientUnaryCall;
    clientStates(request: ibc_core_client_v1_query_pb.QueryClientStatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpc.ClientUnaryCall;
    consensusState(request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpc.ClientUnaryCall;
    consensusState(request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpc.ClientUnaryCall;
    consensusState(request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpc.ClientUnaryCall;
    consensusStates(request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpc.ClientUnaryCall;
    consensusStates(request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpc.ClientUnaryCall;
    consensusStates(request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpc.ClientUnaryCall;
    consensusStateHeights(request: ibc_core_client_v1_query_pb.QueryConsensusStateHeightsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateHeightsResponse) => void): grpc.ClientUnaryCall;
    consensusStateHeights(request: ibc_core_client_v1_query_pb.QueryConsensusStateHeightsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateHeightsResponse) => void): grpc.ClientUnaryCall;
    consensusStateHeights(request: ibc_core_client_v1_query_pb.QueryConsensusStateHeightsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateHeightsResponse) => void): grpc.ClientUnaryCall;
    clientStatus(request: ibc_core_client_v1_query_pb.QueryClientStatusRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatusResponse) => void): grpc.ClientUnaryCall;
    clientStatus(request: ibc_core_client_v1_query_pb.QueryClientStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatusResponse) => void): grpc.ClientUnaryCall;
    clientStatus(request: ibc_core_client_v1_query_pb.QueryClientStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatusResponse) => void): grpc.ClientUnaryCall;
    clientParams(request: ibc_core_client_v1_query_pb.QueryClientParamsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpc.ClientUnaryCall;
    clientParams(request: ibc_core_client_v1_query_pb.QueryClientParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpc.ClientUnaryCall;
    clientParams(request: ibc_core_client_v1_query_pb.QueryClientParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpc.ClientUnaryCall;
    upgradedClientState(request: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse) => void): grpc.ClientUnaryCall;
    upgradedClientState(request: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse) => void): grpc.ClientUnaryCall;
    upgradedClientState(request: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse) => void): grpc.ClientUnaryCall;
    upgradedConsensusState(request: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpc.ClientUnaryCall;
    upgradedConsensusState(request: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpc.ClientUnaryCall;
    upgradedConsensusState(request: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpc.ClientUnaryCall;
    verifyMembership(request: ibc_core_client_v1_query_pb.QueryVerifyMembershipRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryVerifyMembershipResponse) => void): grpc.ClientUnaryCall;
    verifyMembership(request: ibc_core_client_v1_query_pb.QueryVerifyMembershipRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryVerifyMembershipResponse) => void): grpc.ClientUnaryCall;
    verifyMembership(request: ibc_core_client_v1_query_pb.QueryVerifyMembershipRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryVerifyMembershipResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public clientState(request: ibc_core_client_v1_query_pb.QueryClientStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpc.ClientUnaryCall;
    public clientState(request: ibc_core_client_v1_query_pb.QueryClientStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpc.ClientUnaryCall;
    public clientState(request: ibc_core_client_v1_query_pb.QueryClientStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStateResponse) => void): grpc.ClientUnaryCall;
    public clientStates(request: ibc_core_client_v1_query_pb.QueryClientStatesRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpc.ClientUnaryCall;
    public clientStates(request: ibc_core_client_v1_query_pb.QueryClientStatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpc.ClientUnaryCall;
    public clientStates(request: ibc_core_client_v1_query_pb.QueryClientStatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatesResponse) => void): grpc.ClientUnaryCall;
    public consensusState(request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public consensusState(request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public consensusState(request: ibc_core_client_v1_query_pb.QueryConsensusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public consensusStates(request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpc.ClientUnaryCall;
    public consensusStates(request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpc.ClientUnaryCall;
    public consensusStates(request: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse) => void): grpc.ClientUnaryCall;
    public consensusStateHeights(request: ibc_core_client_v1_query_pb.QueryConsensusStateHeightsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateHeightsResponse) => void): grpc.ClientUnaryCall;
    public consensusStateHeights(request: ibc_core_client_v1_query_pb.QueryConsensusStateHeightsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateHeightsResponse) => void): grpc.ClientUnaryCall;
    public consensusStateHeights(request: ibc_core_client_v1_query_pb.QueryConsensusStateHeightsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryConsensusStateHeightsResponse) => void): grpc.ClientUnaryCall;
    public clientStatus(request: ibc_core_client_v1_query_pb.QueryClientStatusRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatusResponse) => void): grpc.ClientUnaryCall;
    public clientStatus(request: ibc_core_client_v1_query_pb.QueryClientStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatusResponse) => void): grpc.ClientUnaryCall;
    public clientStatus(request: ibc_core_client_v1_query_pb.QueryClientStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientStatusResponse) => void): grpc.ClientUnaryCall;
    public clientParams(request: ibc_core_client_v1_query_pb.QueryClientParamsRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpc.ClientUnaryCall;
    public clientParams(request: ibc_core_client_v1_query_pb.QueryClientParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpc.ClientUnaryCall;
    public clientParams(request: ibc_core_client_v1_query_pb.QueryClientParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryClientParamsResponse) => void): grpc.ClientUnaryCall;
    public upgradedClientState(request: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse) => void): grpc.ClientUnaryCall;
    public upgradedClientState(request: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse) => void): grpc.ClientUnaryCall;
    public upgradedClientState(request: ibc_core_client_v1_query_pb.QueryUpgradedClientStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryUpgradedClientStateResponse) => void): grpc.ClientUnaryCall;
    public upgradedConsensusState(request: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public upgradedConsensusState(request: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public upgradedConsensusState(request: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryUpgradedConsensusStateResponse) => void): grpc.ClientUnaryCall;
    public verifyMembership(request: ibc_core_client_v1_query_pb.QueryVerifyMembershipRequest, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryVerifyMembershipResponse) => void): grpc.ClientUnaryCall;
    public verifyMembership(request: ibc_core_client_v1_query_pb.QueryVerifyMembershipRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryVerifyMembershipResponse) => void): grpc.ClientUnaryCall;
    public verifyMembership(request: ibc_core_client_v1_query_pb.QueryVerifyMembershipRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ibc_core_client_v1_query_pb.QueryVerifyMembershipResponse) => void): grpc.ClientUnaryCall;
}
