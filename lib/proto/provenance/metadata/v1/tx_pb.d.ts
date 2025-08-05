// package: provenance.metadata.v1
// file: provenance/metadata/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_metadata_v1_metadata_pb from "../../../provenance/metadata/v1/metadata_pb";
import * as provenance_metadata_v1_objectstore_pb from "../../../provenance/metadata/v1/objectstore_pb";
import * as provenance_metadata_v1_p8e_p8e_pb from "../../../provenance/metadata/v1/p8e/p8e_pb";
import * as provenance_metadata_v1_scope_pb from "../../../provenance/metadata/v1/scope_pb";
import * as provenance_metadata_v1_specification_pb from "../../../provenance/metadata/v1/specification_pb";

export class MsgWriteScopeRequest extends jspb.Message { 

    hasScope(): boolean;
    clearScope(): void;
    getScope(): provenance_metadata_v1_scope_pb.Scope | undefined;
    setScope(value?: provenance_metadata_v1_scope_pb.Scope): MsgWriteScopeRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgWriteScopeRequest;
    addSigners(value: string, index?: number): string;
    getScopeUuid(): string;
    setScopeUuid(value: string): MsgWriteScopeRequest;
    getSpecUuid(): string;
    setSpecUuid(value: string): MsgWriteScopeRequest;
    getUsdMills(): number;
    setUsdMills(value: number): MsgWriteScopeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteScopeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteScopeRequest): MsgWriteScopeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteScopeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteScopeRequest;
    static deserializeBinaryFromReader(message: MsgWriteScopeRequest, reader: jspb.BinaryReader): MsgWriteScopeRequest;
}

export namespace MsgWriteScopeRequest {
    export type AsObject = {
        scope?: provenance_metadata_v1_scope_pb.Scope.AsObject,
        signersList: Array<string>,
        scopeUuid: string,
        specUuid: string,
        usdMills: number,
    }
}

export class MsgWriteScopeResponse extends jspb.Message { 

    hasScopeIdInfo(): boolean;
    clearScopeIdInfo(): void;
    getScopeIdInfo(): provenance_metadata_v1_metadata_pb.ScopeIdInfo | undefined;
    setScopeIdInfo(value?: provenance_metadata_v1_metadata_pb.ScopeIdInfo): MsgWriteScopeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteScopeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteScopeResponse): MsgWriteScopeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteScopeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteScopeResponse;
    static deserializeBinaryFromReader(message: MsgWriteScopeResponse, reader: jspb.BinaryReader): MsgWriteScopeResponse;
}

export namespace MsgWriteScopeResponse {
    export type AsObject = {
        scopeIdInfo?: provenance_metadata_v1_metadata_pb.ScopeIdInfo.AsObject,
    }
}

export class MsgDeleteScopeRequest extends jspb.Message { 
    getScopeId(): Uint8Array | string;
    getScopeId_asU8(): Uint8Array;
    getScopeId_asB64(): string;
    setScopeId(value: Uint8Array | string): MsgDeleteScopeRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgDeleteScopeRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteScopeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteScopeRequest): MsgDeleteScopeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteScopeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteScopeRequest;
    static deserializeBinaryFromReader(message: MsgDeleteScopeRequest, reader: jspb.BinaryReader): MsgDeleteScopeRequest;
}

export namespace MsgDeleteScopeRequest {
    export type AsObject = {
        scopeId: Uint8Array | string,
        signersList: Array<string>,
    }
}

export class MsgDeleteScopeResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteScopeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteScopeResponse): MsgDeleteScopeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteScopeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteScopeResponse;
    static deserializeBinaryFromReader(message: MsgDeleteScopeResponse, reader: jspb.BinaryReader): MsgDeleteScopeResponse;
}

export namespace MsgDeleteScopeResponse {
    export type AsObject = {
    }
}

export class MsgAddScopeDataAccessRequest extends jspb.Message { 
    getScopeId(): Uint8Array | string;
    getScopeId_asU8(): Uint8Array;
    getScopeId_asB64(): string;
    setScopeId(value: Uint8Array | string): MsgAddScopeDataAccessRequest;
    clearDataAccessList(): void;
    getDataAccessList(): Array<string>;
    setDataAccessList(value: Array<string>): MsgAddScopeDataAccessRequest;
    addDataAccess(value: string, index?: number): string;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgAddScopeDataAccessRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddScopeDataAccessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddScopeDataAccessRequest): MsgAddScopeDataAccessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddScopeDataAccessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddScopeDataAccessRequest;
    static deserializeBinaryFromReader(message: MsgAddScopeDataAccessRequest, reader: jspb.BinaryReader): MsgAddScopeDataAccessRequest;
}

export namespace MsgAddScopeDataAccessRequest {
    export type AsObject = {
        scopeId: Uint8Array | string,
        dataAccessList: Array<string>,
        signersList: Array<string>,
    }
}

export class MsgAddScopeDataAccessResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddScopeDataAccessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddScopeDataAccessResponse): MsgAddScopeDataAccessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddScopeDataAccessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddScopeDataAccessResponse;
    static deserializeBinaryFromReader(message: MsgAddScopeDataAccessResponse, reader: jspb.BinaryReader): MsgAddScopeDataAccessResponse;
}

export namespace MsgAddScopeDataAccessResponse {
    export type AsObject = {
    }
}

export class MsgDeleteScopeDataAccessRequest extends jspb.Message { 
    getScopeId(): Uint8Array | string;
    getScopeId_asU8(): Uint8Array;
    getScopeId_asB64(): string;
    setScopeId(value: Uint8Array | string): MsgDeleteScopeDataAccessRequest;
    clearDataAccessList(): void;
    getDataAccessList(): Array<string>;
    setDataAccessList(value: Array<string>): MsgDeleteScopeDataAccessRequest;
    addDataAccess(value: string, index?: number): string;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgDeleteScopeDataAccessRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteScopeDataAccessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteScopeDataAccessRequest): MsgDeleteScopeDataAccessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteScopeDataAccessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteScopeDataAccessRequest;
    static deserializeBinaryFromReader(message: MsgDeleteScopeDataAccessRequest, reader: jspb.BinaryReader): MsgDeleteScopeDataAccessRequest;
}

