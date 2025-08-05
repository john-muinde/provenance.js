// package: provenance.marker.v1
// file: provenance/marker/v1/authz.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class MarkerTransferAuthorization extends jspb.Message { 
    clearTransferLimitList(): void;
    getTransferLimitList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
    setTransferLimitList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MarkerTransferAuthorization;
    addTransferLimit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;
    clearAllowListList(): void;
    getAllowListList(): Array<string>;
    setAllowListList(value: Array<string>): MarkerTransferAuthorization;
    addAllowList(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarkerTransferAuthorization.AsObject;
    static toObject(includeInstance: boolean, msg: MarkerTransferAuthorization): MarkerTransferAuthorization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarkerTransferAuthorization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarkerTransferAuthorization;
    static deserializeBinaryFromReader(message: MarkerTransferAuthorization, reader: jspb.BinaryReader): MarkerTransferAuthorization;
}

export namespace MarkerTransferAuthorization {
    export type AsObject = {
        transferLimitList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
        allowListList: Array<string>,
    }
}
