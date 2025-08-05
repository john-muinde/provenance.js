// package: offchain
// file: cosmos/offchain/msgSignArbitraryData.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as cosmos_proto_cosmos_pb from "../../cosmos_proto/cosmos_pb";
import * as cosmos_msg_v1_msg_pb from "../../cosmos/msg/v1/msg_pb";
import * as amino_amino_pb from "../../amino/amino_pb";

export class MsgSignArbitraryData extends jspb.Message { 
    getAppDomain(): string;
    setAppDomain(value: string): MsgSignArbitraryData;
    getSigner(): string;
    setSigner(value: string): MsgSignArbitraryData;
    getData(): string;
    setData(value: string): MsgSignArbitraryData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgSignArbitraryData.AsObject;
    static toObject(includeInstance: boolean, msg: MsgSignArbitraryData): MsgSignArbitraryData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgSignArbitraryData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgSignArbitraryData;
    static deserializeBinaryFromReader(message: MsgSignArbitraryData, reader: jspb.BinaryReader): MsgSignArbitraryData;
}

export namespace MsgSignArbitraryData {
    export type AsObject = {
        appDomain: string,
        signer: string,
        data: string,
    }
}
