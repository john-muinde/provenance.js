// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/transfer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class Params extends jspb.Message { 
    getSendEnabled(): boolean;
    setSendEnabled(value: boolean): Params;
    getReceiveEnabled(): boolean;
    setReceiveEnabled(value: boolean): Params;

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
        sendEnabled: boolean,
        receiveEnabled: boolean,
    }
}

export class Forwarding extends jspb.Message { 
    getUnwind(): boolean;
    setUnwind(value: boolean): Forwarding;
    clearHopsList(): void;
    getHopsList(): Array<Hop>;
    setHopsList(value: Array<Hop>): Forwarding;
    addHops(value?: Hop, index?: number): Hop;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Forwarding.AsObject;
    static toObject(includeInstance: boolean, msg: Forwarding): Forwarding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Forwarding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Forwarding;
    static deserializeBinaryFromReader(message: Forwarding, reader: jspb.BinaryReader): Forwarding;
}

export namespace Forwarding {
    export type AsObject = {
        unwind: boolean,
        hopsList: Array<Hop.AsObject>,
    }
}

export class Hop extends jspb.Message { 
    getPortId(): string;
    setPortId(value: string): Hop;
    getChannelId(): string;
    setChannelId(value: string): Hop;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hop.AsObject;
    static toObject(includeInstance: boolean, msg: Hop): Hop.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Hop, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hop;
    static deserializeBinaryFromReader(message: Hop, reader: jspb.BinaryReader): Hop;
}

export namespace Hop {
    export type AsObject = {
        portId: string,
        channelId: string,
    }
}
