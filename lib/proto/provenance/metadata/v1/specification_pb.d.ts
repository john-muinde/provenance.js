// package: provenance.metadata.v1
// file: provenance/metadata/v1/specification.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class ScopeSpecification extends jspb.Message { 
    getSpecificationId(): Uint8Array | string;
    getSpecificationId_asU8(): Uint8Array;
    getSpecificationId_asB64(): string;
    setSpecificationId(value: Uint8Array | string): ScopeSpecification;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): Description | undefined;
    setDescription(value?: Description): ScopeSpecification;
    clearOwnerAddressesList(): void;
    getOwnerAddressesList(): Array<string>;
    setOwnerAddressesList(value: Array<string>): ScopeSpecification;
    addOwnerAddresses(value: string, index?: number): string;
    clearPartiesInvolvedList(): void;
    getPartiesInvolvedList(): Array<PartyType>;
    setPartiesInvolvedList(value: Array<PartyType>): ScopeSpecification;
    addPartiesInvolved(value: PartyType, index?: number): PartyType;
    clearContractSpecIdsList(): void;
    getContractSpecIdsList(): Array<Uint8Array | string>;
    getContractSpecIdsList_asU8(): Array<Uint8Array>;
    getContractSpecIdsList_asB64(): Array<string>;
    setContractSpecIdsList(value: Array<Uint8Array | string>): ScopeSpecification;
    addContractSpecIds(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScopeSpecification.AsObject;
    static toObject(includeInstance: boolean, msg: ScopeSpecification): ScopeSpecification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScopeSpecification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScopeSpecification;
    static deserializeBinaryFromReader(message: ScopeSpecification, reader: jspb.BinaryReader): ScopeSpecification;
}

export namespace ScopeSpecification {
    export type AsObject = {
        specificationId: Uint8Array | string,
        description?: Description.AsObject,
        ownerAddressesList: Array<string>,
        partiesInvolvedList: Array<PartyType>,
        contractSpecIdsList: Array<Uint8Array | string>,
    }
}

export class ContractSpecification extends jspb.Message { 
    getSpecificationId(): Uint8Array | string;
    getSpecificationId_asU8(): Uint8Array;
    getSpecificationId_asB64(): string;
    setSpecificationId(value: Uint8Array | string): ContractSpecification;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): Description | undefined;
    setDescription(value?: Description): ContractSpecification;
    clearOwnerAddressesList(): void;
    getOwnerAddressesList(): Array<string>;
    setOwnerAddressesList(value: Array<string>): ContractSpecification;
    addOwnerAddresses(value: string, index?: number): string;
    clearPartiesInvolvedList(): void;
    getPartiesInvolvedList(): Array<PartyType>;
    setPartiesInvolvedList(value: Array<PartyType>): ContractSpecification;
    addPartiesInvolved(value: PartyType, index?: number): PartyType;

    hasResourceId(): boolean;
    clearResourceId(): void;
    getResourceId(): Uint8Array | string;
    getResourceId_asU8(): Uint8Array;
    getResourceId_asB64(): string;
    setResourceId(value: Uint8Array | string): ContractSpecification;

    hasHash(): boolean;
    clearHash(): void;
    getHash(): string;
    setHash(value: string): ContractSpecification;
    getClassName(): string;
    setClassName(value: string): ContractSpecification;

    getSourceCase(): ContractSpecification.SourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractSpecification.AsObject;
    static toObject(includeInstance: boolean, msg: ContractSpecification): ContractSpecification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractSpecification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractSpecification;
    static deserializeBinaryFromReader(message: ContractSpecification, reader: jspb.BinaryReader): ContractSpecification;
}

export namespace ContractSpecification {
    export type AsObject = {
        specificationId: Uint8Array | string,
        description?: Description.AsObject,
        ownerAddressesList: Array<string>,
        partiesInvolvedList: Array<PartyType>,
        resourceId: Uint8Array | string,
        hash: string,
        className: string,
    }

    export enum SourceCase {
        SOURCE_NOT_SET = 0,
        RESOURCE_ID = 5,
        HASH = 6,
    }

}

