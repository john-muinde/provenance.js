// package: provenance.marker.v1
// file: provenance/marker/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_bank_v1beta1_bank_pb from "../../../cosmos/bank/v1beta1/bank_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as ibc_applications_transfer_v1_tx_pb from "../../../ibc/applications/transfer/v1/tx_pb";
import * as provenance_marker_v1_marker_pb from "../../../provenance/marker/v1/marker_pb";
import * as provenance_marker_v1_accessgrant_pb from "../../../provenance/marker/v1/accessgrant_pb";

export class MsgGrantAllowanceRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgGrantAllowanceRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgGrantAllowanceRequest;
    getGrantee(): string;
    setGrantee(value: string): MsgGrantAllowanceRequest;

    hasAllowance(): boolean;
    clearAllowance(): void;
    getAllowance(): google_protobuf_any_pb.Any | undefined;
    setAllowance(value?: google_protobuf_any_pb.Any): MsgGrantAllowanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgGrantAllowanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgGrantAllowanceRequest): MsgGrantAllowanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgGrantAllowanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgGrantAllowanceRequest;
    static deserializeBinaryFromReader(message: MsgGrantAllowanceRequest, reader: jspb.BinaryReader): MsgGrantAllowanceRequest;
}

export namespace MsgGrantAllowanceRequest {
    export type AsObject = {
        denom: string,
        administrator: string,
        grantee: string,
        allowance?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class MsgGrantAllowanceResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgGrantAllowanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgGrantAllowanceResponse): MsgGrantAllowanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgGrantAllowanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgGrantAllowanceResponse;
    static deserializeBinaryFromReader(message: MsgGrantAllowanceResponse, reader: jspb.BinaryReader): MsgGrantAllowanceResponse;
}

export namespace MsgGrantAllowanceResponse {
    export type AsObject = {
    }
}

export class MsgAddMarkerRequest extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgAddMarkerRequest;
    getManager(): string;
    setManager(value: string): MsgAddMarkerRequest;
    getFromAddress(): string;
    setFromAddress(value: string): MsgAddMarkerRequest;
    getStatus(): provenance_marker_v1_marker_pb.MarkerStatus;
    setStatus(value: provenance_marker_v1_marker_pb.MarkerStatus): MsgAddMarkerRequest;
    getMarkerType(): provenance_marker_v1_marker_pb.MarkerType;
    setMarkerType(value: provenance_marker_v1_marker_pb.MarkerType): MsgAddMarkerRequest;
    clearAccessListList(): void;
    getAccessListList(): Array<provenance_marker_v1_accessgrant_pb.AccessGrant>;
    setAccessListList(value: Array<provenance_marker_v1_accessgrant_pb.AccessGrant>): MsgAddMarkerRequest;
    addAccessList(value?: provenance_marker_v1_accessgrant_pb.AccessGrant, index?: number): provenance_marker_v1_accessgrant_pb.AccessGrant;
    getSupplyFixed(): boolean;
    setSupplyFixed(value: boolean): MsgAddMarkerRequest;
    getAllowGovernanceControl(): boolean;
    setAllowGovernanceControl(value: boolean): MsgAddMarkerRequest;
    getAllowForcedTransfer(): boolean;
    setAllowForcedTransfer(value: boolean): MsgAddMarkerRequest;
    clearRequiredAttributesList(): void;
    getRequiredAttributesList(): Array<string>;
    setRequiredAttributesList(value: Array<string>): MsgAddMarkerRequest;
    addRequiredAttributes(value: string, index?: number): string;
    getUsdCents(): number;
    setUsdCents(value: number): MsgAddMarkerRequest;
    getVolume(): number;
    setVolume(value: number): MsgAddMarkerRequest;
    getUsdMills(): number;
    setUsdMills(value: number): MsgAddMarkerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddMarkerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddMarkerRequest): MsgAddMarkerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddMarkerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddMarkerRequest;
    static deserializeBinaryFromReader(message: MsgAddMarkerRequest, reader: jspb.BinaryReader): MsgAddMarkerRequest;
}

export namespace MsgAddMarkerRequest {
    export type AsObject = {
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        manager: string,
        fromAddress: string,
        status: provenance_marker_v1_marker_pb.MarkerStatus,
        markerType: provenance_marker_v1_marker_pb.MarkerType,
        accessListList: Array<provenance_marker_v1_accessgrant_pb.AccessGrant.AsObject>,
        supplyFixed: boolean,
        allowGovernanceControl: boolean,
        allowForcedTransfer: boolean,
        requiredAttributesList: Array<string>,
        usdCents: number,
        volume: number,
        usdMills: number,
    }
}

