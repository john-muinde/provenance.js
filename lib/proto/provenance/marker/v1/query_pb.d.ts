// package: provenance.marker.v1
// file: provenance/marker/v1/query.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_base_query_v1beta1_pagination_pb from "../../../cosmos/base/query/v1beta1/pagination_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_bank_v1beta1_bank_pb from "../../../cosmos/bank/v1beta1/bank_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as provenance_marker_v1_marker_pb from "../../../provenance/marker/v1/marker_pb";
import * as provenance_marker_v1_accessgrant_pb from "../../../provenance/marker/v1/accessgrant_pb";

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
    getParams(): provenance_marker_v1_marker_pb.Params | undefined;
    setParams(value?: provenance_marker_v1_marker_pb.Params): QueryParamsResponse;

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
        params?: provenance_marker_v1_marker_pb.Params.AsObject,
    }
}

export class QueryAllMarkersRequest extends jspb.Message { 
    getStatus(): provenance_marker_v1_marker_pb.MarkerStatus;
    setStatus(value: provenance_marker_v1_marker_pb.MarkerStatus): QueryAllMarkersRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryAllMarkersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAllMarkersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAllMarkersRequest): QueryAllMarkersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAllMarkersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAllMarkersRequest;
    static deserializeBinaryFromReader(message: QueryAllMarkersRequest, reader: jspb.BinaryReader): QueryAllMarkersRequest;
}

export namespace QueryAllMarkersRequest {
    export type AsObject = {
        status: provenance_marker_v1_marker_pb.MarkerStatus,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryAllMarkersResponse extends jspb.Message { 
    clearMarkersList(): void;
    getMarkersList(): Array<google_protobuf_any_pb.Any>;
    setMarkersList(value: Array<google_protobuf_any_pb.Any>): QueryAllMarkersResponse;
    addMarkers(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryAllMarkersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAllMarkersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAllMarkersResponse): QueryAllMarkersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAllMarkersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAllMarkersResponse;
    static deserializeBinaryFromReader(message: QueryAllMarkersResponse, reader: jspb.BinaryReader): QueryAllMarkersResponse;
}

export namespace QueryAllMarkersResponse {
    export type AsObject = {
        markersList: Array<google_protobuf_any_pb.Any.AsObject>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class QueryMarkerRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): QueryMarkerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryMarkerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryMarkerRequest): QueryMarkerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryMarkerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryMarkerRequest;
    static deserializeBinaryFromReader(message: QueryMarkerRequest, reader: jspb.BinaryReader): QueryMarkerRequest;
}

export namespace QueryMarkerRequest {
    export type AsObject = {
        id: string,
    }
}

export class QueryMarkerResponse extends jspb.Message { 

    hasMarker(): boolean;
    clearMarker(): void;
    getMarker(): google_protobuf_any_pb.Any | undefined;
    setMarker(value?: google_protobuf_any_pb.Any): QueryMarkerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryMarkerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryMarkerResponse): QueryMarkerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryMarkerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryMarkerResponse;
    static deserializeBinaryFromReader(message: QueryMarkerResponse, reader: jspb.BinaryReader): QueryMarkerResponse;
}

export namespace QueryMarkerResponse {
    export type AsObject = {
        marker?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class QueryHoldingRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): QueryHoldingRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageRequest | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageRequest): QueryHoldingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryHoldingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryHoldingRequest): QueryHoldingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryHoldingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryHoldingRequest;
    static deserializeBinaryFromReader(message: QueryHoldingRequest, reader: jspb.BinaryReader): QueryHoldingRequest;
}

export namespace QueryHoldingRequest {
    export type AsObject = {
        id: string,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageRequest.AsObject,
    }
}

export class QueryHoldingResponse extends jspb.Message { 
    clearBalancesList(): void;
    getBalancesList(): Array<Balance>;
    setBalancesList(value: Array<Balance>): QueryHoldingResponse;
    addBalances(value?: Balance, index?: number): Balance;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): cosmos_base_query_v1beta1_pagination_pb.PageResponse | undefined;
    setPagination(value?: cosmos_base_query_v1beta1_pagination_pb.PageResponse): QueryHoldingResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryHoldingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryHoldingResponse): QueryHoldingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryHoldingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryHoldingResponse;
    static deserializeBinaryFromReader(message: QueryHoldingResponse, reader: jspb.BinaryReader): QueryHoldingResponse;
}

export namespace QueryHoldingResponse {
    export type AsObject = {
        balancesList: Array<Balance.AsObject>,
        pagination?: cosmos_base_query_v1beta1_pagination_pb.PageResponse.AsObject,
    }
}

export class QuerySupplyRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): QuerySupplyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySupplyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySupplyRequest): QuerySupplyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuerySupplyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySupplyRequest;
    static deserializeBinaryFromReader(message: QuerySupplyRequest, reader: jspb.BinaryReader): QuerySupplyRequest;
}

export namespace QuerySupplyRequest {
    export type AsObject = {
        id: string,
    }
}

export class QuerySupplyResponse extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): QuerySupplyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuerySupplyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuerySupplyResponse): QuerySupplyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuerySupplyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuerySupplyResponse;
    static deserializeBinaryFromReader(message: QuerySupplyResponse, reader: jspb.BinaryReader): QuerySupplyResponse;
}

export namespace QuerySupplyResponse {
    export type AsObject = {
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    }
}

export class QueryEscrowRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): QueryEscrowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryEscrowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryEscrowRequest): QueryEscrowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryEscrowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryEscrowRequest;
    static deserializeBinaryFromReader(message: QueryEscrowRequest, reader: jspb.BinaryReader): QueryEscrowRequest;
}