export namespace MsgDeleteScopeDataAccessRequest {
    export type AsObject = {
        scopeId: Uint8Array | string,
        dataAccessList: Array<string>,
        signersList: Array<string>,
    }
}

export class MsgDeleteScopeDataAccessResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteScopeDataAccessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteScopeDataAccessResponse): MsgDeleteScopeDataAccessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteScopeDataAccessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteScopeDataAccessResponse;
    static deserializeBinaryFromReader(message: MsgDeleteScopeDataAccessResponse, reader: jspb.BinaryReader): MsgDeleteScopeDataAccessResponse;
}

export namespace MsgDeleteScopeDataAccessResponse {
    export type AsObject = {
    }
}

export class MsgAddScopeOwnerRequest extends jspb.Message { 
    getScopeId(): Uint8Array | string;
    getScopeId_asU8(): Uint8Array;
    getScopeId_asB64(): string;
    setScopeId(value: Uint8Array | string): MsgAddScopeOwnerRequest;
    clearOwnersList(): void;
    getOwnersList(): Array<provenance_metadata_v1_scope_pb.Party>;
    setOwnersList(value: Array<provenance_metadata_v1_scope_pb.Party>): MsgAddScopeOwnerRequest;
    addOwners(value?: provenance_metadata_v1_scope_pb.Party, index?: number): provenance_metadata_v1_scope_pb.Party;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgAddScopeOwnerRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddScopeOwnerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddScopeOwnerRequest): MsgAddScopeOwnerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddScopeOwnerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddScopeOwnerRequest;
    static deserializeBinaryFromReader(message: MsgAddScopeOwnerRequest, reader: jspb.BinaryReader): MsgAddScopeOwnerRequest;
}

export namespace MsgAddScopeOwnerRequest {
    export type AsObject = {
        scopeId: Uint8Array | string,
        ownersList: Array<provenance_metadata_v1_scope_pb.Party.AsObject>,
        signersList: Array<string>,
    }
}

export class MsgAddScopeOwnerResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddScopeOwnerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddScopeOwnerResponse): MsgAddScopeOwnerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddScopeOwnerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddScopeOwnerResponse;
    static deserializeBinaryFromReader(message: MsgAddScopeOwnerResponse, reader: jspb.BinaryReader): MsgAddScopeOwnerResponse;
}

export namespace MsgAddScopeOwnerResponse {
    export type AsObject = {
    }
}

export class MsgDeleteScopeOwnerRequest extends jspb.Message { 
    getScopeId(): Uint8Array | string;
    getScopeId_asU8(): Uint8Array;
    getScopeId_asB64(): string;
    setScopeId(value: Uint8Array | string): MsgDeleteScopeOwnerRequest;
    clearOwnersList(): void;
    getOwnersList(): Array<string>;
    setOwnersList(value: Array<string>): MsgDeleteScopeOwnerRequest;
    addOwners(value: string, index?: number): string;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgDeleteScopeOwnerRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteScopeOwnerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteScopeOwnerRequest): MsgDeleteScopeOwnerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteScopeOwnerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteScopeOwnerRequest;
    static deserializeBinaryFromReader(message: MsgDeleteScopeOwnerRequest, reader: jspb.BinaryReader): MsgDeleteScopeOwnerRequest;
}

export namespace MsgDeleteScopeOwnerRequest {
    export type AsObject = {
        scopeId: Uint8Array | string,
        ownersList: Array<string>,
        signersList: Array<string>,
    }
}

export class MsgDeleteScopeOwnerResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteScopeOwnerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteScopeOwnerResponse): MsgDeleteScopeOwnerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteScopeOwnerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteScopeOwnerResponse;
    static deserializeBinaryFromReader(message: MsgDeleteScopeOwnerResponse, reader: jspb.BinaryReader): MsgDeleteScopeOwnerResponse;
}

export namespace MsgDeleteScopeOwnerResponse {
    export type AsObject = {
    }
}

export class MsgUpdateValueOwnersRequest extends jspb.Message { 
    clearScopeIdsList(): void;
    getScopeIdsList(): Array<Uint8Array | string>;
    getScopeIdsList_asU8(): Array<Uint8Array>;
    getScopeIdsList_asB64(): Array<string>;
    setScopeIdsList(value: Array<Uint8Array | string>): MsgUpdateValueOwnersRequest;
    addScopeIds(value: Uint8Array | string, index?: number): Uint8Array | string;
    getValueOwnerAddress(): string;
    setValueOwnerAddress(value: string): MsgUpdateValueOwnersRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgUpdateValueOwnersRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateValueOwnersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateValueOwnersRequest): MsgUpdateValueOwnersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateValueOwnersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateValueOwnersRequest;
    static deserializeBinaryFromReader(message: MsgUpdateValueOwnersRequest, reader: jspb.BinaryReader): MsgUpdateValueOwnersRequest;
}

export namespace MsgUpdateValueOwnersRequest {
    export type AsObject = {
        scopeIdsList: Array<Uint8Array | string>,
        valueOwnerAddress: string,
        signersList: Array<string>,
    }
}

export class MsgUpdateValueOwnersResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateValueOwnersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateValueOwnersResponse): MsgUpdateValueOwnersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateValueOwnersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateValueOwnersResponse;
    static deserializeBinaryFromReader(message: MsgUpdateValueOwnersResponse, reader: jspb.BinaryReader): MsgUpdateValueOwnersResponse;
}

export namespace MsgUpdateValueOwnersResponse {
    export type AsObject = {
    }
}

