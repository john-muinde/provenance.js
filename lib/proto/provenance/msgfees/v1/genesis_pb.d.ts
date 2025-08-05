// package: provenance.msgfees.v1
// file: provenance/msgfees/v1/genesis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_msgfees_v1_msgfees_pb from "../../../provenance/msgfees/v1/msgfees_pb";

export class GenesisState extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): provenance_msgfees_v1_msgfees_pb.Params | undefined;
    setParams(value?: provenance_msgfees_v1_msgfees_pb.Params): GenesisState;
    clearMsgFeesList(): void;
    getMsgFeesList(): Array<provenance_msgfees_v1_msgfees_pb.MsgFee>;
    setMsgFeesList(value: Array<provenance_msgfees_v1_msgfees_pb.MsgFee>): GenesisState;
    addMsgFees(value?: provenance_msgfees_v1_msgfees_pb.MsgFee, index?: number): provenance_msgfees_v1_msgfees_pb.MsgFee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenesisState.AsObject;
    static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenesisState;
    static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
    export type AsObject = {
        params?: provenance_msgfees_v1_msgfees_pb.Params.AsObject,
        msgFeesList: Array<provenance_msgfees_v1_msgfees_pb.MsgFee.AsObject>,
    }
}
