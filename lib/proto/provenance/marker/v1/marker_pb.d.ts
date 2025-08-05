// package: provenance.marker.v1
// file: provenance/marker/v1/marker.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_auth_v1beta1_auth_pb from "../../../cosmos/auth/v1beta1/auth_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as provenance_marker_v1_accessgrant_pb from "../../../provenance/marker/v1/accessgrant_pb";

export class Params extends jspb.Message { 
    getMaxTotalSupply(): number;
    setMaxTotalSupply(value: number): Params;
    getEnableGovernance(): boolean;
    setEnableGovernance(value: boolean): Params;
    getUnrestrictedDenomRegex(): string;
    setUnrestrictedDenomRegex(value: string): Params;
    getMaxSupply(): string;
    setMaxSupply(value: string): Params;

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
        maxTotalSupply: number,
        enableGovernance: boolean,
        unrestrictedDenomRegex: string,
        maxSupply: string,
    }
}

export class MarkerAccount extends jspb.Message { 

    hasBaseAccount(): boolean;
    clearBaseAccount(): void;
    getBaseAccount(): cosmos_auth_v1beta1_auth_pb.BaseAccount | undefined;
    setBaseAccount(value?: cosmos_auth_v1beta1_auth_pb.BaseAccount): MarkerAccount;
    getManager(): string;
    setManager(value: string): MarkerAccount;
    clearAccessControlList(): void;
    getAccessControlList(): Array<provenance_marker_v1_accessgrant_pb.AccessGrant>;
    setAccessControlList(value: Array<provenance_marker_v1_accessgrant_pb.AccessGrant>): MarkerAccount;
    addAccessControl(value?: provenance_marker_v1_accessgrant_pb.AccessGrant, index?: number): provenance_marker_v1_accessgrant_pb.AccessGrant;
    getStatus(): MarkerStatus;
    setStatus(value: MarkerStatus): MarkerAccount;
    getDenom(): string;
    setDenom(value: string): MarkerAccount;
    getSupply(): string;
    setSupply(value: string): MarkerAccount;
    getMarkerType(): MarkerType;
    setMarkerType(value: MarkerType): MarkerAccount;
    getSupplyFixed(): boolean;
    setSupplyFixed(value: boolean): MarkerAccount;
    getAllowGovernanceControl(): boolean;
    setAllowGovernanceControl(value: boolean): MarkerAccount;
    getAllowForcedTransfer(): boolean;
    setAllowForcedTransfer(value: boolean): MarkerAccount;
    clearRequiredAttributesList(): void;
    getRequiredAttributesList(): Array<string>;
    setRequiredAttributesList(value: Array<string>): MarkerAccount;
    addRequiredAttributes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarkerAccount.AsObject;
    static toObject(includeInstance: boolean, msg: MarkerAccount): MarkerAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarkerAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarkerAccount;
    static deserializeBinaryFromReader(message: MarkerAccount, reader: jspb.BinaryReader): MarkerAccount;
}

export namespace MarkerAccount {
    export type AsObject = {
        baseAccount?: cosmos_auth_v1beta1_auth_pb.BaseAccount.AsObject,
        manager: string,
        accessControlList: Array<provenance_marker_v1_accessgrant_pb.AccessGrant.AsObject>,
        status: MarkerStatus,
        denom: string,
        supply: string,
        markerType: MarkerType,
        supplyFixed: boolean,
        allowGovernanceControl: boolean,
        allowForcedTransfer: boolean,
        requiredAttributesList: Array<string>,
    }
}

export class NetAssetValue extends jspb.Message { 

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setPrice(value?: cosmos_base_v1beta1_coin_pb.Coin): NetAssetValue;
    getVolume(): number;
    setVolume(value: number): NetAssetValue;
    getUpdatedBlockHeight(): number;
    setUpdatedBlockHeight(value: number): NetAssetValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetAssetValue.AsObject;
    static toObject(includeInstance: boolean, msg: NetAssetValue): NetAssetValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetAssetValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetAssetValue;
    static deserializeBinaryFromReader(message: NetAssetValue, reader: jspb.BinaryReader): NetAssetValue;
}

export namespace NetAssetValue {
    export type AsObject = {
        price?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        volume: number,
        updatedBlockHeight: number,
    }
}

