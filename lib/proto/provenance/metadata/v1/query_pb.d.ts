// package: provenance.metadata.v1
// file: provenance/metadata/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as provenance_metadata_v1_metadata_pb from "../../../provenance/metadata/v1/metadata_pb";
import * as provenance_metadata_v1_scope_pb from "../../../provenance/metadata/v1/scope_pb";
import * as provenance_metadata_v1_specification_pb from "../../../provenance/metadata/v1/specification_pb";
import * as provenance_metadata_v1_objectstore_pb from "../../../provenance/metadata/v1/objectstore_pb";

export class QueryParamsRequest extends jspb.Message { 
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): QueryParamsRequest;

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
        includeRequest: boolean,
    }
}

export class QueryParamsResponse extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): provenance_metadata_v1_metadata_pb.Params | undefined;
    setParams(value?: provenance_metadata_v1_metadata_pb.Params): QueryParamsResponse;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): QueryParamsRequest | undefined;
    setRequest(value?: QueryParamsRequest): QueryParamsResponse;

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
        params?: provenance_metadata_v1_metadata_pb.Params.AsObject,
        request?: QueryParamsRequest.AsObject,
    }
}

export class ScopeRequest extends jspb.Message { 
    getScopeId(): string;
    setScopeId(value: string): ScopeRequest;
    getSessionAddr(): string;
    setSessionAddr(value: string): ScopeRequest;
    getRecordAddr(): string;
    setRecordAddr(value: string): ScopeRequest;
    getIncludeSessions(): boolean;
    setIncludeSessions(value: boolean): ScopeRequest;
    getIncludeRecords(): boolean;
    setIncludeRecords(value: boolean): ScopeRequest;
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): ScopeRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): ScopeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeRequest): ScopeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeRequest;
    static deserializeBinaryFromReader(message: ScopeRequest, reader: jspb.BinaryReader): ScopeRequest;
}

export namespace ScopeRequest {
    export type AsObject = {
        scopeId: string,
        sessionAddr: string,
        recordAddr: string,
        includeSessions: boolean,
        includeRecords: boolean,
        excludeIdInfo: boolean,
        includeRequest: boolean,
    }
}

export class ScopeResponse extends jspb.Message { 

    hasScope(): boolean;
    clearScope(): void;
    getScope(): ScopeWrapper | undefined;
    setScope(value?: ScopeWrapper): ScopeResponse;
    clearSessionsList(): void;
    getSessionsList(): Array<SessionWrapper>;
    setSessionsList(value: Array<SessionWrapper>): ScopeResponse;
    addSessions(value?: SessionWrapper, index?: number): SessionWrapper;
    clearRecordsList(): void;
    getRecordsList(): Array<RecordWrapper>;
    setRecordsList(value: Array<RecordWrapper>): ScopeResponse;
    addRecords(value?: RecordWrapper, index?: number): RecordWrapper;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): ScopeRequest | undefined;
    setRequest(value?: ScopeRequest): ScopeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeResponse): ScopeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeResponse;
    static deserializeBinaryFromReader(message: ScopeResponse, reader: jspb.BinaryReader): ScopeResponse;
}

export namespace ScopeResponse {
    export type AsObject = {
        scope?: ScopeWrapper.AsObject,
        sessionsList: Array<SessionWrapper.AsObject>,
        recordsList: Array<RecordWrapper.AsObject>,
        request?: ScopeRequest.AsObject,
    }
}

export class ScopeWrapper extends jspb.Message { 

    hasScope(): boolean;
    clearScope(): void;
    getScope(): provenance_metadata_v1_scope_pb.Scope | undefined;
    setScope(value?: provenance_metadata_v1_scope_pb.Scope): ScopeWrapper;

    hasScopeIdInfo(): boolean;
    clearScopeIdInfo(): void;
    getScopeIdInfo(): provenance_metadata_v1_metadata_pb.ScopeIdInfo | undefined;
    setScopeIdInfo(value?: provenance_metadata_v1_metadata_pb.ScopeIdInfo): ScopeWrapper;

    hasScopeSpecIdInfo(): boolean;
    clearScopeSpecIdInfo(): void;
    getScopeSpecIdInfo(): provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo | undefined;
    setScopeSpecIdInfo(value?: provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo): ScopeWrapper;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeWrapper.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeWrapper): ScopeWrapper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeWrapper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeWrapper;
    static deserializeBinaryFromReader(message: ScopeWrapper, reader: jspb.BinaryReader): ScopeWrapper;
}

export namespace ScopeWrapper {
    export type AsObject = {
        scope?: provenance_metadata_v1_scope_pb.Scope.AsObject,
        scopeIdInfo?: provenance_metadata_v1_metadata_pb.ScopeIdInfo.AsObject,
        scopeSpecIdInfo?: provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo.AsObject,
    }
}

export class ScopesAllRequest extends jspb.Message { 
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): ScopesAllRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): ScopesAllRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): ScopesAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopesAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScopesAllRequest): ScopesAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopesAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopesAllRequest;
    static deserializeBinaryFromReader(message: ScopesAllRequest, reader: jspb.BinaryReader): ScopesAllRequest;
}

export namespace ScopesAllRequest {
    export type AsObject = {
        excludeIdInfo: boolean,
        includeRequest: boolean,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class ScopesAllResponse extends jspb.Message { 
    clearScopesList(): void;
    getScopesList(): Array<ScopeWrapper>;
    setScopesList(value: Array<ScopeWrapper>): ScopesAllResponse;
    addScopes(value?: ScopeWrapper, index?: number): ScopeWrapper;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): ScopesAllRequest | undefined;
    setRequest(value?: ScopesAllRequest): ScopesAllResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): ScopesAllResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopesAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ScopesAllResponse): ScopesAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopesAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopesAllResponse;
    static deserializeBinaryFromReader(message: ScopesAllResponse, reader: jspb.BinaryReader): ScopesAllResponse;
}

export namespace ScopesAllResponse {
    export type AsObject = {
        scopesList: Array<ScopeWrapper.AsObject>,
        request?: ScopesAllRequest.AsObject,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class SessionsRequest extends jspb.Message { 
    getScopeId(): string;
    setScopeId(value: string): SessionsRequest;
    getSessionId(): string;
    setSessionId(value: string): SessionsRequest;
    getRecordAddr(): string;
    setRecordAddr(value: string): SessionsRequest;
    getRecordName(): string;
    setRecordName(value: string): SessionsRequest;
    getIncludeScope(): boolean;
    setIncludeScope(value: boolean): SessionsRequest;
    getIncludeRecords(): boolean;
    setIncludeRecords(value: boolean): SessionsRequest;
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): SessionsRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): SessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SessionsRequest): SessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionsRequest;
    static deserializeBinaryFromReader(message: SessionsRequest, reader: jspb.BinaryReader): SessionsRequest;
}