export class MsgAddMarkerResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddMarkerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddMarkerResponse): MsgAddMarkerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddMarkerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddMarkerResponse;
    static deserializeBinaryFromReader(message: MsgAddMarkerResponse, reader: jspb.BinaryReader): MsgAddMarkerResponse;
}

export namespace MsgAddMarkerResponse {
    export type AsObject = {
    }
}

export class MsgAddAccessRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgAddAccessRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgAddAccessRequest;
    clearAccessList(): void;
    getAccessList(): Array<provenance_marker_v1_accessgrant_pb.AccessGrant>;
    setAccessList(value: Array<provenance_marker_v1_accessgrant_pb.AccessGrant>): MsgAddAccessRequest;
    addAccess(value?: provenance_marker_v1_accessgrant_pb.AccessGrant, index?: number): provenance_marker_v1_accessgrant_pb.AccessGrant;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddAccessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddAccessRequest): MsgAddAccessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddAccessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddAccessRequest;
    static deserializeBinaryFromReader(message: MsgAddAccessRequest, reader: jspb.BinaryReader): MsgAddAccessRequest;
}

export namespace MsgAddAccessRequest {
    export type AsObject = {
        denom: string,
        administrator: string,
        accessList: Array<provenance_marker_v1_accessgrant_pb.AccessGrant.AsObject>,
    }
}

export class MsgAddAccessResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddAccessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddAccessResponse): MsgAddAccessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddAccessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddAccessResponse;
    static deserializeBinaryFromReader(message: MsgAddAccessResponse, reader: jspb.BinaryReader): MsgAddAccessResponse;
}

export namespace MsgAddAccessResponse {
    export type AsObject = {
    }
}

export class MsgDeleteAccessRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgDeleteAccessRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgDeleteAccessRequest;
    getRemovedAddress(): string;
    setRemovedAddress(value: string): MsgDeleteAccessRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteAccessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteAccessRequest): MsgDeleteAccessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteAccessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteAccessRequest;
    static deserializeBinaryFromReader(message: MsgDeleteAccessRequest, reader: jspb.BinaryReader): MsgDeleteAccessRequest;
}

export namespace MsgDeleteAccessRequest {
    export type AsObject = {
        denom: string,
        administrator: string,
        removedAddress: string,
    }
}

export class MsgDeleteAccessResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteAccessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteAccessResponse): MsgDeleteAccessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteAccessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteAccessResponse;
    static deserializeBinaryFromReader(message: MsgDeleteAccessResponse, reader: jspb.BinaryReader): MsgDeleteAccessResponse;
}

export namespace MsgDeleteAccessResponse {
    export type AsObject = {
    }
}

export class MsgFinalizeRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgFinalizeRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgFinalizeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgFinalizeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgFinalizeRequest): MsgFinalizeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgFinalizeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgFinalizeRequest;
    static deserializeBinaryFromReader(message: MsgFinalizeRequest, reader: jspb.BinaryReader): MsgFinalizeRequest;
}

export namespace MsgFinalizeRequest {
    export type AsObject = {
        denom: string,
        administrator: string,
    }
}

export class MsgFinalizeResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgFinalizeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgFinalizeResponse): MsgFinalizeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgFinalizeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgFinalizeResponse;
    static deserializeBinaryFromReader(message: MsgFinalizeResponse, reader: jspb.BinaryReader): MsgFinalizeResponse;
}

export namespace MsgFinalizeResponse {
    export type AsObject = {
    }
}

export class MsgActivateRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgActivateRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgActivateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgActivateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgActivateRequest): MsgActivateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgActivateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgActivateRequest;
    static deserializeBinaryFromReader(message: MsgActivateRequest, reader: jspb.BinaryReader): MsgActivateRequest;
}

export namespace MsgActivateRequest {
    export type AsObject = {
        denom: string,
        administrator: string,
    }
}

export class MsgActivateResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgActivateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgActivateResponse): MsgActivateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgActivateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgActivateResponse;
    static deserializeBinaryFromReader(message: MsgActivateResponse, reader: jspb.BinaryReader): MsgActivateResponse;
}

export namespace MsgActivateResponse {
    export type AsObject = {
    }
}

export class MsgCancelRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgCancelRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgCancelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgCancelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgCancelRequest): MsgCancelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgCancelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgCancelRequest;
    static deserializeBinaryFromReader(message: MsgCancelRequest, reader: jspb.BinaryReader): MsgCancelRequest;
}

export namespace MsgCancelRequest {
    export type AsObject = {
        denom: string,
        administrator: string,
    }
}