export class MsgMigrateValueOwnerRequest extends jspb.Message { 
    getExisting(): string;
    setExisting(value: string): MsgMigrateValueOwnerRequest;
    getProposed(): string;
    setProposed(value: string): MsgMigrateValueOwnerRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgMigrateValueOwnerRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgMigrateValueOwnerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgMigrateValueOwnerRequest): MsgMigrateValueOwnerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgMigrateValueOwnerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgMigrateValueOwnerRequest;
    static deserializeBinaryFromReader(message: MsgMigrateValueOwnerRequest, reader: jspb.BinaryReader): MsgMigrateValueOwnerRequest;
}

export namespace MsgMigrateValueOwnerRequest {
    export type AsObject = {
        existing: string,
        proposed: string,
        signersList: Array<string>,
    }
}

export class MsgMigrateValueOwnerResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgMigrateValueOwnerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgMigrateValueOwnerResponse): MsgMigrateValueOwnerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgMigrateValueOwnerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgMigrateValueOwnerResponse;
    static deserializeBinaryFromReader(message: MsgMigrateValueOwnerResponse, reader: jspb.BinaryReader): MsgMigrateValueOwnerResponse;
}

export namespace MsgMigrateValueOwnerResponse {
    export type AsObject = {
    }
}

export class MsgWriteSessionRequest extends jspb.Message { 

    hasSession(): boolean;
    clearSession(): void;
    getSession(): provenance_metadata_v1_scope_pb.Session | undefined;
    setSession(value?: provenance_metadata_v1_scope_pb.Session): MsgWriteSessionRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgWriteSessionRequest;
    addSigners(value: string, index?: number): string;

    hasSessionIdComponents(): boolean;
    clearSessionIdComponents(): void;
    getSessionIdComponents(): SessionIdComponents | undefined;
    setSessionIdComponents(value?: SessionIdComponents): MsgWriteSessionRequest;
    getSpecUuid(): string;
    setSpecUuid(value: string): MsgWriteSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteSessionRequest): MsgWriteSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteSessionRequest;
    static deserializeBinaryFromReader(message: MsgWriteSessionRequest, reader: jspb.BinaryReader): MsgWriteSessionRequest;
}

export namespace MsgWriteSessionRequest {
    export type AsObject = {
        session?: provenance_metadata_v1_scope_pb.Session.AsObject,
        signersList: Array<string>,
        sessionIdComponents?: SessionIdComponents.AsObject,
        specUuid: string,
    }
}

export class SessionIdComponents extends jspb.Message { 

    hasScopeUuid(): boolean;
    clearScopeUuid(): void;
    getScopeUuid(): string;
    setScopeUuid(value: string): SessionIdComponents;

    hasScopeAddr(): boolean;
    clearScopeAddr(): void;
    getScopeAddr(): string;
    setScopeAddr(value: string): SessionIdComponents;
    getSessionUuid(): string;
    setSessionUuid(value: string): SessionIdComponents;

    getScopeIdentifierCase(): SessionIdComponents.ScopeIdentifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionIdComponents.AsObject;
    static toObject(includeInstance: boolean, msg: SessionIdComponents): SessionIdComponents.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionIdComponents, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionIdComponents;
    static deserializeBinaryFromReader(message: SessionIdComponents, reader: jspb.BinaryReader): SessionIdComponents;
}

export namespace SessionIdComponents {
    export type AsObject = {
        scopeUuid: string,
        scopeAddr: string,
        sessionUuid: string,
    }

    export enum ScopeIdentifierCase {
        SCOPE_IDENTIFIER_NOT_SET = 0,
        SCOPE_UUID = 1,
        SCOPE_ADDR = 2,
    }

}

export class MsgWriteSessionResponse extends jspb.Message { 

    hasSessionIdInfo(): boolean;
    clearSessionIdInfo(): void;
    getSessionIdInfo(): provenance_metadata_v1_metadata_pb.SessionIdInfo | undefined;
    setSessionIdInfo(value?: provenance_metadata_v1_metadata_pb.SessionIdInfo): MsgWriteSessionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteSessionResponse): MsgWriteSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteSessionResponse;
    static deserializeBinaryFromReader(message: MsgWriteSessionResponse, reader: jspb.BinaryReader): MsgWriteSessionResponse;
}

export namespace MsgWriteSessionResponse {
    export type AsObject = {
        sessionIdInfo?: provenance_metadata_v1_metadata_pb.SessionIdInfo.AsObject,
    }
}

export class MsgWriteRecordRequest extends jspb.Message { 

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): provenance_metadata_v1_scope_pb.Record | undefined;
    setRecord(value?: provenance_metadata_v1_scope_pb.Record): MsgWriteRecordRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgWriteRecordRequest;
    addSigners(value: string, index?: number): string;

    hasSessionIdComponents(): boolean;
    clearSessionIdComponents(): void;
    getSessionIdComponents(): SessionIdComponents | undefined;
    setSessionIdComponents(value?: SessionIdComponents): MsgWriteRecordRequest;
    getContractSpecUuid(): string;
    setContractSpecUuid(value: string): MsgWriteRecordRequest;
    clearPartiesList(): void;
    getPartiesList(): Array<provenance_metadata_v1_scope_pb.Party>;
    setPartiesList(value: Array<provenance_metadata_v1_scope_pb.Party>): MsgWriteRecordRequest;
    addParties(value?: provenance_metadata_v1_scope_pb.Party, index?: number): provenance_metadata_v1_scope_pb.Party;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteRecordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteRecordRequest): MsgWriteRecordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteRecordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteRecordRequest;
    static deserializeBinaryFromReader(message: MsgWriteRecordRequest, reader: jspb.BinaryReader): MsgWriteRecordRequest;
}

export namespace MsgWriteRecordRequest {
    export type AsObject = {
        record?: provenance_metadata_v1_scope_pb.Record.AsObject,
        signersList: Array<string>,
        sessionIdComponents?: SessionIdComponents.AsObject,
        contractSpecUuid: string,
        partiesList: Array<provenance_metadata_v1_scope_pb.Party.AsObject>,
    }
}

export class MsgWriteRecordResponse extends jspb.Message { 