export namespace SessionsRequest {
    export type AsObject = {
        scopeId: string,
        sessionId: string,
        recordAddr: string,
        recordName: string,
        includeScope: boolean,
        includeRecords: boolean,
        excludeIdInfo: boolean,
        includeRequest: boolean,
    }
}

export class SessionsResponse extends jspb.Message { 

    hasScope(): boolean;
    clearScope(): void;
    getScope(): ScopeWrapper | undefined;
    setScope(value?: ScopeWrapper): SessionsResponse;
    clearSessionsList(): void;
    getSessionsList(): Array<SessionWrapper>;
    setSessionsList(value: Array<SessionWrapper>): SessionsResponse;
    addSessions(value?: SessionWrapper, index?: number): SessionWrapper;
    clearRecordsList(): void;
    getRecordsList(): Array<RecordWrapper>;
    setRecordsList(value: Array<RecordWrapper>): SessionsResponse;
    addRecords(value?: RecordWrapper, index?: number): RecordWrapper;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): SessionsRequest | undefined;
    setRequest(value?: SessionsRequest): SessionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SessionsResponse): SessionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionsResponse;
    static deserializeBinaryFromReader(message: SessionsResponse, reader: jspb.BinaryReader): SessionsResponse;
}

export namespace SessionsResponse {
    export type AsObject = {
        scope?: ScopeWrapper.AsObject,
        sessionsList: Array<SessionWrapper.AsObject>,
        recordsList: Array<RecordWrapper.AsObject>,
        request?: SessionsRequest.AsObject,
    }
}

export class SessionWrapper extends jspb.Message { 

    hasSession(): boolean;
    clearSession(): void;
    getSession(): provenance_metadata_v1_scope_pb.Session | undefined;
    setSession(value?: provenance_metadata_v1_scope_pb.Session): SessionWrapper;

    hasSessionIdInfo(): boolean;
    clearSessionIdInfo(): void;
    getSessionIdInfo(): provenance_metadata_v1_metadata_pb.SessionIdInfo | undefined;
    setSessionIdInfo(value?: provenance_metadata_v1_metadata_pb.SessionIdInfo): SessionWrapper;

    hasContractSpecIdInfo(): boolean;
    clearContractSpecIdInfo(): void;
    getContractSpecIdInfo(): provenance_metadata_v1_metadata_pb.ContractSpecIdInfo | undefined;
    setContractSpecIdInfo(value?: provenance_metadata_v1_metadata_pb.ContractSpecIdInfo): SessionWrapper;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionWrapper.AsObject;
    static toObject(includeInstance: boolean, msg: SessionWrapper): SessionWrapper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionWrapper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionWrapper;
    static deserializeBinaryFromReader(message: SessionWrapper, reader: jspb.BinaryReader): SessionWrapper;
}

export namespace SessionWrapper {
    export type AsObject = {
        session?: provenance_metadata_v1_scope_pb.Session.AsObject,
        sessionIdInfo?: provenance_metadata_v1_metadata_pb.SessionIdInfo.AsObject,
        contractSpecIdInfo?: provenance_metadata_v1_metadata_pb.ContractSpecIdInfo.AsObject,
    }
}

export class SessionsAllRequest extends jspb.Message { 
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): SessionsAllRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): SessionsAllRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): SessionsAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionsAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SessionsAllRequest): SessionsAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionsAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionsAllRequest;
    static deserializeBinaryFromReader(message: SessionsAllRequest, reader: jspb.BinaryReader): SessionsAllRequest;
}

export namespace SessionsAllRequest {
    export type AsObject = {
        excludeIdInfo: boolean,
        includeRequest: boolean,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class SessionsAllResponse extends jspb.Message { 
    clearSessionsList(): void;
    getSessionsList(): Array<SessionWrapper>;
    setSessionsList(value: Array<SessionWrapper>): SessionsAllResponse;
    addSessions(value?: SessionWrapper, index?: number): SessionWrapper;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): SessionsAllRequest | undefined;
    setRequest(value?: SessionsAllRequest): SessionsAllResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): SessionsAllResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionsAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SessionsAllResponse): SessionsAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionsAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionsAllResponse;
    static deserializeBinaryFromReader(message: SessionsAllResponse, reader: jspb.BinaryReader): SessionsAllResponse;
}

export namespace SessionsAllResponse {
    export type AsObject = {
        sessionsList: Array<SessionWrapper.AsObject>,
        request?: SessionsAllRequest.AsObject,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class RecordsRequest extends jspb.Message { 
    getRecordAddr(): string;
    setRecordAddr(value: string): RecordsRequest;
    getScopeId(): string;
    setScopeId(value: string): RecordsRequest;
    getSessionId(): string;
    setSessionId(value: string): RecordsRequest;
    getName(): string;
    setName(value: string): RecordsRequest;
    getIncludeScope(): boolean;
    setIncludeScope(value: boolean): RecordsRequest;
    getIncludeSessions(): boolean;
    setIncludeSessions(value: boolean): RecordsRequest;
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): RecordsRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): RecordsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecordsRequest): RecordsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordsRequest;
    static deserializeBinaryFromReader(message: RecordsRequest, reader: jspb.BinaryReader): RecordsRequest;
}

export namespace RecordsRequest {
    export type AsObject = {
        recordAddr: string,
        scopeId: string,
        sessionId: string,
        name: string,
        includeScope: boolean,
        includeSessions: boolean,
        excludeIdInfo: boolean,
        includeRequest: boolean,
    }
}

export class RecordsResponse extends jspb.Message { 

    hasScope(): boolean;
    clearScope(): void;
    getScope(): ScopeWrapper | undefined;
    setScope(value?: ScopeWrapper): RecordsResponse;
    clearSessionsList(): void;
    getSessionsList(): Array<SessionWrapper>;
    setSessionsList(value: Array<SessionWrapper>): RecordsResponse;
    addSessions(value?: SessionWrapper, index?: number): SessionWrapper;
    clearRecordsList(): void;
    getRecordsList(): Array<RecordWrapper>;
    setRecordsList(value: Array<RecordWrapper>): RecordsResponse;
    addRecords(value?: RecordWrapper, index?: number): RecordWrapper;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): RecordsRequest | undefined;
    setRequest(value?: RecordsRequest): RecordsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecordsResponse): RecordsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordsResponse;
    static deserializeBinaryFromReader(message: RecordsResponse, reader: jspb.BinaryReader): RecordsResponse;
}