export class EventMarkerAdd extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): EventMarkerAdd;
    getAmount(): string;
    setAmount(value: string): EventMarkerAdd;
    getStatus(): string;
    setStatus(value: string): EventMarkerAdd;
    getManager(): string;
    setManager(value: string): EventMarkerAdd;
    getMarkerType(): string;
    setMarkerType(value: string): EventMarkerAdd;
    getAddress(): string;
    setAddress(value: string): EventMarkerAdd;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerAdd.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerAdd): EventMarkerAdd.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerAdd, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerAdd;
    static deserializeBinaryFromReader(message: EventMarkerAdd, reader: jspb.BinaryReader): EventMarkerAdd;
}

export namespace EventMarkerAdd {
    export type AsObject = {
        denom: string,
        amount: string,
        status: string,
        manager: string,
        markerType: string,
        address: string,
    }
}

export class EventMarkerAddAccess extends jspb.Message { 

    hasAccess(): boolean;
    clearAccess(): void;
    getAccess(): EventMarkerAccess | undefined;
    setAccess(value?: EventMarkerAccess): EventMarkerAddAccess;
    getDenom(): string;
    setDenom(value: string): EventMarkerAddAccess;
    getAdministrator(): string;
    setAdministrator(value: string): EventMarkerAddAccess;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerAddAccess.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerAddAccess): EventMarkerAddAccess.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerAddAccess, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerAddAccess;
    static deserializeBinaryFromReader(message: EventMarkerAddAccess, reader: jspb.BinaryReader): EventMarkerAddAccess;
}

export namespace EventMarkerAddAccess {
    export type AsObject = {
        access?: EventMarkerAccess.AsObject,
        denom: string,
        administrator: string,
    }
}

export class EventMarkerAccess extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): EventMarkerAccess;
    clearPermissionsList(): void;
    getPermissionsList(): Array<string>;
    setPermissionsList(value: Array<string>): EventMarkerAccess;
    addPermissions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerAccess.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerAccess): EventMarkerAccess.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerAccess, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerAccess;
    static deserializeBinaryFromReader(message: EventMarkerAccess, reader: jspb.BinaryReader): EventMarkerAccess;
}

export namespace EventMarkerAccess {
    export type AsObject = {
        address: string,
        permissionsList: Array<string>,
    }
}

export class EventMarkerDeleteAccess extends jspb.Message { 
    getRemoveAddress(): string;
    setRemoveAddress(value: string): EventMarkerDeleteAccess;
    getDenom(): string;
    setDenom(value: string): EventMarkerDeleteAccess;
    getAdministrator(): string;
    setAdministrator(value: string): EventMarkerDeleteAccess;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerDeleteAccess.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerDeleteAccess): EventMarkerDeleteAccess.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerDeleteAccess, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerDeleteAccess;
    static deserializeBinaryFromReader(message: EventMarkerDeleteAccess, reader: jspb.BinaryReader): EventMarkerDeleteAccess;
}

export namespace EventMarkerDeleteAccess {
    export type AsObject = {
        removeAddress: string,
        denom: string,
        administrator: string,
    }
}

export class EventMarkerFinalize extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): EventMarkerFinalize;
    getAdministrator(): string;
    setAdministrator(value: string): EventMarkerFinalize;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerFinalize.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerFinalize): EventMarkerFinalize.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerFinalize, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerFinalize;
    static deserializeBinaryFromReader(message: EventMarkerFinalize, reader: jspb.BinaryReader): EventMarkerFinalize;
}

export namespace EventMarkerFinalize {
    export type AsObject = {
        denom: string,
        administrator: string,
    }
}

export class EventMarkerActivate extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): EventMarkerActivate;
    getAdministrator(): string;
    setAdministrator(value: string): EventMarkerActivate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerActivate.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerActivate): EventMarkerActivate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerActivate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerActivate;
    static deserializeBinaryFromReader(message: EventMarkerActivate, reader: jspb.BinaryReader): EventMarkerActivate;
}

export namespace EventMarkerActivate {
    export type AsObject = {
        denom: string,
        administrator: string,
    }
}

export class EventMarkerCancel extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): EventMarkerCancel;
    getAdministrator(): string;
    setAdministrator(value: string): EventMarkerCancel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerCancel.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerCancel): EventMarkerCancel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerCancel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerCancel;
    static deserializeBinaryFromReader(message: EventMarkerCancel, reader: jspb.BinaryReader): EventMarkerCancel;
}