    hasRecordIdInfo(): boolean;
    clearRecordIdInfo(): void;
    getRecordIdInfo(): provenance_metadata_v1_metadata_pb.RecordIdInfo | undefined;
    setRecordIdInfo(value?: provenance_metadata_v1_metadata_pb.RecordIdInfo): MsgWriteRecordResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteRecordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteRecordResponse): MsgWriteRecordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteRecordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteRecordResponse;
    static deserializeBinaryFromReader(message: MsgWriteRecordResponse, reader: jspb.BinaryReader): MsgWriteRecordResponse;
}

export namespace MsgWriteRecordResponse {
    export type AsObject = {
        recordIdInfo?: provenance_metadata_v1_metadata_pb.RecordIdInfo.AsObject,
    }
}

export class MsgDeleteRecordRequest extends jspb.Message { 
    getRecordId(): Uint8Array | string;
    getRecordId_asU8(): Uint8Array;
    getRecordId_asB64(): string;
    setRecordId(value: Uint8Array | string): MsgDeleteRecordRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgDeleteRecordRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteRecordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteRecordRequest): MsgDeleteRecordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteRecordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteRecordRequest;
    static deserializeBinaryFromReader(message: MsgDeleteRecordRequest, reader: jspb.BinaryReader): MsgDeleteRecordRequest;
}

export namespace MsgDeleteRecordRequest {
    export type AsObject = {
        recordId: Uint8Array | string,
        signersList: Array<string>,
    }
}

export class MsgDeleteRecordResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteRecordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteRecordResponse): MsgDeleteRecordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteRecordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteRecordResponse;
    static deserializeBinaryFromReader(message: MsgDeleteRecordResponse, reader: jspb.BinaryReader): MsgDeleteRecordResponse;
}

export namespace MsgDeleteRecordResponse {
    export type AsObject = {
    }
}

export class MsgWriteScopeSpecificationRequest extends jspb.Message { 

    hasSpecification(): boolean;
    clearSpecification(): void;
    getSpecification(): provenance_metadata_v1_specification_pb.ScopeSpecification | undefined;
    setSpecification(value?: provenance_metadata_v1_specification_pb.ScopeSpecification): MsgWriteScopeSpecificationRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgWriteScopeSpecificationRequest;
    addSigners(value: string, index?: number): string;
    getSpecUuid(): string;
    setSpecUuid(value: string): MsgWriteScopeSpecificationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteScopeSpecificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteScopeSpecificationRequest): MsgWriteScopeSpecificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteScopeSpecificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteScopeSpecificationRequest;
    static deserializeBinaryFromReader(message: MsgWriteScopeSpecificationRequest, reader: jspb.BinaryReader): MsgWriteScopeSpecificationRequest;
}

export namespace MsgWriteScopeSpecificationRequest {
    export type AsObject = {
        specification?: provenance_metadata_v1_specification_pb.ScopeSpecification.AsObject,
        signersList: Array<string>,
        specUuid: string,
    }
}

export class MsgWriteScopeSpecificationResponse extends jspb.Message { 

    hasScopeSpecIdInfo(): boolean;
    clearScopeSpecIdInfo(): void;
    getScopeSpecIdInfo(): provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo | undefined;
    setScopeSpecIdInfo(value?: provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo): MsgWriteScopeSpecificationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteScopeSpecificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteScopeSpecificationResponse): MsgWriteScopeSpecificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteScopeSpecificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteScopeSpecificationResponse;
    static deserializeBinaryFromReader(message: MsgWriteScopeSpecificationResponse, reader: jspb.BinaryReader): MsgWriteScopeSpecificationResponse;
}

export namespace MsgWriteScopeSpecificationResponse {
    export type AsObject = {
        scopeSpecIdInfo?: provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo.AsObject,
    }
}

export class MsgDeleteScopeSpecificationRequest extends jspb.Message { 
    getSpecificationId(): Uint8Array | string;
    getSpecificationId_asU8(): Uint8Array;
    getSpecificationId_asB64(): string;
    setSpecificationId(value: Uint8Array | string): MsgDeleteScopeSpecificationRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgDeleteScopeSpecificationRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteScopeSpecificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteScopeSpecificationRequest): MsgDeleteScopeSpecificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteScopeSpecificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteScopeSpecificationRequest;
    static deserializeBinaryFromReader(message: MsgDeleteScopeSpecificationRequest, reader: jspb.BinaryReader): MsgDeleteScopeSpecificationRequest;
}

export namespace MsgDeleteScopeSpecificationRequest {
    export type AsObject = {
        specificationId: Uint8Array | string,
        signersList: Array<string>,
    }
}

export class MsgDeleteScopeSpecificationResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteScopeSpecificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteScopeSpecificationResponse): MsgDeleteScopeSpecificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteScopeSpecificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteScopeSpecificationResponse;
    static deserializeBinaryFromReader(message: MsgDeleteScopeSpecificationResponse, reader: jspb.BinaryReader): MsgDeleteScopeSpecificationResponse;
}

export namespace MsgDeleteScopeSpecificationResponse {
    export type AsObject = {
    }
}

export class MsgWriteContractSpecificationRequest extends jspb.Message { 

    hasSpecification(): boolean;
    clearSpecification(): void;
    getSpecification(): provenance_metadata_v1_specification_pb.ContractSpecification | undefined;
    setSpecification(value?: provenance_metadata_v1_specification_pb.ContractSpecification): MsgWriteContractSpecificationRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgWriteContractSpecificationRequest;
    addSigners(value: string, index?: number): string;
    getSpecUuid(): string;
    setSpecUuid(value: string): MsgWriteContractSpecificationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteContractSpecificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteContractSpecificationRequest): MsgWriteContractSpecificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteContractSpecificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteContractSpecificationRequest;
    static deserializeBinaryFromReader(message: MsgWriteContractSpecificationRequest, reader: jspb.BinaryReader): MsgWriteContractSpecificationRequest;
}

export namespace MsgWriteContractSpecificationRequest {
    export type AsObject = {
        specification?: provenance_metadata_v1_specification_pb.ContractSpecification.AsObject,
        signersList: Array<string>,
        specUuid: string,
    }
}

