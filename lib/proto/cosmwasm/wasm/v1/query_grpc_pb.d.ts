// package: cosmwasm.wasm.v1
// file: cosmwasm/wasm/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as cosmwasm_wasm_v1_query_pb from "../../../cosmwasm/wasm/v1/query_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmwasm_wasm_v1_types_pb from "../../../cosmwasm/wasm/v1/types_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    contractInfo: IQueryService_IContractInfo;
    contractHistory: IQueryService_IContractHistory;
    contractsByCode: IQueryService_IContractsByCode;
    allContractState: IQueryService_IAllContractState;
    rawContractState: IQueryService_IRawContractState;
    smartContractState: IQueryService_ISmartContractState;
    code: IQueryService_ICode;
    codes: IQueryService_ICodes;
}

interface IQueryService_IContractInfo extends grpc.MethodDefinition<cosmwasm_wasm_v1_query_pb.QueryContractInfoRequest, cosmwasm_wasm_v1_query_pb.QueryContractInfoResponse> {
    path: "/cosmwasm.wasm.v1.Query/ContractInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryContractInfoRequest>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryContractInfoRequest>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryContractInfoResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryContractInfoResponse>;
}
interface IQueryService_IContractHistory extends grpc.MethodDefinition<cosmwasm_wasm_v1_query_pb.QueryContractHistoryRequest, cosmwasm_wasm_v1_query_pb.QueryContractHistoryResponse> {
    path: "/cosmwasm.wasm.v1.Query/ContractHistory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryContractHistoryRequest>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryContractHistoryRequest>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryContractHistoryResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryContractHistoryResponse>;
}
interface IQueryService_IContractsByCode extends grpc.MethodDefinition<cosmwasm_wasm_v1_query_pb.QueryContractsByCodeRequest, cosmwasm_wasm_v1_query_pb.QueryContractsByCodeResponse> {
    path: "/cosmwasm.wasm.v1.Query/ContractsByCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryContractsByCodeRequest>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryContractsByCodeRequest>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryContractsByCodeResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryContractsByCodeResponse>;
}
interface IQueryService_IAllContractState extends grpc.MethodDefinition<cosmwasm_wasm_v1_query_pb.QueryAllContractStateRequest, cosmwasm_wasm_v1_query_pb.QueryAllContractStateResponse> {
    path: "/cosmwasm.wasm.v1.Query/AllContractState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryAllContractStateRequest>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryAllContractStateRequest>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryAllContractStateResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryAllContractStateResponse>;
}
interface IQueryService_IRawContractState extends grpc.MethodDefinition<cosmwasm_wasm_v1_query_pb.QueryRawContractStateRequest, cosmwasm_wasm_v1_query_pb.QueryRawContractStateResponse> {
    path: "/cosmwasm.wasm.v1.Query/RawContractState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryRawContractStateRequest>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryRawContractStateRequest>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryRawContractStateResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryRawContractStateResponse>;
}
interface IQueryService_ISmartContractState extends grpc.MethodDefinition<cosmwasm_wasm_v1_query_pb.QuerySmartContractStateRequest, cosmwasm_wasm_v1_query_pb.QuerySmartContractStateResponse> {
    path: "/cosmwasm.wasm.v1.Query/SmartContractState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QuerySmartContractStateRequest>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QuerySmartContractStateRequest>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QuerySmartContractStateResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QuerySmartContractStateResponse>;
}
interface IQueryService_ICode extends grpc.MethodDefinition<cosmwasm_wasm_v1_query_pb.QueryCodeRequest, cosmwasm_wasm_v1_query_pb.QueryCodeResponse> {
    path: "/cosmwasm.wasm.v1.Query/Code";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryCodeRequest>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryCodeRequest>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryCodeResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryCodeResponse>;
}
interface IQueryService_ICodes extends grpc.MethodDefinition<cosmwasm_wasm_v1_query_pb.QueryCodesRequest, cosmwasm_wasm_v1_query_pb.QueryCodesResponse> {
    path: "/cosmwasm.wasm.v1.Query/Codes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryCodesRequest>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryCodesRequest>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_query_pb.QueryCodesResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_query_pb.QueryCodesResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
    contractInfo: grpc.handleUnaryCall<cosmwasm_wasm_v1_query_pb.QueryContractInfoRequest, cosmwasm_wasm_v1_query_pb.QueryContractInfoResponse>;
    contractHistory: grpc.handleUnaryCall<cosmwasm_wasm_v1_query_pb.QueryContractHistoryRequest, cosmwasm_wasm_v1_query_pb.QueryContractHistoryResponse>;
    contractsByCode: grpc.handleUnaryCall<cosmwasm_wasm_v1_query_pb.QueryContractsByCodeRequest, cosmwasm_wasm_v1_query_pb.QueryContractsByCodeResponse>;
    allContractState: grpc.handleUnaryCall<cosmwasm_wasm_v1_query_pb.QueryAllContractStateRequest, cosmwasm_wasm_v1_query_pb.QueryAllContractStateResponse>;
    rawContractState: grpc.handleUnaryCall<cosmwasm_wasm_v1_query_pb.QueryRawContractStateRequest, cosmwasm_wasm_v1_query_pb.QueryRawContractStateResponse>;
    smartContractState: grpc.handleUnaryCall<cosmwasm_wasm_v1_query_pb.QuerySmartContractStateRequest, cosmwasm_wasm_v1_query_pb.QuerySmartContractStateResponse>;
    code: grpc.handleUnaryCall<cosmwasm_wasm_v1_query_pb.QueryCodeRequest, cosmwasm_wasm_v1_query_pb.QueryCodeResponse>;
    codes: grpc.handleUnaryCall<cosmwasm_wasm_v1_query_pb.QueryCodesRequest, cosmwasm_wasm_v1_query_pb.QueryCodesResponse>;
}

