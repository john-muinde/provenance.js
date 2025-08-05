// package: provenance.marker.v1
// file: provenance/marker/v1/genesis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_marker_v1_marker_pb from "../../../provenance/marker/v1/marker_pb";

export class GenesisState extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): provenance_marker_v1_marker_pb.Params | undefined;
    setParams(value?: provenance_marker_v1_marker_pb.Params): GenesisState;
    clearMarkersList(): void;
    getMarkersList(): Array<provenance_marker_v1_marker_pb.MarkerAccount>;
    setMarkersList(value: Array<provenance_marker_v1_marker_pb.MarkerAccount>): GenesisState;
    addMarkers(value?: provenance_marker_v1_marker_pb.MarkerAccount, index?: number): provenance_marker_v1_marker_pb.MarkerAccount;
    clearNetAssetValuesList(): void;
    getNetAssetValuesList(): Array<MarkerNetAssetValues>;
    setNetAssetValuesList(value: Array<MarkerNetAssetValues>): GenesisState;
    addNetAssetValues(value?: MarkerNetAssetValues, index?: number): MarkerNetAssetValues;
    clearDenySendAddressesList(): void;
    getDenySendAddressesList(): Array<DenySendAddress>;
    setDenySendAddressesList(value: Array<DenySendAddress>): GenesisState;
    addDenySendAddresses(value?: DenySendAddress, index?: number): DenySendAddress;

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
        params?: provenance_marker_v1_marker_pb.Params.AsObject,
        markersList: Array<provenance_marker_v1_marker_pb.MarkerAccount.AsObject>,
        netAssetValuesList: Array<MarkerNetAssetValues.AsObject>,
        denySendAddressesList: Array<DenySendAddress.AsObject>,
    }
}

export class DenySendAddress extends jspb.Message { 
    getMarkerAddress(): string;
    setMarkerAddress(value: string): DenySendAddress;
    getDenyAddress(): string;
    setDenyAddress(value: string): DenySendAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DenySendAddress.AsObject;
    static toObject(includeInstance: boolean, msg: DenySendAddress): DenySendAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DenySendAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DenySendAddress;
    static deserializeBinaryFromReader(message: DenySendAddress, reader: jspb.BinaryReader): DenySendAddress;
}

export namespace DenySendAddress {
    export type AsObject = {
        markerAddress: string,
        denyAddress: string,
    }
}

export class MarkerNetAssetValues extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): MarkerNetAssetValues;
    clearNetAssetValuesList(): void;
    getNetAssetValuesList(): Array<provenance_marker_v1_marker_pb.NetAssetValue>;
    setNetAssetValuesList(value: Array<provenance_marker_v1_marker_pb.NetAssetValue>): MarkerNetAssetValues;
    addNetAssetValues(value?: provenance_marker_v1_marker_pb.NetAssetValue, index?: number): provenance_marker_v1_marker_pb.NetAssetValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarkerNetAssetValues.AsObject;
    static toObject(includeInstance: boolean, msg: MarkerNetAssetValues): MarkerNetAssetValues.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarkerNetAssetValues, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarkerNetAssetValues;
    static deserializeBinaryFromReader(message: MarkerNetAssetValues, reader: jspb.BinaryReader): MarkerNetAssetValues;
}

export namespace MarkerNetAssetValues {
    export type AsObject = {
        address: string,
        netAssetValuesList: Array<provenance_marker_v1_marker_pb.NetAssetValue.AsObject>,
    }
}