export class MsgCancelResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgCancelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgCancelResponse): MsgCancelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgCancelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgCancelResponse;
    static deserializeBinaryFromReader(message: MsgCancelResponse, reader: jspb.BinaryReader): MsgCancelResponse;
}

export namespace MsgCancelResponse {
    export type AsObject = {
    }
}

export class MsgDeleteRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgDeleteRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteRequest): MsgDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteRequest;
    static deserializeBinaryFromReader(message: MsgDeleteRequest, reader: jspb.BinaryReader): MsgDeleteRequest;
}

export namespace MsgDeleteRequest {
    export type AsObject = {
        denom: string,
        administrator: string,
    }
}

export class MsgDeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDeleteResponse): MsgDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDeleteResponse;
    static deserializeBinaryFromReader(message: MsgDeleteResponse, reader: jspb.BinaryReader): MsgDeleteResponse;
}

export namespace MsgDeleteResponse {
    export type AsObject = {
    }
}

export class MsgMintRequest extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgMintRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgMintRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgMintRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgMintRequest): MsgMintRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgMintRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgMintRequest;
    static deserializeBinaryFromReader(message: MsgMintRequest, reader: jspb.BinaryReader): MsgMintRequest;
}

export namespace MsgMintRequest {
    export type AsObject = {
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        administrator: string,
    }
}

export class MsgMintResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgMintResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgMintResponse): MsgMintResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgMintResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgMintResponse;
    static deserializeBinaryFromReader(message: MsgMintResponse, reader: jspb.BinaryReader): MsgMintResponse;
}

export namespace MsgMintResponse {
    export type AsObject = {
    }
}

export class MsgBurnRequest extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgBurnRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgBurnRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgBurnRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgBurnRequest): MsgBurnRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgBurnRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgBurnRequest;
    static deserializeBinaryFromReader(message: MsgBurnRequest, reader: jspb.BinaryReader): MsgBurnRequest;
}

export namespace MsgBurnRequest {
    export type AsObject = {
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        administrator: string,
    }
}

export class MsgBurnResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgBurnResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgBurnResponse): MsgBurnResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgBurnResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgBurnResponse;
    static deserializeBinaryFromReader(message: MsgBurnResponse, reader: jspb.BinaryReader): MsgBurnResponse;
}

export namespace MsgBurnResponse {
    export type AsObject = {
    }
}

export class MsgWithdrawRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgWithdrawRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgWithdrawRequest;
    getToAddress(): string;
    setToAddress(value: string): MsgWithdrawRequest;
    clearAmountList(): void;
    getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
    setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MsgWithdrawRequest;
    addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWithdrawRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWithdrawRequest): MsgWithdrawRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWithdrawRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWithdrawRequest;
    static deserializeBinaryFromReader(message: MsgWithdrawRequest, reader: jspb.BinaryReader): MsgWithdrawRequest;
}

export namespace MsgWithdrawRequest {
    export type AsObject = {
        denom: string,
        administrator: string,
        toAddress: string,
        amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    }
}

export class MsgWithdrawResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWithdrawResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWithdrawResponse): MsgWithdrawResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWithdrawResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWithdrawResponse;
    static deserializeBinaryFromReader(message: MsgWithdrawResponse, reader: jspb.BinaryReader): MsgWithdrawResponse;
}

export namespace MsgWithdrawResponse {
    export type AsObject = {
    }
}

export class MsgTransferRequest extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgTransferRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgTransferRequest;
    getFromAddress(): string;
    setFromAddress(value: string): MsgTransferRequest;
    getToAddress(): string;
    setToAddress(value: string): MsgTransferRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgTransferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgTransferRequest): MsgTransferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgTransferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgTransferRequest;
    static deserializeBinaryFromReader(message: MsgTransferRequest, reader: jspb.BinaryReader): MsgTransferRequest;
}

export namespace MsgTransferRequest {
    export type AsObject = {
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        administrator: string,
        fromAddress: string,
        toAddress: string,
    }
}

export class MsgTransferResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgTransferResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgTransferResponse): MsgTransferResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgTransferResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgTransferResponse;
    static deserializeBinaryFromReader(message: MsgTransferResponse, reader: jspb.BinaryReader): MsgTransferResponse;
}

export namespace MsgTransferResponse {
    export type AsObject = {
    }
}

export class MsgIbcTransferRequest extends jspb.Message { 

