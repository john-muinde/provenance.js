// package: cosmwasm.wasm.v1
// file: cosmwasm/wasm/v1/types.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class AccessTypeParam extends jspb.Message { 
    getValue(): AccessType;
    setValue(value: AccessType): AccessTypeParam;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessTypeParam.AsObject;
    static toObject(includeInstance: boolean, msg: AccessTypeParam): AccessTypeParam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessTypeParam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessTypeParam;
    static deserializeBinaryFromReader(message: AccessTypeParam, reader: jspb.BinaryReader): AccessTypeParam;
}

export namespace AccessTypeParam {
    export type AsObject = {
        value: AccessType,
    }
}

export class AccessConfig extends jspb.Message { 
    getPermission(): AccessType;
    setPermission(value: AccessType): AccessConfig;
    getAddress(): string;
    setAddress(value: string): AccessConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AccessConfig): AccessConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessConfig;
    static deserializeBinaryFromReader(message: AccessConfig, reader: jspb.BinaryReader): AccessConfig;
}

export namespace AccessConfig {
    export type AsObject = {
        permission: AccessType,
        address: string,
    }
}

export class Params extends jspb.Message { 

    hasCodeUploadAccess(): boolean;
    clearCodeUploadAccess(): void;
    getCodeUploadAccess(): AccessConfig | undefined;
    setCodeUploadAccess(value?: AccessConfig): Params;
    getInstantiateDefaultPermission(): AccessType;
    setInstantiateDefaultPermission(value: AccessType): Params;
    getMaxWasmCodeSize(): number;
    setMaxWasmCodeSize(value: number): Params;

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
        codeUploadAccess?: AccessConfig.AsObject,
        instantiateDefaultPermission: AccessType,
        maxWasmCodeSize: number,
    }
}

export class CodeInfo extends jspb.Message { 
    getCodeHash(): Uint8Array | string;
    getCodeHash_asU8(): Uint8Array;
    getCodeHash_asB64(): string;
    setCodeHash(value: Uint8Array | string): CodeInfo;
    getCreator(): string;
    setCreator(value: string): CodeInfo;

    hasInstantiateConfig(): boolean;
    clearInstantiateConfig(): void;
    getInstantiateConfig(): AccessConfig | undefined;
    setInstantiateConfig(value?: AccessConfig): CodeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CodeInfo): CodeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeInfo;
    static deserializeBinaryFromReader(message: CodeInfo, reader: jspb.BinaryReader): CodeInfo;
}

export namespace CodeInfo {
    export type AsObject = {
        codeHash: Uint8Array | string,
        creator: string,
        instantiateConfig?: AccessConfig.AsObject,
    }
}

export class ContractInfo extends jspb.Message { 
    getCodeId(): number;
    setCodeId(value: number): ContractInfo;
    getCreator(): string;
    setCreator(value: string): ContractInfo;
    getAdmin(): string;
    setAdmin(value: string): ContractInfo;
    getLabel(): string;
    setLabel(value: string): ContractInfo;

    hasCreated(): boolean;
    clearCreated(): void;
    getCreated(): AbsoluteTxPosition | undefined;
    setCreated(value?: AbsoluteTxPosition): ContractInfo;
    getIbcPortId(): string;
    setIbcPortId(value: string): ContractInfo;

    hasExtension$(): boolean;
    clearExtension$(): void;
    getExtension$(): google_protobuf_any_pb.Any | undefined;
    setExtension$(value?: google_protobuf_any_pb.Any): ContractInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ContractInfo): ContractInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractInfo;
    static deserializeBinaryFromReader(message: ContractInfo, reader: jspb.BinaryReader): ContractInfo;
}

export namespace ContractInfo {
    export type AsObject = {
        codeId: number,
        creator: string,
        admin: string,
        label: string,
        created?: AbsoluteTxPosition.AsObject,
        ibcPortId: string,
        extension?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class ContractCodeHistoryEntry extends jspb.Message { 
    getOperation(): ContractCodeHistoryOperationType;
    setOperation(value: ContractCodeHistoryOperationType): ContractCodeHistoryEntry;
    getCodeId(): number;
    setCodeId(value: number): ContractCodeHistoryEntry;

    hasUpdated(): boolean;
    clearUpdated(): void;
    getUpdated(): AbsoluteTxPosition | undefined;
    setUpdated(value?: AbsoluteTxPosition): ContractCodeHistoryEntry;
    getMsg(): Uint8Array | string;
    getMsg_asU8(): Uint8Array;
    getMsg_asB64(): string;
    setMsg(value: Uint8Array | string): ContractCodeHistoryEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractCodeHistoryEntry.AsObject;
    static toObject(includeInstance: boolean, msg: ContractCodeHistoryEntry): ContractCodeHistoryEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractCodeHistoryEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractCodeHistoryEntry;
    static deserializeBinaryFromReader(message: ContractCodeHistoryEntry, reader: jspb.BinaryReader): ContractCodeHistoryEntry;
}

export namespace ContractCodeHistoryEntry {
    export type AsObject = {
        operation: ContractCodeHistoryOperationType,
        codeId: number,
        updated?: AbsoluteTxPosition.AsObject,
        msg: Uint8Array | string,
    }
}

export class AbsoluteTxPosition extends jspb.Message { 
    getBlockHeight(): number;
    setBlockHeight(value: number): AbsoluteTxPosition;
    getTxIndex(): number;
    setTxIndex(value: number): AbsoluteTxPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AbsoluteTxPosition.AsObject;
    static toObject(includeInstance: boolean, msg: AbsoluteTxPosition): AbsoluteTxPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AbsoluteTxPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AbsoluteTxPosition;
    static deserializeBinaryFromReader(message: AbsoluteTxPosition, reader: jspb.BinaryReader): AbsoluteTxPosition;
}

export namespace AbsoluteTxPosition {
    export type AsObject = {
        blockHeight: number,
        txIndex: number,
    }
}

export class Model extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): Model;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Model;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Model.AsObject;
    static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Model;
    static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
    export type AsObject = {
        key: Uint8Array | string,
        value: Uint8Array | string,
    }
}

export enum AccessType {
    ACCESS_TYPE_UNSPECIFIED = 0,
    ACCESS_TYPE_NOBODY = 1,
    ACCESS_TYPE_ONLY_ADDRESS = 2,
    ACCESS_TYPE_EVERYBODY = 3,
}

export enum ContractCodeHistoryOperationType {
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
}
