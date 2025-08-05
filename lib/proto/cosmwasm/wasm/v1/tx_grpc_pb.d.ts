// package: cosmwasm.wasm.v1
// file: cosmwasm/wasm/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as cosmwasm_wasm_v1_tx_pb from "../../../cosmwasm/wasm/v1/tx_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmwasm_wasm_v1_types_pb from "../../../cosmwasm/wasm/v1/types_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    storeCode: IMsgService_IStoreCode;
    instantiateContract: IMsgService_IInstantiateContract;
    executeContract: IMsgService_IExecuteContract;
    migrateContract: IMsgService_IMigrateContract;
    updateAdmin: IMsgService_IUpdateAdmin;
    clearAdmin: IMsgService_IClearAdmin;
}

interface IMsgService_IStoreCode extends grpc.MethodDefinition<cosmwasm_wasm_v1_tx_pb.MsgStoreCode, cosmwasm_wasm_v1_tx_pb.MsgStoreCodeResponse> {
    path: "/cosmwasm.wasm.v1.Msg/StoreCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_tx_pb.MsgStoreCode>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_tx_pb.MsgStoreCode>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_tx_pb.MsgStoreCodeResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_tx_pb.MsgStoreCodeResponse>;
}
interface IMsgService_IInstantiateContract extends grpc.MethodDefinition<cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract, cosmwasm_wasm_v1_tx_pb.MsgInstantiateContractResponse> {
    path: "/cosmwasm.wasm.v1.Msg/InstantiateContract";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_tx_pb.MsgInstantiateContractResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_tx_pb.MsgInstantiateContractResponse>;
}
interface IMsgService_IExecuteContract extends grpc.MethodDefinition<cosmwasm_wasm_v1_tx_pb.MsgExecuteContract, cosmwasm_wasm_v1_tx_pb.MsgExecuteContractResponse> {
    path: "/cosmwasm.wasm.v1.Msg/ExecuteContract";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_tx_pb.MsgExecuteContract>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_tx_pb.MsgExecuteContract>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_tx_pb.MsgExecuteContractResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_tx_pb.MsgExecuteContractResponse>;
}
interface IMsgService_IMigrateContract extends grpc.MethodDefinition<cosmwasm_wasm_v1_tx_pb.MsgMigrateContract, cosmwasm_wasm_v1_tx_pb.MsgMigrateContractResponse> {
    path: "/cosmwasm.wasm.v1.Msg/MigrateContract";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_tx_pb.MsgMigrateContract>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_tx_pb.MsgMigrateContract>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_tx_pb.MsgMigrateContractResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_tx_pb.MsgMigrateContractResponse>;
}
interface IMsgService_IUpdateAdmin extends grpc.MethodDefinition<cosmwasm_wasm_v1_tx_pb.MsgUpdateAdmin, cosmwasm_wasm_v1_tx_pb.MsgUpdateAdminResponse> {
    path: "/cosmwasm.wasm.v1.Msg/UpdateAdmin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_tx_pb.MsgUpdateAdmin>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_tx_pb.MsgUpdateAdmin>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_tx_pb.MsgUpdateAdminResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_tx_pb.MsgUpdateAdminResponse>;
}
interface IMsgService_IClearAdmin extends grpc.MethodDefinition<cosmwasm_wasm_v1_tx_pb.MsgClearAdmin, cosmwasm_wasm_v1_tx_pb.MsgClearAdminResponse> {
    path: "/cosmwasm.wasm.v1.Msg/ClearAdmin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cosmwasm_wasm_v1_tx_pb.MsgClearAdmin>;
    requestDeserialize: grpc.deserialize<cosmwasm_wasm_v1_tx_pb.MsgClearAdmin>;
    responseSerialize: grpc.serialize<cosmwasm_wasm_v1_tx_pb.MsgClearAdminResponse>;
    responseDeserialize: grpc.deserialize<cosmwasm_wasm_v1_tx_pb.MsgClearAdminResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
    storeCode: grpc.handleUnaryCall<cosmwasm_wasm_v1_tx_pb.MsgStoreCode, cosmwasm_wasm_v1_tx_pb.MsgStoreCodeResponse>;
    instantiateContract: grpc.handleUnaryCall<cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract, cosmwasm_wasm_v1_tx_pb.MsgInstantiateContractResponse>;
    executeContract: grpc.handleUnaryCall<cosmwasm_wasm_v1_tx_pb.MsgExecuteContract, cosmwasm_wasm_v1_tx_pb.MsgExecuteContractResponse>;
    migrateContract: grpc.handleUnaryCall<cosmwasm_wasm_v1_tx_pb.MsgMigrateContract, cosmwasm_wasm_v1_tx_pb.MsgMigrateContractResponse>;
    updateAdmin: grpc.handleUnaryCall<cosmwasm_wasm_v1_tx_pb.MsgUpdateAdmin, cosmwasm_wasm_v1_tx_pb.MsgUpdateAdminResponse>;
    clearAdmin: grpc.handleUnaryCall<cosmwasm_wasm_v1_tx_pb.MsgClearAdmin, cosmwasm_wasm_v1_tx_pb.MsgClearAdminResponse>;
}

