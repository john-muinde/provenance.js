// package: provenance.attribute.v1
// file: provenance/attribute/v1/genesis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_attribute_v1_attribute_pb from "../../../provenance/attribute/v1/attribute_pb";

export class GenesisState extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): provenance_attribute_v1_attribute_pb.Params | undefined;
    setParams(value?: provenance_attribute_v1_attribute_pb.Params): GenesisState;
    clearAttributesList(): void;
    getAttributesList(): Array<provenance_attribute_v1_attribute_pb.Attribute>;
    setAttributesList(value: Array<provenance_attribute_v1_attribute_pb.Attribute>): GenesisState;
    addAttributes(value?: provenance_attribute_v1_attribute_pb.Attribute, index?: number): provenance_attribute_v1_attribute_pb.Attribute;

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
        params?: provenance_attribute_v1_attribute_pb.Params.AsObject,
        attributesList: Array<provenance_attribute_v1_attribute_pb.Attribute.AsObject>,
    }
}
