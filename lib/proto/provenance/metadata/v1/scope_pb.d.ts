// package: provenance.metadata.v1
// file: provenance/metadata/v1/scope.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as provenance_metadata_v1_specification_pb from "../../../provenance/metadata/v1/specification_pb";

export class Scope extends jspb.Message { 
    getScopeId(): Uint8Array | string;
    getScopeId_asU8(): Uint8Array;
    getScopeId_asB64(): string;
    setScopeId(value: Uint8Array | string): Scope;
    getSpecificationId(): Uint8Array | string;
    getSpecificationId_asU8(): Uint8Array;
    getSpecificationId_asB64(): string;
    setSpecificationId(value: Uint8Array | string): Scope;
    clearOwnersList(): void;
    getOwnersList(): Array<Party>;
    setOwnersList(value: Array<Party>): Scope;
    addOwners(value?: Party, index?: number): Party;
    clearDataAccessList(): void;
    getDataAccessList(): Array<string>;
    setDataAccessList(value: Array<string>): Scope;
    addDataAccess(value: string, index?: number): string;
    getValueOwnerAddress(): string;
    setValueOwnerAddress(value: string): Scope;
    getRequirePartyRollup(): boolean;
    setRequirePartyRollup(value: boolean): Scope;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Scope.AsObject;
    static toObject(includeInstance: boolean, msg: Scope): Scope.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Scope, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Scope;
    static deserializeBinaryFromReader(message: Scope, reader: jspb.BinaryReader): Scope;
}

export namespace Scope {
    export type AsObject = {
        scopeId: Uint8Array | string,
        specificationId: Uint8Array | string,
        ownersList: Array<Party.AsObject>,
        dataAccessList: Array<string>,
        valueOwnerAddress: string,
        requirePartyRollup: boolean,
    }
}

export class Session extends jspb.Message { 
    getSessionId(): Uint8Array | string;
    getSessionId_asU8(): Uint8Array;
    getSessionId_asB64(): string;
    setSessionId(value: Uint8Array | string): Session;
    getSpecificationId(): Uint8Array | string;
    getSpecificationId_asU8(): Uint8Array;
    getSpecificationId_asB64(): string;
    setSpecificationId(value: Uint8Array | string): Session;
    clearPartiesList(): void;
    getPartiesList(): Array<Party>;
    setPartiesList(value: Array<Party>): Session;
    addParties(value?: Party, index?: number): Party;
    getName(): string;
    setName(value: string): Session;
    getContext(): Uint8Array | string;
    getContext_asU8(): Uint8Array;
    getContext_asB64(): string;
    setContext(value: Uint8Array | string): Session;

    hasAudit(): boolean;
    clearAudit(): void;
    getAudit(): AuditFields | undefined;
    setAudit(value?: AuditFields): Session;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Session.AsObject;
    static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Session;
    static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
    export type AsObject = {
        sessionId: Uint8Array | string,
        specificationId: Uint8Array | string,
        partiesList: Array<Party.AsObject>,
        name: string,
        context: Uint8Array | string,
        audit?: AuditFields.AsObject,
    }
}

export class Record extends jspb.Message { 
    getName(): string;
    setName(value: string): Record;
    getSessionId(): Uint8Array | string;
    getSessionId_asU8(): Uint8Array;
    getSessionId_asB64(): string;
    setSessionId(value: Uint8Array | string): Record;

    hasProcess(): boolean;
    clearProcess(): void;
    getProcess(): Process | undefined;
    setProcess(value?: Process): Record;
    clearInputsList(): void;
    getInputsList(): Array<RecordInput>;
    setInputsList(value: Array<RecordInput>): Record;
    addInputs(value?: RecordInput, index?: number): RecordInput;
    clearOutputsList(): void;
    getOutputsList(): Array<RecordOutput>;
    setOutputsList(value: Array<RecordOutput>): Record;
    addOutputs(value?: RecordOutput, index?: number): RecordOutput;
    getSpecificationId(): Uint8Array | string;
    getSpecificationId_asU8(): Uint8Array;
    getSpecificationId_asB64(): string;
    setSpecificationId(value: Uint8Array | string): Record;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Record.AsObject;
    static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Record;
    static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
}

export namespace Record {
    export type AsObject = {
        name: string,
        sessionId: Uint8Array | string,
        process?: Process.AsObject,
        inputsList: Array<RecordInput.AsObject>,
        outputsList: Array<RecordOutput.AsObject>,
        specificationId: Uint8Array | string,
    }
}

export class Process extends jspb.Message { 

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): string;
    setAddress(value: string): Process;

    hasHash(): boolean;
    clearHash(): void;
    getHash(): string;
    setHash(value: string): Process;
    getName(): string;
    setName(value: string): Process;
    getMethod(): string;
    setMethod(value: string): Process;

    getProcessIdCase(): Process.ProcessIdCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Process.AsObject;
    static toObject(includeInstance: boolean, msg: Process): Process.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Process, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Process;
    static deserializeBinaryFromReader(message: Process, reader: jspb.BinaryReader): Process;
}

