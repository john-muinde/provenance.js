// package: provenance.msgfees.v1
// file: provenance/msgfees/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_msgfees_v1_msgfees_pb from "../../../provenance/msgfees/v1/msgfees_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";

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
    getParams(): provenance_msgfees_v1_msgfees_pb.Params | undefined;
    setParams(value?: provenance_msgfees_v1_msgfees_pb.Params): QueryParamsResponse;

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
        params?: provenance_msgfees_v1_msgfees_pb.Params.AsObject,
    }
}

export class QueryAllMsgFeesRequest extends jspb.Message { 

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryAllMsgFeesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAllMsgFeesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAllMsgFeesRequest): QueryAllMsgFeesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAllMsgFeesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAllMsgFeesRequest;
    static deserializeBinaryFromReader(message: QueryAllMsgFeesRequest, reader: jspb.BinaryReader): QueryAllMsgFeesRequest;
}

export namespace QueryAllMsgFeesRequest {
    export type AsObject = {
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryAllMsgFeesResponse extends jspb.Message { 
    clearMsgFeesList(): void;
    getMsgFeesList(): Array<provenance_msgfees_v1_msgfees_pb.MsgFee>;
    setMsgFeesList(value: Array<provenance_msgfees_v1_msgfees_pb.MsgFee>): QueryAllMsgFeesResponse;
    addMsgFees(value?: provenance_msgfees_v1_msgfees_pb.MsgFee, index?: number): provenance_msgfees_v1_msgfees_pb.MsgFee;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryAllMsgFeesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAllMsgFeesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAllMsgFeesResponse): QueryAllMsgFeesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAllMsgFeesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAllMsgFeesResponse;
    static deserializeBinaryFromReader(message: QueryAllMsgFeesResponse, reader: jspb.BinaryReader): QueryAllMsgFeesResponse;
}

export namespace QueryAllMsgFeesResponse {
    export type AsObject = {
        msgFeesList: Array<provenance_msgfees_v1_msgfees_pb.MsgFee.AsObject>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class CalculateTxFeesRequest extends jspb.Message { 
    getTxBytes(): Uint8Array | string;
    getTxBytes_asU8(): Uint8Array;
    getTxBytes_asB64(): string;
    setTxBytes(value: Uint8Array | string): CalculateTxFeesRequest;
    getDefaultBaseDenom(): string;
    setDefaultBaseDenom(value: string): CalculateTxFeesRequest;
    getGasAdjustment(): number;
    setGasAdjustment(value: number): CalculateTxFeesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateTxFeesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateTxFeesRequest): CalculateTxFeesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateTxFeesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateTxFeesRequest;
    static deserializeBinaryFromReader(message: CalculateTxFeesRequest, reader: jspb.BinaryReader): CalculateTxFeesRequest;
}

export namespace CalculateTxFeesRequest {
    export type AsObject = {
        txBytes: Uint8Array | string,
        defaultBaseDenom: string,
        gasAdjustment: number,
    }
}

export class CalculateTxFeesResponse extends jspb.Message { 
    clearAdditionalFeesList(): void;
    getAdditionalFeesList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
    setAdditionalFeesList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): CalculateTxFeesResponse;
    addAdditionalFees(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;
    clearTotalFeesList(): void;
    getTotalFeesList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
    setTotalFeesList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): CalculateTxFeesResponse;
    addTotalFees(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;
    getEstimatedGas(): number;
    setEstimatedGas(value: number): CalculateTxFeesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateTxFeesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateTxFeesResponse): CalculateTxFeesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateTxFeesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateTxFeesResponse;
    static deserializeBinaryFromReader(message: CalculateTxFeesResponse, reader: jspb.BinaryReader): CalculateTxFeesResponse;
}

export namespace CalculateTxFeesResponse {
    export type AsObject = {
        additionalFeesList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
        totalFeesList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
        estimatedGas: number,
    }
}
