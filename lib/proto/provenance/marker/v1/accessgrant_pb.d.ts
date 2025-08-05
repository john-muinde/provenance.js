// package: provenance.marker.v1
// file: provenance/marker/v1/accessgrant.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";

export class AccessGrant extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): AccessGrant;
    clearPermissionsList(): void;
    getPermissionsList(): Array<Access>;
    setPermissionsList(value: Array<Access>): AccessGrant;
    addPermissions(value: Access, index?: number): Access;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessGrant.AsObject;
    static toObject(includeInstance: boolean, msg: AccessGrant): AccessGrant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessGrant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessGrant;
    static deserializeBinaryFromReader(message: AccessGrant, reader: jspb.BinaryReader): AccessGrant;
}

export namespace AccessGrant {
    export type AsObject = {
        address: string,
        permissionsList: Array<Access>,
    }
}

export enum Access {
    ACCESS_UNSPECIFIED = 0,
    ACCESS_MINT = 1,
    ACCESS_BURN = 2,
    ACCESS_DEPOSIT = 3,
    ACCESS_WITHDRAW = 4,
    ACCESS_DELETE = 5,
    ACCESS_ADMIN = 6,
    ACCESS_TRANSFER = 7,
    ACCESS_FORCE_TRANSFER = 8,
}
