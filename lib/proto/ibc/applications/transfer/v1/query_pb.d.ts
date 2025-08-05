// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../../cosmos/base/v1beta1/coin_pb";
import * as ibc_applications_transfer_v1_transfer_pb from "../../../../ibc/applications/transfer/v1/transfer_pb";

export class QueryParamsRequest extends jspb.Message { 

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
    }
}

export class QueryParamsResponse extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): ibc_applications_transfer_v1_transfer_pb.Params | undefined;
    setParams(value?: ibc_applications_transfer_v1_transfer_pb.Params): QueryParamsResponse;

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
        params?: ibc_applications_transfer_v1_transfer_pb.Params.AsObject,
    }
}

export class QueryDenomHashRequest extends jspb.Message { 
    getTrace(): string;
    setTrace(value: string): QueryDenomHashRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomHashRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomHashRequest): QueryDenomHashRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDenomHashRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomHashRequest;
    static deserializeBinaryFromReader(message: QueryDenomHashRequest, reader: jspb.BinaryReader): QueryDenomHashRequest;
}

export namespace QueryDenomHashRequest {
    export type AsObject = {
        trace: string,
    }
}

export class QueryDenomHashResponse extends jspb.Message { 
    getHash(): string;
    setHash(value: string): QueryDenomHashResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomHashResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomHashResponse): QueryDenomHashResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDenomHashResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomHashResponse;
    static deserializeBinaryFromReader(message: QueryDenomHashResponse, reader: jspb.BinaryReader): QueryDenomHashResponse;
}

export namespace QueryDenomHashResponse {
    export type AsObject = {
        hash: string,
    }
}

export class QueryEscrowAddressRequest extends jspb.Message { 
    getPortId(): string;
    setPortId(value: string): QueryEscrowAddressRequest;
    getChannelId(): string;
    setChannelId(value: string): QueryEscrowAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryEscrowAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryEscrowAddressRequest): QueryEscrowAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryEscrowAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryEscrowAddressRequest;
    static deserializeBinaryFromReader(message: QueryEscrowAddressRequest, reader: jspb.BinaryReader): QueryEscrowAddressRequest;
}

export namespace QueryEscrowAddressRequest {
    export type AsObject = {
        portId: string,
        channelId: string,
    }
}

export class QueryEscrowAddressResponse extends jspb.Message { 
    getEscrowAddress(): string;
    setEscrowAddress(value: string): QueryEscrowAddressResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryEscrowAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryEscrowAddressResponse): QueryEscrowAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryEscrowAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryEscrowAddressResponse;
    static deserializeBinaryFromReader(message: QueryEscrowAddressResponse, reader: jspb.BinaryReader): QueryEscrowAddressResponse;
}

export namespace QueryEscrowAddressResponse {
    export type AsObject = {
        escrowAddress: string,
    }
}

export class QueryTotalEscrowForDenomRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): QueryTotalEscrowForDenomRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTotalEscrowForDenomRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTotalEscrowForDenomRequest): QueryTotalEscrowForDenomRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryTotalEscrowForDenomRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTotalEscrowForDenomRequest;
    static deserializeBinaryFromReader(message: QueryTotalEscrowForDenomRequest, reader: jspb.BinaryReader): QueryTotalEscrowForDenomRequest;
}

export namespace QueryTotalEscrowForDenomRequest {
    export type AsObject = {
        denom: string,
    }
}

export class QueryTotalEscrowForDenomResponse extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): QueryTotalEscrowForDenomResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryTotalEscrowForDenomResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryTotalEscrowForDenomResponse): QueryTotalEscrowForDenomResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryTotalEscrowForDenomResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryTotalEscrowForDenomResponse;
    static deserializeBinaryFromReader(message: QueryTotalEscrowForDenomResponse, reader: jspb.BinaryReader): QueryTotalEscrowForDenomResponse;
}

export namespace QueryTotalEscrowForDenomResponse {
    export type AsObject = {
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    }
}