export class RecordSpecification extends jspb.Message { 
    getSpecificationId(): Uint8Array | string;
    getSpecificationId_asU8(): Uint8Array;
    getSpecificationId_asB64(): string;
    setSpecificationId(value: Uint8Array | string): RecordSpecification;
    getName(): string;
    setName(value: string): RecordSpecification;
    clearInputsList(): void;
    getInputsList(): Array<InputSpecification>;
    setInputsList(value: Array<InputSpecification>): RecordSpecification;
    addInputs(value?: InputSpecification, index?: number): InputSpecification;
    getTypeName(): string;
    setTypeName(value: string): RecordSpecification;
    getResultType(): DefinitionType;
    setResultType(value: DefinitionType): RecordSpecification;
    clearResponsiblePartiesList(): void;
    getResponsiblePartiesList(): Array<PartyType>;
    setResponsiblePartiesList(value: Array<PartyType>): RecordSpecification;
    addResponsibleParties(value: PartyType, index?: number): PartyType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSpecification.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSpecification): RecordSpecification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSpecification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSpecification;
    static deserializeBinaryFromReader(message: RecordSpecification, reader: jspb.BinaryReader): RecordSpecification;
}

export namespace RecordSpecification {
    export type AsObject = {
        specificationId: Uint8Array | string,
        name: string,
        inputsList: Array<InputSpecification.AsObject>,
        typeName: string,
        resultType: DefinitionType,
        responsiblePartiesList: Array<PartyType>,
    }
}

export class InputSpecification extends jspb.Message { 
    getName(): string;
    setName(value: string): InputSpecification;
    getTypeName(): string;
    setTypeName(value: string): InputSpecification;

    hasRecordId(): boolean;
    clearRecordId(): void;
    getRecordId(): Uint8Array | string;
    getRecordId_asU8(): Uint8Array;
    getRecordId_asB64(): string;
    setRecordId(value: Uint8Array | string): InputSpecification;

    hasHash(): boolean;
    clearHash(): void;
    getHash(): string;
    setHash(value: string): InputSpecification;

    getSourceCase(): InputSpecification.SourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputSpecification.AsObject;
    static toObject(includeInstance: boolean, msg: InputSpecification): InputSpecification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputSpecification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputSpecification;
    static deserializeBinaryFromReader(message: InputSpecification, reader: jspb.BinaryReader): InputSpecification;
}

export namespace InputSpecification {
    export type AsObject = {
        name: string,
        typeName: string,
        recordId: Uint8Array | string,
        hash: string,
    }

    export enum SourceCase {
        SOURCE_NOT_SET = 0,
        RECORD_ID = 3,
        HASH = 4,
    }

}

export class Description extends jspb.Message { 
    getName(): string;
    setName(value: string): Description;
    getDescription(): string;
    setDescription(value: string): Description;
    getWebsiteUrl(): string;
    setWebsiteUrl(value: string): Description;
    getIconUrl(): string;
    setIconUrl(value: string): Description;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Description.AsObject;
    static toObject(includeInstance: boolean, msg: Description): Description.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Description, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Description;
    static deserializeBinaryFromReader(message: Description, reader: jspb.BinaryReader): Description;
}

export namespace Description {
    export type AsObject = {
        name: string,
        description: string,
        websiteUrl: string,
        iconUrl: string,
    }
}

export enum DefinitionType {
    DEFINITION_TYPE_UNSPECIFIED = 0,
    DEFINITION_TYPE_PROPOSED = 1,
    DEFINITION_TYPE_RECORD = 2,
    DEFINITION_TYPE_RECORD_LIST = 3,
}

export enum PartyType {
    PARTY_TYPE_UNSPECIFIED = 0,
    PARTY_TYPE_ORIGINATOR = 1,
    PARTY_TYPE_SERVICER = 2,
    PARTY_TYPE_INVESTOR = 3,
    PARTY_TYPE_CUSTODIAN = 4,
    PARTY_TYPE_OWNER = 5,
    PARTY_TYPE_AFFILIATE = 6,
    PARTY_TYPE_OMNIBUS = 7,
    PARTY_TYPE_PROVENANCE = 8,
    PARTY_TYPE_CONTROLLER = 10,
    PARTY_TYPE_VALIDATOR = 11,
}
