// package: provenance.metadata.v1
// file: provenance/metadata/v1/metadata.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class Params extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Params.AsObject;
    static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Params;
    static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
    export type AsObject = {
    }
}

export class ScopeIdInfo extends jspb.Message { 
    getScopeId(): Uint8Array | string;
    getScopeId_asU8(): Uint8Array;
    getScopeId_asB64(): string;
    setScopeId(value: Uint8Array | string): ScopeIdInfo;
    getScopeIdPrefix(): Uint8Array | string;
    getScopeIdPrefix_asU8(): Uint8Array;
    getScopeIdPrefix_asB64(): string;
    setScopeIdPrefix(value: Uint8Array | string): ScopeIdInfo;
    getScopeIdScopeUuid(): Uint8Array | string;
    getScopeIdScopeUuid_asU8(): Uint8Array;
    getScopeIdScopeUuid_asB64(): string;
    setScopeIdScopeUuid(value: Uint8Array | string): ScopeIdInfo;
    getScopeAddr(): string;
    setScopeAddr(value: string): ScopeIdInfo;
    getScopeUuid(): string;
    setScopeUuid(value: string): ScopeIdInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeIdInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeIdInfo): ScopeIdInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeIdInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeIdInfo;
    static deserializeBinaryFromReader(message: ScopeIdInfo, reader: jspb.BinaryReader): ScopeIdInfo;
}

export namespace ScopeIdInfo {
    export type AsObject = {
        scopeId: Uint8Array | string,
        scopeIdPrefix: Uint8Array | string,
        scopeIdScopeUuid: Uint8Array | string,
        scopeAddr: string,
        scopeUuid: string,
    }
}

export class SessionIdInfo extends jspb.Message { 
    getSessionId(): Uint8Array | string;
    getSessionId_asU8(): Uint8Array;
    getSessionId_asB64(): string;
    setSessionId(value: Uint8Array | string): SessionIdInfo;
    getSessionIdPrefix(): Uint8Array | string;
    getSessionIdPrefix_asU8(): Uint8Array;
    getSessionIdPrefix_asB64(): string;
    setSessionIdPrefix(value: Uint8Array | string): SessionIdInfo;
    getSessionIdScopeUuid(): Uint8Array | string;
    getSessionIdScopeUuid_asU8(): Uint8Array;
    getSessionIdScopeUuid_asB64(): string;
    setSessionIdScopeUuid(value: Uint8Array | string): SessionIdInfo;
    getSessionIdSessionUuid(): Uint8Array | string;
    getSessionIdSessionUuid_asU8(): Uint8Array;
    getSessionIdSessionUuid_asB64(): string;
    setSessionIdSessionUuid(value: Uint8Array | string): SessionIdInfo;
    getSessionAddr(): string;
    setSessionAddr(value: string): SessionIdInfo;
    getSessionUuid(): string;
    setSessionUuid(value: string): SessionIdInfo;

    hasScopeIdInfo(): boolean;
    clearScopeIdInfo(): void;
    getScopeIdInfo(): ScopeIdInfo | undefined;
    setScopeIdInfo(value?: ScopeIdInfo): SessionIdInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionIdInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SessionIdInfo): SessionIdInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionIdInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionIdInfo;
    static deserializeBinaryFromReader(message: SessionIdInfo, reader: jspb.BinaryReader): SessionIdInfo;
}

export namespace SessionIdInfo {
    export type AsObject = {
        sessionId: Uint8Array | string,
        sessionIdPrefix: Uint8Array | string,
        sessionIdScopeUuid: Uint8Array | string,
        sessionIdSessionUuid: Uint8Array | string,
        sessionAddr: string,
        sessionUuid: string,
        scopeIdInfo?: ScopeIdInfo.AsObject,
    }
}

export class RecordIdInfo extends jspb.Message { 
    getRecordId(): Uint8Array | string;
    getRecordId_asU8(): Uint8Array;
    getRecordId_asB64(): string;
    setRecordId(value: Uint8Array | string): RecordIdInfo;
    getRecordIdPrefix(): Uint8Array | string;
    getRecordIdPrefix_asU8(): Uint8Array;
    getRecordIdPrefix_asB64(): string;
    setRecordIdPrefix(value: Uint8Array | string): RecordIdInfo;
    getRecordIdScopeUuid(): Uint8Array | string;
    getRecordIdScopeUuid_asU8(): Uint8Array;
    getRecordIdScopeUuid_asB64(): string;
    setRecordIdScopeUuid(value: Uint8Array | string): RecordIdInfo;
    getRecordIdHashedName(): Uint8Array | string;
    getRecordIdHashedName_asU8(): Uint8Array;
    getRecordIdHashedName_asB64(): string;
    setRecordIdHashedName(value: Uint8Array | string): RecordIdInfo;
    getRecordAddr(): string;
    setRecordAddr(value: string): RecordIdInfo;

    hasScopeIdInfo(): boolean;
    clearScopeIdInfo(): void;
    getScopeIdInfo(): ScopeIdInfo | undefined;
    setScopeIdInfo(value?: ScopeIdInfo): RecordIdInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordIdInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RecordIdInfo): RecordIdInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordIdInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordIdInfo;
    static deserializeBinaryFromReader(message: RecordIdInfo, reader: jspb.BinaryReader): RecordIdInfo;
}

export namespace RecordIdInfo {
    export type AsObject = {
        recordId: Uint8Array | string,
        recordIdPrefix: Uint8Array | string,
        recordIdScopeUuid: Uint8Array | string,
        recordIdHashedName: Uint8Array | string,
        recordAddr: string,
        scopeIdInfo?: ScopeIdInfo.AsObject,
    }
}