export namespace RecordsResponse {
    export type AsObject = {
        scope?: ScopeWrapper.AsObject,
        sessionsList: Array<SessionWrapper.AsObject>,
        recordsList: Array<RecordWrapper.AsObject>,
        request?: RecordsRequest.AsObject,
    }
}

export class RecordWrapper extends jspb.Message { 

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): provenance_metadata_v1_scope_pb.Record | undefined;
    setRecord(value?: provenance_metadata_v1_scope_pb.Record): RecordWrapper;

    hasRecordIdInfo(): boolean;
    clearRecordIdInfo(): void;
    getRecordIdInfo(): provenance_metadata_v1_metadata_pb.RecordIdInfo | undefined;
    setRecordIdInfo(value?: provenance_metadata_v1_metadata_pb.RecordIdInfo): RecordWrapper;

    hasRecordSpecIdInfo(): boolean;
    clearRecordSpecIdInfo(): void;
    getRecordSpecIdInfo(): provenance_metadata_v1_metadata_pb.RecordSpecIdInfo | undefined;
    setRecordSpecIdInfo(value?: provenance_metadata_v1_metadata_pb.RecordSpecIdInfo): RecordWrapper;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordWrapper.AsObject;
    static toObject(includeInstance: boolean, msg: RecordWrapper): RecordWrapper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordWrapper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordWrapper;
    static deserializeBinaryFromReader(message: RecordWrapper, reader: jspb.BinaryReader): RecordWrapper;
}

export namespace RecordWrapper {
    export type AsObject = {
        record?: provenance_metadata_v1_scope_pb.Record.AsObject,
        recordIdInfo?: provenance_metadata_v1_metadata_pb.RecordIdInfo.AsObject,
        recordSpecIdInfo?: provenance_metadata_v1_metadata_pb.RecordSpecIdInfo.AsObject,
    }
}

export class RecordsAllRequest extends jspb.Message { 
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): RecordsAllRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): RecordsAllRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): RecordsAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordsAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecordsAllRequest): RecordsAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordsAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordsAllRequest;
    static deserializeBinaryFromReader(message: RecordsAllRequest, reader: jspb.BinaryReader): RecordsAllRequest;
}

export namespace RecordsAllRequest {
    export type AsObject = {
        excludeIdInfo: boolean,
        includeRequest: boolean,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class RecordsAllResponse extends jspb.Message { 
    clearRecordsList(): void;
    getRecordsList(): Array<RecordWrapper>;
    setRecordsList(value: Array<RecordWrapper>): RecordsAllResponse;
    addRecords(value?: RecordWrapper, index?: number): RecordWrapper;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): RecordsAllRequest | undefined;
    setRequest(value?: RecordsAllRequest): RecordsAllResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): RecordsAllResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordsAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecordsAllResponse): RecordsAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordsAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordsAllResponse;
    static deserializeBinaryFromReader(message: RecordsAllResponse, reader: jspb.BinaryReader): RecordsAllResponse;
}

export namespace RecordsAllResponse {
    export type AsObject = {
        recordsList: Array<RecordWrapper.AsObject>,
        request?: RecordsAllRequest.AsObject,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class OwnershipRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): OwnershipRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): OwnershipRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): OwnershipRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OwnershipRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OwnershipRequest): OwnershipRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OwnershipRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OwnershipRequest;
    static deserializeBinaryFromReader(message: OwnershipRequest, reader: jspb.BinaryReader): OwnershipRequest;
}

export namespace OwnershipRequest {
    export type AsObject = {
        address: string,
        includeRequest: boolean,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class OwnershipResponse extends jspb.Message { 
    clearScopeUuidsList(): void;
    getScopeUuidsList(): Array<string>;
    setScopeUuidsList(value: Array<string>): OwnershipResponse;
    addScopeUuids(value: string, index?: number): string;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): OwnershipRequest | undefined;
    setRequest(value?: OwnershipRequest): OwnershipResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): OwnershipResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OwnershipResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OwnershipResponse): OwnershipResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OwnershipResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OwnershipResponse;
    static deserializeBinaryFromReader(message: OwnershipResponse, reader: jspb.BinaryReader): OwnershipResponse;
}

export namespace OwnershipResponse {
    export type AsObject = {
        scopeUuidsList: Array<string>,
        request?: OwnershipRequest.AsObject,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class ValueOwnershipRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ValueOwnershipRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): ValueOwnershipRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): ValueOwnershipRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueOwnershipRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValueOwnershipRequest): ValueOwnershipRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueOwnershipRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueOwnershipRequest;
    static deserializeBinaryFromReader(message: ValueOwnershipRequest, reader: jspb.BinaryReader): ValueOwnershipRequest;
}

export namespace ValueOwnershipRequest {
    export type AsObject = {
        address: string,
        includeRequest: boolean,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class ValueOwnershipResponse extends jspb.Message { 
    clearScopeUuidsList(): void;
    getScopeUuidsList(): Array<string>;
    setScopeUuidsList(value: Array<string>): ValueOwnershipResponse;
    addScopeUuids(value: string, index?: number): string;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): ValueOwnershipRequest | undefined;
    setRequest(value?: ValueOwnershipRequest): ValueOwnershipResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): ValueOwnershipResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueOwnershipResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValueOwnershipResponse): ValueOwnershipResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueOwnershipResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueOwnershipResponse;
    static deserializeBinaryFromReader(message: ValueOwnershipResponse, reader: jspb.BinaryReader): ValueOwnershipResponse;
}

export namespace ValueOwnershipResponse {
    export type AsObject = {
        scopeUuidsList: Array<string>,
        request?: ValueOwnershipRequest.AsObject,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class ScopeSpecificationRequest extends jspb.Message { 
    getSpecificationId(): string;
    setSpecificationId(value: string): ScopeSpecificationRequest;
    getIncludeContractSpecs(): boolean;
    setIncludeContractSpecs(value: boolean): ScopeSpecificationRequest;
    getIncludeRecordSpecs(): boolean;
    setIncludeRecordSpecs(value: boolean): ScopeSpecificationRequest;
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): ScopeSpecificationRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): ScopeSpecificationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeSpecificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeSpecificationRequest): ScopeSpecificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeSpecificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeSpecificationRequest;
    static deserializeBinaryFromReader(message: ScopeSpecificationRequest, reader: jspb.BinaryReader): ScopeSpecificationRequest;
}

