// package: cosmwasm.wasm.v1
// file: cosmwasm/wasm/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmwasm_wasm_v1_types_pb from "../../../cosmwasm/wasm/v1/types_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";

export class QueryContractInfoRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): QueryContractInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryContractInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryContractInfoRequest): QueryContractInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryContractInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryContractInfoRequest;
    static deserializeBinaryFromReader(message: QueryContractInfoRequest, reader: jspb.BinaryReader): QueryContractInfoRequest;
}

export namespace QueryContractInfoRequest {
    export type AsObject = {
        address: string,
    }
}

export class QueryContractInfoResponse extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): QueryContractInfoResponse;

    hasContractInfo(): boolean;
    clearContractInfo(): void;
    getContractInfo(): cosmwasm_wasm_v1_types_pb.ContractInfo | undefined;
    setContractInfo(value?: cosmwasm_wasm_v1_types_pb.ContractInfo): QueryContractInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryContractInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryContractInfoResponse): QueryContractInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryContractInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryContractInfoResponse;
    static deserializeBinaryFromReader(message: QueryContractInfoResponse, reader: jspb.BinaryReader): QueryContractInfoResponse;
}

export namespace QueryContractInfoResponse {
    export type AsObject = {
        address: string,
        contractInfo?: cosmwasm_wasm_v1_types_pb.ContractInfo.AsObject,
    }
}

export class QueryContractHistoryRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): QueryContractHistoryRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryContractHistoryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryContractHistoryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryContractHistoryRequest): QueryContractHistoryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryContractHistoryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryContractHistoryRequest;
    static deserializeBinaryFromReader(message: QueryContractHistoryRequest, reader: jspb.BinaryReader): QueryContractHistoryRequest;
}

export namespace QueryContractHistoryRequest {
    export type AsObject = {
        address: string,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryContractHistoryResponse extends jspb.Message { 
    clearEntriesList(): void;
    getEntriesList(): Array<cosmwasm_wasm_v1_types_pb.ContractCodeHistoryEntry>;
    setEntriesList(value: Array<cosmwasm_wasm_v1_types_pb.ContractCodeHistoryEntry>): QueryContractHistoryResponse;
    addEntries(value?: cosmwasm_wasm_v1_types_pb.ContractCodeHistoryEntry, index?: number): cosmwasm_wasm_v1_types_pb.ContractCodeHistoryEntry;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryContractHistoryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryContractHistoryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryContractHistoryResponse): QueryContractHistoryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryContractHistoryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryContractHistoryResponse;
    static deserializeBinaryFromReader(message: QueryContractHistoryResponse, reader: jspb.BinaryReader): QueryContractHistoryResponse;
}

export namespace QueryContractHistoryResponse {
    export type AsObject = {
        entriesList: Array<cosmwasm_wasm_v1_types_pb.ContractCodeHistoryEntry.AsObject>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class QueryContractsByCodeRequest extends jspb.Message { 
    getCodeId(): number;
    setCodeId(value: number): QueryContractsByCodeRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryContractsByCodeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryContractsByCodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryContractsByCodeRequest): QueryContractsByCodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryContractsByCodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryContractsByCodeRequest;
    static deserializeBinaryFromReader(message: QueryContractsByCodeRequest, reader: jspb.BinaryReader): QueryContractsByCodeRequest;
}

export namespace QueryContractsByCodeRequest {
    export type AsObject = {
        codeId: number,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryContractsByCodeResponse extends jspb.Message { 
    clearContractsList(): void;
    getContractsList(): Array<string>;
    setContractsList(value: Array<string>): QueryContractsByCodeResponse;
    addContracts(value: string, index?: number): string;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryContractsByCodeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryContractsByCodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryContractsByCodeResponse): QueryContractsByCodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryContractsByCodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryContractsByCodeResponse;
    static deserializeBinaryFromReader(message: QueryContractsByCodeResponse, reader: jspb.BinaryReader): QueryContractsByCodeResponse;
}

export namespace QueryContractsByCodeResponse {
    export type AsObject = {
        contractsList: Array<string>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class QueryAllContractStateRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): QueryAllContractStateRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryAllContractStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAllContractStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAllContractStateRequest): QueryAllContractStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAllContractStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAllContractStateRequest;
    static deserializeBinaryFromReader(message: QueryAllContractStateRequest, reader: jspb.BinaryReader): QueryAllContractStateRequest;
}

export namespace QueryAllContractStateRequest {
    export type AsObject = {
        address: string,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryAllContractStateResponse extends jspb.Message { 
    clearModelsList(): void;
    getModelsList(): Array<cosmwasm_wasm_v1_types_pb.Model>;
    setModelsList(value: Array<cosmwasm_wasm_v1_types_pb.Model>): QueryAllContractStateResponse;
    addModels(value?: cosmwasm_wasm_v1_types_pb.Model, index?: number): cosmwasm_wasm_v1_types_pb.Model;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryAllContractStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAllContractStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAllContractStateResponse): QueryAllContractStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAllContractStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAllContractStateResponse;
    static deserializeBinaryFromReader(message: QueryAllContractStateResponse, reader: jspb.BinaryReader): QueryAllContractStateResponse;
}

export namespace QueryAllContractStateResponse {
    export type AsObject = {
        modelsList: Array<cosmwasm_wasm_v1_types_pb.Model.AsObject>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class QueryRawContractStateRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): QueryRawContractStateRequest;
    getQueryData(): Uint8Array | string;
    getQueryData_asU8(): Uint8Array;
    getQueryData_asB64(): string;
    setQueryData(value: Uint8Array | string): QueryRawContractStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryRawContractStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryRawContractStateRequest): QueryRawContractStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryRawContractStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryRawContractStateRequest;
    static deserializeBinaryFromReader(message: QueryRawContractStateRequest, reader: jspb.BinaryReader): QueryRawContractStateRequest;
}

export namespace QueryRawContractStateRequest {
    export type AsObject = {
        address: string,
        queryData: Uint8Array | string,
    }
}

export class QueryRawContractStateResponse extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): QueryRawContractStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryRawContractStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryRawContractStateResponse): QueryRawContractStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryRawContractStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryRawContractStateResponse;
    static deserializeBinaryFromReader(message: QueryRawContractStateResponse, reader: jspb.BinaryReader): QueryRawContractStateResponse;
}