export class ScopeSpecIdInfo extends jspb.Message { 
    getScopeSpecId(): Uint8Array | string;
    getScopeSpecId_asU8(): Uint8Array;
    getScopeSpecId_asB64(): string;
    setScopeSpecId(value: Uint8Array | string): ScopeSpecIdInfo;
    getScopeSpecIdPrefix(): Uint8Array | string;
    getScopeSpecIdPrefix_asU8(): Uint8Array;
    getScopeSpecIdPrefix_asB64(): string;
    setScopeSpecIdPrefix(value: Uint8Array | string): ScopeSpecIdInfo;
    getScopeSpecIdScopeSpecUuid(): Uint8Array | string;
    getScopeSpecIdScopeSpecUuid_asU8(): Uint8Array;
    getScopeSpecIdScopeSpecUuid_asB64(): string;
    setScopeSpecIdScopeSpecUuid(value: Uint8Array | string): ScopeSpecIdInfo;
    getScopeSpecAddr(): string;
    setScopeSpecAddr(value: string): ScopeSpecIdInfo;
    getScopeSpecUuid(): string;
    setScopeSpecUuid(value: string): ScopeSpecIdInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeSpecIdInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeSpecIdInfo): ScopeSpecIdInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeSpecIdInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeSpecIdInfo;
    static deserializeBinaryFromReader(message: ScopeSpecIdInfo, reader: jspb.BinaryReader): ScopeSpecIdInfo;
}

export namespace ScopeSpecIdInfo {
    export type AsObject = {
        scopeSpecId: Uint8Array | string,
        scopeSpecIdPrefix: Uint8Array | string,
        scopeSpecIdScopeSpecUuid: Uint8Array | string,
        scopeSpecAddr: string,
        scopeSpecUuid: string,
    }
}

export class ContractSpecIdInfo extends jspb.Message { 
    getContractSpecId(): Uint8Array | string;
    getContractSpecId_asU8(): Uint8Array;
    getContractSpecId_asB64(): string;
    setContractSpecId(value: Uint8Array | string): ContractSpecIdInfo;
    getContractSpecIdPrefix(): Uint8Array | string;
    getContractSpecIdPrefix_asU8(): Uint8Array;
    getContractSpecIdPrefix_asB64(): string;
    setContractSpecIdPrefix(value: Uint8Array | string): ContractSpecIdInfo;
    getContractSpecIdContractSpecUuid(): Uint8Array | string;
    getContractSpecIdContractSpecUuid_asU8(): Uint8Array;
    getContractSpecIdContractSpecUuid_asB64(): string;
    setContractSpecIdContractSpecUuid(value: Uint8Array | string): ContractSpecIdInfo;
    getContractSpecAddr(): string;
    setContractSpecAddr(value: string): ContractSpecIdInfo;
    getContractSpecUuid(): string;
    setContractSpecUuid(value: string): ContractSpecIdInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractSpecIdInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ContractSpecIdInfo): ContractSpecIdInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractSpecIdInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractSpecIdInfo;
    static deserializeBinaryFromReader(message: ContractSpecIdInfo, reader: jspb.BinaryReader): ContractSpecIdInfo;
}

export namespace ContractSpecIdInfo {
    export type AsObject = {
        contractSpecId: Uint8Array | string,
        contractSpecIdPrefix: Uint8Array | string,
        contractSpecIdContractSpecUuid: Uint8Array | string,
        contractSpecAddr: string,
        contractSpecUuid: string,
    }
}

export class RecordSpecIdInfo extends jspb.Message { 
    getRecordSpecId(): Uint8Array | string;
    getRecordSpecId_asU8(): Uint8Array;
    getRecordSpecId_asB64(): string;
    setRecordSpecId(value: Uint8Array | string): RecordSpecIdInfo;
    getRecordSpecIdPrefix(): Uint8Array | string;
    getRecordSpecIdPrefix_asU8(): Uint8Array;
    getRecordSpecIdPrefix_asB64(): string;
    setRecordSpecIdPrefix(value: Uint8Array | string): RecordSpecIdInfo;
    getRecordSpecIdContractSpecUuid(): Uint8Array | string;
    getRecordSpecIdContractSpecUuid_asU8(): Uint8Array;
    getRecordSpecIdContractSpecUuid_asB64(): string;
    setRecordSpecIdContractSpecUuid(value: Uint8Array | string): RecordSpecIdInfo;
    getRecordSpecIdHashedName(): Uint8Array | string;
    getRecordSpecIdHashedName_asU8(): Uint8Array;
    getRecordSpecIdHashedName_asB64(): string;
    setRecordSpecIdHashedName(value: Uint8Array | string): RecordSpecIdInfo;
    getRecordSpecAddr(): string;
    setRecordSpecAddr(value: string): RecordSpecIdInfo;

    hasContractSpecIdInfo(): boolean;
    clearContractSpecIdInfo(): void;
    getContractSpecIdInfo(): ContractSpecIdInfo | undefined;
    setContractSpecIdInfo(value?: ContractSpecIdInfo): RecordSpecIdInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSpecIdInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSpecIdInfo): RecordSpecIdInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSpecIdInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSpecIdInfo;
    static deserializeBinaryFromReader(message: RecordSpecIdInfo, reader: jspb.BinaryReader): RecordSpecIdInfo;
}

export namespace RecordSpecIdInfo {
    export type AsObject = {
        recordSpecId: Uint8Array | string,
        recordSpecIdPrefix: Uint8Array | string,
        recordSpecIdContractSpecUuid: Uint8Array | string,
        recordSpecIdHashedName: Uint8Array | string,
        recordSpecAddr: string,
        contractSpecIdInfo?: ContractSpecIdInfo.AsObject,
    }
}