export class MsgWriteContractSpecificationResponse extends jspb.Message { 

    hasContractSpecIdInfo(): boolean;
    clearContractSpecIdInfo(): void;
    getContractSpecIdInfo(): provenance_metadata_v1_metadata_pb.ContractSpecIdInfo | undefined;
    setContractSpecIdInfo(value?: provenance_metadata_v1_metadata_pb.ContractSpecIdInfo): MsgWriteContractSpecificationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteContractSpecificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteContractSpecificationResponse): MsgWriteContractSpecificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteContractSpecificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteContractSpecificationResponse;
    static deserializeBinaryFromReader(message: MsgWriteContractSpecificationResponse, reader: jspb.BinaryReader): MsgWriteContractSpecificationResponse;
}

export namespace MsgWriteContractSpecificationResponse {
    export type AsObject = {
        contractSpecIdInfo?: provenance_metadata_v1_metadata_pb.ContractSpecIdInfo.AsObject,
    }
}

export class MsgAddContractSpecToScopeSpecRequest extends jspb.Message { 
    getContractSpecificationId(): Uint8Array | string;
    getContractSpecificationId_asU8(): Uint8Array;
    getContractSpecificationId_asB64(): string;
    setContractSpecificationId(value: Uint8Array | string): MsgAddContractSpecToScopeSpecRequest;
    getScopeSpecificationId(): Uint8Array | string;
    getScopeSpecificationId_asU8(): Uint8Array;
    getScopeSpecificationId_asB64(): string;
    setScopeSpecificationId(value: Uint8Array | string): MsgAddContractSpecToScopeSpecRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgAddContractSpecToScopeSpecRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddContractSpecToScopeSpecRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddContractSpecToScopeSpecRequest): MsgAddContractSpecToScopeSpecRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddContractSpecToScopeSpecRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddContractSpecToScopeSpecRequest;
    static deserializeBinaryFromReader(message: MsgAddContractSpecToScopeSpecRequest, reader: jspb.BinaryReader): MsgAddContractSpecToScopeSpecRequest;
}

export namespace MsgAddContractSpecToScopeSpecRequest {
    export type AsObject = {
        contractSpecificationId: Uint8Array | string,
        scopeSpecificationId: Uint8Array | string,
        signersList: Array<string>,
    }
}

export class MsgAddContractSpecToScopeSpecResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddContractSpecToScopeSpecResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddContractSpecToScopeSpecResponse): MsgAddContractSpecToScopeSpecResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddContractSpecToScopeSpecResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddContractSpecToScopeSpecResponse;
    static deserializeBinaryFromReader(message: MsgAddContractSpecToScopeSpecResponse, reader: jspb.BinaryReader): MsgAddContractSpecToScopeSpecResponse;
}

export namespace MsgAddContractSpecToScopeSpecResponse {
    export type AsObject = {
    }
}

export class MsgDeleteContractSpecFromScopeSpecRequest extends jspb.Message { 
    getContractSpecificationId(): Uint8Array | string;
    getContractSpecificationId_asU8(): Uint8Array;
    getContractSpecificationId_asB64(): string;
    setContractSpecificationId(value: Uint8Array | string): MsgDeleteContractSpecFromScopeSpecRequest;
    getScopeSpecificationId(): Uint8Array | string;
    getScopeSpecificationId_asU8(): Uint8Array;
    getScopeSpecificationId_asB64(): string;
    setScopeSpecificationId(value: Uint8Array | string): MsgDeleteContractSpecFromScopeSpecRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgDeleteContractSpecFromScopeSpecRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteContractSpecFromScopeSpecRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteContractSpecFromScopeSpecRequest): MsgDeleteContractSpecFromScopeSpecRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteContractSpecFromScopeSpecRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteContractSpecFromScopeSpecRequest;
    static deserializeBinaryFromReader(message: MsgDeleteContractSpecFromScopeSpecRequest, reader: jspb.BinaryReader): MsgDeleteContractSpecFromScopeSpecRequest;
}

export namespace MsgDeleteContractSpecFromScopeSpecRequest {
    export type AsObject = {
        contractSpecificationId: Uint8Array | string,
        scopeSpecificationId: Uint8Array | string,
        signersList: Array<string>,
    }
}

export class MsgDeleteContractSpecFromScopeSpecResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteContractSpecFromScopeSpecResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteContractSpecFromScopeSpecResponse): MsgDeleteContractSpecFromScopeSpecResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteContractSpecFromScopeSpecResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteContractSpecFromScopeSpecResponse;
    static deserializeBinaryFromReader(message: MsgDeleteContractSpecFromScopeSpecResponse, reader: jspb.BinaryReader): MsgDeleteContractSpecFromScopeSpecResponse;
}

export namespace MsgDeleteContractSpecFromScopeSpecResponse {
    export type AsObject = {
    }
}

export class MsgDeleteContractSpecificationRequest extends jspb.Message { 
    getSpecificationId(): Uint8Array | string;
    getSpecificationId_asU8(): Uint8Array;
    getSpecificationId_asB64(): string;
    setSpecificationId(value: Uint8Array | string): MsgDeleteContractSpecificationRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgDeleteContractSpecificationRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteContractSpecificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteContractSpecificationRequest): MsgDeleteContractSpecificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteContractSpecificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteContractSpecificationRequest;
    static deserializeBinaryFromReader(message: MsgDeleteContractSpecificationRequest, reader: jspb.BinaryReader): MsgDeleteContractSpecificationRequest;
}

export namespace MsgDeleteContractSpecificationRequest {
    export type AsObject = {
        specificationId: Uint8Array | string,
        signersList: Array<string>,
    }
}

export class MsgDeleteContractSpecificationResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteContractSpecificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteContractSpecificationResponse): MsgDeleteContractSpecificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteContractSpecificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteContractSpecificationResponse;
    static deserializeBinaryFromReader(message: MsgDeleteContractSpecificationResponse, reader: jspb.BinaryReader): MsgDeleteContractSpecificationResponse;
}