export namespace ScopeSpecificationRequest {
    export type AsObject = {
        specificationId: string,
        includeContractSpecs: boolean,
        includeRecordSpecs: boolean,
        excludeIdInfo: boolean,
        includeRequest: boolean,
    }
}

export class ScopeSpecificationResponse extends jspb.Message { 

    hasScopeSpecification(): boolean;
    clearScopeSpecification(): void;
    getScopeSpecification(): ScopeSpecificationWrapper | undefined;
    setScopeSpecification(value?: ScopeSpecificationWrapper): ScopeSpecificationResponse;
    clearContractSpecsList(): void;
    getContractSpecsList(): Array<ContractSpecificationWrapper>;
    setContractSpecsList(value: Array<ContractSpecificationWrapper>): ScopeSpecificationResponse;
    addContractSpecs(value?: ContractSpecificationWrapper, index?: number): ContractSpecificationWrapper;
    clearRecordSpecsList(): void;
    getRecordSpecsList(): Array<RecordSpecificationWrapper>;
    setRecordSpecsList(value: Array<RecordSpecificationWrapper>): ScopeSpecificationResponse;
    addRecordSpecs(value?: RecordSpecificationWrapper, index?: number): RecordSpecificationWrapper;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): ScopeSpecificationRequest | undefined;
    setRequest(value?: ScopeSpecificationRequest): ScopeSpecificationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeSpecificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeSpecificationResponse): ScopeSpecificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeSpecificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeSpecificationResponse;
    static deserializeBinaryFromReader(message: ScopeSpecificationResponse, reader: jspb.BinaryReader): ScopeSpecificationResponse;
}

export namespace ScopeSpecificationResponse {
    export type AsObject = {
        scopeSpecification?: ScopeSpecificationWrapper.AsObject,
        contractSpecsList: Array<ContractSpecificationWrapper.AsObject>,
        recordSpecsList: Array<RecordSpecificationWrapper.AsObject>,
        request?: ScopeSpecificationRequest.AsObject,
    }
}

export class ScopeSpecificationWrapper extends jspb.Message { 

    hasSpecification(): boolean;
    clearSpecification(): void;
    getSpecification(): provenance_metadata_v1_specification_pb.ScopeSpecification | undefined;
    setSpecification(value?: provenance_metadata_v1_specification_pb.ScopeSpecification): ScopeSpecificationWrapper;

    hasScopeSpecIdInfo(): boolean;
    clearScopeSpecIdInfo(): void;
    getScopeSpecIdInfo(): provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo | undefined;
    setScopeSpecIdInfo(value?: provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo): ScopeSpecificationWrapper;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeSpecificationWrapper.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeSpecificationWrapper): ScopeSpecificationWrapper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeSpecificationWrapper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeSpecificationWrapper;
    static deserializeBinaryFromReader(message: ScopeSpecificationWrapper, reader: jspb.BinaryReader): ScopeSpecificationWrapper;
}

export namespace ScopeSpecificationWrapper {
    export type AsObject = {
        specification?: provenance_metadata_v1_specification_pb.ScopeSpecification.AsObject,
        scopeSpecIdInfo?: provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo.AsObject,
    }
}

export class ScopeSpecificationsAllRequest extends jspb.Message { 
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): ScopeSpecificationsAllRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): ScopeSpecificationsAllRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): ScopeSpecificationsAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeSpecificationsAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeSpecificationsAllRequest): ScopeSpecificationsAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeSpecificationsAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeSpecificationsAllRequest;
    static deserializeBinaryFromReader(message: ScopeSpecificationsAllRequest, reader: jspb.BinaryReader): ScopeSpecificationsAllRequest;
}

export namespace ScopeSpecificationsAllRequest {
    export type AsObject = {
        excludeIdInfo: boolean,
        includeRequest: boolean,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class ScopeSpecificationsAllResponse extends jspb.Message { 
    clearScopeSpecificationsList(): void;
    getScopeSpecificationsList(): Array<ScopeSpecificationWrapper>;
    setScopeSpecificationsList(value: Array<ScopeSpecificationWrapper>): ScopeSpecificationsAllResponse;
    addScopeSpecifications(value?: ScopeSpecificationWrapper, index?: number): ScopeSpecificationWrapper;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): ScopeSpecificationsAllRequest | undefined;
    setRequest(value?: ScopeSpecificationsAllRequest): ScopeSpecificationsAllResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): ScopeSpecificationsAllResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeSpecificationsAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeSpecificationsAllResponse): ScopeSpecificationsAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeSpecificationsAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeSpecificationsAllResponse;
    static deserializeBinaryFromReader(message: ScopeSpecificationsAllResponse, reader: jspb.BinaryReader): ScopeSpecificationsAllResponse;
}

export namespace ScopeSpecificationsAllResponse {
    export type AsObject = {
        scopeSpecificationsList: Array<ScopeSpecificationWrapper.AsObject>,
        request?: ScopeSpecificationsAllRequest.AsObject,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class ContractSpecificationRequest extends jspb.Message { 
    getSpecificationId(): string;
    setSpecificationId(value: string): ContractSpecificationRequest;
    getIncludeRecordSpecs(): boolean;
    setIncludeRecordSpecs(value: boolean): ContractSpecificationRequest;
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): ContractSpecificationRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): ContractSpecificationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractSpecificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ContractSpecificationRequest): ContractSpecificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractSpecificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractSpecificationRequest;
    static deserializeBinaryFromReader(message: ContractSpecificationRequest, reader: jspb.BinaryReader): ContractSpecificationRequest;
}

export namespace ContractSpecificationRequest {
    export type AsObject = {
        specificationId: string,
        includeRecordSpecs: boolean,
        excludeIdInfo: boolean,
        includeRequest: boolean,
    }
}

export class ContractSpecificationResponse extends jspb.Message { 