export namespace EventMarkerCancel {
    export type AsObject = {
        denom: string,
        administrator: string,
    }
}

export class EventMarkerDelete extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): EventMarkerDelete;
    getAdministrator(): string;
    setAdministrator(value: string): EventMarkerDelete;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerDelete.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerDelete): EventMarkerDelete.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerDelete, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerDelete;
    static deserializeBinaryFromReader(message: EventMarkerDelete, reader: jspb.BinaryReader): EventMarkerDelete;
}

export namespace EventMarkerDelete {
    export type AsObject = {
        denom: string,
        administrator: string,
    }
}

export class EventMarkerMint extends jspb.Message { 
    getAmount(): string;
    setAmount(value: string): EventMarkerMint;
    getDenom(): string;
    setDenom(value: string): EventMarkerMint;
    getAdministrator(): string;
    setAdministrator(value: string): EventMarkerMint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerMint.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerMint): EventMarkerMint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerMint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerMint;
    static deserializeBinaryFromReader(message: EventMarkerMint, reader: jspb.BinaryReader): EventMarkerMint;
}

export namespace EventMarkerMint {
    export type AsObject = {
        amount: string,
        denom: string,
        administrator: string,
    }
}

export class EventMarkerBurn extends jspb.Message { 
    getAmount(): string;
    setAmount(value: string): EventMarkerBurn;
    getDenom(): string;
    setDenom(value: string): EventMarkerBurn;
    getAdministrator(): string;
    setAdministrator(value: string): EventMarkerBurn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerBurn.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerBurn): EventMarkerBurn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerBurn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerBurn;
    static deserializeBinaryFromReader(message: EventMarkerBurn, reader: jspb.BinaryReader): EventMarkerBurn;
}

export namespace EventMarkerBurn {
    export type AsObject = {
        amount: string,
        denom: string,
        administrator: string,
    }
}

export class EventMarkerWithdraw extends jspb.Message { 
    getCoins(): string;
    setCoins(value: string): EventMarkerWithdraw;
    getDenom(): string;
    setDenom(value: string): EventMarkerWithdraw;
    getAdministrator(): string;
    setAdministrator(value: string): EventMarkerWithdraw;
    getToAddress(): string;
    setToAddress(value: string): EventMarkerWithdraw;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerWithdraw.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerWithdraw): EventMarkerWithdraw.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerWithdraw, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerWithdraw;
    static deserializeBinaryFromReader(message: EventMarkerWithdraw, reader: jspb.BinaryReader): EventMarkerWithdraw;
}

export namespace EventMarkerWithdraw {
    export type AsObject = {
        coins: string,
        denom: string,
        administrator: string,
        toAddress: string,
    }
}

export class EventMarkerTransfer extends jspb.Message { 
    getAmount(): string;
    setAmount(value: string): EventMarkerTransfer;
    getDenom(): string;
    setDenom(value: string): EventMarkerTransfer;
    getAdministrator(): string;
    setAdministrator(value: string): EventMarkerTransfer;
    getToAddress(): string;
    setToAddress(value: string): EventMarkerTransfer;
    getFromAddress(): string;
    setFromAddress(value: string): EventMarkerTransfer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerTransfer.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerTransfer): EventMarkerTransfer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerTransfer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerTransfer;
    static deserializeBinaryFromReader(message: EventMarkerTransfer, reader: jspb.BinaryReader): EventMarkerTransfer;
}

export namespace EventMarkerTransfer {
    export type AsObject = {
        amount: string,
        denom: string,
        administrator: string,
        toAddress: string,
        fromAddress: string,
    }
}

