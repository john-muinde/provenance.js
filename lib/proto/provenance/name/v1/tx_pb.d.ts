// package: provenance.name.v1
// file: provenance/name/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as provenance_name_v1_name_pb from "../../../provenance/name/v1/name_pb";

export class MsgBindNameRequest extends jspb.Message { 

    hasParent(): boolean;
    clearParent(): void;
    getParent(): provenance_name_v1_name_pb.NameRecord | undefined;
    setParent(value?: provenance_name_v1_name_pb.NameRecord): MsgBindNameRequest;

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): provenance_name_v1_name_pb.NameRecord | undefined;
    setRecord(value?: provenance_name_v1_name_pb.NameRecord): MsgBindNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgBindNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgBindNameRequest): MsgBindNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgBindNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgBindNameRequest;
    static deserializeBinaryFromReader(message: MsgBindNameRequest, reader: jspb.BinaryReader): MsgBindNameRequest;
}

export namespace MsgBindNameRequest {
    export type AsObject = {
        parent?: provenance_name_v1_name_pb.NameRecord.AsObject,
        record?: provenance_name_v1_name_pb.NameRecord.AsObject,
    }
}

export class MsgBindNameResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgBindNameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgBindNameResponse): MsgBindNameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgBindNameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgBindNameResponse;
    static deserializeBinaryFromReader(message: MsgBindNameResponse, reader: jspb.BinaryReader): MsgBindNameResponse;
}

export namespace MsgBindNameResponse {
    export type AsObject = {
    }
}

export class MsgDeleteNameRequest extends jspb.Message { 

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): provenance_name_v1_name_pb.NameRecord | undefined;
    setRecord(value?: provenance_name_v1_name_pb.NameRecord): MsgDeleteNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteNameRequest): MsgDeleteNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteNameRequest;
    static deserializeBinaryFromReader(message: MsgDeleteNameRequest, reader: jspb.BinaryReader): MsgDeleteNameRequest;
}

export namespace MsgDeleteNameRequest {
    export type AsObject = {
        record?: provenance_name_v1_name_pb.NameRecord.AsObject,
    }
}

export class MsgDeleteNameResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteNameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteNameResponse): MsgDeleteNameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteNameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteNameResponse;
    static deserializeBinaryFromReader(message: MsgDeleteNameResponse, reader: jspb.BinaryReader): MsgDeleteNameResponse;
}

export namespace MsgDeleteNameResponse {
    export type AsObject = {
    }
}

export class MsgCreateRootNameRequest extends jspb.Message { 
    getAuthority(): string;
    setAuthority(value: string): MsgCreateRootNameRequest;

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): provenance_name_v1_name_pb.NameRecord | undefined;
    setRecord(value?: provenance_name_v1_name_pb.NameRecord): MsgCreateRootNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgCreateRootNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgCreateRootNameRequest): MsgCreateRootNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgCreateRootNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgCreateRootNameRequest;
    static deserializeBinaryFromReader(message: MsgCreateRootNameRequest, reader: jspb.BinaryReader): MsgCreateRootNameRequest;
}

export namespace MsgCreateRootNameRequest {
    export type AsObject = {
        authority: string,
        record?: provenance_name_v1_name_pb.NameRecord.AsObject,
    }
}

export class MsgCreateRootNameResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgCreateRootNameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgCreateRootNameResponse): MsgCreateRootNameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgCreateRootNameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgCreateRootNameResponse;
    static deserializeBinaryFromReader(message: MsgCreateRootNameResponse, reader: jspb.BinaryReader): MsgCreateRootNameResponse;
}

export namespace MsgCreateRootNameResponse {
    export type AsObject = {
    }
}

export class MsgModifyNameRequest extends jspb.Message { 
    getAuthority(): string;
    setAuthority(value: string): MsgModifyNameRequest;

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): provenance_name_v1_name_pb.NameRecord | undefined;
    setRecord(value?: provenance_name_v1_name_pb.NameRecord): MsgModifyNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgModifyNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgModifyNameRequest): MsgModifyNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgModifyNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgModifyNameRequest;
    static deserializeBinaryFromReader(message: MsgModifyNameRequest, reader: jspb.BinaryReader): MsgModifyNameRequest;
}

export namespace MsgModifyNameRequest {
    export type AsObject = {
        authority: string,
        record?: provenance_name_v1_name_pb.NameRecord.AsObject,
    }
}

export class MsgModifyNameResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgModifyNameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgModifyNameResponse): MsgModifyNameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgModifyNameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgModifyNameResponse;
    static deserializeBinaryFromReader(message: MsgModifyNameResponse, reader: jspb.BinaryReader): MsgModifyNameResponse;
}

export namespace MsgModifyNameResponse {
    export type AsObject = {
    }
}

export class MsgUpdateParamsRequest extends jspb.Message { 
    getAuthority(): string;
    setAuthority(value: string): MsgUpdateParamsRequest;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): provenance_name_v1_name_pb.Params | undefined;
    setParams(value?: provenance_name_v1_name_pb.Params): MsgUpdateParamsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateParamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateParamsRequest): MsgUpdateParamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateParamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateParamsRequest;
    static deserializeBinaryFromReader(message: MsgUpdateParamsRequest, reader: jspb.BinaryReader): MsgUpdateParamsRequest;
}

export namespace MsgUpdateParamsRequest {
    export type AsObject = {
        authority: string,
        params?: provenance_name_v1_name_pb.Params.AsObject,
    }
}

export class MsgUpdateParamsResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateParamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateParamsResponse): MsgUpdateParamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateParamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateParamsResponse;
    static deserializeBinaryFromReader(message: MsgUpdateParamsResponse, reader: jspb.BinaryReader): MsgUpdateParamsResponse;
}

export namespace MsgUpdateParamsResponse {
    export type AsObject = {
    }
}