export namespace MsgDeleteContractSpecificationResponse {
    export type AsObject = {
    }
}

export class MsgWriteRecordSpecificationRequest extends jspb.Message { 

    hasSpecification(): boolean;
    clearSpecification(): void;
    getSpecification(): provenance_metadata_v1_specification_pb.RecordSpecification | undefined;
    setSpecification(value?: provenance_metadata_v1_specification_pb.RecordSpecification): MsgWriteRecordSpecificationRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgWriteRecordSpecificationRequest;
    addSigners(value: string, index?: number): string;
    getContractSpecUuid(): string;
    setContractSpecUuid(value: string): MsgWriteRecordSpecificationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteRecordSpecificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteRecordSpecificationRequest): MsgWriteRecordSpecificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteRecordSpecificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteRecordSpecificationRequest;
    static deserializeBinaryFromReader(message: MsgWriteRecordSpecificationRequest, reader: jspb.BinaryReader): MsgWriteRecordSpecificationRequest;
}

export namespace MsgWriteRecordSpecificationRequest {
    export type AsObject = {
        specification?: provenance_metadata_v1_specification_pb.RecordSpecification.AsObject,
        signersList: Array<string>,
        contractSpecUuid: string,
    }
}

export class MsgWriteRecordSpecificationResponse extends jspb.Message { 

    hasRecordSpecIdInfo(): boolean;
    clearRecordSpecIdInfo(): void;
    getRecordSpecIdInfo(): provenance_metadata_v1_metadata_pb.RecordSpecIdInfo | undefined;
    setRecordSpecIdInfo(value?: provenance_metadata_v1_metadata_pb.RecordSpecIdInfo): MsgWriteRecordSpecificationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteRecordSpecificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteRecordSpecificationResponse): MsgWriteRecordSpecificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteRecordSpecificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteRecordSpecificationResponse;
    static deserializeBinaryFromReader(message: MsgWriteRecordSpecificationResponse, reader: jspb.BinaryReader): MsgWriteRecordSpecificationResponse;
}

export namespace MsgWriteRecordSpecificationResponse {
    export type AsObject = {
        recordSpecIdInfo?: provenance_metadata_v1_metadata_pb.RecordSpecIdInfo.AsObject,
    }
}

export class MsgDeleteRecordSpecificationRequest extends jspb.Message { 
    getSpecificationId(): Uint8Array | string;
    getSpecificationId_asU8(): Uint8Array;
    getSpecificationId_asB64(): string;
    setSpecificationId(value: Uint8Array | string): MsgDeleteRecordSpecificationRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgDeleteRecordSpecificationRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteRecordSpecificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteRecordSpecificationRequest): MsgDeleteRecordSpecificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteRecordSpecificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteRecordSpecificationRequest;
    static deserializeBinaryFromReader(message: MsgDeleteRecordSpecificationRequest, reader: jspb.BinaryReader): MsgDeleteRecordSpecificationRequest;
}

export namespace MsgDeleteRecordSpecificationRequest {
    export type AsObject = {
        specificationId: Uint8Array | string,
        signersList: Array<string>,
    }
}

export class MsgDeleteRecordSpecificationResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteRecordSpecificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteRecordSpecificationResponse): MsgDeleteRecordSpecificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteRecordSpecificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteRecordSpecificationResponse;
    static deserializeBinaryFromReader(message: MsgDeleteRecordSpecificationResponse, reader: jspb.BinaryReader): MsgDeleteRecordSpecificationResponse;
}

export namespace MsgDeleteRecordSpecificationResponse {
    export type AsObject = {
    }
}

export class MsgBindOSLocatorRequest extends jspb.Message { 

    hasLocator(): boolean;
    clearLocator(): void;
    getLocator(): provenance_metadata_v1_objectstore_pb.ObjectStoreLocator | undefined;
    setLocator(value?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator): MsgBindOSLocatorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgBindOSLocatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgBindOSLocatorRequest): MsgBindOSLocatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgBindOSLocatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgBindOSLocatorRequest;
    static deserializeBinaryFromReader(message: MsgBindOSLocatorRequest, reader: jspb.BinaryReader): MsgBindOSLocatorRequest;
}

export namespace MsgBindOSLocatorRequest {
    export type AsObject = {
        locator?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.AsObject,
    }
}

export class MsgBindOSLocatorResponse extends jspb.Message { 

    hasLocator(): boolean;
    clearLocator(): void;
    getLocator(): provenance_metadata_v1_objectstore_pb.ObjectStoreLocator | undefined;
    setLocator(value?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator): MsgBindOSLocatorResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgBindOSLocatorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgBindOSLocatorResponse): MsgBindOSLocatorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgBindOSLocatorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgBindOSLocatorResponse;
    static deserializeBinaryFromReader(message: MsgBindOSLocatorResponse, reader: jspb.BinaryReader): MsgBindOSLocatorResponse;
}

export namespace MsgBindOSLocatorResponse {
    export type AsObject = {
        locator?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.AsObject,
    }
}

export class MsgDeleteOSLocatorRequest extends jspb.Message { 

    hasLocator(): boolean;
    clearLocator(): void;
    getLocator(): provenance_metadata_v1_objectstore_pb.ObjectStoreLocator | undefined;
    setLocator(value?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator): MsgDeleteOSLocatorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteOSLocatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteOSLocatorRequest): MsgDeleteOSLocatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteOSLocatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteOSLocatorRequest;
    static deserializeBinaryFromReader(message: MsgDeleteOSLocatorRequest, reader: jspb.BinaryReader): MsgDeleteOSLocatorRequest;
}

export namespace MsgDeleteOSLocatorRequest {
    export type AsObject = {
        locator?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.AsObject,
    }
}

export class MsgDeleteOSLocatorResponse extends jspb.Message { 

