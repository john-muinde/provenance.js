// package: provenance.attribute.v1
// file: provenance/attribute/v1/attribute.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Params extends jspb.Message { 
    getMaxValueLength(): number;
    setMaxValueLength(value: number): Params;

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
        maxValueLength: number,
    }
}

export class Attribute extends jspb.Message { 
    getName(): string;
    setName(value: string): Attribute;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Attribute;
    getAttributeType(): AttributeType;
    setAttributeType(value: AttributeType): Attribute;
    getAddress(): string;
    setAddress(value: string): Attribute;

    hasExpirationDate(): boolean;
    clearExpirationDate(): void;
    getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): Attribute;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attribute.AsObject;
    static toObject(includeInstance: boolean, msg: Attribute): Attribute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attribute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attribute;
    static deserializeBinaryFromReader(message: Attribute, reader: jspb.BinaryReader): Attribute;
}

export namespace Attribute {
    export type AsObject = {
        name: string,
        value: Uint8Array | string,
        attributeType: AttributeType,
        address: string,
        expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class EventAttributeAdd extends jspb.Message { 
    getName(): string;
    setName(value: string): EventAttributeAdd;
    getValue(): string;
    setValue(value: string): EventAttributeAdd;
    getType(): string;
    setType(value: string): EventAttributeAdd;
    getAccount(): string;
    setAccount(value: string): EventAttributeAdd;
    getOwner(): string;
    setOwner(value: string): EventAttributeAdd;
    getExpiration(): string;
    setExpiration(value: string): EventAttributeAdd;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventAttributeAdd.AsObject;
    static toObject(includeInstance: boolean, msg: EventAttributeAdd): EventAttributeAdd.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventAttributeAdd, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventAttributeAdd;
    static deserializeBinaryFromReader(message: EventAttributeAdd, reader: jspb.BinaryReader): EventAttributeAdd;
}

export namespace EventAttributeAdd {
    export type AsObject = {
        name: string,
        value: string,
        type: string,
        account: string,
        owner: string,
        expiration: string,
    }
}

export class EventAttributeUpdate extends jspb.Message { 
    getName(): string;
    setName(value: string): EventAttributeUpdate;
    getOriginalValue(): string;
    setOriginalValue(value: string): EventAttributeUpdate;
    getOriginalType(): string;
    setOriginalType(value: string): EventAttributeUpdate;
    getUpdateValue(): string;
    setUpdateValue(value: string): EventAttributeUpdate;
    getUpdateType(): string;
    setUpdateType(value: string): EventAttributeUpdate;
    getAccount(): string;
    setAccount(value: string): EventAttributeUpdate;
    getOwner(): string;
    setOwner(value: string): EventAttributeUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventAttributeUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: EventAttributeUpdate): EventAttributeUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventAttributeUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventAttributeUpdate;
    static deserializeBinaryFromReader(message: EventAttributeUpdate, reader: jspb.BinaryReader): EventAttributeUpdate;
}

export namespace EventAttributeUpdate {
    export type AsObject = {
        name: string,
        originalValue: string,
        originalType: string,
        updateValue: string,
        updateType: string,
        account: string,
        owner: string,
    }
}

export class EventAttributeExpirationUpdate extends jspb.Message { 
    getName(): string;
    setName(value: string): EventAttributeExpirationUpdate;
    getValue(): string;
    setValue(value: string): EventAttributeExpirationUpdate;
    getAccount(): string;
    setAccount(value: string): EventAttributeExpirationUpdate;
    getOwner(): string;
    setOwner(value: string): EventAttributeExpirationUpdate;
    getOriginalExpiration(): string;
    setOriginalExpiration(value: string): EventAttributeExpirationUpdate;
    getUpdatedExpiration(): string;
    setUpdatedExpiration(value: string): EventAttributeExpirationUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventAttributeExpirationUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: EventAttributeExpirationUpdate): EventAttributeExpirationUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventAttributeExpirationUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventAttributeExpirationUpdate;
    static deserializeBinaryFromReader(message: EventAttributeExpirationUpdate, reader: jspb.BinaryReader): EventAttributeExpirationUpdate;
}

export namespace EventAttributeExpirationUpdate {
    export type AsObject = {
        name: string,
        value: string,
        account: string,
        owner: string,
        originalExpiration: string,
        updatedExpiration: string,
    }
}