    hasContractSpecification(): boolean;
    clearContractSpecification(): void;
    getContractSpecification(): ContractSpecificationWrapper | undefined;
    setContractSpecification(value?: ContractSpecificationWrapper): ContractSpecificationResponse;
    clearRecordSpecificationsList(): void;
    getRecordSpecificationsList(): Array<RecordSpecificationWrapper>;
    setRecordSpecificationsList(value: Array<RecordSpecificationWrapper>): ContractSpecificationResponse;
    addRecordSpecifications(value?: RecordSpecificationWrapper, index?: number): RecordSpecificationWrapper;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): ContractSpecificationRequest | undefined;
    setRequest(value?: ContractSpecificationRequest): ContractSpecificationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractSpecificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ContractSpecificationResponse): ContractSpecificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractSpecificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractSpecificationResponse;
    static deserializeBinaryFromReader(message: ContractSpecificationResponse, reader: jspb.BinaryReader): ContractSpecificationResponse;
}

export namespace ContractSpecificationResponse {
    export type AsObject = {
        contractSpecification?: ContractSpecificationWrapper.AsObject,
        recordSpecificationsList: Array<RecordSpecificationWrapper.AsObject>,
        request?: ContractSpecificationRequest.AsObject,
    }
}

export class ContractSpecificationWrapper extends jspb.Message { 

    hasSpecification(): boolean;
    clearSpecification(): void;
    getSpecification(): provenance_metadata_v1_specification_pb.ContractSpecification | undefined;
    setSpecification(value?: provenance_metadata_v1_specification_pb.ContractSpecification): ContractSpecificationWrapper;

    hasContractSpecIdInfo(): boolean;
    clearContractSpecIdInfo(): void;
    getContractSpecIdInfo(): provenance_metadata_v1_metadata_pb.ContractSpecIdInfo | undefined;
    setContractSpecIdInfo(value?: provenance_metadata_v1_metadata_pb.ContractSpecIdInfo): ContractSpecificationWrapper;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractSpecificationWrapper.AsObject;
    static toObject(includeInstance: boolean, msg: ContractSpecificationWrapper): ContractSpecificationWrapper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractSpecificationWrapper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractSpecificationWrapper;
    static deserializeBinaryFromReader(message: ContractSpecificationWrapper, reader: jspb.BinaryReader): ContractSpecificationWrapper;
}

export namespace ContractSpecificationWrapper {
    export type AsObject = {
        specification?: provenance_metadata_v1_specification_pb.ContractSpecification.AsObject,
        contractSpecIdInfo?: provenance_metadata_v1_metadata_pb.ContractSpecIdInfo.AsObject,
    }
}

export class ContractSpecificationsAllRequest extends jspb.Message { 
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): ContractSpecificationsAllRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): ContractSpecificationsAllRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): ContractSpecificationsAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractSpecificationsAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ContractSpecificationsAllRequest): ContractSpecificationsAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractSpecificationsAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractSpecificationsAllRequest;
    static deserializeBinaryFromReader(message: ContractSpecificationsAllRequest, reader: jspb.BinaryReader): ContractSpecificationsAllRequest;
}

export namespace ContractSpecificationsAllRequest {
    export type AsObject = {
        excludeIdInfo: boolean,
        includeRequest: boolean,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class ContractSpecificationsAllResponse extends jspb.Message { 
    clearContractSpecificationsList(): void;
    getContractSpecificationsList(): Array<ContractSpecificationWrapper>;
    setContractSpecificationsList(value: Array<ContractSpecificationWrapper>): ContractSpecificationsAllResponse;
    addContractSpecifications(value?: ContractSpecificationWrapper, index?: number): ContractSpecificationWrapper;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): ContractSpecificationsAllRequest | undefined;
    setRequest(value?: ContractSpecificationsAllRequest): ContractSpecificationsAllResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): ContractSpecificationsAllResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractSpecificationsAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ContractSpecificationsAllResponse): ContractSpecificationsAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractSpecificationsAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractSpecificationsAllResponse;
    static deserializeBinaryFromReader(message: ContractSpecificationsAllResponse, reader: jspb.BinaryReader): ContractSpecificationsAllResponse;
}

export namespace ContractSpecificationsAllResponse {
    export type AsObject = {
        contractSpecificationsList: Array<ContractSpecificationWrapper.AsObject>,
        request?: ContractSpecificationsAllRequest.AsObject,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class RecordSpecificationsForContractSpecificationRequest extends jspb.Message { 
    getSpecificationId(): string;
    setSpecificationId(value: string): RecordSpecificationsForContractSpecificationRequest;
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): RecordSpecificationsForContractSpecificationRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): RecordSpecificationsForContractSpecificationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSpecificationsForContractSpecificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSpecificationsForContractSpecificationRequest): RecordSpecificationsForContractSpecificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSpecificationsForContractSpecificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSpecificationsForContractSpecificationRequest;
    static deserializeBinaryFromReader(message: RecordSpecificationsForContractSpecificationRequest, reader: jspb.BinaryReader): RecordSpecificationsForContractSpecificationRequest;
}

export namespace RecordSpecificationsForContractSpecificationRequest {
    export type AsObject = {
        specificationId: string,
        excludeIdInfo: boolean,
        includeRequest: boolean,
    }
}

export class RecordSpecificationsForContractSpecificationResponse extends jspb.Message { 
    clearRecordSpecificationsList(): void;
    getRecordSpecificationsList(): Array<RecordSpecificationWrapper>;
    setRecordSpecificationsList(value: Array<RecordSpecificationWrapper>): RecordSpecificationsForContractSpecificationResponse;
    addRecordSpecifications(value?: RecordSpecificationWrapper, index?: number): RecordSpecificationWrapper;
    getContractSpecificationUuid(): string;
    setContractSpecificationUuid(value: string): RecordSpecificationsForContractSpecificationResponse;
    getContractSpecificationAddr(): string;
    setContractSpecificationAddr(value: string): RecordSpecificationsForContractSpecificationResponse;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): RecordSpecificationsForContractSpecificationRequest | undefined;
    setRequest(value?: RecordSpecificationsForContractSpecificationRequest): RecordSpecificationsForContractSpecificationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSpecificationsForContractSpecificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSpecificationsForContractSpecificationResponse): RecordSpecificationsForContractSpecificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSpecificationsForContractSpecificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSpecificationsForContractSpecificationResponse;
    static deserializeBinaryFromReader(message: RecordSpecificationsForContractSpecificationResponse, reader: jspb.BinaryReader): RecordSpecificationsForContractSpecificationResponse;
}