    hasLocator(): boolean;
    clearLocator(): void;
    getLocator(): provenance_metadata_v1_objectstore_pb.ObjectStoreLocator | undefined;
    setLocator(value?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator): MsgDeleteOSLocatorResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteOSLocatorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteOSLocatorResponse): MsgDeleteOSLocatorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteOSLocatorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteOSLocatorResponse;
    static deserializeBinaryFromReader(message: MsgDeleteOSLocatorResponse, reader: jspb.BinaryReader): MsgDeleteOSLocatorResponse;
}

export namespace MsgDeleteOSLocatorResponse {
    export type AsObject = {
        locator?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.AsObject,
    }
}

export class MsgModifyOSLocatorRequest extends jspb.Message { 

    hasLocator(): boolean;
    clearLocator(): void;
    getLocator(): provenance_metadata_v1_objectstore_pb.ObjectStoreLocator | undefined;
    setLocator(value?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator): MsgModifyOSLocatorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgModifyOSLocatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgModifyOSLocatorRequest): MsgModifyOSLocatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgModifyOSLocatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgModifyOSLocatorRequest;
    static deserializeBinaryFromReader(message: MsgModifyOSLocatorRequest, reader: jspb.BinaryReader): MsgModifyOSLocatorRequest;
}

export namespace MsgModifyOSLocatorRequest {
    export type AsObject = {
        locator?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.AsObject,
    }
}

export class MsgModifyOSLocatorResponse extends jspb.Message { 

    hasLocator(): boolean;
    clearLocator(): void;
    getLocator(): provenance_metadata_v1_objectstore_pb.ObjectStoreLocator | undefined;
    setLocator(value?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator): MsgModifyOSLocatorResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgModifyOSLocatorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgModifyOSLocatorResponse): MsgModifyOSLocatorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgModifyOSLocatorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgModifyOSLocatorResponse;
    static deserializeBinaryFromReader(message: MsgModifyOSLocatorResponse, reader: jspb.BinaryReader): MsgModifyOSLocatorResponse;
}

export namespace MsgModifyOSLocatorResponse {
    export type AsObject = {
        locator?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.AsObject,
    }
}

export class MsgSetAccountDataRequest extends jspb.Message { 
    getMetadataAddr(): Uint8Array | string;
    getMetadataAddr_asU8(): Uint8Array;
    getMetadataAddr_asB64(): string;
    setMetadataAddr(value: Uint8Array | string): MsgSetAccountDataRequest;
    getValue(): string;
    setValue(value: string): MsgSetAccountDataRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgSetAccountDataRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSetAccountDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSetAccountDataRequest): MsgSetAccountDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSetAccountDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSetAccountDataRequest;
    static deserializeBinaryFromReader(message: MsgSetAccountDataRequest, reader: jspb.BinaryReader): MsgSetAccountDataRequest;
}

export namespace MsgSetAccountDataRequest {
    export type AsObject = {
        metadataAddr: Uint8Array | string,
        value: string,
        signersList: Array<string>,
    }
}

export class MsgSetAccountDataResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSetAccountDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSetAccountDataResponse): MsgSetAccountDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSetAccountDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSetAccountDataResponse;
    static deserializeBinaryFromReader(message: MsgSetAccountDataResponse, reader: jspb.BinaryReader): MsgSetAccountDataResponse;
}

export namespace MsgSetAccountDataResponse {
    export type AsObject = {
    }
}

export class MsgWriteP8eContractSpecRequest extends jspb.Message { 

    hasContractspec(): boolean;
    clearContractspec(): void;
    getContractspec(): provenance_metadata_v1_p8e_p8e_pb.ContractSpec | undefined;
    setContractspec(value?: provenance_metadata_v1_p8e_p8e_pb.ContractSpec): MsgWriteP8eContractSpecRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgWriteP8eContractSpecRequest;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteP8eContractSpecRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteP8eContractSpecRequest): MsgWriteP8eContractSpecRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteP8eContractSpecRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteP8eContractSpecRequest;
    static deserializeBinaryFromReader(message: MsgWriteP8eContractSpecRequest, reader: jspb.BinaryReader): MsgWriteP8eContractSpecRequest;
}

export namespace MsgWriteP8eContractSpecRequest {
    export type AsObject = {
        contractspec?: provenance_metadata_v1_p8e_p8e_pb.ContractSpec.AsObject,
        signersList: Array<string>,
    }
}

export class MsgWriteP8eContractSpecResponse extends jspb.Message { 

    hasContractSpecIdInfo(): boolean;
    clearContractSpecIdInfo(): void;
    getContractSpecIdInfo(): provenance_metadata_v1_metadata_pb.ContractSpecIdInfo | undefined;
    setContractSpecIdInfo(value?: provenance_metadata_v1_metadata_pb.ContractSpecIdInfo): MsgWriteP8eContractSpecResponse;
    clearRecordSpecIdInfosList(): void;
    getRecordSpecIdInfosList(): Array<provenance_metadata_v1_metadata_pb.RecordSpecIdInfo>;
    setRecordSpecIdInfosList(value: Array<provenance_metadata_v1_metadata_pb.RecordSpecIdInfo>): MsgWriteP8eContractSpecResponse;
    addRecordSpecIdInfos(value?: provenance_metadata_v1_metadata_pb.RecordSpecIdInfo, index?: number): provenance_metadata_v1_metadata_pb.RecordSpecIdInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWriteP8eContractSpecResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWriteP8eContractSpecResponse): MsgWriteP8eContractSpecResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWriteP8eContractSpecResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWriteP8eContractSpecResponse;
    static deserializeBinaryFromReader(message: MsgWriteP8eContractSpecResponse, reader: jspb.BinaryReader): MsgWriteP8eContractSpecResponse;
}

export namespace MsgWriteP8eContractSpecResponse {
    export type AsObject = {
        contractSpecIdInfo?: provenance_metadata_v1_metadata_pb.ContractSpecIdInfo.AsObject,
        recordSpecIdInfosList: Array<provenance_metadata_v1_metadata_pb.RecordSpecIdInfo.AsObject>,
    }
}