export namespace QueryRawContractStateResponse {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class QuerySmartContractStateRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): QuerySmartContractStateRequest;
    getQueryData(): Uint8Array | string;
    getQueryData_asU8(): Uint8Array;
    getQueryData_asB64(): string;
    setQueryData(value: Uint8Array | string): QuerySmartContractStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySmartContractStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySmartContractStateRequest): QuerySmartContractStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuerySmartContractStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySmartContractStateRequest;
    static deserializeBinaryFromReader(message: QuerySmartContractStateRequest, reader: jspb.BinaryReader): QuerySmartContractStateRequest;
}

export namespace QuerySmartContractStateRequest {
    export type AsObject = {
        address: string,
        queryData: Uint8Array | string,
    }
}

export class QuerySmartContractStateResponse extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): QuerySmartContractStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySmartContractStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySmartContractStateResponse): QuerySmartContractStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuerySmartContractStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySmartContractStateResponse;
    static deserializeBinaryFromReader(message: QuerySmartContractStateResponse, reader: jspb.BinaryReader): QuerySmartContractStateResponse;
}

export namespace QuerySmartContractStateResponse {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class QueryCodeRequest extends jspb.Message { 
    getCodeId(): number;
    setCodeId(value: number): QueryCodeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryCodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryCodeRequest): QueryCodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryCodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryCodeRequest;
    static deserializeBinaryFromReader(message: QueryCodeRequest, reader: jspb.BinaryReader): QueryCodeRequest;
}

export namespace QueryCodeRequest {
    export type AsObject = {
        codeId: number,
    }
}

export class CodeInfoResponse extends jspb.Message { 
    getCodeId(): number;
    setCodeId(value: number): CodeInfoResponse;
    getCreator(): string;
    setCreator(value: string): CodeInfoResponse;
    getDataHash(): Uint8Array | string;
    getDataHash_asU8(): Uint8Array;
    getDataHash_asB64(): string;
    setDataHash(value: Uint8Array | string): CodeInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CodeInfoResponse): CodeInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeInfoResponse;
    static deserializeBinaryFromReader(message: CodeInfoResponse, reader: jspb.BinaryReader): CodeInfoResponse;
}

export namespace CodeInfoResponse {
    export type AsObject = {
        codeId: number,
        creator: string,
        dataHash: Uint8Array | string,
    }
}

export class QueryCodeResponse extends jspb.Message { 

    hasCodeInfo(): boolean;
    clearCodeInfo(): void;
    getCodeInfo(): CodeInfoResponse | undefined;
    setCodeInfo(value?: CodeInfoResponse): QueryCodeResponse;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): QueryCodeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryCodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryCodeResponse): QueryCodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryCodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryCodeResponse;
    static deserializeBinaryFromReader(message: QueryCodeResponse, reader: jspb.BinaryReader): QueryCodeResponse;
}

export namespace QueryCodeResponse {
    export type AsObject = {
        codeInfo?: CodeInfoResponse.AsObject,
        data: Uint8Array | string,
    }
}

export class QueryCodesRequest extends jspb.Message { 

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryCodesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryCodesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryCodesRequest): QueryCodesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryCodesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryCodesRequest;
    static deserializeBinaryFromReader(message: QueryCodesRequest, reader: jspb.BinaryReader): QueryCodesRequest;
}

export namespace QueryCodesRequest {
    export type AsObject = {
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryCodesResponse extends jspb.Message { 
    clearCodeInfosList(): void;
    getCodeInfosList(): Array<CodeInfoResponse>;
    setCodeInfosList(value: Array<CodeInfoResponse>): QueryCodesResponse;
    addCodeInfos(value?: CodeInfoResponse, index?: number): CodeInfoResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryCodesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryCodesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryCodesResponse): QueryCodesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryCodesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryCodesResponse;
    static deserializeBinaryFromReader(message: QueryCodesResponse, reader: jspb.BinaryReader): QueryCodesResponse;
}

export namespace QueryCodesResponse {
    export type AsObject = {
        codeInfosList: Array<CodeInfoResponse.AsObject>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}
