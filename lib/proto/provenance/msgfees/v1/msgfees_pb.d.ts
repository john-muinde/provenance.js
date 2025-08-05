// package: provenance.msgfees.v1
// file: provenance/msgfees/v1/msgfees.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class Params extends jspb.Message { 

    hasFloorGasPrice(): boolean;
    clearFloorGasPrice(): void;
    getFloorGasPrice(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setFloorGasPrice(value?: cosmos_base_v1beta1_coin_pb.Coin): Params;
    getNhashPerUsdMil(): number;
    setNhashPerUsdMil(value: number): Params;
    getConversionFeeDenom(): string;
    setConversionFeeDenom(value: string): Params;

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
        floorGasPrice?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        nhashPerUsdMil: number,
        conversionFeeDenom: string,
    }
}

export class MsgFee extends jspb.Message { 
    getMsgTypeUrl(): string;
    setMsgTypeUrl(value: string): MsgFee;

    hasAdditionalFee(): boolean;
    clearAdditionalFee(): void;
    getAdditionalFee(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAdditionalFee(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgFee;
    getRecipient(): string;
    setRecipient(value: string): MsgFee;
    getRecipientBasisPoints(): number;
    setRecipientBasisPoints(value: number): MsgFee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgFee.AsObject;
    static toObject(includeInstance: boolean, msg: MsgFee): MsgFee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgFee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgFee;
    static deserializeBinaryFromReader(message: MsgFee, reader: jspb.BinaryReader): MsgFee;
}

export namespace MsgFee {
    export type AsObject = {
        msgTypeUrl: string,
        additionalFee?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        recipient: string,
        recipientBasisPoints: number,
    }
}

export class EventMsgFee extends jspb.Message { 
    getMsgType(): string;
    setMsgType(value: string): EventMsgFee;
    getCount(): string;
    setCount(value: string): EventMsgFee;
    getTotal(): string;
    setTotal(value: string): EventMsgFee;
    getRecipient(): string;
    setRecipient(value: string): EventMsgFee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMsgFee.AsObject;
    static toObject(includeInstance: boolean, msg: EventMsgFee): EventMsgFee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMsgFee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMsgFee;
    static deserializeBinaryFromReader(message: EventMsgFee, reader: jspb.BinaryReader): EventMsgFee;
}

export namespace EventMsgFee {
    export type AsObject = {
        msgType: string,
        count: string,
        total: string,
        recipient: string,
    }
}

export class EventMsgFees extends jspb.Message { 
    clearMsgFeesList(): void;
    getMsgFeesList(): Array<EventMsgFee>;
    setMsgFeesList(value: Array<EventMsgFee>): EventMsgFees;
    addMsgFees(value?: EventMsgFee, index?: number): EventMsgFee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventMsgFees.AsObject;
    static toObject(includeInstance: boolean, msg: EventMsgFees): EventMsgFees.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventMsgFees, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventMsgFees;
    static deserializeBinaryFromReader(message: EventMsgFees, reader: jspb.BinaryReader): EventMsgFees;
}

export namespace EventMsgFees {
    export type AsObject = {
        msgFeesList: Array<EventMsgFee.AsObject>,
    }
}
