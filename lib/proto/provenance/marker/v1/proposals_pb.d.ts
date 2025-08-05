// package: provenance.marker.v1
// file: provenance/marker/v1/proposals.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_bank_v1beta1_bank_pb from "../../../cosmos/bank/v1beta1/bank_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as provenance_marker_v1_marker_pb from "../../../provenance/marker/v1/marker_pb";
import * as provenance_marker_v1_accessgrant_pb from "../../../provenance/marker/v1/accessgrant_pb";

export class AddMarkerProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): AddMarkerProposal;
    getDescription(): string;
    setDescription(value: string): AddMarkerProposal;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): AddMarkerProposal;
    getManager(): string;
    setManager(value: string): AddMarkerProposal;
    getStatus(): provenance_marker_v1_marker_pb.MarkerStatus;
    setStatus(value: provenance_marker_v1_marker_pb.MarkerStatus): AddMarkerProposal;
    getMarkerType(): provenance_marker_v1_marker_pb.MarkerType;
    setMarkerType(value: provenance_marker_v1_marker_pb.MarkerType): AddMarkerProposal;
    clearAccessListList(): void;
    getAccessListList(): Array<provenance_marker_v1_accessgrant_pb.AccessGrant>;
    setAccessListList(value: Array<provenance_marker_v1_accessgrant_pb.AccessGrant>): AddMarkerProposal;
    addAccessList(value?: provenance_marker_v1_accessgrant_pb.AccessGrant, index?: number): provenance_marker_v1_accessgrant_pb.AccessGrant;
    getSupplyFixed(): boolean;
    setSupplyFixed(value: boolean): AddMarkerProposal;
    getAllowGovernanceControl(): boolean;
    setAllowGovernanceControl(value: boolean): AddMarkerProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddMarkerProposal.AsObject;
    static toObject(includeInstance: boolean, msg: AddMarkerProposal): AddMarkerProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddMarkerProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddMarkerProposal;
    static deserializeBinaryFromReader(message: AddMarkerProposal, reader: jspb.BinaryReader): AddMarkerProposal;
}

export namespace AddMarkerProposal {
    export type AsObject = {
        title: string,
        description: string,
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        manager: string,
        status: provenance_marker_v1_marker_pb.MarkerStatus,
        markerType: provenance_marker_v1_marker_pb.MarkerType,
        accessListList: Array<provenance_marker_v1_accessgrant_pb.AccessGrant.AsObject>,
        supplyFixed: boolean,
        allowGovernanceControl: boolean,
    }
}

export class SupplyIncreaseProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SupplyIncreaseProposal;
    getDescription(): string;
    setDescription(value: string): SupplyIncreaseProposal;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): SupplyIncreaseProposal;
    getTargetAddress(): string;
    setTargetAddress(value: string): SupplyIncreaseProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupplyIncreaseProposal.AsObject;
    static toObject(includeInstance: boolean, msg: SupplyIncreaseProposal): SupplyIncreaseProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupplyIncreaseProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupplyIncreaseProposal;
    static deserializeBinaryFromReader(message: SupplyIncreaseProposal, reader: jspb.BinaryReader): SupplyIncreaseProposal;
}

export namespace SupplyIncreaseProposal {
    export type AsObject = {
        title: string,
        description: string,
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        targetAddress: string,
    }
}

export class SupplyDecreaseProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SupplyDecreaseProposal;
    getDescription(): string;
    setDescription(value: string): SupplyDecreaseProposal;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): SupplyDecreaseProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupplyDecreaseProposal.AsObject;
    static toObject(includeInstance: boolean, msg: SupplyDecreaseProposal): SupplyDecreaseProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupplyDecreaseProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupplyDecreaseProposal;
    static deserializeBinaryFromReader(message: SupplyDecreaseProposal, reader: jspb.BinaryReader): SupplyDecreaseProposal;
}

export namespace SupplyDecreaseProposal {
    export type AsObject = {
        title: string,
        description: string,
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    }
}