export namespace QueryEscrowRequest {
    export type AsObject = {
        id: string,
    }
}

export class QueryEscrowResponse extends jspb.Message { 
    clearEscrowList(): void;
    getEscrowList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
    setEscrowList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): QueryEscrowResponse;
    addEscrow(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryEscrowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryEscrowResponse): QueryEscrowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryEscrowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryEscrowResponse;
    static deserializeBinaryFromReader(message: QueryEscrowResponse, reader: jspb.BinaryReader): QueryEscrowResponse;
}

export namespace QueryEscrowResponse {
    export type AsObject = {
        escrowList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    }
}

export class QueryAccessRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): QueryAccessRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAccessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAccessRequest): QueryAccessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAccessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAccessRequest;
    static deserializeBinaryFromReader(message: QueryAccessRequest, reader: jspb.BinaryReader): QueryAccessRequest;
}

export namespace QueryAccessRequest {
    export type AsObject = {
        id: string,
    }
}

export class QueryAccessResponse extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<provenance_marker_v1_accessgrant_pb.AccessGrant>;
    setAccountsList(value: Array<provenance_marker_v1_accessgrant_pb.AccessGrant>): QueryAccessResponse;
    addAccounts(value?: provenance_marker_v1_accessgrant_pb.AccessGrant, index?: number): provenance_marker_v1_accessgrant_pb.AccessGrant;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAccessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAccessResponse): QueryAccessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAccessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAccessResponse;
    static deserializeBinaryFromReader(message: QueryAccessResponse, reader: jspb.BinaryReader): QueryAccessResponse;
}

export namespace QueryAccessResponse {
    export type AsObject = {
        accountsList: Array<provenance_marker_v1_accessgrant_pb.AccessGrant.AsObject>,
    }
}

export class QueryDenomMetadataRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): QueryDenomMetadataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomMetadataRequest): QueryDenomMetadataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDenomMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomMetadataRequest;
    static deserializeBinaryFromReader(message: QueryDenomMetadataRequest, reader: jspb.BinaryReader): QueryDenomMetadataRequest;
}

export namespace QueryDenomMetadataRequest {
    export type AsObject = {
        denom: string,
    }
}

export class QueryDenomMetadataResponse extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): cosmos_bank_v1beta1_bank_pb.Metadata | undefined;
    setMetadata(value?: cosmos_bank_v1beta1_bank_pb.Metadata): QueryDenomMetadataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryDenomMetadataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryDenomMetadataResponse): QueryDenomMetadataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryDenomMetadataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryDenomMetadataResponse;
    static deserializeBinaryFromReader(message: QueryDenomMetadataResponse, reader: jspb.BinaryReader): QueryDenomMetadataResponse;
}

export namespace QueryDenomMetadataResponse {
    export type AsObject = {
        metadata?: cosmos_bank_v1beta1_bank_pb.Metadata.AsObject,
    }
}

export class QueryAccountDataRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): QueryAccountDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAccountDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAccountDataRequest): QueryAccountDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAccountDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAccountDataRequest;
    static deserializeBinaryFromReader(message: QueryAccountDataRequest, reader: jspb.BinaryReader): QueryAccountDataRequest;
}

export namespace QueryAccountDataRequest {
    export type AsObject = {
        denom: string,
    }
}

export class QueryAccountDataResponse extends jspb.Message { 
    getValue(): string;
    setValue(value: string): QueryAccountDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryAccountDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryAccountDataResponse): QueryAccountDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryAccountDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryAccountDataResponse;
    static deserializeBinaryFromReader(message: QueryAccountDataResponse, reader: jspb.BinaryReader): QueryAccountDataResponse;
}

export namespace QueryAccountDataResponse {
    export type AsObject = {
        value: string,
    }
}

export class Balance extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): Balance;
    clearCoinsList(): void;
    getCoinsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
    setCoinsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): Balance;
    addCoins(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Balance.AsObject;
    static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Balance;
    static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
}

export namespace Balance {
    export type AsObject = {
        address: string,
        coinsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    }
}

export class QueryNetAssetValuesRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): QueryNetAssetValuesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryNetAssetValuesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryNetAssetValuesRequest): QueryNetAssetValuesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryNetAssetValuesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryNetAssetValuesRequest;
    static deserializeBinaryFromReader(message: QueryNetAssetValuesRequest, reader: jspb.BinaryReader): QueryNetAssetValuesRequest;
}

export namespace QueryNetAssetValuesRequest {
    export type AsObject = {
        id: string,
    }
}

export class QueryNetAssetValuesResponse extends jspb.Message { 
    clearNetAssetValuesList(): void;
    getNetAssetValuesList(): Array<provenance_marker_v1_marker_pb.NetAssetValue>;
    setNetAssetValuesList(value: Array<provenance_marker_v1_marker_pb.NetAssetValue>): QueryNetAssetValuesResponse;
    addNetAssetValues(value?: provenance_marker_v1_marker_pb.NetAssetValue, index?: number): provenance_marker_v1_marker_pb.NetAssetValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryNetAssetValuesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryNetAssetValuesResponse): QueryNetAssetValuesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryNetAssetValuesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryNetAssetValuesResponse;
    static deserializeBinaryFromReader(message: QueryNetAssetValuesResponse, reader: jspb.BinaryReader): QueryNetAssetValuesResponse;
}

export namespace QueryNetAssetValuesResponse {
    export type AsObject = {
        netAssetValuesList: Array<provenance_marker_v1_marker_pb.NetAssetValue.AsObject>,
    }
}