export namespace RecordSpecificationsForContractSpecificationResponse {
    export type AsObject = {
        recordSpecificationsList: Array<RecordSpecificationWrapper.AsObject>,
        contractSpecificationUuid: string,
        contractSpecificationAddr: string,
        request?: RecordSpecificationsForContractSpecificationRequest.AsObject,
    }
}

export class RecordSpecificationRequest extends jspb.Message { 
    getSpecificationId(): string;
    setSpecificationId(value: string): RecordSpecificationRequest;
    getName(): string;
    setName(value: string): RecordSpecificationRequest;
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): RecordSpecificationRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): RecordSpecificationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSpecificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSpecificationRequest): RecordSpecificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSpecificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSpecificationRequest;
    static deserializeBinaryFromReader(message: RecordSpecificationRequest, reader: jspb.BinaryReader): RecordSpecificationRequest;
}

export namespace RecordSpecificationRequest {
    export type AsObject = {
        specificationId: string,
        name: string,
        excludeIdInfo: boolean,
        includeRequest: boolean,
    }
}

export class RecordSpecificationResponse extends jspb.Message { 

    hasRecordSpecification(): boolean;
    clearRecordSpecification(): void;
    getRecordSpecification(): RecordSpecificationWrapper | undefined;
    setRecordSpecification(value?: RecordSpecificationWrapper): RecordSpecificationResponse;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): RecordSpecificationRequest | undefined;
    setRequest(value?: RecordSpecificationRequest): RecordSpecificationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSpecificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSpecificationResponse): RecordSpecificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSpecificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSpecificationResponse;
    static deserializeBinaryFromReader(message: RecordSpecificationResponse, reader: jspb.BinaryReader): RecordSpecificationResponse;
}

export namespace RecordSpecificationResponse {
    export type AsObject = {
        recordSpecification?: RecordSpecificationWrapper.AsObject,
        request?: RecordSpecificationRequest.AsObject,
    }
}

export class RecordSpecificationWrapper extends jspb.Message { 

    hasSpecification(): boolean;
    clearSpecification(): void;
    getSpecification(): provenance_metadata_v1_specification_pb.RecordSpecification | undefined;
    setSpecification(value?: provenance_metadata_v1_specification_pb.RecordSpecification): RecordSpecificationWrapper;

    hasRecordSpecIdInfo(): boolean;
    clearRecordSpecIdInfo(): void;
    getRecordSpecIdInfo(): provenance_metadata_v1_metadata_pb.RecordSpecIdInfo | undefined;
    setRecordSpecIdInfo(value?: provenance_metadata_v1_metadata_pb.RecordSpecIdInfo): RecordSpecificationWrapper;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSpecificationWrapper.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSpecificationWrapper): RecordSpecificationWrapper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSpecificationWrapper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSpecificationWrapper;
    static deserializeBinaryFromReader(message: RecordSpecificationWrapper, reader: jspb.BinaryReader): RecordSpecificationWrapper;
}

export namespace RecordSpecificationWrapper {
    export type AsObject = {
        specification?: provenance_metadata_v1_specification_pb.RecordSpecification.AsObject,
        recordSpecIdInfo?: provenance_metadata_v1_metadata_pb.RecordSpecIdInfo.AsObject,
    }
}

export class RecordSpecificationsAllRequest extends jspb.Message { 
    getExcludeIdInfo(): boolean;
    setExcludeIdInfo(value: boolean): RecordSpecificationsAllRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): RecordSpecificationsAllRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): RecordSpecificationsAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSpecificationsAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSpecificationsAllRequest): RecordSpecificationsAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSpecificationsAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSpecificationsAllRequest;
    static deserializeBinaryFromReader(message: RecordSpecificationsAllRequest, reader: jspb.BinaryReader): RecordSpecificationsAllRequest;
}

export namespace RecordSpecificationsAllRequest {
    export type AsObject = {
        excludeIdInfo: boolean,
        includeRequest: boolean,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class RecordSpecificationsAllResponse extends jspb.Message { 
    clearRecordSpecificationsList(): void;
    getRecordSpecificationsList(): Array<RecordSpecificationWrapper>;
    setRecordSpecificationsList(value: Array<RecordSpecificationWrapper>): RecordSpecificationsAllResponse;
    addRecordSpecifications(value?: RecordSpecificationWrapper, index?: number): RecordSpecificationWrapper;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): RecordSpecificationsAllRequest | undefined;
    setRequest(value?: RecordSpecificationsAllRequest): RecordSpecificationsAllResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): RecordSpecificationsAllResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSpecificationsAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSpecificationsAllResponse): RecordSpecificationsAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSpecificationsAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSpecificationsAllResponse;
    static deserializeBinaryFromReader(message: RecordSpecificationsAllResponse, reader: jspb.BinaryReader): RecordSpecificationsAllResponse;
}