export interface IQueryClient {
    contractInfo(request: cosmwasm_wasm_v1_query_pb.QueryContractInfoRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractInfoResponse) => void): grpc.ClientUnaryCall;
    contractInfo(request: cosmwasm_wasm_v1_query_pb.QueryContractInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractInfoResponse) => void): grpc.ClientUnaryCall;
    contractInfo(request: cosmwasm_wasm_v1_query_pb.QueryContractInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractInfoResponse) => void): grpc.ClientUnaryCall;
    contractHistory(request: cosmwasm_wasm_v1_query_pb.QueryContractHistoryRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractHistoryResponse) => void): grpc.ClientUnaryCall;
    contractHistory(request: cosmwasm_wasm_v1_query_pb.QueryContractHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractHistoryResponse) => void): grpc.ClientUnaryCall;
    contractHistory(request: cosmwasm_wasm_v1_query_pb.QueryContractHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractHistoryResponse) => void): grpc.ClientUnaryCall;
    contractsByCode(request: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeResponse) => void): grpc.ClientUnaryCall;
    contractsByCode(request: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeResponse) => void): grpc.ClientUnaryCall;
    contractsByCode(request: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeResponse) => void): grpc.ClientUnaryCall;
    allContractState(request: cosmwasm_wasm_v1_query_pb.QueryAllContractStateRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryAllContractStateResponse) => void): grpc.ClientUnaryCall;
    allContractState(request: cosmwasm_wasm_v1_query_pb.QueryAllContractStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryAllContractStateResponse) => void): grpc.ClientUnaryCall;
    allContractState(request: cosmwasm_wasm_v1_query_pb.QueryAllContractStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryAllContractStateResponse) => void): grpc.ClientUnaryCall;
    rawContractState(request: cosmwasm_wasm_v1_query_pb.QueryRawContractStateRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryRawContractStateResponse) => void): grpc.ClientUnaryCall;
    rawContractState(request: cosmwasm_wasm_v1_query_pb.QueryRawContractStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryRawContractStateResponse) => void): grpc.ClientUnaryCall;
    rawContractState(request: cosmwasm_wasm_v1_query_pb.QueryRawContractStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryRawContractStateResponse) => void): grpc.ClientUnaryCall;
    smartContractState(request: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateResponse) => void): grpc.ClientUnaryCall;
    smartContractState(request: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateResponse) => void): grpc.ClientUnaryCall;
    smartContractState(request: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateResponse) => void): grpc.ClientUnaryCall;
    code(request: cosmwasm_wasm_v1_query_pb.QueryCodeRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryCodeResponse) => void): grpc.ClientUnaryCall;
    code(request: cosmwasm_wasm_v1_query_pb.QueryCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryCodeResponse) => void): grpc.ClientUnaryCall;
    code(request: cosmwasm_wasm_v1_query_pb.QueryCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryCodeResponse) => void): grpc.ClientUnaryCall;
    codes(request: cosmwasm_wasm_v1_query_pb.QueryCodesRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryCodesResponse) => void): grpc.ClientUnaryCall;
    codes(request: cosmwasm_wasm_v1_query_pb.QueryCodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryCodesResponse) => void): grpc.ClientUnaryCall;
    codes(request: cosmwasm_wasm_v1_query_pb.QueryCodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryCodesResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public contractInfo(request: cosmwasm_wasm_v1_query_pb.QueryContractInfoRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractInfoResponse) => void): grpc.ClientUnaryCall;
    public contractInfo(request: cosmwasm_wasm_v1_query_pb.QueryContractInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractInfoResponse) => void): grpc.ClientUnaryCall;
    public contractInfo(request: cosmwasm_wasm_v1_query_pb.QueryContractInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractInfoResponse) => void): grpc.ClientUnaryCall;
    public contractHistory(request: cosmwasm_wasm_v1_query_pb.QueryContractHistoryRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractHistoryResponse) => void): grpc.ClientUnaryCall;
    public contractHistory(request: cosmwasm_wasm_v1_query_pb.QueryContractHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractHistoryResponse) => void): grpc.ClientUnaryCall;
    public contractHistory(request: cosmwasm_wasm_v1_query_pb.QueryContractHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractHistoryResponse) => void): grpc.ClientUnaryCall;
    public contractsByCode(request: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeResponse) => void): grpc.ClientUnaryCall;
    public contractsByCode(request: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeResponse) => void): grpc.ClientUnaryCall;
    public contractsByCode(request: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeResponse) => void): grpc.ClientUnaryCall;
    public allContractState(request: cosmwasm_wasm_v1_query_pb.QueryAllContractStateRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryAllContractStateResponse) => void): grpc.ClientUnaryCall;
    public allContractState(request: cosmwasm_wasm_v1_query_pb.QueryAllContractStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryAllContractStateResponse) => void): grpc.ClientUnaryCall;
    public allContractState(request: cosmwasm_wasm_v1_query_pb.QueryAllContractStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryAllContractStateResponse) => void): grpc.ClientUnaryCall;
    public rawContractState(request: cosmwasm_wasm_v1_query_pb.QueryRawContractStateRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryRawContractStateResponse) => void): grpc.ClientUnaryCall;
    public rawContractState(request: cosmwasm_wasm_v1_query_pb.QueryRawContractStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryRawContractStateResponse) => void): grpc.ClientUnaryCall;
    public rawContractState(request: cosmwasm_wasm_v1_query_pb.QueryRawContractStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryRawContractStateResponse) => void): grpc.ClientUnaryCall;
    public smartContractState(request: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateResponse) => void): grpc.ClientUnaryCall;
    public smartContractState(request: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateResponse) => void): grpc.ClientUnaryCall;
    public smartContractState(request: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateResponse) => void): grpc.ClientUnaryCall;
    public code(request: cosmwasm_wasm_v1_query_pb.QueryCodeRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryCodeResponse) => void): grpc.ClientUnaryCall;
    public code(request: cosmwasm_wasm_v1_query_pb.QueryCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryCodeResponse) => void): grpc.ClientUnaryCall;
    public code(request: cosmwasm_wasm_v1_query_pb.QueryCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryCodeResponse) => void): grpc.ClientUnaryCall;
    public codes(request: cosmwasm_wasm_v1_query_pb.QueryCodesRequest, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryCodesResponse) => void): grpc.ClientUnaryCall;
    public codes(request: cosmwasm_wasm_v1_query_pb.QueryCodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryCodesResponse) => void): grpc.ClientUnaryCall;
    public codes(request: cosmwasm_wasm_v1_query_pb.QueryCodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_query_pb.QueryCodesResponse) => void): grpc.ClientUnaryCall;
}