export namespace Process {
    export type AsObject = {
        address: string,
        hash: string,
        name: string,
        method: string,
    }

    export enum ProcessIdCase {
        PROCESS_ID_NOT_SET = 0,
        ADDRESS = 1,
        HASH = 2,
    }

}

export class RecordInput extends jspb.Message { 
    getName(): string;
    setName(value: string): RecordInput;

    hasRecordId(): boolean;
    clearRecordId(): void;
    getRecordId(): Uint8Array | string;
    getRecordId_asU8(): Uint8Array;
    getRecordId_asB64(): string;
    setRecordId(value: Uint8Array | string): RecordInput;

    hasHash(): boolean;
    clearHash(): void;
    getHash(): string;
    setHash(value: string): RecordInput;
    getTypeName(): string;
    setTypeName(value: string): RecordInput;
    getStatus(): RecordInputStatus;
    setStatus(value: RecordInputStatus): RecordInput;

    getSourceCase(): RecordInput.SourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordInput.AsObject;
    static toObject(includeInstance: boolean, msg: RecordInput): RecordInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordInput;
    static deserializeBinaryFromReader(message: RecordInput, reader: jspb.BinaryReader): RecordInput;
}

export namespace RecordInput {
    export type AsObject = {
        name: string,
        recordId: Uint8Array | string,
        hash: string,
        typeName: string,
        status: RecordInputStatus,
    }

    export enum SourceCase {
        SOURCE_NOT_SET = 0,
        RECORD_ID = 2,
        HASH = 3,
    }

}

export class RecordOutput extends jspb.Message { 
    getHash(): string;
    setHash(value: string): RecordOutput;
    getStatus(): ResultStatus;
    setStatus(value: ResultStatus): RecordOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordOutput.AsObject;
    static toObject(includeInstance: boolean, msg: RecordOutput): RecordOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordOutput;
    static deserializeBinaryFromReader(message: RecordOutput, reader: jspb.BinaryReader): RecordOutput;
}

export namespace RecordOutput {
    export type AsObject = {
        hash: string,
        status: ResultStatus,
    }
}

export class Party extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): Party;
    getRole(): provenance_metadata_v1_specification_pb.PartyType;
    setRole(value: provenance_metadata_v1_specification_pb.PartyType): Party;
    getOptional(): boolean;
    setOptional(value: boolean): Party;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Party.AsObject;
    static toObject(includeInstance: boolean, msg: Party): Party.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Party, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Party;
    static deserializeBinaryFromReader(message: Party, reader: jspb.BinaryReader): Party;
}

export namespace Party {
    export type AsObject = {
        address: string,
        role: provenance_metadata_v1_specification_pb.PartyType,
        optional: boolean,
    }
}

export class AuditFields extends jspb.Message { 

    hasCreatedDate(): boolean;
    clearCreatedDate(): void;
    getCreatedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedDate(value?: google_protobuf_timestamp_pb.Timestamp): AuditFields;
    getCreatedBy(): string;
    setCreatedBy(value: string): AuditFields;

    hasUpdatedDate(): boolean;
    clearUpdatedDate(): void;
    getUpdatedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedDate(value?: google_protobuf_timestamp_pb.Timestamp): AuditFields;
    getUpdatedBy(): string;
    setUpdatedBy(value: string): AuditFields;
    getVersion(): number;
    setVersion(value: number): AuditFields;
    getMessage(): string;
    setMessage(value: string): AuditFields;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuditFields.AsObject;
    static toObject(includeInstance: boolean, msg: AuditFields): AuditFields.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuditFields, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuditFields;
    static deserializeBinaryFromReader(message: AuditFields, reader: jspb.BinaryReader): AuditFields;
}

export namespace AuditFields {
    export type AsObject = {
        createdDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        updatedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedBy: string,
        version: number,
        message: string,
    }
}

export class NetAssetValue extends jspb.Message { 

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setPrice(value?: cosmos_base_v1beta1_coin_pb.Coin): NetAssetValue;
    getUpdatedBlockHeight(): number;
    setUpdatedBlockHeight(value: number): NetAssetValue;
    getVolume(): number;
    setVolume(value: number): NetAssetValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetAssetValue.AsObject;
    static toObject(includeInstance: boolean, msg: NetAssetValue): NetAssetValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetAssetValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetAssetValue;
    static deserializeBinaryFromReader(message: NetAssetValue, reader: jspb.BinaryReader): NetAssetValue;
}

export namespace NetAssetValue {
    export type AsObject = {
        price?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        updatedBlockHeight: number,
        volume: number,
    }
}

export enum RecordInputStatus {
    RECORD_INPUT_STATUS_UNSPECIFIED = 0,
    RECORD_INPUT_STATUS_PROPOSED = 1,
    RECORD_INPUT_STATUS_RECORD = 2,
}

export enum ResultStatus {
    RESULT_STATUS_UNSPECIFIED = 0,
    RESULT_STATUS_PASS = 1,
    RESULT_STATUS_SKIP = 2,
    RESULT_STATUS_FAIL = 3,
}