export namespace RecordSpecificationsAllResponse {
    export type AsObject = {
        recordSpecificationsList: Array<RecordSpecificationWrapper.AsObject>,
        request?: RecordSpecificationsAllRequest.AsObject,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class GetByAddrRequest extends jspb.Message { 
    clearAddrsList(): void;
    getAddrsList(): Array<string>;
    setAddrsList(value: Array<string>): GetByAddrRequest;
    addAddrs(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByAddrRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByAddrRequest): GetByAddrRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByAddrRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByAddrRequest;
    static deserializeBinaryFromReader(message: GetByAddrRequest, reader: jspb.BinaryReader): GetByAddrRequest;
}

export namespace GetByAddrRequest {
    export type AsObject = {
        addrsList: Array<string>,
    }
}

export class GetByAddrResponse extends jspb.Message { 
    clearScopesList(): void;
    getScopesList(): Array<provenance_metadata_v1_scope_pb.Scope>;
    setScopesList(value: Array<provenance_metadata_v1_scope_pb.Scope>): GetByAddrResponse;
    addScopes(value?: provenance_metadata_v1_scope_pb.Scope, index?: number): provenance_metadata_v1_scope_pb.Scope;
    clearSessionsList(): void;
    getSessionsList(): Array<provenance_metadata_v1_scope_pb.Session>;
    setSessionsList(value: Array<provenance_metadata_v1_scope_pb.Session>): GetByAddrResponse;
    addSessions(value?: provenance_metadata_v1_scope_pb.Session, index?: number): provenance_metadata_v1_scope_pb.Session;
    clearRecordsList(): void;
    getRecordsList(): Array<provenance_metadata_v1_scope_pb.Record>;
    setRecordsList(value: Array<provenance_metadata_v1_scope_pb.Record>): GetByAddrResponse;
    addRecords(value?: provenance_metadata_v1_scope_pb.Record, index?: number): provenance_metadata_v1_scope_pb.Record;
    clearScopeSpecsList(): void;
    getScopeSpecsList(): Array<provenance_metadata_v1_specification_pb.ScopeSpecification>;
    setScopeSpecsList(value: Array<provenance_metadata_v1_specification_pb.ScopeSpecification>): GetByAddrResponse;
    addScopeSpecs(value?: provenance_metadata_v1_specification_pb.ScopeSpecification, index?: number): provenance_metadata_v1_specification_pb.ScopeSpecification;
    clearContractSpecsList(): void;
    getContractSpecsList(): Array<provenance_metadata_v1_specification_pb.ContractSpecification>;
    setContractSpecsList(value: Array<provenance_metadata_v1_specification_pb.ContractSpecification>): GetByAddrResponse;
    addContractSpecs(value?: provenance_metadata_v1_specification_pb.ContractSpecification, index?: number): provenance_metadata_v1_specification_pb.ContractSpecification;
    clearRecordSpecsList(): void;
    getRecordSpecsList(): Array<provenance_metadata_v1_specification_pb.RecordSpecification>;
    setRecordSpecsList(value: Array<provenance_metadata_v1_specification_pb.RecordSpecification>): GetByAddrResponse;
    addRecordSpecs(value?: provenance_metadata_v1_specification_pb.RecordSpecification, index?: number): provenance_metadata_v1_specification_pb.RecordSpecification;
    clearNotFoundList(): void;
    getNotFoundList(): Array<string>;
    setNotFoundList(value: Array<string>): GetByAddrResponse;
    addNotFound(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByAddrResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetByAddrResponse): GetByAddrResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByAddrResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByAddrResponse;
    static deserializeBinaryFromReader(message: GetByAddrResponse, reader: jspb.BinaryReader): GetByAddrResponse;
}

export namespace GetByAddrResponse {
    export type AsObject = {
        scopesList: Array<provenance_metadata_v1_scope_pb.Scope.AsObject>,
        sessionsList: Array<provenance_metadata_v1_scope_pb.Session.AsObject>,
        recordsList: Array<provenance_metadata_v1_scope_pb.Record.AsObject>,
        scopeSpecsList: Array<provenance_metadata_v1_specification_pb.ScopeSpecification.AsObject>,
        contractSpecsList: Array<provenance_metadata_v1_specification_pb.ContractSpecification.AsObject>,
        recordSpecsList: Array<provenance_metadata_v1_specification_pb.RecordSpecification.AsObject>,
        notFoundList: Array<string>,
    }
}

export class OSLocatorParamsRequest extends jspb.Message { 
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): OSLocatorParamsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OSLocatorParamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OSLocatorParamsRequest): OSLocatorParamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OSLocatorParamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OSLocatorParamsRequest;
    static deserializeBinaryFromReader(message: OSLocatorParamsRequest, reader: jspb.BinaryReader): OSLocatorParamsRequest;
}

export namespace OSLocatorParamsRequest {
    export type AsObject = {
        includeRequest: boolean,
    }
}

export class OSLocatorParamsResponse extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): provenance_metadata_v1_objectstore_pb.OSLocatorParams | undefined;
    setParams(value?: provenance_metadata_v1_objectstore_pb.OSLocatorParams): OSLocatorParamsResponse;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): OSLocatorParamsRequest | undefined;
    setRequest(value?: OSLocatorParamsRequest): OSLocatorParamsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OSLocatorParamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OSLocatorParamsResponse): OSLocatorParamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OSLocatorParamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OSLocatorParamsResponse;
    static deserializeBinaryFromReader(message: OSLocatorParamsResponse, reader: jspb.BinaryReader): OSLocatorParamsResponse;
}

export namespace OSLocatorParamsResponse {
    export type AsObject = {
        params?: provenance_metadata_v1_objectstore_pb.OSLocatorParams.AsObject,
        request?: OSLocatorParamsRequest.AsObject,
    }
}

export class OSLocatorRequest extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): OSLocatorRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): OSLocatorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OSLocatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OSLocatorRequest): OSLocatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OSLocatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OSLocatorRequest;
    static deserializeBinaryFromReader(message: OSLocatorRequest, reader: jspb.BinaryReader): OSLocatorRequest;
}

export namespace OSLocatorRequest {
    export type AsObject = {
        owner: string,
        includeRequest: boolean,
    }
}

export class OSLocatorResponse extends jspb.Message { 

    hasLocator(): boolean;
    clearLocator(): void;
    getLocator(): provenance_metadata_v1_objectstore_pb.ObjectStoreLocator | undefined;
    setLocator(value?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator): OSLocatorResponse;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): OSLocatorRequest | undefined;
    setRequest(value?: OSLocatorRequest): OSLocatorResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OSLocatorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OSLocatorResponse): OSLocatorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OSLocatorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OSLocatorResponse;
    static deserializeBinaryFromReader(message: OSLocatorResponse, reader: jspb.BinaryReader): OSLocatorResponse;
}

export namespace OSLocatorResponse {
    export type AsObject = {
        locator?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.AsObject,
        request?: OSLocatorRequest.AsObject,
    }
}

export class OSLocatorsByURIRequest extends jspb.Message { 
    getUri(): string;
    setUri(value: string): OSLocatorsByURIRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): OSLocatorsByURIRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): OSLocatorsByURIRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OSLocatorsByURIRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OSLocatorsByURIRequest): OSLocatorsByURIRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OSLocatorsByURIRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OSLocatorsByURIRequest;
    static deserializeBinaryFromReader(message: OSLocatorsByURIRequest, reader: jspb.BinaryReader): OSLocatorsByURIRequest;
}

export namespace OSLocatorsByURIRequest {
    export type AsObject = {
        uri: string,
        includeRequest: boolean,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class OSLocatorsByURIResponse extends jspb.Message { 
    clearLocatorsList(): void;
    getLocatorsList(): Array<provenance_metadata_v1_objectstore_pb.ObjectStoreLocator>;
    setLocatorsList(value: Array<provenance_metadata_v1_objectstore_pb.ObjectStoreLocator>): OSLocatorsByURIResponse;
    addLocators(value?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, index?: number): provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): OSLocatorsByURIRequest | undefined;
    setRequest(value?: OSLocatorsByURIRequest): OSLocatorsByURIResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): OSLocatorsByURIResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OSLocatorsByURIResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OSLocatorsByURIResponse): OSLocatorsByURIResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OSLocatorsByURIResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OSLocatorsByURIResponse;
    static deserializeBinaryFromReader(message: OSLocatorsByURIResponse, reader: jspb.BinaryReader): OSLocatorsByURIResponse;
}

