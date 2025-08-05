// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/denomtrace.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DenomTrace extends jspb.Message { 
    getPath(): string;
    setPath(value: string): DenomTrace;
    getBaseDenom(): string;
    setBaseDenom(value: string): DenomTrace;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DenomTrace.AsObject;
    static toObject(includeInstance: boolean, msg: DenomTrace): DenomTrace.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DenomTrace, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DenomTrace;
    static deserializeBinaryFromReader(message: DenomTrace, reader: jspb.BinaryReader): DenomTrace;
}

export namespace DenomTrace {
    export type AsObject = {
        path: string,
        baseDenom: string,
    }
}
