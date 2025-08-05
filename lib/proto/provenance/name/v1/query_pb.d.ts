// package: provenance.name.v1
// file: provenance/name/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_name_v1_name_pb from "../../../provenance/name/v1/name_pb";

export class QueryParamsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
    export type AsObject = {
    }
}

export class QueryParamsResponse extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): provenance_name_v1_name_pb.Params | undefined;
    setParams(value?: provenance_name_v1_name_pb.Params): QueryParamsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
    export type AsObject = {
        params?: provenance_name_v1_name_pb.Params.AsObject,
    }
}

export class QueryResolveRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): QueryResolveRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryResolveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryResolveRequest): QueryResolveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryResolveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryResolveRequest;
    static deserializeBinaryFromReader(message: QueryResolveRequest, reader: jspb.BinaryReader): QueryResolveRequest;
}

export namespace QueryResolveRequest {
    export type AsObject = {
        name: string,
    }
}

export class QueryResolveResponse extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): QueryResolveResponse;
    getRestricted(): boolean;
    setRestricted(value: boolean): QueryResolveResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryResolveResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryResolveResponse): QueryResolveResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryResolveResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryResolveResponse;
    static deserializeBinaryFromReader(message: QueryResolveResponse, reader: jspb.BinaryReader): QueryResolveResponse;
}

export namespace QueryResolveResponse {
    export type AsObject = {
        address: string,
        restricted: boolean,
    }
}

export class QueryReverseLookupRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): QueryReverseLookupRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryReverseLookupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryReverseLookupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryReverseLookupRequest): QueryReverseLookupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryReverseLookupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryReverseLookupRequest;
    static deserializeBinaryFromReader(message: QueryReverseLookupRequest, reader: jspb.BinaryReader): QueryReverseLookupRequest;
}

export namespace QueryReverseLookupRequest {
    export type AsObject = {
        address: string,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryReverseLookupResponse extends jspb.Message { 
    clearNameList(): void;
    getNameList(): Array<string>;
    setNameList(value: Array<string>): QueryReverseLookupResponse;
    addName(value: string, index?: number): string;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryReverseLookupResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryReverseLookupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryReverseLookupResponse): QueryReverseLookupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryReverseLookupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryReverseLookupResponse;
    static deserializeBinaryFromReader(message: QueryReverseLookupResponse, reader: jspb.BinaryReader): QueryReverseLookupResponse;
}

export namespace QueryReverseLookupResponse {
    export type AsObject = {
        nameList: Array<string>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}