export namespace OSLocatorsByURIResponse {
    export type AsObject = {
        locatorsList: Array<provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.AsObject>,
        request?: OSLocatorsByURIRequest.AsObject,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class OSLocatorsByScopeRequest extends jspb.Message { 
    getScopeId(): string;
    setScopeId(value: string): OSLocatorsByScopeRequest;
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): OSLocatorsByScopeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OSLocatorsByScopeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OSLocatorsByScopeRequest): OSLocatorsByScopeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OSLocatorsByScopeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OSLocatorsByScopeRequest;
    static deserializeBinaryFromReader(message: OSLocatorsByScopeRequest, reader: jspb.BinaryReader): OSLocatorsByScopeRequest;
}

export namespace OSLocatorsByScopeRequest {
    export type AsObject = {
        scopeId: string,
        includeRequest: boolean,
    }
}

export class OSLocatorsByScopeResponse extends jspb.Message { 
    clearLocatorsList(): void;
    getLocatorsList(): Array<provenance_metadata_v1_objectstore_pb.ObjectStoreLocator>;
    setLocatorsList(value: Array<provenance_metadata_v1_objectstore_pb.ObjectStoreLocator>): OSLocatorsByScopeResponse;
    addLocators(value?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, index?: number): provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): OSLocatorsByScopeRequest | undefined;
    setRequest(value?: OSLocatorsByScopeRequest): OSLocatorsByScopeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OSLocatorsByScopeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OSLocatorsByScopeResponse): OSLocatorsByScopeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OSLocatorsByScopeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OSLocatorsByScopeResponse;
    static deserializeBinaryFromReader(message: OSLocatorsByScopeResponse, reader: jspb.BinaryReader): OSLocatorsByScopeResponse;
}

export namespace OSLocatorsByScopeResponse {
    export type AsObject = {
        locatorsList: Array<provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.AsObject>,
        request?: OSLocatorsByScopeRequest.AsObject,
    }
}

export class OSAllLocatorsRequest extends jspb.Message { 
    getIncludeRequest(): boolean;
    setIncludeRequest(value: boolean): OSAllLocatorsRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): OSAllLocatorsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OSAllLocatorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OSAllLocatorsRequest): OSAllLocatorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OSAllLocatorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OSAllLocatorsRequest;
    static deserializeBinaryFromReader(message: OSAllLocatorsRequest, reader: jspb.BinaryReader): OSAllLocatorsRequest;
}

export namespace OSAllLocatorsRequest {
    export type AsObject = {
        includeRequest: boolean,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class OSAllLocatorsResponse extends jspb.Message { 
    clearLocatorsList(): void;
    getLocatorsList(): Array<provenance_metadata_v1_objectstore_pb.ObjectStoreLocator>;
    setLocatorsList(value: Array<provenance_metadata_v1_objectstore_pb.ObjectStoreLocator>): OSAllLocatorsResponse;
    addLocators(value?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, index?: number): provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): OSAllLocatorsRequest | undefined;
    setRequest(value?: OSAllLocatorsRequest): OSAllLocatorsResponse;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): OSAllLocatorsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OSAllLocatorsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OSAllLocatorsResponse): OSAllLocatorsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OSAllLocatorsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OSAllLocatorsResponse;
    static deserializeBinaryFromReader(message: OSAllLocatorsResponse, reader: jspb.BinaryReader): OSAllLocatorsResponse;
}

export namespace OSAllLocatorsResponse {
    export type AsObject = {
        locatorsList: Array<provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.AsObject>,
        request?: OSAllLocatorsRequest.AsObject,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class AccountDataRequest extends jspb.Message { 
    getMetadataAddr(): Uint8Array | string;
    getMetadataAddr_asU8(): Uint8Array;
    getMetadataAddr_asB64(): string;
    setMetadataAddr(value: Uint8Array | string): AccountDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AccountDataRequest): AccountDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountDataRequest;
    static deserializeBinaryFromReader(message: AccountDataRequest, reader: jspb.BinaryReader): AccountDataRequest;
}

export namespace AccountDataRequest {
    export type AsObject = {
        metadataAddr: Uint8Array | string,
    }
}

export class AccountDataResponse extends jspb.Message { 
    getValue(): string;
    setValue(value: string): AccountDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AccountDataResponse): AccountDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountDataResponse;
    static deserializeBinaryFromReader(message: AccountDataResponse, reader: jspb.BinaryReader): AccountDataResponse;
}

export namespace AccountDataResponse {
    export type AsObject = {
        value: string,
    }
}

export class QueryScopeNetAssetValuesRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): QueryScopeNetAssetValuesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryScopeNetAssetValuesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryScopeNetAssetValuesRequest): QueryScopeNetAssetValuesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryScopeNetAssetValuesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryScopeNetAssetValuesRequest;
    static deserializeBinaryFromReader(message: QueryScopeNetAssetValuesRequest, reader: jspb.BinaryReader): QueryScopeNetAssetValuesRequest;
}

export namespace QueryScopeNetAssetValuesRequest {
    export type AsObject = {
        id: string,
    }
}

export class QueryScopeNetAssetValuesResponse extends jspb.Message { 
    clearNetAssetValuesList(): void;
    getNetAssetValuesList(): Array<provenance_metadata_v1_scope_pb.NetAssetValue>;
    setNetAssetValuesList(value: Array<provenance_metadata_v1_scope_pb.NetAssetValue>): QueryScopeNetAssetValuesResponse;
    addNetAssetValues(value?: provenance_metadata_v1_scope_pb.NetAssetValue, index?: number): provenance_metadata_v1_scope_pb.NetAssetValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryScopeNetAssetValuesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryScopeNetAssetValuesResponse): QueryScopeNetAssetValuesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryScopeNetAssetValuesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryScopeNetAssetValuesResponse;
    static deserializeBinaryFromReader(message: QueryScopeNetAssetValuesResponse, reader: jspb.BinaryReader): QueryScopeNetAssetValuesResponse;
}

export namespace QueryScopeNetAssetValuesResponse {
    export type AsObject = {
        netAssetValuesList: Array<provenance_metadata_v1_scope_pb.NetAssetValue.AsObject>,
    }
}