export class EventMarkerSetDenomMetadata extends jspb.Message { 
    getMetadataBase(): string;
    setMetadataBase(value: string): EventMarkerSetDenomMetadata;
    getMetadataDescription(): string;
    setMetadataDescription(value: string): EventMarkerSetDenomMetadata;
    getMetadataDisplay(): string;
    setMetadataDisplay(value: string): EventMarkerSetDenomMetadata;
    clearMetadataDenomUnitsList(): void;
    getMetadataDenomUnitsList(): Array<EventDenomUnit>;
    setMetadataDenomUnitsList(value: Array<EventDenomUnit>): EventMarkerSetDenomMetadata;
    addMetadataDenomUnits(value?: EventDenomUnit, index?: number): EventDenomUnit;
    getAdministrator(): string;
    setAdministrator(value: string): EventMarkerSetDenomMetadata;
    getMetadataName(): string;
    setMetadataName(value: string): EventMarkerSetDenomMetadata;
    getMetadataSymbol(): string;
    setMetadataSymbol(value: string): EventMarkerSetDenomMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerSetDenomMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerSetDenomMetadata): EventMarkerSetDenomMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerSetDenomMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerSetDenomMetadata;
    static deserializeBinaryFromReader(message: EventMarkerSetDenomMetadata, reader: jspb.BinaryReader): EventMarkerSetDenomMetadata;
}

export namespace EventMarkerSetDenomMetadata {
    export type AsObject = {
        metadataBase: string,
        metadataDescription: string,
        metadataDisplay: string,
        metadataDenomUnitsList: Array<EventDenomUnit.AsObject>,
        administrator: string,
        metadataName: string,
        metadataSymbol: string,
    }
}

export class EventDenomUnit extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): EventDenomUnit;
    getExponent(): string;
    setExponent(value: string): EventDenomUnit;
    clearAliasesList(): void;
    getAliasesList(): Array<string>;
    setAliasesList(value: Array<string>): EventDenomUnit;
    addAliases(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventDenomUnit.AsObject;
    static toObject(includeInstance: boolean, msg: EventDenomUnit): EventDenomUnit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventDenomUnit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventDenomUnit;
    static deserializeBinaryFromReader(message: EventDenomUnit, reader: jspb.BinaryReader): EventDenomUnit;
}

export namespace EventDenomUnit {
    export type AsObject = {
        denom: string,
        exponent: string,
        aliasesList: Array<string>,
    }
}

export class EventSetNetAssetValue extends jspb.Message { 
    getDenom(): string;
    setDenom(value: string): EventSetNetAssetValue;
    getPrice(): string;
    setPrice(value: string): EventSetNetAssetValue;
    getVolume(): string;
    setVolume(value: string): EventSetNetAssetValue;
    getSource(): string;
    setSource(value: string): EventSetNetAssetValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventSetNetAssetValue.AsObject;
    static toObject(includeInstance: boolean, msg: EventSetNetAssetValue): EventSetNetAssetValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventSetNetAssetValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventSetNetAssetValue;
    static deserializeBinaryFromReader(message: EventSetNetAssetValue, reader: jspb.BinaryReader): EventSetNetAssetValue;
}

export namespace EventSetNetAssetValue {
    export type AsObject = {
        denom: string,
        price: string,
        volume: string,
        source: string,
    }
}

export class EventMarkerParamsUpdated extends jspb.Message { 
    getEnableGovernance(): string;
    setEnableGovernance(value: string): EventMarkerParamsUpdated;
    getUnrestrictedDenomRegex(): string;
    setUnrestrictedDenomRegex(value: string): EventMarkerParamsUpdated;
    getMaxSupply(): string;
    setMaxSupply(value: string): EventMarkerParamsUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMarkerParamsUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: EventMarkerParamsUpdated): EventMarkerParamsUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMarkerParamsUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMarkerParamsUpdated;
    static deserializeBinaryFromReader(message: EventMarkerParamsUpdated, reader: jspb.BinaryReader): EventMarkerParamsUpdated;
}

export namespace EventMarkerParamsUpdated {
    export type AsObject = {
        enableGovernance: string,
        unrestrictedDenomRegex: string,
        maxSupply: string,
    }
}

export enum MarkerType {
    MARKER_TYPE_UNSPECIFIED = 0,
    MARKER_TYPE_COIN = 1,
    MARKER_TYPE_RESTRICTED = 2,
}

export enum MarkerStatus {
    MARKER_STATUS_UNSPECIFIED = 0,
    MARKER_STATUS_PROPOSED = 1,
    MARKER_STATUS_FINALIZED = 2,
    MARKER_STATUS_ACTIVE = 3,
    MARKER_STATUS_CANCELLED = 4,
    MARKER_STATUS_DESTROYED = 5,
}
