// package: provenance.name.v1
// file: provenance/name/v1/genesis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_name_v1_name_pb from "../../../provenance/name/v1/name_pb";

export class GenesisState extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): provenance_name_v1_name_pb.Params | undefined;
    setParams(value?: provenance_name_v1_name_pb.Params): GenesisState;
    clearBindingsList(): void;
    getBindingsList(): Array<provenance_name_v1_name_pb.NameRecord>;
    setBindingsList(value: Array<provenance_name_v1_name_pb.NameRecord>): GenesisState;
    addBindings(value?: provenance_name_v1_name_pb.NameRecord, index?: number): provenance_name_v1_name_pb.NameRecord;

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
        params?: provenance_name_v1_name_pb.Params.AsObject,
        bindingsList: Array<provenance_name_v1_name_pb.NameRecord.AsObject>,
    }
}
