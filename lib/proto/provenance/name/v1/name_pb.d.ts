// package: provenance.name.v1
// file: provenance/name/v1/name.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class Params extends jspb.Message { 
    getMaxSegmentLength(): number;
    setMaxSegmentLength(value: number): Params;
    getMinSegmentLength(): number;
    setMinSegmentLength(value: number): Params;
    getMaxNameLevels(): number;
    setMaxNameLevels(value: number): Params;
    getAllowUnrestrictedNames(): boolean;
    setAllowUnrestrictedNames(value: boolean): Params;

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
        maxSegmentLength: number,
        minSegmentLength: number,
        maxNameLevels: number,
        allowUnrestrictedNames: boolean,
    }
}

export class NameRecord extends jspb.Message { 
    getName(): string;
    setName(value: string): NameRecord;
    getAddress(): string;
    setAddress(value: string): NameRecord;
    getRestricted(): boolean;
    setRestricted(value: boolean): NameRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NameRecord.AsObject;
    static toObject(includeInstance: boolean, msg: NameRecord): NameRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NameRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NameRecord;
    static deserializeBinaryFromReader(message: NameRecord, reader: jspb.BinaryReader): NameRecord;
}

export namespace NameRecord {
    export type AsObject = {
        name: string,
        address: string,
        restricted: boolean,
    }
}

export class CreateRootNameProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): CreateRootNameProposal;
    getDescription(): string;
    setDescription(value: string): CreateRootNameProposal;
    getName(): string;
    setName(value: string): CreateRootNameProposal;
    getOwner(): string;
    setOwner(value: string): CreateRootNameProposal;
    getRestricted(): boolean;
    setRestricted(value: boolean): CreateRootNameProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRootNameProposal.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRootNameProposal): CreateRootNameProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRootNameProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRootNameProposal;
    static deserializeBinaryFromReader(message: CreateRootNameProposal, reader: jspb.BinaryReader): CreateRootNameProposal;
}

export namespace CreateRootNameProposal {
    export type AsObject = {
        title: string,
        description: string,
        name: string,
        owner: string,
        restricted: boolean,
    }
}

export class EventNameBound extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): EventNameBound;
    getName(): string;
    setName(value: string): EventNameBound;
    getRestricted(): boolean;
    setRestricted(value: boolean): EventNameBound;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventNameBound.AsObject;
    static toObject(includeInstance: boolean, msg: EventNameBound): EventNameBound.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventNameBound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventNameBound;
    static deserializeBinaryFromReader(message: EventNameBound, reader: jspb.BinaryReader): EventNameBound;
}

export namespace EventNameBound {
    export type AsObject = {
        address: string,
        name: string,
        restricted: boolean,
    }
}

export class EventNameUnbound extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): EventNameUnbound;
    getName(): string;
    setName(value: string): EventNameUnbound;
    getRestricted(): boolean;
    setRestricted(value: boolean): EventNameUnbound;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventNameUnbound.AsObject;
    static toObject(includeInstance: boolean, msg: EventNameUnbound): EventNameUnbound.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventNameUnbound, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventNameUnbound;
    static deserializeBinaryFromReader(message: EventNameUnbound, reader: jspb.BinaryReader): EventNameUnbound;
}

export namespace EventNameUnbound {
    export type AsObject = {
        address: string,
        name: string,
        restricted: boolean,
    }
}

export class EventNameUpdate extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): EventNameUpdate;
    getName(): string;
    setName(value: string): EventNameUpdate;
    getRestricted(): boolean;
    setRestricted(value: boolean): EventNameUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventNameUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: EventNameUpdate): EventNameUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventNameUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventNameUpdate;
    static deserializeBinaryFromReader(message: EventNameUpdate, reader: jspb.BinaryReader): EventNameUpdate;
}

export namespace EventNameUpdate {
    export type AsObject = {
        address: string,
        name: string,
        restricted: boolean,
    }
}

export class EventNameParamsUpdated extends jspb.Message { 
    getAllowUnrestrictedNames(): string;
    setAllowUnrestrictedNames(value: string): EventNameParamsUpdated;
    getMaxNameLevels(): string;
    setMaxNameLevels(value: string): EventNameParamsUpdated;
    getMinSegmentLength(): string;
    setMinSegmentLength(value: string): EventNameParamsUpdated;
    getMaxSegmentLength(): string;
    setMaxSegmentLength(value: string): EventNameParamsUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventNameParamsUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: EventNameParamsUpdated): EventNameParamsUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventNameParamsUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventNameParamsUpdated;
    static deserializeBinaryFromReader(message: EventNameParamsUpdated, reader: jspb.BinaryReader): EventNameParamsUpdated;
}

export namespace EventNameParamsUpdated {
    export type AsObject = {
        allowUnrestrictedNames: string,
        maxNameLevels: string,
        minSegmentLength: string,
        maxSegmentLength: string,
    }
}
