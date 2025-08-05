// package: cosmwasm.wasm.v1
// file: cosmwasm/wasm/v1/ibc.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class MsgIBCSend extends jspb.Message { 
    getChannel(): string;
    setChannel(value: string): MsgIBCSend;
    getTimeoutHeight(): number;
    setTimeoutHeight(value: number): MsgIBCSend;
    getTimeoutTimestamp(): number;
    setTimeoutTimestamp(value: number): MsgIBCSend;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): MsgIBCSend;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgIBCSend.AsObject;
    static toObject(includeInstance: boolean, msg: MsgIBCSend): MsgIBCSend.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgIBCSend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgIBCSend;
    static deserializeBinaryFromReader(message: MsgIBCSend, reader: jspb.BinaryReader): MsgIBCSend;
}

export namespace MsgIBCSend {
    export type AsObject = {
        channel: string,
        timeoutHeight: number,
        timeoutTimestamp: number,
        data: Uint8Array | string,
    }
}

export class MsgIBCCloseChannel extends jspb.Message { 
    getChannel(): string;
    setChannel(value: string): MsgIBCCloseChannel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgIBCCloseChannel.AsObject;
    static toObject(includeInstance: boolean, msg: MsgIBCCloseChannel): MsgIBCCloseChannel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgIBCCloseChannel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgIBCCloseChannel;
    static deserializeBinaryFromReader(message: MsgIBCCloseChannel, reader: jspb.BinaryReader): MsgIBCCloseChannel;
}

export namespace MsgIBCCloseChannel {
    export type AsObject = {
        channel: string,
    }
}