    hasTransfer(): boolean;
    clearTransfer(): void;
    getTransfer(): ibc_applications_transfer_v1_tx_pb.MsgTransfer | undefined;
    setTransfer(value?: ibc_applications_transfer_v1_tx_pb.MsgTransfer): MsgIbcTransferRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgIbcTransferRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgIbcTransferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgIbcTransferRequest): MsgIbcTransferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgIbcTransferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgIbcTransferRequest;
    static deserializeBinaryFromReader(message: MsgIbcTransferRequest, reader: jspb.BinaryReader): MsgIbcTransferRequest;
}

export namespace MsgIbcTransferRequest {
    export type AsObject = {
        transfer?: ibc_applications_transfer_v1_tx_pb.MsgTransfer.AsObject,
        administrator: string,
    }
}

export class MsgIbcTransferResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgIbcTransferResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgIbcTransferResponse): MsgIbcTransferResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgIbcTransferResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgIbcTransferResponse;
    static deserializeBinaryFromReader(message: MsgIbcTransferResponse, reader: jspb.BinaryReader): MsgIbcTransferResponse;
}

export namespace MsgIbcTransferResponse {
    export type AsObject = {
    }
}

export class MsgSetDenomMetadataRequest extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): cosmos_bank_v1beta1_bank_pb.Metadata | undefined;
    setMetadata(value?: cosmos_bank_v1beta1_bank_pb.Metadata): MsgSetDenomMetadataRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgSetDenomMetadataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSetDenomMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSetDenomMetadataRequest): MsgSetDenomMetadataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSetDenomMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSetDenomMetadataRequest;
    static deserializeBinaryFromReader(message: MsgSetDenomMetadataRequest, reader: jspb.BinaryReader): MsgSetDenomMetadataRequest;
}

export namespace MsgSetDenomMetadataRequest {
    export type AsObject = {
        metadata?: cosmos_bank_v1beta1_bank_pb.Metadata.AsObject,
        administrator: string,
    }
}

export class MsgSetDenomMetadataResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSetDenomMetadataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSetDenomMetadataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSetDenomMetadataResponse;
    static deserializeBinaryFromReader(message: MsgSetDenomMetadataResponse, reader: jspb.BinaryReader): MsgSetDenomMetadataResponse;
}

export namespace MsgSetDenomMetadataResponse {
    export type AsObject = {
    }
}

export class MsgAddFinalizeActivateMarkerRequest extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgAddFinalizeActivateMarkerRequest;
    getManager(): string;
    setManager(value: string): MsgAddFinalizeActivateMarkerRequest;
    getFromAddress(): string;
    setFromAddress(value: string): MsgAddFinalizeActivateMarkerRequest;
    getMarkerType(): provenance_marker_v1_marker_pb.MarkerType;
    setMarkerType(value: provenance_marker_v1_marker_pb.MarkerType): MsgAddFinalizeActivateMarkerRequest;
    clearAccessListList(): void;
    getAccessListList(): Array<provenance_marker_v1_accessgrant_pb.AccessGrant>;
    setAccessListList(value: Array<provenance_marker_v1_accessgrant_pb.AccessGrant>): MsgAddFinalizeActivateMarkerRequest;
    addAccessList(value?: provenance_marker_v1_accessgrant_pb.AccessGrant, index?: number): provenance_marker_v1_accessgrant_pb.AccessGrant;
    getSupplyFixed(): boolean;
    setSupplyFixed(value: boolean): MsgAddFinalizeActivateMarkerRequest;
    getAllowGovernanceControl(): boolean;
    setAllowGovernanceControl(value: boolean): MsgAddFinalizeActivateMarkerRequest;
    getAllowForcedTransfer(): boolean;
    setAllowForcedTransfer(value: boolean): MsgAddFinalizeActivateMarkerRequest;
    clearRequiredAttributesList(): void;
    getRequiredAttributesList(): Array<string>;
    setRequiredAttributesList(value: Array<string>): MsgAddFinalizeActivateMarkerRequest;
    addRequiredAttributes(value: string, index?: number): string;
    getUsdCents(): number;
    setUsdCents(value: number): MsgAddFinalizeActivateMarkerRequest;
    getVolume(): number;
    setVolume(value: number): MsgAddFinalizeActivateMarkerRequest;
    getUsdMills(): number;
    setUsdMills(value: number): MsgAddFinalizeActivateMarkerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddFinalizeActivateMarkerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddFinalizeActivateMarkerRequest): MsgAddFinalizeActivateMarkerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddFinalizeActivateMarkerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddFinalizeActivateMarkerRequest;
    static deserializeBinaryFromReader(message: MsgAddFinalizeActivateMarkerRequest, reader: jspb.BinaryReader): MsgAddFinalizeActivateMarkerRequest;
}