export class MsgP8eMemorializeContractRequest extends jspb.Message { 
    getScopeId(): string;
    setScopeId(value: string): MsgP8eMemorializeContractRequest;
    getGroupId(): string;
    setGroupId(value: string): MsgP8eMemorializeContractRequest;
    getScopeSpecificationId(): string;
    setScopeSpecificationId(value: string): MsgP8eMemorializeContractRequest;

    hasRecitals(): boolean;
    clearRecitals(): void;
    getRecitals(): provenance_metadata_v1_p8e_p8e_pb.Recitals | undefined;
    setRecitals(value?: provenance_metadata_v1_p8e_p8e_pb.Recitals): MsgP8eMemorializeContractRequest;

    hasContract(): boolean;
    clearContract(): void;
    getContract(): provenance_metadata_v1_p8e_p8e_pb.Contract | undefined;
    setContract(value?: provenance_metadata_v1_p8e_p8e_pb.Contract): MsgP8eMemorializeContractRequest;

    hasSignatures(): boolean;
    clearSignatures(): void;
    getSignatures(): provenance_metadata_v1_p8e_p8e_pb.SignatureSet | undefined;
    setSignatures(value?: provenance_metadata_v1_p8e_p8e_pb.SignatureSet): MsgP8eMemorializeContractRequest;
    getInvoker(): string;
    setInvoker(value: string): MsgP8eMemorializeContractRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgP8eMemorializeContractRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgP8eMemorializeContractRequest): MsgP8eMemorializeContractRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgP8eMemorializeContractRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgP8eMemorializeContractRequest;
    static deserializeBinaryFromReader(message: MsgP8eMemorializeContractRequest, reader: jspb.BinaryReader): MsgP8eMemorializeContractRequest;
}

export namespace MsgP8eMemorializeContractRequest {
    export type AsObject = {
        scopeId: string,
        groupId: string,
        scopeSpecificationId: string,
        recitals?: provenance_metadata_v1_p8e_p8e_pb.Recitals.AsObject,
        contract?: provenance_metadata_v1_p8e_p8e_pb.Contract.AsObject,
        signatures?: provenance_metadata_v1_p8e_p8e_pb.SignatureSet.AsObject,
        invoker: string,
    }
}

export class MsgP8eMemorializeContractResponse extends jspb.Message { 

    hasScopeIdInfo(): boolean;
    clearScopeIdInfo(): void;
    getScopeIdInfo(): provenance_metadata_v1_metadata_pb.ScopeIdInfo | undefined;
    setScopeIdInfo(value?: provenance_metadata_v1_metadata_pb.ScopeIdInfo): MsgP8eMemorializeContractResponse;

    hasSessionIdInfo(): boolean;
    clearSessionIdInfo(): void;
    getSessionIdInfo(): provenance_metadata_v1_metadata_pb.SessionIdInfo | undefined;
    setSessionIdInfo(value?: provenance_metadata_v1_metadata_pb.SessionIdInfo): MsgP8eMemorializeContractResponse;
    clearRecordIdInfosList(): void;
    getRecordIdInfosList(): Array<provenance_metadata_v1_metadata_pb.RecordIdInfo>;
    setRecordIdInfosList(value: Array<provenance_metadata_v1_metadata_pb.RecordIdInfo>): MsgP8eMemorializeContractResponse;
    addRecordIdInfos(value?: provenance_metadata_v1_metadata_pb.RecordIdInfo, index?: number): provenance_metadata_v1_metadata_pb.RecordIdInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgP8eMemorializeContractResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgP8eMemorializeContractResponse): MsgP8eMemorializeContractResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgP8eMemorializeContractResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgP8eMemorializeContractResponse;
    static deserializeBinaryFromReader(message: MsgP8eMemorializeContractResponse, reader: jspb.BinaryReader): MsgP8eMemorializeContractResponse;
}

export namespace MsgP8eMemorializeContractResponse {
    export type AsObject = {
        scopeIdInfo?: provenance_metadata_v1_metadata_pb.ScopeIdInfo.AsObject,
        sessionIdInfo?: provenance_metadata_v1_metadata_pb.SessionIdInfo.AsObject,
        recordIdInfosList: Array<provenance_metadata_v1_metadata_pb.RecordIdInfo.AsObject>,
    }
}

export class MsgAddNetAssetValuesRequest extends jspb.Message { 
    getScopeId(): string;
    setScopeId(value: string): MsgAddNetAssetValuesRequest;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): MsgAddNetAssetValuesRequest;
    addSigners(value: string, index?: number): string;
    clearNetAssetValuesList(): void;
    getNetAssetValuesList(): Array<provenance_metadata_v1_scope_pb.NetAssetValue>;
    setNetAssetValuesList(value: Array<provenance_metadata_v1_scope_pb.NetAssetValue>): MsgAddNetAssetValuesRequest;
    addNetAssetValues(value?: provenance_metadata_v1_scope_pb.NetAssetValue, index?: number): provenance_metadata_v1_scope_pb.NetAssetValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddNetAssetValuesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddNetAssetValuesRequest): MsgAddNetAssetValuesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddNetAssetValuesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddNetAssetValuesRequest;
    static deserializeBinaryFromReader(message: MsgAddNetAssetValuesRequest, reader: jspb.BinaryReader): MsgAddNetAssetValuesRequest;
}

export namespace MsgAddNetAssetValuesRequest {
    export type AsObject = {
        scopeId: string,
        signersList: Array<string>,
        netAssetValuesList: Array<provenance_metadata_v1_scope_pb.NetAssetValue.AsObject>,
    }
}

export class MsgAddNetAssetValuesResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddNetAssetValuesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddNetAssetValuesResponse): MsgAddNetAssetValuesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddNetAssetValuesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddNetAssetValuesResponse;
    static deserializeBinaryFromReader(message: MsgAddNetAssetValuesResponse, reader: jspb.BinaryReader): MsgAddNetAssetValuesResponse;
}

export namespace MsgAddNetAssetValuesResponse {
    export type AsObject = {
    }
}
