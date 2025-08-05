// package: provenance.msgfees.v1
// file: provenance/msgfees/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";

export class MsgAssessCustomMsgFeeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): MsgAssessCustomMsgFeeRequest;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgAssessCustomMsgFeeRequest;
    getRecipient(): string;
    setRecipient(value: string): MsgAssessCustomMsgFeeRequest;
    getFrom(): string;
    setFrom(value: string): MsgAssessCustomMsgFeeRequest;
    getRecipientBasisPoints(): string;
    setRecipientBasisPoints(value: string): MsgAssessCustomMsgFeeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAssessCustomMsgFeeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAssessCustomMsgFeeRequest): MsgAssessCustomMsgFeeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAssessCustomMsgFeeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAssessCustomMsgFeeRequest;
    static deserializeBinaryFromReader(message: MsgAssessCustomMsgFeeRequest, reader: jspb.BinaryReader): MsgAssessCustomMsgFeeRequest;
}

export namespace MsgAssessCustomMsgFeeRequest {
    export type AsObject = {
        name: string,
        amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        recipient: string,
        from: string,
        recipientBasisPoints: string,
    }
}

export class MsgAssessCustomMsgFeeResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAssessCustomMsgFeeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAssessCustomMsgFeeResponse): MsgAssessCustomMsgFeeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAssessCustomMsgFeeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAssessCustomMsgFeeResponse;
    static deserializeBinaryFromReader(message: MsgAssessCustomMsgFeeResponse, reader: jspb.BinaryReader): MsgAssessCustomMsgFeeResponse;
}

export namespace MsgAssessCustomMsgFeeResponse {
    export type AsObject = {
    }
}

export class MsgAddMsgFeeProposalRequest extends jspb.Message { 
    getMsgTypeUrl(): string;
    setMsgTypeUrl(value: string): MsgAddMsgFeeProposalRequest;

    hasAdditionalFee(): boolean;
    clearAdditionalFee(): void;
    getAdditionalFee(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAdditionalFee(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgAddMsgFeeProposalRequest;
    getRecipient(): string;
    setRecipient(value: string): MsgAddMsgFeeProposalRequest;
    getRecipientBasisPoints(): string;
    setRecipientBasisPoints(value: string): MsgAddMsgFeeProposalRequest;
    getAuthority(): string;
    setAuthority(value: string): MsgAddMsgFeeProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddMsgFeeProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddMsgFeeProposalRequest): MsgAddMsgFeeProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddMsgFeeProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddMsgFeeProposalRequest;
    static deserializeBinaryFromReader(message: MsgAddMsgFeeProposalRequest, reader: jspb.BinaryReader): MsgAddMsgFeeProposalRequest;
}

export namespace MsgAddMsgFeeProposalRequest {
    export type AsObject = {
        msgTypeUrl: string,
        additionalFee?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        recipient: string,
        recipientBasisPoints: string,
        authority: string,
    }
}

export class MsgAddMsgFeeProposalResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgAddMsgFeeProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgAddMsgFeeProposalResponse): MsgAddMsgFeeProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgAddMsgFeeProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgAddMsgFeeProposalResponse;
    static deserializeBinaryFromReader(message: MsgAddMsgFeeProposalResponse, reader: jspb.BinaryReader): MsgAddMsgFeeProposalResponse;
}

export namespace MsgAddMsgFeeProposalResponse {
    export type AsObject = {
    }
}

export class MsgUpdateMsgFeeProposalRequest extends jspb.Message { 
    getMsgTypeUrl(): string;
    setMsgTypeUrl(value: string): MsgUpdateMsgFeeProposalRequest;

    hasAdditionalFee(): boolean;
    clearAdditionalFee(): void;
    getAdditionalFee(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
    setAdditionalFee(value?: cosmos_base_v1beta1_coin_pb.Coin): MsgUpdateMsgFeeProposalRequest;
    getRecipient(): string;
    setRecipient(value: string): MsgUpdateMsgFeeProposalRequest;
    getRecipientBasisPoints(): string;
    setRecipientBasisPoints(value: string): MsgUpdateMsgFeeProposalRequest;
    getAuthority(): string;
    setAuthority(value: string): MsgUpdateMsgFeeProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateMsgFeeProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateMsgFeeProposalRequest): MsgUpdateMsgFeeProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateMsgFeeProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateMsgFeeProposalRequest;
    static deserializeBinaryFromReader(message: MsgUpdateMsgFeeProposalRequest, reader: jspb.BinaryReader): MsgUpdateMsgFeeProposalRequest;
}

export namespace MsgUpdateMsgFeeProposalRequest {
    export type AsObject = {
        msgTypeUrl: string,
        additionalFee?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
        recipient: string,
        recipientBasisPoints: string,
        authority: string,
    }
}

export class MsgUpdateMsgFeeProposalResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateMsgFeeProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateMsgFeeProposalResponse): MsgUpdateMsgFeeProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateMsgFeeProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateMsgFeeProposalResponse;
    static deserializeBinaryFromReader(message: MsgUpdateMsgFeeProposalResponse, reader: jspb.BinaryReader): MsgUpdateMsgFeeProposalResponse;
}

export namespace MsgUpdateMsgFeeProposalResponse {
    export type AsObject = {
    }
}

export class MsgRemoveMsgFeeProposalRequest extends jspb.Message { 
    getMsgTypeUrl(): string;
    setMsgTypeUrl(value: string): MsgRemoveMsgFeeProposalRequest;
    getAuthority(): string;
    setAuthority(value: string): MsgRemoveMsgFeeProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgRemoveMsgFeeProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgRemoveMsgFeeProposalRequest): MsgRemoveMsgFeeProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgRemoveMsgFeeProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgRemoveMsgFeeProposalRequest;
    static deserializeBinaryFromReader(message: MsgRemoveMsgFeeProposalRequest, reader: jspb.BinaryReader): MsgRemoveMsgFeeProposalRequest;
}

export namespace MsgRemoveMsgFeeProposalRequest {
    export type AsObject = {
        msgTypeUrl: string,
        authority: string,
    }
}

export class MsgRemoveMsgFeeProposalResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgRemoveMsgFeeProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgRemoveMsgFeeProposalResponse): MsgRemoveMsgFeeProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgRemoveMsgFeeProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgRemoveMsgFeeProposalResponse;
    static deserializeBinaryFromReader(message: MsgRemoveMsgFeeProposalResponse, reader: jspb.BinaryReader): MsgRemoveMsgFeeProposalResponse;
}

export namespace MsgRemoveMsgFeeProposalResponse {
    export type AsObject = {
    }
}

export class MsgUpdateNhashPerUsdMilProposalRequest extends jspb.Message { 
    getNhashPerUsdMil(): number;
    setNhashPerUsdMil(value: number): MsgUpdateNhashPerUsdMilProposalRequest;
    getAuthority(): string;
    setAuthority(value: string): MsgUpdateNhashPerUsdMilProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateNhashPerUsdMilProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateNhashPerUsdMilProposalRequest): MsgUpdateNhashPerUsdMilProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateNhashPerUsdMilProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateNhashPerUsdMilProposalRequest;
    static deserializeBinaryFromReader(message: MsgUpdateNhashPerUsdMilProposalRequest, reader: jspb.BinaryReader): MsgUpdateNhashPerUsdMilProposalRequest;
}

export namespace MsgUpdateNhashPerUsdMilProposalRequest {
    export type AsObject = {
        nhashPerUsdMil: number,
        authority: string,
    }
}

export class MsgUpdateNhashPerUsdMilProposalResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateNhashPerUsdMilProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateNhashPerUsdMilProposalResponse): MsgUpdateNhashPerUsdMilProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateNhashPerUsdMilProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateNhashPerUsdMilProposalResponse;
    static deserializeBinaryFromReader(message: MsgUpdateNhashPerUsdMilProposalResponse, reader: jspb.BinaryReader): MsgUpdateNhashPerUsdMilProposalResponse;
}

export namespace MsgUpdateNhashPerUsdMilProposalResponse {
    export type AsObject = {
    }
}

export class MsgUpdateConversionFeeDenomProposalRequest extends jspb.Message { 
    getConversionFeeDenom(): string;
    setConversionFeeDenom(value: string): MsgUpdateConversionFeeDenomProposalRequest;
    getAuthority(): string;
    setAuthority(value: string): MsgUpdateConversionFeeDenomProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateConversionFeeDenomProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateConversionFeeDenomProposalRequest): MsgUpdateConversionFeeDenomProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateConversionFeeDenomProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateConversionFeeDenomProposalRequest;
    static deserializeBinaryFromReader(message: MsgUpdateConversionFeeDenomProposalRequest, reader: jspb.BinaryReader): MsgUpdateConversionFeeDenomProposalRequest;
}

export namespace MsgUpdateConversionFeeDenomProposalRequest {
    export type AsObject = {
        conversionFeeDenom: string,
        authority: string,
    }
}

export class MsgUpdateConversionFeeDenomProposalResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateConversionFeeDenomProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateConversionFeeDenomProposalResponse): MsgUpdateConversionFeeDenomProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateConversionFeeDenomProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateConversionFeeDenomProposalResponse;
    static deserializeBinaryFromReader(message: MsgUpdateConversionFeeDenomProposalResponse, reader: jspb.BinaryReader): MsgUpdateConversionFeeDenomProposalResponse;
}

export namespace MsgUpdateConversionFeeDenomProposalResponse {
    export type AsObject = {
    }
}
