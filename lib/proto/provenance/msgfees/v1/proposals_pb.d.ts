// package: provenance.msgfees.v1
// file: provenance/msgfees/v1/proposals.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class AddMsgFeeProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): AddMsgFeeProposal;
    getDescription(): string;
    setDescription(value: string): AddMsgFeeProposal;
    getMsgTypeUrl(): string;
    setMsgTypeUrl(value: string): AddMsgFeeProposal;

    hasAdditionalFee(): boolean;
    clearAdditionalFee(): void;
    getAdditionalFee(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAdditionalFee(value?: cosmos_base_v1beta1_coin_pb.Coin): AddMsgFeeProposal;
    getRecipient(): string;
    setRecipient(value: string): AddMsgFeeProposal;
    getRecipientBasisPoints(): string;
    setRecipientBasisPoints(value: string): AddMsgFeeProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddMsgFeeProposal.AsObject;
    static toObject(includeInstance: boolean, msg: AddMsgFeeProposal): AddMsgFeeProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddMsgFeeProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddMsgFeeProposal;
    static deserializeBinaryFromReader(message: AddMsgFeeProposal, reader: jspb.BinaryReader): AddMsgFeeProposal;
}

export namespace AddMsgFeeProposal {
    export type AsObject = {
        title: string,
        description: string,
        msgTypeUrl: string,
        additionalFee?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        recipient: string,
        recipientBasisPoints: string,
    }
}

export class UpdateMsgFeeProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): UpdateMsgFeeProposal;
    getDescription(): string;
    setDescription(value: string): UpdateMsgFeeProposal;
    getMsgTypeUrl(): string;
    setMsgTypeUrl(value: string): UpdateMsgFeeProposal;

    hasAdditionalFee(): boolean;
    clearAdditionalFee(): void;
    getAdditionalFee(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAdditionalFee(value?: cosmos_base_v1beta1_coin_pb.Coin): UpdateMsgFeeProposal;
    getRecipient(): string;
    setRecipient(value: string): UpdateMsgFeeProposal;
    getRecipientBasisPoints(): string;
    setRecipientBasisPoints(value: string): UpdateMsgFeeProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateMsgFeeProposal.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateMsgFeeProposal): UpdateMsgFeeProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateMsgFeeProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateMsgFeeProposal;
    static deserializeBinaryFromReader(message: UpdateMsgFeeProposal, reader: jspb.BinaryReader): UpdateMsgFeeProposal;
}

export namespace UpdateMsgFeeProposal {
    export type AsObject = {
        title: string,
        description: string,
        msgTypeUrl: string,
        additionalFee?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        recipient: string,
        recipientBasisPoints: string,
    }
}

export class RemoveMsgFeeProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): RemoveMsgFeeProposal;
    getDescription(): string;
    setDescription(value: string): RemoveMsgFeeProposal;
    getMsgTypeUrl(): string;
    setMsgTypeUrl(value: string): RemoveMsgFeeProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveMsgFeeProposal.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveMsgFeeProposal): RemoveMsgFeeProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveMsgFeeProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveMsgFeeProposal;
    static deserializeBinaryFromReader(message: RemoveMsgFeeProposal, reader: jspb.BinaryReader): RemoveMsgFeeProposal;
}

export namespace RemoveMsgFeeProposal {
    export type AsObject = {
        title: string,
        description: string,
        msgTypeUrl: string,
    }
}

export class UpdateNhashPerUsdMilProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): UpdateNhashPerUsdMilProposal;
    getDescription(): string;
    setDescription(value: string): UpdateNhashPerUsdMilProposal;
    getNhashPerUsdMil(): number;
    setNhashPerUsdMil(value: number): UpdateNhashPerUsdMilProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateNhashPerUsdMilProposal.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateNhashPerUsdMilProposal): UpdateNhashPerUsdMilProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateNhashPerUsdMilProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateNhashPerUsdMilProposal;
    static deserializeBinaryFromReader(message: UpdateNhashPerUsdMilProposal, reader: jspb.BinaryReader): UpdateNhashPerUsdMilProposal;
}

export namespace UpdateNhashPerUsdMilProposal {
    export type AsObject = {
        title: string,
        description: string,
        nhashPerUsdMil: number,
    }
}

export class UpdateConversionFeeDenomProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): UpdateConversionFeeDenomProposal;
    getDescription(): string;
    setDescription(value: string): UpdateConversionFeeDenomProposal;
    getConversionFeeDenom(): string;
    setConversionFeeDenom(value: string): UpdateConversionFeeDenomProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateConversionFeeDenomProposal.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateConversionFeeDenomProposal): UpdateConversionFeeDenomProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateConversionFeeDenomProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateConversionFeeDenomProposal;
    static deserializeBinaryFromReader(message: UpdateConversionFeeDenomProposal, reader: jspb.BinaryReader): UpdateConversionFeeDenomProposal;
}

export namespace UpdateConversionFeeDenomProposal {
    export type AsObject = {
        title: string,
        description: string,
        conversionFeeDenom: string,
    }
}
