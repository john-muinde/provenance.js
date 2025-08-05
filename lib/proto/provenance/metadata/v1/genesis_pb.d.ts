// package: provenance.metadata.v1
// file: provenance/metadata/v1/genesis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_metadata_v1_metadata_pb from "../../../provenance/metadata/v1/metadata_pb";
import * as provenance_metadata_v1_scope_pb from "../../../provenance/metadata/v1/scope_pb";
import * as provenance_metadata_v1_specification_pb from "../../../provenance/metadata/v1/specification_pb";
import * as provenance_metadata_v1_objectstore_pb from "../../../provenance/metadata/v1/objectstore_pb";

export class GenesisState extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): provenance_metadata_v1_metadata_pb.Params | undefined;
    setParams(value?: provenance_metadata_v1_metadata_pb.Params): GenesisState;
    clearScopesList(): void;
    getScopesList(): Array<provenance_metadata_v1_scope_pb.Scope>;
    setScopesList(value: Array<provenance_metadata_v1_scope_pb.Scope>): GenesisState;
    addScopes(value?: provenance_metadata_v1_scope_pb.Scope, index?: number): provenance_metadata_v1_scope_pb.Scope;
    clearSessionsList(): void;
    getSessionsList(): Array<provenance_metadata_v1_scope_pb.Session>;
    setSessionsList(value: Array<provenance_metadata_v1_scope_pb.Session>): GenesisState;
    addSessions(value?: provenance_metadata_v1_scope_pb.Session, index?: number): provenance_metadata_v1_scope_pb.Session;
    clearRecordsList(): void;
    getRecordsList(): Array<provenance_metadata_v1_scope_pb.Record>;
    setRecordsList(value: Array<provenance_metadata_v1_scope_pb.Record>): GenesisState;
    addRecords(value?: provenance_metadata_v1_scope_pb.Record, index?: number): provenance_metadata_v1_scope_pb.Record;
    clearScopeSpecificationsList(): void;
    getScopeSpecificationsList(): Array<provenance_metadata_v1_specification_pb.ScopeSpecification>;
    setScopeSpecificationsList(value: Array<provenance_metadata_v1_specification_pb.ScopeSpecification>): GenesisState;
    addScopeSpecifications(value?: provenance_metadata_v1_specification_pb.ScopeSpecification, index?: number): provenance_metadata_v1_specification_pb.ScopeSpecification;
    clearContractSpecificationsList(): void;
    getContractSpecificationsList(): Array<provenance_metadata_v1_specification_pb.ContractSpecification>;
    setContractSpecificationsList(value: Array<provenance_metadata_v1_specification_pb.ContractSpecification>): GenesisState;
    addContractSpecifications(value?: provenance_metadata_v1_specification_pb.ContractSpecification, index?: number): provenance_metadata_v1_specification_pb.ContractSpecification;
    clearRecordSpecificationsList(): void;
    getRecordSpecificationsList(): Array<provenance_metadata_v1_specification_pb.RecordSpecification>;
    setRecordSpecificationsList(value: Array<provenance_metadata_v1_specification_pb.RecordSpecification>): GenesisState;
    addRecordSpecifications(value?: provenance_metadata_v1_specification_pb.RecordSpecification, index?: number): provenance_metadata_v1_specification_pb.RecordSpecification;

    hasOSLocatorParams(): boolean;
    clearOSLocatorParams(): void;
    getOSLocatorParams(): provenance_metadata_v1_objectstore_pb.OSLocatorParams | undefined;
    setOSLocatorParams(value?: provenance_metadata_v1_objectstore_pb.OSLocatorParams): GenesisState;
    clearObjectStoreLocatorsList(): void;
    getObjectStoreLocatorsList(): Array<provenance_metadata_v1_objectstore_pb.ObjectStoreLocator>;
    setObjectStoreLocatorsList(value: Array<provenance_metadata_v1_objectstore_pb.ObjectStoreLocator>): GenesisState;
    addObjectStoreLocators(value?: provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, index?: number): provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;
    clearNetAssetValuesList(): void;
    getNetAssetValuesList(): Array<MarkerNetAssetValues>;
    setNetAssetValuesList(value: Array<MarkerNetAssetValues>): GenesisState;
    addNetAssetValues(value?: MarkerNetAssetValues, index?: number): MarkerNetAssetValues;

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
        params?: provenance_metadata_v1_metadata_pb.Params.AsObject,
        scopesList: Array<provenance_metadata_v1_scope_pb.Scope.AsObject>,
        sessionsList: Array<provenance_metadata_v1_scope_pb.Session.AsObject>,
        recordsList: Array<provenance_metadata_v1_scope_pb.Record.AsObject>,
        scopeSpecificationsList: Array<provenance_metadata_v1_specification_pb.ScopeSpecification.AsObject>,
        contractSpecificationsList: Array<provenance_metadata_v1_specification_pb.ContractSpecification.AsObject>,
        recordSpecificationsList: Array<provenance_metadata_v1_specification_pb.RecordSpecification.AsObject>,
        oSLocatorParams?: provenance_metadata_v1_objectstore_pb.OSLocatorParams.AsObject,
        objectStoreLocatorsList: Array<provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.AsObject>,
        netAssetValuesList: Array<MarkerNetAssetValues.AsObject>,
    }
}

export class MarkerNetAssetValues extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): MarkerNetAssetValues;
    clearNetAssetValuesList(): void;
    getNetAssetValuesList(): Array<provenance_metadata_v1_scope_pb.NetAssetValue>;
    setNetAssetValuesList(value: Array<provenance_metadata_v1_scope_pb.NetAssetValue>): MarkerNetAssetValues;
    addNetAssetValues(value?: provenance_metadata_v1_scope_pb.NetAssetValue, index?: number): provenance_metadata_v1_scope_pb.NetAssetValue;

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
        netAssetValuesList: Array<provenance_metadata_v1_scope_pb.NetAssetValue.AsObject>,
    }
}
