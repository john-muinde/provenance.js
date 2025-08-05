// package: provenance.attribute.v1
// file: provenance/attribute/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_attribute_v1_attribute_pb from "../../../provenance/attribute/v1/attribute_pb";

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
    getParams(): provenance_attribute_v1_attribute_pb.Params | undefined;
    setParams(value?: provenance_attribute_v1_attribute_pb.Params): QueryParamsResponse;

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
        params?: provenance_attribute_v1_attribute_pb.Params.AsObject,
    }
}

export class QueryAttributeRequest extends jspb.Message { 
    getAccount(): string;
    setAccount(value: string): QueryAttributeRequest;
    getName(): string;
    setName(value: string): QueryAttributeRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryAttributeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAttributeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAttributeRequest): QueryAttributeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAttributeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAttributeRequest;
    static deserializeBinaryFromReader(message: QueryAttributeRequest, reader: jspb.BinaryReader): QueryAttributeRequest;
}

export namespace QueryAttributeRequest {
    export type AsObject = {
        account: string,
        name: string,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryAttributeResponse extends jspb.Message { 
    getAccount(): string;
    setAccount(value: string): QueryAttributeResponse;
    clearAttributesList(): void;
    getAttributesList(): Array<provenance_attribute_v1_attribute_pb.Attribute>;
    setAttributesList(value: Array<provenance_attribute_v1_attribute_pb.Attribute>): QueryAttributeResponse;
    addAttributes(value?: provenance_attribute_v1_attribute_pb.Attribute, index?: number): provenance_attribute_v1_attribute_pb.Attribute;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryAttributeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAttributeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAttributeResponse): QueryAttributeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAttributeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAttributeResponse;
    static deserializeBinaryFromReader(message: QueryAttributeResponse, reader: jspb.BinaryReader): QueryAttributeResponse;
}

export namespace QueryAttributeResponse {
    export type AsObject = {
        account: string,
        attributesList: Array<provenance_attribute_v1_attribute_pb.Attribute.AsObject>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class QueryAttributesRequest extends jspb.Message { 
    getAccount(): string;
    setAccount(value: string): QueryAttributesRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryAttributesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAttributesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAttributesRequest): QueryAttributesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAttributesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAttributesRequest;
    static deserializeBinaryFromReader(message: QueryAttributesRequest, reader: jspb.BinaryReader): QueryAttributesRequest;
}

export namespace QueryAttributesRequest {
    export type AsObject = {
        account: string,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryAttributesResponse extends jspb.Message { 
    getAccount(): string;
    setAccount(value: string): QueryAttributesResponse;
    clearAttributesList(): void;
    getAttributesList(): Array<provenance_attribute_v1_attribute_pb.Attribute>;
    setAttributesList(value: Array<provenance_attribute_v1_attribute_pb.Attribute>): QueryAttributesResponse;
    addAttributes(value?: provenance_attribute_v1_attribute_pb.Attribute, index?: number): provenance_attribute_v1_attribute_pb.Attribute;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryAttributesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAttributesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAttributesResponse): QueryAttributesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAttributesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAttributesResponse;
    static deserializeBinaryFromReader(message: QueryAttributesResponse, reader: jspb.BinaryReader): QueryAttributesResponse;
}

export namespace QueryAttributesResponse {
    export type AsObject = {
        account: string,
        attributesList: Array<provenance_attribute_v1_attribute_pb.Attribute.AsObject>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class QueryScanRequest extends jspb.Message { 
    getAccount(): string;
    setAccount(value: string): QueryScanRequest;
    getSuffix(): string;
    setSuffix(value: string): QueryScanRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryScanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryScanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryScanRequest): QueryScanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryScanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryScanRequest;
    static deserializeBinaryFromReader(message: QueryScanRequest, reader: jspb.BinaryReader): QueryScanRequest;
}

export namespace QueryScanRequest {
    export type AsObject = {
        account: string,
        suffix: string,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryScanResponse extends jspb.Message { 
    getAccount(): string;
    setAccount(value: string): QueryScanResponse;
    clearAttributesList(): void;
    getAttributesList(): Array<provenance_attribute_v1_attribute_pb.Attribute>;
    setAttributesList(value: Array<provenance_attribute_v1_attribute_pb.Attribute>): QueryScanResponse;
    addAttributes(value?: provenance_attribute_v1_attribute_pb.Attribute, index?: number): provenance_attribute_v1_attribute_pb.Attribute;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryScanResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryScanResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryScanResponse): QueryScanResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryScanResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryScanResponse;
    static deserializeBinaryFromReader(message: QueryScanResponse, reader: jspb.BinaryReader): QueryScanResponse;
}

export namespace QueryScanResponse {
    export type AsObject = {
        account: string,
        attributesList: Array<provenance_attribute_v1_attribute_pb.Attribute.AsObject>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class QueryAttributeAccountsRequest extends jspb.Message { 
    getAttributeName(): string;
    setAttributeName(value: string): QueryAttributeAccountsRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryAttributeAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAttributeAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAttributeAccountsRequest): QueryAttributeAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAttributeAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAttributeAccountsRequest;
    static deserializeBinaryFromReader(message: QueryAttributeAccountsRequest, reader: jspb.BinaryReader): QueryAttributeAccountsRequest;
}

export namespace QueryAttributeAccountsRequest {
    export type AsObject = {
        attributeName: string,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryAttributeAccountsResponse extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<string>;
    setAccountsList(value: Array<string>): QueryAttributeAccountsResponse;
    addAccounts(value: string, index?: number): string;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryAttributeAccountsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAttributeAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAttributeAccountsResponse): QueryAttributeAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAttributeAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAttributeAccountsResponse;
    static deserializeBinaryFromReader(message: QueryAttributeAccountsResponse, reader: jspb.BinaryReader): QueryAttributeAccountsResponse;
}

export namespace QueryAttributeAccountsResponse {
    export type AsObject = {
        accountsList: Array<string>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class QueryAccountDataRequest extends jspb.Message { 
    getAccount(): string;
    setAccount(value: string): QueryAccountDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAccountDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAccountDataRequest): QueryAccountDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAccountDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAccountDataRequest;
    static deserializeBinaryFromReader(message: QueryAccountDataRequest, reader: jspb.BinaryReader): QueryAccountDataRequest;
}

export namespace QueryAccountDataRequest {
    export type AsObject = {
        account: string,
    }
}

export class QueryAccountDataResponse extends jspb.Message { 
    getValue(): string;
    setValue(value: string): QueryAccountDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAccountDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAccountDataResponse): QueryAccountDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAccountDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAccountDataResponse;
    static deserializeBinaryFromReader(message: QueryAccountDataResponse, reader: jspb.BinaryReader): QueryAccountDataResponse;
}

export namespace QueryAccountDataResponse {
    export type AsObject = {
        value: string,
    }
}
