// package: provenance.attribute.v1
// file: provenance/attribute/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as provenance_attribute_v1_attribute_pb from "../../../provenance/attribute/v1/attribute_pb";

export class MsgAddAttributeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): MsgAddAttributeRequest;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): MsgAddAttributeRequest;
    getAttributeType(): provenance_attribute_v1_attribute_pb.AttributeType;
    setAttributeType(value: provenance_attribute_v1_attribute_pb.AttributeType): MsgAddAttributeRequest;
    getAccount(): string;
    setAccount(value: string): MsgAddAttributeRequest;
    getOwner(): string;
    setOwner(value: string): MsgAddAttributeRequest;

    hasExpirationDate(): boolean;
    clearExpirationDate(): void;
    getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): MsgAddAttributeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddAttributeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddAttributeRequest): MsgAddAttributeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddAttributeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddAttributeRequest;
    static deserializeBinaryFromReader(message: MsgAddAttributeRequest, reader: jspb.BinaryReader): MsgAddAttributeRequest;
}

export namespace MsgAddAttributeRequest {
    export type AsObject = {
        name: string,
        value: Uint8Array | string,
        attributeType: provenance_attribute_v1_attribute_pb.AttributeType,
        account: string,
        owner: string,
        expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class MsgAddAttributeResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddAttributeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddAttributeResponse): MsgAddAttributeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddAttributeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddAttributeResponse;
    static deserializeBinaryFromReader(message: MsgAddAttributeResponse, reader: jspb.BinaryReader): MsgAddAttributeResponse;
}

export namespace MsgAddAttributeResponse {
    export type AsObject = {
    }
}

export class MsgUpdateAttributeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): MsgUpdateAttributeRequest;
    getOriginalValue(): Uint8Array | string;
    getOriginalValue_asU8(): Uint8Array;
    getOriginalValue_asB64(): string;
    setOriginalValue(value: Uint8Array | string): MsgUpdateAttributeRequest;
    getUpdateValue(): Uint8Array | string;
    getUpdateValue_asU8(): Uint8Array;
    getUpdateValue_asB64(): string;
    setUpdateValue(value: Uint8Array | string): MsgUpdateAttributeRequest;
    getOriginalAttributeType(): provenance_attribute_v1_attribute_pb.AttributeType;
    setOriginalAttributeType(value: provenance_attribute_v1_attribute_pb.AttributeType): MsgUpdateAttributeRequest;
    getUpdateAttributeType(): provenance_attribute_v1_attribute_pb.AttributeType;
    setUpdateAttributeType(value: provenance_attribute_v1_attribute_pb.AttributeType): MsgUpdateAttributeRequest;
    getAccount(): string;
    setAccount(value: string): MsgUpdateAttributeRequest;
    getOwner(): string;
    setOwner(value: string): MsgUpdateAttributeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateAttributeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateAttributeRequest): MsgUpdateAttributeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateAttributeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateAttributeRequest;
    static deserializeBinaryFromReader(message: MsgUpdateAttributeRequest, reader: jspb.BinaryReader): MsgUpdateAttributeRequest;
}

export namespace MsgUpdateAttributeRequest {
    export type AsObject = {
        name: string,
        originalValue: Uint8Array | string,
        updateValue: Uint8Array | string,
        originalAttributeType: provenance_attribute_v1_attribute_pb.AttributeType,
        updateAttributeType: provenance_attribute_v1_attribute_pb.AttributeType,
        account: string,
        owner: string,
    }
}

export class MsgUpdateAttributeResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateAttributeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateAttributeResponse): MsgUpdateAttributeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateAttributeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateAttributeResponse;
    static deserializeBinaryFromReader(message: MsgUpdateAttributeResponse, reader: jspb.BinaryReader): MsgUpdateAttributeResponse;
}

export namespace MsgUpdateAttributeResponse {
    export type AsObject = {
    }
}

export class MsgUpdateAttributeExpirationRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): MsgUpdateAttributeExpirationRequest;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): MsgUpdateAttributeExpirationRequest;

    hasExpirationDate(): boolean;
    clearExpirationDate(): void;
    getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): MsgUpdateAttributeExpirationRequest;
    getAccount(): string;
    setAccount(value: string): MsgUpdateAttributeExpirationRequest;
    getOwner(): string;
    setOwner(value: string): MsgUpdateAttributeExpirationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateAttributeExpirationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateAttributeExpirationRequest): MsgUpdateAttributeExpirationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateAttributeExpirationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateAttributeExpirationRequest;
    static deserializeBinaryFromReader(message: MsgUpdateAttributeExpirationRequest, reader: jspb.BinaryReader): MsgUpdateAttributeExpirationRequest;
}

export namespace MsgUpdateAttributeExpirationRequest {
    export type AsObject = {
        name: string,
        value: Uint8Array | string,
        expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        account: string,
        owner: string,
    }
}

export class MsgUpdateAttributeExpirationResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateAttributeExpirationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateAttributeExpirationResponse): MsgUpdateAttributeExpirationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateAttributeExpirationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateAttributeExpirationResponse;
    static deserializeBinaryFromReader(message: MsgUpdateAttributeExpirationResponse, reader: jspb.BinaryReader): MsgUpdateAttributeExpirationResponse;
}

export namespace MsgUpdateAttributeExpirationResponse {
    export type AsObject = {
    }
}

export class MsgDeleteAttributeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): MsgDeleteAttributeRequest;
    getAccount(): string;
    setAccount(value: string): MsgDeleteAttributeRequest;
    getOwner(): string;
    setOwner(value: string): MsgDeleteAttributeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteAttributeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteAttributeRequest): MsgDeleteAttributeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteAttributeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteAttributeRequest;
    static deserializeBinaryFromReader(message: MsgDeleteAttributeRequest, reader: jspb.BinaryReader): MsgDeleteAttributeRequest;
}

export namespace MsgDeleteAttributeRequest {
    export type AsObject = {
        name: string,
        account: string,
        owner: string,
    }
}

export class MsgDeleteAttributeResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteAttributeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteAttributeResponse): MsgDeleteAttributeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteAttributeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteAttributeResponse;
    static deserializeBinaryFromReader(message: MsgDeleteAttributeResponse, reader: jspb.BinaryReader): MsgDeleteAttributeResponse;
}

export namespace MsgDeleteAttributeResponse {
    export type AsObject = {
    }
}

export class MsgDeleteDistinctAttributeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): MsgDeleteDistinctAttributeRequest;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): MsgDeleteDistinctAttributeRequest;
    getAccount(): string;
    setAccount(value: string): MsgDeleteDistinctAttributeRequest;
    getOwner(): string;
    setOwner(value: string): MsgDeleteDistinctAttributeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteDistinctAttributeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteDistinctAttributeRequest): MsgDeleteDistinctAttributeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteDistinctAttributeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteDistinctAttributeRequest;
    static deserializeBinaryFromReader(message: MsgDeleteDistinctAttributeRequest, reader: jspb.BinaryReader): MsgDeleteDistinctAttributeRequest;
}

export namespace MsgDeleteDistinctAttributeRequest {
    export type AsObject = {
        name: string,
        value: Uint8Array | string,
        account: string,
        owner: string,
    }
}

export class MsgDeleteDistinctAttributeResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteDistinctAttributeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteDistinctAttributeResponse): MsgDeleteDistinctAttributeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteDistinctAttributeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteDistinctAttributeResponse;
    static deserializeBinaryFromReader(message: MsgDeleteDistinctAttributeResponse, reader: jspb.BinaryReader): MsgDeleteDistinctAttributeResponse;
}

export namespace MsgDeleteDistinctAttributeResponse {
    export type AsObject = {
    }
}

export class MsgSetAccountDataRequest extends jspb.Message { 
    getValue(): string;
    setValue(value: string): MsgSetAccountDataRequest;
    getAccount(): string;
    setAccount(value: string): MsgSetAccountDataRequest;

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
        value: string,
        account: string,
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

export class MsgUpdateParamsRequest extends jspb.Message { 
    getAuthority(): string;
    setAuthority(value: string): MsgUpdateParamsRequest;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): provenance_attribute_v1_attribute_pb.Params | undefined;
    setParams(value?: provenance_attribute_v1_attribute_pb.Params): MsgUpdateParamsRequest;

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
        params?: provenance_attribute_v1_attribute_pb.Params.AsObject,
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
