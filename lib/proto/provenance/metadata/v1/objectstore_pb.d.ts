// package: provenance.metadata.v1
// file: provenance/metadata/v1/objectstore.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class ObjectStoreLocator extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): ObjectStoreLocator;
    getLocatorUri(): string;
    setLocatorUri(value: string): ObjectStoreLocator;
    getEncryptionKey(): string;
    setEncryptionKey(value: string): ObjectStoreLocator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObjectStoreLocator.AsObject;
    static toObject(includeInstance: boolean, msg: ObjectStoreLocator): ObjectStoreLocator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObjectStoreLocator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObjectStoreLocator;
    static deserializeBinaryFromReader(message: ObjectStoreLocator, reader: jspb.BinaryReader): ObjectStoreLocator;
}

export namespace ObjectStoreLocator {
    export type AsObject = {
        owner: string,
        locatorUri: string,
        encryptionKey: string,
    }
}

export class OSLocatorParams extends jspb.Message { 
    getMaxUriLength(): number;
    setMaxUriLength(value: number): OSLocatorParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OSLocatorParams.AsObject;
    static toObject(includeInstance: boolean, msg: OSLocatorParams): OSLocatorParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OSLocatorParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OSLocatorParams;
    static deserializeBinaryFromReader(message: OSLocatorParams, reader: jspb.BinaryReader): OSLocatorParams;
}

export namespace OSLocatorParams {
    export type AsObject = {
        maxUriLength: number,
    }
}