export namespace MsgAddFinalizeActivateMarkerRequest {
    export type AsObject = {
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        manager: string,
        fromAddress: string,
        markerType: provenance_marker_v1_marker_pb.MarkerType,
        accessListList: Array<provenance_marker_v1_accessgrant_pb.AccessGrant.AsObject>,
        supplyFixed: boolean,
        allowGovernanceControl: boolean,
        allowForcedTransfer: boolean,
        requiredAttributesList: Array<string>,
        usdCents: number,
        volume: number,
        usdMills: number,
    }
}

export class MsgAddFinalizeActivateMarkerResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddFinalizeActivateMarkerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddFinalizeActivateMarkerResponse): MsgAddFinalizeActivateMarkerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddFinalizeActivateMarkerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddFinalizeActivateMarkerResponse;
    static deserializeBinaryFromReader(message: MsgAddFinalizeActivateMarkerResponse, reader: jspb.BinaryReader): MsgAddFinalizeActivateMarkerResponse;
}

export namespace MsgAddFinalizeActivateMarkerResponse {
    export type AsObject = {
    }
}

export class MsgSupplyIncreaseProposalRequest extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgSupplyIncreaseProposalRequest;
    getTargetAddress(): string;
    setTargetAddress(value: string): MsgSupplyIncreaseProposalRequest;
    getAuthority(): string;
    setAuthority(value: string): MsgSupplyIncreaseProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSupplyIncreaseProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSupplyIncreaseProposalRequest): MsgSupplyIncreaseProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSupplyIncreaseProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSupplyIncreaseProposalRequest;
    static deserializeBinaryFromReader(message: MsgSupplyIncreaseProposalRequest, reader: jspb.BinaryReader): MsgSupplyIncreaseProposalRequest;
}

export namespace MsgSupplyIncreaseProposalRequest {
    export type AsObject = {
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        targetAddress: string,
        authority: string,
    }
}

export class MsgSupplyIncreaseProposalResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSupplyIncreaseProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSupplyIncreaseProposalResponse): MsgSupplyIncreaseProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSupplyIncreaseProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSupplyIncreaseProposalResponse;
    static deserializeBinaryFromReader(message: MsgSupplyIncreaseProposalResponse, reader: jspb.BinaryReader): MsgSupplyIncreaseProposalResponse;
}

export namespace MsgSupplyIncreaseProposalResponse {
    export type AsObject = {
    }
}

export class MsgSupplyDecreaseProposalRequest extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgSupplyDecreaseProposalRequest;
    getAuthority(): string;
    setAuthority(value: string): MsgSupplyDecreaseProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSupplyDecreaseProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSupplyDecreaseProposalRequest): MsgSupplyDecreaseProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSupplyDecreaseProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSupplyDecreaseProposalRequest;
    static deserializeBinaryFromReader(message: MsgSupplyDecreaseProposalRequest, reader: jspb.BinaryReader): MsgSupplyDecreaseProposalRequest;
}

export namespace MsgSupplyDecreaseProposalRequest {
    export type AsObject = {
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        authority: string,
    }
}

export class MsgSupplyDecreaseProposalResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSupplyDecreaseProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSupplyDecreaseProposalResponse): MsgSupplyDecreaseProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSupplyDecreaseProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSupplyDecreaseProposalResponse;
    static deserializeBinaryFromReader(message: MsgSupplyDecreaseProposalResponse, reader: jspb.BinaryReader): MsgSupplyDecreaseProposalResponse;
}

export namespace MsgSupplyDecreaseProposalResponse {
    export type AsObject = {
    }
}

export class MsgUpdateRequiredAttributesRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgUpdateRequiredAttributesRequest;
    clearRemoveRequiredAttributesList(): void;
    getRemoveRequiredAttributesList(): Array<string>;
    setRemoveRequiredAttributesList(value: Array<string>): MsgUpdateRequiredAttributesRequest;
    addRemoveRequiredAttributes(value: string, index?: number): string;
    clearAddRequiredAttributesList(): void;
    getAddRequiredAttributesList(): Array<string>;
    setAddRequiredAttributesList(value: Array<string>): MsgUpdateRequiredAttributesRequest;
    addAddRequiredAttributes(value: string, index?: number): string;
    getTransferAuthority(): string;
    setTransferAuthority(value: string): MsgUpdateRequiredAttributesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateRequiredAttributesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateRequiredAttributesRequest): MsgUpdateRequiredAttributesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateRequiredAttributesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateRequiredAttributesRequest;
    static deserializeBinaryFromReader(message: MsgUpdateRequiredAttributesRequest, reader: jspb.BinaryReader): MsgUpdateRequiredAttributesRequest;
}