export class SetAdministratorProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SetAdministratorProposal;
    getDescription(): string;
    setDescription(value: string): SetAdministratorProposal;
    getDenom(): string;
    setDenom(value: string): SetAdministratorProposal;
    clearAccessList(): void;
    getAccessList(): Array<provenance_marker_v1_accessgrant_pb.AccessGrant>;
    setAccessList(value: Array<provenance_marker_v1_accessgrant_pb.AccessGrant>): SetAdministratorProposal;
    addAccess(value?: provenance_marker_v1_accessgrant_pb.AccessGrant, index?: number): provenance_marker_v1_accessgrant_pb.AccessGrant;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAdministratorProposal.AsObject;
    static toObject(includeInstance: boolean, msg: SetAdministratorProposal): SetAdministratorProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAdministratorProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAdministratorProposal;
    static deserializeBinaryFromReader(message: SetAdministratorProposal, reader: jspb.BinaryReader): SetAdministratorProposal;
}

export namespace SetAdministratorProposal {
    export type AsObject = {
        title: string,
        description: string,
        denom: string,
        accessList: Array<provenance_marker_v1_accessgrant_pb.AccessGrant.AsObject>,
    }
}

export class RemoveAdministratorProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): RemoveAdministratorProposal;
    getDescription(): string;
    setDescription(value: string): RemoveAdministratorProposal;
    getDenom(): string;
    setDenom(value: string): RemoveAdministratorProposal;
    clearRemovedAddressList(): void;
    getRemovedAddressList(): Array<string>;
    setRemovedAddressList(value: Array<string>): RemoveAdministratorProposal;
    addRemovedAddress(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveAdministratorProposal.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveAdministratorProposal): RemoveAdministratorProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveAdministratorProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveAdministratorProposal;
    static deserializeBinaryFromReader(message: RemoveAdministratorProposal, reader: jspb.BinaryReader): RemoveAdministratorProposal;
}

export namespace RemoveAdministratorProposal {
    export type AsObject = {
        title: string,
        description: string,
        denom: string,
        removedAddressList: Array<string>,
    }
}

export class ChangeStatusProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): ChangeStatusProposal;
    getDescription(): string;
    setDescription(value: string): ChangeStatusProposal;
    getDenom(): string;
    setDenom(value: string): ChangeStatusProposal;
    getNewStatus(): provenance_marker_v1_marker_pb.MarkerStatus;
    setNewStatus(value: provenance_marker_v1_marker_pb.MarkerStatus): ChangeStatusProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeStatusProposal.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeStatusProposal): ChangeStatusProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeStatusProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeStatusProposal;
    static deserializeBinaryFromReader(message: ChangeStatusProposal, reader: jspb.BinaryReader): ChangeStatusProposal;
}

export namespace ChangeStatusProposal {
    export type AsObject = {
        title: string,
        description: string,
        denom: string,
        newStatus: provenance_marker_v1_marker_pb.MarkerStatus,
    }
}

export class WithdrawEscrowProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): WithdrawEscrowProposal;
    getDescription(): string;
    setDescription(value: string): WithdrawEscrowProposal;
    getDenom(): string;
    setDenom(value: string): WithdrawEscrowProposal;
    clearAmountList(): void;
    getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
    setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): WithdrawEscrowProposal;
    addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;
    getTargetAddress(): string;
    setTargetAddress(value: string): WithdrawEscrowProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawEscrowProposal.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawEscrowProposal): WithdrawEscrowProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawEscrowProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawEscrowProposal;
    static deserializeBinaryFromReader(message: WithdrawEscrowProposal, reader: jspb.BinaryReader): WithdrawEscrowProposal;
}

export namespace WithdrawEscrowProposal {
    export type AsObject = {
        title: string,
        description: string,
        denom: string,
        amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
        targetAddress: string,
    }
}

export class SetDenomMetadataProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): SetDenomMetadataProposal;
    getDescription(): string;
    setDescription(value: string): SetDenomMetadataProposal;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): cosmos_bank_v1beta1_bank_pb.Metadata | undefined;
    setMetadata(value?: cosmos_bank_v1beta1_bank_pb.Metadata): SetDenomMetadataProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDenomMetadataProposal.AsObject;
    static toObject(includeInstance: boolean, msg: SetDenomMetadataProposal): SetDenomMetadataProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDenomMetadataProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDenomMetadataProposal;
    static deserializeBinaryFromReader(message: SetDenomMetadataProposal, reader: jspb.BinaryReader): SetDenomMetadataProposal;
}

export namespace SetDenomMetadataProposal {
    export type AsObject = {
        title: string,
        description: string,
        metadata?: cosmos_bank_v1beta1_bank_pb.Metadata.AsObject,
    }
}