export class EventAttributeDelete extends jspb.Message { 
    getName(): string;
    setName(value: string): EventAttributeDelete;
    getAccount(): string;
    setAccount(value: string): EventAttributeDelete;
    getOwner(): string;
    setOwner(value: string): EventAttributeDelete;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventAttributeDelete.AsObject;
    static toObject(includeInstance: boolean, msg: EventAttributeDelete): EventAttributeDelete.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventAttributeDelete, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventAttributeDelete;
    static deserializeBinaryFromReader(message: EventAttributeDelete, reader: jspb.BinaryReader): EventAttributeDelete;
}

export namespace EventAttributeDelete {
    export type AsObject = {
        name: string,
        account: string,
        owner: string,
    }
}

export class EventAttributeDistinctDelete extends jspb.Message { 
    getName(): string;
    setName(value: string): EventAttributeDistinctDelete;
    getValue(): string;
    setValue(value: string): EventAttributeDistinctDelete;
    getAttributeType(): string;
    setAttributeType(value: string): EventAttributeDistinctDelete;
    getAccount(): string;
    setAccount(value: string): EventAttributeDistinctDelete;
    getOwner(): string;
    setOwner(value: string): EventAttributeDistinctDelete;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventAttributeDistinctDelete.AsObject;
    static toObject(includeInstance: boolean, msg: EventAttributeDistinctDelete): EventAttributeDistinctDelete.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventAttributeDistinctDelete, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventAttributeDistinctDelete;
    static deserializeBinaryFromReader(message: EventAttributeDistinctDelete, reader: jspb.BinaryReader): EventAttributeDistinctDelete;
}

export namespace EventAttributeDistinctDelete {
    export type AsObject = {
        name: string,
        value: string,
        attributeType: string,
        account: string,
        owner: string,
    }
}

export class EventAttributeExpired extends jspb.Message { 
    getName(): string;
    setName(value: string): EventAttributeExpired;
    getValueHash(): string;
    setValueHash(value: string): EventAttributeExpired;
    getAttributeType(): string;
    setAttributeType(value: string): EventAttributeExpired;
    getAccount(): string;
    setAccount(value: string): EventAttributeExpired;
    getExpiration(): string;
    setExpiration(value: string): EventAttributeExpired;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventAttributeExpired.AsObject;
    static toObject(includeInstance: boolean, msg: EventAttributeExpired): EventAttributeExpired.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventAttributeExpired, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventAttributeExpired;
    static deserializeBinaryFromReader(message: EventAttributeExpired, reader: jspb.BinaryReader): EventAttributeExpired;
}

export namespace EventAttributeExpired {
    export type AsObject = {
        name: string,
        valueHash: string,
        attributeType: string,
        account: string,
        expiration: string,
    }
}

export class EventAccountDataUpdated extends jspb.Message { 
    getAccount(): string;
    setAccount(value: string): EventAccountDataUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventAccountDataUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: EventAccountDataUpdated): EventAccountDataUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventAccountDataUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventAccountDataUpdated;
    static deserializeBinaryFromReader(message: EventAccountDataUpdated, reader: jspb.BinaryReader): EventAccountDataUpdated;
}

export namespace EventAccountDataUpdated {
    export type AsObject = {
        account: string,
    }
}

export class EventAttributeParamsUpdated extends jspb.Message { 
    getMaxValueLength(): string;
    setMaxValueLength(value: string): EventAttributeParamsUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventAttributeParamsUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: EventAttributeParamsUpdated): EventAttributeParamsUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventAttributeParamsUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventAttributeParamsUpdated;
    static deserializeBinaryFromReader(message: EventAttributeParamsUpdated, reader: jspb.BinaryReader): EventAttributeParamsUpdated;
}

export namespace EventAttributeParamsUpdated {
    export type AsObject = {
        maxValueLength: string,
    }
}

export enum AttributeType {
    ATTRIBUTE_TYPE_UNSPECIFIED = 0,
    ATTRIBUTE_TYPE_UUID = 1,
    ATTRIBUTE_TYPE_JSON = 2,
    ATTRIBUTE_TYPE_STRING = 3,
    ATTRIBUTE_TYPE_URI = 4,
    ATTRIBUTE_TYPE_INT = 5,
    ATTRIBUTE_TYPE_FLOAT = 6,
    ATTRIBUTE_TYPE_PROTO = 7,
    ATTRIBUTE_TYPE_BYTES = 8,
}