export namespace MsgUpdateRequiredAttributesRequest {
    export type AsObject = {
        denom: string,
        removeRequiredAttributesList: Array<string>,
        addRequiredAttributesList: Array<string>,
        transferAuthority: string,
    }
}

export class MsgUpdateRequiredAttributesResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateRequiredAttributesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateRequiredAttributesResponse): MsgUpdateRequiredAttributesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateRequiredAttributesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateRequiredAttributesResponse;
    static deserializeBinaryFromReader(message: MsgUpdateRequiredAttributesResponse, reader: jspb.BinaryReader): MsgUpdateRequiredAttributesResponse;
}

export namespace MsgUpdateRequiredAttributesResponse {
    export type AsObject = {
    }
}

export class MsgUpdateForcedTransferRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgUpdateForcedTransferRequest;
    getAllowForcedTransfer(): boolean;
    setAllowForcedTransfer(value: boolean): MsgUpdateForcedTransferRequest;
    getAuthority(): string;
    setAuthority(value: string): MsgUpdateForcedTransferRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateForcedTransferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateForcedTransferRequest): MsgUpdateForcedTransferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateForcedTransferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateForcedTransferRequest;
    static deserializeBinaryFromReader(message: MsgUpdateForcedTransferRequest, reader: jspb.BinaryReader): MsgUpdateForcedTransferRequest;
}

export namespace MsgUpdateForcedTransferRequest {
    export type AsObject = {
        denom: string,
        allowForcedTransfer: boolean,
        authority: string,
    }
}

export class MsgUpdateForcedTransferResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateForcedTransferResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateForcedTransferResponse): MsgUpdateForcedTransferResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateForcedTransferResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateForcedTransferResponse;
    static deserializeBinaryFromReader(message: MsgUpdateForcedTransferResponse, reader: jspb.BinaryReader): MsgUpdateForcedTransferResponse;
}

export namespace MsgUpdateForcedTransferResponse {
    export type AsObject = {
    }
}

export class MsgSetAccountDataRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgSetAccountDataRequest;
    getValue(): string;
    setValue(value: string): MsgSetAccountDataRequest;
    getSigner(): string;
    setSigner(value: string): MsgSetAccountDataRequest;

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
        denom: string,
        value: string,
        signer: string,
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

export class MsgUpdateSendDenyListRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgUpdateSendDenyListRequest;
    clearRemoveDeniedAddressesList(): void;
    getRemoveDeniedAddressesList(): Array<string>;
    setRemoveDeniedAddressesList(value: Array<string>): MsgUpdateSendDenyListRequest;
    addRemoveDeniedAddresses(value: string, index?: number): string;
    clearAddDeniedAddressesList(): void;
    getAddDeniedAddressesList(): Array<string>;
    setAddDeniedAddressesList(value: Array<string>): MsgUpdateSendDenyListRequest;
    addAddDeniedAddresses(value: string, index?: number): string;
    getAuthority(): string;
    setAuthority(value: string): MsgUpdateSendDenyListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateSendDenyListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateSendDenyListRequest): MsgUpdateSendDenyListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateSendDenyListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateSendDenyListRequest;
    static deserializeBinaryFromReader(message: MsgUpdateSendDenyListRequest, reader: jspb.BinaryReader): MsgUpdateSendDenyListRequest;
}

export namespace MsgUpdateSendDenyListRequest {
    export type AsObject = {
        denom: string,
        removeDeniedAddressesList: Array<string>,
        addDeniedAddressesList: Array<string>,
        authority: string,
    }
}

export class MsgUpdateSendDenyListResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateSendDenyListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateSendDenyListResponse): MsgUpdateSendDenyListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateSendDenyListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateSendDenyListResponse;
    static deserializeBinaryFromReader(message: MsgUpdateSendDenyListResponse, reader: jspb.BinaryReader): MsgUpdateSendDenyListResponse;
}

export namespace MsgUpdateSendDenyListResponse {
    export type AsObject = {
    }
}

export class MsgAddNetAssetValuesRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgAddNetAssetValuesRequest;
    getAdministrator(): string;
    setAdministrator(value: string): MsgAddNetAssetValuesRequest;
    clearNetAssetValuesList(): void;
    getNetAssetValuesList(): Array<provenance_marker_v1_marker_pb.NetAssetValue>;
    setNetAssetValuesList(value: Array<provenance_marker_v1_marker_pb.NetAssetValue>): MsgAddNetAssetValuesRequest;
    addNetAssetValues(value?: provenance_marker_v1_marker_pb.NetAssetValue, index?: number): provenance_marker_v1_marker_pb.NetAssetValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddNetAssetValuesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddNetAssetValuesRequest): MsgAddNetAssetValuesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddNetAssetValuesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddNetAssetValuesRequest;
    static deserializeBinaryFromReader(message: MsgAddNetAssetValuesRequest, reader: jspb.BinaryReader): MsgAddNetAssetValuesRequest;
}

export namespace MsgAddNetAssetValuesRequest {
    export type AsObject = {
        denom: string,
        administrator: string,
        netAssetValuesList: Array<provenance_marker_v1_marker_pb.NetAssetValue.AsObject>,
    }
}

export class MsgAddNetAssetValuesResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddNetAssetValuesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddNetAssetValuesResponse): MsgAddNetAssetValuesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddNetAssetValuesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddNetAssetValuesResponse;
    static deserializeBinaryFromReader(message: MsgAddNetAssetValuesResponse, reader: jspb.BinaryReader): MsgAddNetAssetValuesResponse;
}

export namespace MsgAddNetAssetValuesResponse {
    export type AsObject = {
    }
}

export class MsgSetAdministratorProposalRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgSetAdministratorProposalRequest;
    clearAccessList(): void;
    getAccessList(): Array<provenance_marker_v1_accessgrant_pb.AccessGrant>;
    setAccessList(value: Array<provenance_marker_v1_accessgrant_pb.AccessGrant>): MsgSetAdministratorProposalRequest;
    addAccess(value?: provenance_marker_v1_accessgrant_pb.AccessGrant, index?: number): provenance_marker_v1_accessgrant_pb.AccessGrant;
    getAuthority(): string;
    setAuthority(value: string): MsgSetAdministratorProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSetAdministratorProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSetAdministratorProposalRequest): MsgSetAdministratorProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSetAdministratorProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSetAdministratorProposalRequest;
    static deserializeBinaryFromReader(message: MsgSetAdministratorProposalRequest, reader: jspb.BinaryReader): MsgSetAdministratorProposalRequest;
}

export namespace MsgSetAdministratorProposalRequest {
    export type AsObject = {
        denom: string,
        accessList: Array<provenance_marker_v1_accessgrant_pb.AccessGrant.AsObject>,
        authority: string,
    }
}

export class MsgSetAdministratorProposalResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSetAdministratorProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSetAdministratorProposalResponse): MsgSetAdministratorProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSetAdministratorProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSetAdministratorProposalResponse;
    static deserializeBinaryFromReader(message: MsgSetAdministratorProposalResponse, reader: jspb.BinaryReader): MsgSetAdministratorProposalResponse;
}

export namespace MsgSetAdministratorProposalResponse {
    export type AsObject = {
    }
}

export class MsgRemoveAdministratorProposalRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgRemoveAdministratorProposalRequest;
    clearRemovedAddressList(): void;
    getRemovedAddressList(): Array<string>;
    setRemovedAddressList(value: Array<string>): MsgRemoveAdministratorProposalRequest;
    addRemovedAddress(value: string, index?: number): string;
    getAuthority(): string;
    setAuthority(value: string): MsgRemoveAdministratorProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgRemoveAdministratorProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgRemoveAdministratorProposalRequest): MsgRemoveAdministratorProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgRemoveAdministratorProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgRemoveAdministratorProposalRequest;
    static deserializeBinaryFromReader(message: MsgRemoveAdministratorProposalRequest, reader: jspb.BinaryReader): MsgRemoveAdministratorProposalRequest;
}

export namespace MsgRemoveAdministratorProposalRequest {
    export type AsObject = {
        denom: string,
        removedAddressList: Array<string>,
        authority: string,
    }
}

export class MsgRemoveAdministratorProposalResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgRemoveAdministratorProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgRemoveAdministratorProposalResponse): MsgRemoveAdministratorProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgRemoveAdministratorProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgRemoveAdministratorProposalResponse;
    static deserializeBinaryFromReader(message: MsgRemoveAdministratorProposalResponse, reader: jspb.BinaryReader): MsgRemoveAdministratorProposalResponse;
}

export namespace MsgRemoveAdministratorProposalResponse {
    export type AsObject = {
    }
}

export class MsgChangeStatusProposalRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgChangeStatusProposalRequest;
    getNewStatus(): provenance_marker_v1_marker_pb.MarkerStatus;
    setNewStatus(value: provenance_marker_v1_marker_pb.MarkerStatus): MsgChangeStatusProposalRequest;
    getAuthority(): string;
    setAuthority(value: string): MsgChangeStatusProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgChangeStatusProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgChangeStatusProposalRequest): MsgChangeStatusProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgChangeStatusProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgChangeStatusProposalRequest;
    static deserializeBinaryFromReader(message: MsgChangeStatusProposalRequest, reader: jspb.BinaryReader): MsgChangeStatusProposalRequest;
}

export namespace MsgChangeStatusProposalRequest {
    export type AsObject = {
        denom: string,
        newStatus: provenance_marker_v1_marker_pb.MarkerStatus,
        authority: string,
    }
}

export class MsgChangeStatusProposalResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgChangeStatusProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgChangeStatusProposalResponse): MsgChangeStatusProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgChangeStatusProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgChangeStatusProposalResponse;
    static deserializeBinaryFromReader(message: MsgChangeStatusProposalResponse, reader: jspb.BinaryReader): MsgChangeStatusProposalResponse;
}

export namespace MsgChangeStatusProposalResponse {
    export type AsObject = {
    }
}

export class MsgWithdrawEscrowProposalRequest extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): MsgWithdrawEscrowProposalRequest;
    clearAmountList(): void;
    getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
    setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MsgWithdrawEscrowProposalRequest;
    addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;
    getTargetAddress(): string;
    setTargetAddress(value: string): MsgWithdrawEscrowProposalRequest;
    getAuthority(): string;
    setAuthority(value: string): MsgWithdrawEscrowProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWithdrawEscrowProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWithdrawEscrowProposalRequest): MsgWithdrawEscrowProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWithdrawEscrowProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWithdrawEscrowProposalRequest;
    static deserializeBinaryFromReader(message: MsgWithdrawEscrowProposalRequest, reader: jspb.BinaryReader): MsgWithdrawEscrowProposalRequest;
}

export namespace MsgWithdrawEscrowProposalRequest {
    export type AsObject = {
        denom: string,
        amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
        targetAddress: string,
        authority: string,
    }
}

export class MsgWithdrawEscrowProposalResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgWithdrawEscrowProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgWithdrawEscrowProposalResponse): MsgWithdrawEscrowProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgWithdrawEscrowProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgWithdrawEscrowProposalResponse;
    static deserializeBinaryFromReader(message: MsgWithdrawEscrowProposalResponse, reader: jspb.BinaryReader): MsgWithdrawEscrowProposalResponse;
}

export namespace MsgWithdrawEscrowProposalResponse {
    export type AsObject = {
    }
}

export class MsgSetDenomMetadataProposalRequest extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): cosmos_bank_v1beta1_bank_pb.Metadata | undefined;
    setMetadata(value?: cosmos_bank_v1beta1_bank_pb.Metadata): MsgSetDenomMetadataProposalRequest;
    getAuthority(): string;
    setAuthority(value: string): MsgSetDenomMetadataProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSetDenomMetadataProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSetDenomMetadataProposalRequest): MsgSetDenomMetadataProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSetDenomMetadataProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSetDenomMetadataProposalRequest;
    static deserializeBinaryFromReader(message: MsgSetDenomMetadataProposalRequest, reader: jspb.BinaryReader): MsgSetDenomMetadataProposalRequest;
}

export namespace MsgSetDenomMetadataProposalRequest {
    export type AsObject = {
        metadata?: cosmos_bank_v1beta1_bank_pb.Metadata.AsObject,
        authority: string,
    }
}

export class MsgSetDenomMetadataProposalResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSetDenomMetadataProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSetDenomMetadataProposalResponse): MsgSetDenomMetadataProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSetDenomMetadataProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSetDenomMetadataProposalResponse;
    static deserializeBinaryFromReader(message: MsgSetDenomMetadataProposalResponse, reader: jspb.BinaryReader): MsgSetDenomMetadataProposalResponse;
}

export namespace MsgSetDenomMetadataProposalResponse {
    export type AsObject = {
    }
}

export class MsgUpdateParamsRequest extends jspb.Message { 
    getAuthority(): string;
    setAuthority(value: string): MsgUpdateParamsRequest;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): provenance_marker_v1_marker_pb.Params | undefined;
    setParams(value?: provenance_marker_v1_marker_pb.Params): MsgUpdateParamsRequest;

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
        params?: provenance_marker_v1_marker_pb.Params.AsObject,
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
