// package: provenance.msgfees.v1
// file: provenance/msgfees/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as provenance_msgfees_v1_query_pb from "../../../provenance/msgfees/v1/query_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_msgfees_v1_msgfees_pb from "../../../provenance/msgfees/v1/msgfees_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    params: IQueryService_IParams;
    queryAllMsgFees: IQueryService_IQueryAllMsgFees;
    calculateTxFees: IQueryService_ICalculateTxFees;
}

interface IQueryService_IParams extends grpc.MethodDefinition<provenance_msgfees_v1_query_pb.QueryParamsRequest, provenance_msgfees_v1_query_pb.QueryParamsResponse> {
    path: "/provenance.msgfees.v1.Query/Params";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_msgfees_v1_query_pb.QueryParamsRequest>;
    requestDeserialize: grpc.deserialize<provenance_msgfees_v1_query_pb.QueryParamsRequest>;
    responseSerialize: grpc.serialize<provenance_msgfees_v1_query_pb.QueryParamsResponse>;
    responseDeserialize: grpc.deserialize<provenance_msgfees_v1_query_pb.QueryParamsResponse>;
}
interface IQueryService_IQueryAllMsgFees extends grpc.MethodDefinition<provenance_msgfees_v1_query_pb.QueryAllMsgFeesRequest, provenance_msgfees_v1_query_pb.QueryAllMsgFeesResponse> {
    path: "/provenance.msgfees.v1.Query/QueryAllMsgFees";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_msgfees_v1_query_pb.QueryAllMsgFeesRequest>;
    requestDeserialize: grpc.deserialize<provenance_msgfees_v1_query_pb.QueryAllMsgFeesRequest>;
    responseSerialize: grpc.serialize<provenance_msgfees_v1_query_pb.QueryAllMsgFeesResponse>;
    responseDeserialize: grpc.deserialize<provenance_msgfees_v1_query_pb.QueryAllMsgFeesResponse>;
}
interface IQueryService_ICalculateTxFees extends grpc.MethodDefinition<provenance_msgfees_v1_query_pb.CalculateTxFeesRequest, provenance_msgfees_v1_query_pb.CalculateTxFeesResponse> {
    path: "/provenance.msgfees.v1.Query/CalculateTxFees";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_msgfees_v1_query_pb.CalculateTxFeesRequest>;
    requestDeserialize: grpc.deserialize<provenance_msgfees_v1_query_pb.CalculateTxFeesRequest>;
    responseSerialize: grpc.serialize<provenance_msgfees_v1_query_pb.CalculateTxFeesResponse>;
    responseDeserialize: grpc.deserialize<provenance_msgfees_v1_query_pb.CalculateTxFeesResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
    params: grpc.handleUnaryCall<provenance_msgfees_v1_query_pb.QueryParamsRequest, provenance_msgfees_v1_query_pb.QueryParamsResponse>;
    queryAllMsgFees: grpc.handleUnaryCall<provenance_msgfees_v1_query_pb.QueryAllMsgFeesRequest, provenance_msgfees_v1_query_pb.QueryAllMsgFeesResponse>;
    calculateTxFees: grpc.handleUnaryCall<provenance_msgfees_v1_query_pb.CalculateTxFeesRequest, provenance_msgfees_v1_query_pb.CalculateTxFeesResponse>;
}

export interface IQueryClient {
    params(request: provenance_msgfees_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: provenance_msgfees_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    params(request: provenance_msgfees_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    queryAllMsgFees(request: provenance_msgfees_v1_query_pb.QueryAllMsgFeesRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.QueryAllMsgFeesResponse) => void): grpc.ClientUnaryCall;
    queryAllMsgFees(request: provenance_msgfees_v1_query_pb.QueryAllMsgFeesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.QueryAllMsgFeesResponse) => void): grpc.ClientUnaryCall;
    queryAllMsgFees(request: provenance_msgfees_v1_query_pb.QueryAllMsgFeesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.QueryAllMsgFeesResponse) => void): grpc.ClientUnaryCall;
    calculateTxFees(request: provenance_msgfees_v1_query_pb.CalculateTxFeesRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.CalculateTxFeesResponse) => void): grpc.ClientUnaryCall;
    calculateTxFees(request: provenance_msgfees_v1_query_pb.CalculateTxFeesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.CalculateTxFeesResponse) => void): grpc.ClientUnaryCall;
    calculateTxFees(request: provenance_msgfees_v1_query_pb.CalculateTxFeesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.CalculateTxFeesResponse) => void): grpc.ClientUnaryCall;
}

export class QueryClient extends grpc.Client implements IQueryClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public params(request: provenance_msgfees_v1_query_pb.QueryParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: provenance_msgfees_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public params(request: provenance_msgfees_v1_query_pb.QueryParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.QueryParamsResponse) => void): grpc.ClientUnaryCall;
    public queryAllMsgFees(request: provenance_msgfees_v1_query_pb.QueryAllMsgFeesRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.QueryAllMsgFeesResponse) => void): grpc.ClientUnaryCall;
    public queryAllMsgFees(request: provenance_msgfees_v1_query_pb.QueryAllMsgFeesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.QueryAllMsgFeesResponse) => void): grpc.ClientUnaryCall;
    public queryAllMsgFees(request: provenance_msgfees_v1_query_pb.QueryAllMsgFeesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.QueryAllMsgFeesResponse) => void): grpc.ClientUnaryCall;
    public calculateTxFees(request: provenance_msgfees_v1_query_pb.CalculateTxFeesRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.CalculateTxFeesResponse) => void): grpc.ClientUnaryCall;
    public calculateTxFees(request: provenance_msgfees_v1_query_pb.CalculateTxFeesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.CalculateTxFeesResponse) => void): grpc.ClientUnaryCall;
    public calculateTxFees(request: provenance_msgfees_v1_query_pb.CalculateTxFeesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_query_pb.CalculateTxFeesResponse) => void): grpc.ClientUnaryCall;
}