export interface IMsgClient {
    storeCode(request: cosmwasm_wasm_v1_tx_pb.MsgStoreCode, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgStoreCodeResponse) => void): grpc.ClientUnaryCall;
    storeCode(request: cosmwasm_wasm_v1_tx_pb.MsgStoreCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgStoreCodeResponse) => void): grpc.ClientUnaryCall;
    storeCode(request: cosmwasm_wasm_v1_tx_pb.MsgStoreCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgStoreCodeResponse) => void): grpc.ClientUnaryCall;
    instantiateContract(request: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContractResponse) => void): grpc.ClientUnaryCall;
    instantiateContract(request: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContractResponse) => void): grpc.ClientUnaryCall;
    instantiateContract(request: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContractResponse) => void): grpc.ClientUnaryCall;
    executeContract(request: cosmwasm_wasm_v1_tx_pb.MsgExecuteContract, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgExecuteContractResponse) => void): grpc.ClientUnaryCall;
    executeContract(request: cosmwasm_wasm_v1_tx_pb.MsgExecuteContract, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgExecuteContractResponse) => void): grpc.ClientUnaryCall;
    executeContract(request: cosmwasm_wasm_v1_tx_pb.MsgExecuteContract, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgExecuteContractResponse) => void): grpc.ClientUnaryCall;
    migrateContract(request: cosmwasm_wasm_v1_tx_pb.MsgMigrateContract, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgMigrateContractResponse) => void): grpc.ClientUnaryCall;
    migrateContract(request: cosmwasm_wasm_v1_tx_pb.MsgMigrateContract, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgMigrateContractResponse) => void): grpc.ClientUnaryCall;
    migrateContract(request: cosmwasm_wasm_v1_tx_pb.MsgMigrateContract, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgMigrateContractResponse) => void): grpc.ClientUnaryCall;
    updateAdmin(request: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdmin, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdminResponse) => void): grpc.ClientUnaryCall;
    updateAdmin(request: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdmin, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdminResponse) => void): grpc.ClientUnaryCall;
    updateAdmin(request: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdmin, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdminResponse) => void): grpc.ClientUnaryCall;
    clearAdmin(request: cosmwasm_wasm_v1_tx_pb.MsgClearAdmin, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgClearAdminResponse) => void): grpc.ClientUnaryCall;
    clearAdmin(request: cosmwasm_wasm_v1_tx_pb.MsgClearAdmin, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgClearAdminResponse) => void): grpc.ClientUnaryCall;
    clearAdmin(request: cosmwasm_wasm_v1_tx_pb.MsgClearAdmin, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgClearAdminResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public storeCode(request: cosmwasm_wasm_v1_tx_pb.MsgStoreCode, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgStoreCodeResponse) => void): grpc.ClientUnaryCall;
    public storeCode(request: cosmwasm_wasm_v1_tx_pb.MsgStoreCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgStoreCodeResponse) => void): grpc.ClientUnaryCall;
    public storeCode(request: cosmwasm_wasm_v1_tx_pb.MsgStoreCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgStoreCodeResponse) => void): grpc.ClientUnaryCall;
    public instantiateContract(request: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContractResponse) => void): grpc.ClientUnaryCall;
    public instantiateContract(request: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContractResponse) => void): grpc.ClientUnaryCall;
    public instantiateContract(request: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContractResponse) => void): grpc.ClientUnaryCall;
    public executeContract(request: cosmwasm_wasm_v1_tx_pb.MsgExecuteContract, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgExecuteContractResponse) => void): grpc.ClientUnaryCall;
    public executeContract(request: cosmwasm_wasm_v1_tx_pb.MsgExecuteContract, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgExecuteContractResponse) => void): grpc.ClientUnaryCall;
    public executeContract(request: cosmwasm_wasm_v1_tx_pb.MsgExecuteContract, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgExecuteContractResponse) => void): grpc.ClientUnaryCall;
    public migrateContract(request: cosmwasm_wasm_v1_tx_pb.MsgMigrateContract, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgMigrateContractResponse) => void): grpc.ClientUnaryCall;
    public migrateContract(request: cosmwasm_wasm_v1_tx_pb.MsgMigrateContract, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgMigrateContractResponse) => void): grpc.ClientUnaryCall;
    public migrateContract(request: cosmwasm_wasm_v1_tx_pb.MsgMigrateContract, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgMigrateContractResponse) => void): grpc.ClientUnaryCall;
    public updateAdmin(request: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdmin, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdminResponse) => void): grpc.ClientUnaryCall;
    public updateAdmin(request: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdmin, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdminResponse) => void): grpc.ClientUnaryCall;
    public updateAdmin(request: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdmin, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdminResponse) => void): grpc.ClientUnaryCall;
    public clearAdmin(request: cosmwasm_wasm_v1_tx_pb.MsgClearAdmin, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgClearAdminResponse) => void): grpc.ClientUnaryCall;
    public clearAdmin(request: cosmwasm_wasm_v1_tx_pb.MsgClearAdmin, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgClearAdminResponse) => void): grpc.ClientUnaryCall;
    public clearAdmin(request: cosmwasm_wasm_v1_tx_pb.MsgClearAdmin, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cosmwasm_wasm_v1_tx_pb.MsgClearAdminResponse) => void): grpc.ClientUnaryCall;
}
