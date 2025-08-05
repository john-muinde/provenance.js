// package: provenance.metadata.v1
// file: provenance/metadata/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as provenance_metadata_v1_tx_pb from "../../../provenance/metadata/v1/tx_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as provenance_metadata_v1_metadata_pb from "../../../provenance/metadata/v1/metadata_pb";
import * as provenance_metadata_v1_objectstore_pb from "../../../provenance/metadata/v1/objectstore_pb";
import * as provenance_metadata_v1_p8e_p8e_pb from "../../../provenance/metadata/v1/p8e/p8e_pb";
import * as provenance_metadata_v1_scope_pb from "../../../provenance/metadata/v1/scope_pb";
import * as provenance_metadata_v1_specification_pb from "../../../provenance/metadata/v1/specification_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    writeScope: IMsgService_IWriteScope;
    deleteScope: IMsgService_IDeleteScope;
    addScopeDataAccess: IMsgService_IAddScopeDataAccess;
    deleteScopeDataAccess: IMsgService_IDeleteScopeDataAccess;
    addScopeOwner: IMsgService_IAddScopeOwner;
    deleteScopeOwner: IMsgService_IDeleteScopeOwner;
    updateValueOwners: IMsgService_IUpdateValueOwners;
    migrateValueOwner: IMsgService_IMigrateValueOwner;
    writeSession: IMsgService_IWriteSession;
    writeRecord: IMsgService_IWriteRecord;
    deleteRecord: IMsgService_IDeleteRecord;
    writeScopeSpecification: IMsgService_IWriteScopeSpecification;
    deleteScopeSpecification: IMsgService_IDeleteScopeSpecification;
    writeContractSpecification: IMsgService_IWriteContractSpecification;
    deleteContractSpecification: IMsgService_IDeleteContractSpecification;
    addContractSpecToScopeSpec: IMsgService_IAddContractSpecToScopeSpec;
    deleteContractSpecFromScopeSpec: IMsgService_IDeleteContractSpecFromScopeSpec;
    writeRecordSpecification: IMsgService_IWriteRecordSpecification;
    deleteRecordSpecification: IMsgService_IDeleteRecordSpecification;
    bindOSLocator: IMsgService_IBindOSLocator;
    deleteOSLocator: IMsgService_IDeleteOSLocator;
    modifyOSLocator: IMsgService_IModifyOSLocator;
    setAccountData: IMsgService_ISetAccountData;
    addNetAssetValues: IMsgService_IAddNetAssetValues;
}

interface IMsgService_IWriteScope extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgWriteScopeRequest, provenance_metadata_v1_tx_pb.MsgWriteScopeResponse> {
    path: "/provenance.metadata.v1.Msg/WriteScope";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgWriteScopeRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgWriteScopeRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgWriteScopeResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgWriteScopeResponse>;
}
interface IMsgService_IDeleteScope extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgDeleteScopeRequest, provenance_metadata_v1_tx_pb.MsgDeleteScopeResponse> {
    path: "/provenance.metadata.v1.Msg/DeleteScope";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeResponse>;
}
interface IMsgService_IAddScopeDataAccess extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessRequest, provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessResponse> {
    path: "/provenance.metadata.v1.Msg/AddScopeDataAccess";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessResponse>;
}
interface IMsgService_IDeleteScopeDataAccess extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessRequest, provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessResponse> {
    path: "/provenance.metadata.v1.Msg/DeleteScopeDataAccess";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessResponse>;
}
interface IMsgService_IAddScopeOwner extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgAddScopeOwnerRequest, provenance_metadata_v1_tx_pb.MsgAddScopeOwnerResponse> {
    path: "/provenance.metadata.v1.Msg/AddScopeOwner";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgAddScopeOwnerRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgAddScopeOwnerRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgAddScopeOwnerResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgAddScopeOwnerResponse>;
}
interface IMsgService_IDeleteScopeOwner extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerRequest, provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerResponse> {
    path: "/provenance.metadata.v1.Msg/DeleteScopeOwner";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerResponse>;
}
interface IMsgService_IUpdateValueOwners extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersRequest, provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersResponse> {
    path: "/provenance.metadata.v1.Msg/UpdateValueOwners";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersResponse>;
}
interface IMsgService_IMigrateValueOwner extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerRequest, provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerResponse> {
    path: "/provenance.metadata.v1.Msg/MigrateValueOwner";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerResponse>;
}
interface IMsgService_IWriteSession extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgWriteSessionRequest, provenance_metadata_v1_tx_pb.MsgWriteSessionResponse> {
    path: "/provenance.metadata.v1.Msg/WriteSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgWriteSessionRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgWriteSessionRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgWriteSessionResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgWriteSessionResponse>;
}
interface IMsgService_IWriteRecord extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgWriteRecordRequest, provenance_metadata_v1_tx_pb.MsgWriteRecordResponse> {
    path: "/provenance.metadata.v1.Msg/WriteRecord";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgWriteRecordRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgWriteRecordRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgWriteRecordResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgWriteRecordResponse>;
}
interface IMsgService_IDeleteRecord extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgDeleteRecordRequest, provenance_metadata_v1_tx_pb.MsgDeleteRecordResponse> {
    path: "/provenance.metadata.v1.Msg/DeleteRecord";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteRecordRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteRecordRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteRecordResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteRecordResponse>;
}
interface IMsgService_IWriteScopeSpecification extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationRequest, provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationResponse> {
    path: "/provenance.metadata.v1.Msg/WriteScopeSpecification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationResponse>;
}
interface IMsgService_IDeleteScopeSpecification extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationRequest, provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationResponse> {
    path: "/provenance.metadata.v1.Msg/DeleteScopeSpecification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationResponse>;
}
interface IMsgService_IWriteContractSpecification extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationRequest, provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationResponse> {
    path: "/provenance.metadata.v1.Msg/WriteContractSpecification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationResponse>;
}
interface IMsgService_IDeleteContractSpecification extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationRequest, provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationResponse> {
    path: "/provenance.metadata.v1.Msg/DeleteContractSpecification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationResponse>;
}
interface IMsgService_IAddContractSpecToScopeSpec extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecRequest, provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecResponse> {
    path: "/provenance.metadata.v1.Msg/AddContractSpecToScopeSpec";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecResponse>;
}
interface IMsgService_IDeleteContractSpecFromScopeSpec extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecRequest, provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecResponse> {
    path: "/provenance.metadata.v1.Msg/DeleteContractSpecFromScopeSpec";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecResponse>;
}
interface IMsgService_IWriteRecordSpecification extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationRequest, provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationResponse> {
    path: "/provenance.metadata.v1.Msg/WriteRecordSpecification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationResponse>;
}
interface IMsgService_IDeleteRecordSpecification extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationRequest, provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationResponse> {
    path: "/provenance.metadata.v1.Msg/DeleteRecordSpecification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationResponse>;
}
interface IMsgService_IBindOSLocator extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgBindOSLocatorRequest, provenance_metadata_v1_tx_pb.MsgBindOSLocatorResponse> {
    path: "/provenance.metadata.v1.Msg/BindOSLocator";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgBindOSLocatorRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgBindOSLocatorRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgBindOSLocatorResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgBindOSLocatorResponse>;
}
interface IMsgService_IDeleteOSLocator extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorRequest, provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorResponse> {
    path: "/provenance.metadata.v1.Msg/DeleteOSLocator";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorResponse>;
}
interface IMsgService_IModifyOSLocator extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgModifyOSLocatorRequest, provenance_metadata_v1_tx_pb.MsgModifyOSLocatorResponse> {
    path: "/provenance.metadata.v1.Msg/ModifyOSLocator";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgModifyOSLocatorRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgModifyOSLocatorRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgModifyOSLocatorResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgModifyOSLocatorResponse>;
}
interface IMsgService_ISetAccountData extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgSetAccountDataRequest, provenance_metadata_v1_tx_pb.MsgSetAccountDataResponse> {
    path: "/provenance.metadata.v1.Msg/SetAccountData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgSetAccountDataRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgSetAccountDataRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgSetAccountDataResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgSetAccountDataResponse>;
}
interface IMsgService_IAddNetAssetValues extends grpc.MethodDefinition<provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesRequest, provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesResponse> {
    path: "/provenance.metadata.v1.Msg/AddNetAssetValues";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesRequest>;
    requestDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesRequest>;
    responseSerialize: grpc.serialize<provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesResponse>;
    responseDeserialize: grpc.deserialize<provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
    writeScope: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgWriteScopeRequest, provenance_metadata_v1_tx_pb.MsgWriteScopeResponse>;
    deleteScope: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgDeleteScopeRequest, provenance_metadata_v1_tx_pb.MsgDeleteScopeResponse>;
    addScopeDataAccess: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessRequest, provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessResponse>;
    deleteScopeDataAccess: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessRequest, provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessResponse>;
    addScopeOwner: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgAddScopeOwnerRequest, provenance_metadata_v1_tx_pb.MsgAddScopeOwnerResponse>;
    deleteScopeOwner: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerRequest, provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerResponse>;
    updateValueOwners: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersRequest, provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersResponse>;
    migrateValueOwner: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerRequest, provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerResponse>;
    writeSession: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgWriteSessionRequest, provenance_metadata_v1_tx_pb.MsgWriteSessionResponse>;
    writeRecord: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgWriteRecordRequest, provenance_metadata_v1_tx_pb.MsgWriteRecordResponse>;
    deleteRecord: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgDeleteRecordRequest, provenance_metadata_v1_tx_pb.MsgDeleteRecordResponse>;
    writeScopeSpecification: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationRequest, provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationResponse>;
    deleteScopeSpecification: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationRequest, provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationResponse>;
    writeContractSpecification: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationRequest, provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationResponse>;
    deleteContractSpecification: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationRequest, provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationResponse>;
    addContractSpecToScopeSpec: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecRequest, provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecResponse>;
    deleteContractSpecFromScopeSpec: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecRequest, provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecResponse>;
    writeRecordSpecification: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationRequest, provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationResponse>;
    deleteRecordSpecification: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationRequest, provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationResponse>;
    bindOSLocator: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgBindOSLocatorRequest, provenance_metadata_v1_tx_pb.MsgBindOSLocatorResponse>;
    deleteOSLocator: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorRequest, provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorResponse>;
    modifyOSLocator: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgModifyOSLocatorRequest, provenance_metadata_v1_tx_pb.MsgModifyOSLocatorResponse>;
    setAccountData: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgSetAccountDataRequest, provenance_metadata_v1_tx_pb.MsgSetAccountDataResponse>;
    addNetAssetValues: grpc.handleUnaryCall<provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesRequest, provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesResponse>;
}

export interface IMsgClient {
    writeScope(request: provenance_metadata_v1_tx_pb.MsgWriteScopeRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteScopeResponse) => void): grpc.ClientUnaryCall;
    writeScope(request: provenance_metadata_v1_tx_pb.MsgWriteScopeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteScopeResponse) => void): grpc.ClientUnaryCall;
    writeScope(request: provenance_metadata_v1_tx_pb.MsgWriteScopeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteScopeResponse) => void): grpc.ClientUnaryCall;
    deleteScope(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeResponse) => void): grpc.ClientUnaryCall;
    deleteScope(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeResponse) => void): grpc.ClientUnaryCall;
    deleteScope(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeResponse) => void): grpc.ClientUnaryCall;
    addScopeDataAccess(request: provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessResponse) => void): grpc.ClientUnaryCall;
    addScopeDataAccess(request: provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessResponse) => void): grpc.ClientUnaryCall;
    addScopeDataAccess(request: provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessResponse) => void): grpc.ClientUnaryCall;
    deleteScopeDataAccess(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessResponse) => void): grpc.ClientUnaryCall;
    deleteScopeDataAccess(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessResponse) => void): grpc.ClientUnaryCall;
    deleteScopeDataAccess(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessResponse) => void): grpc.ClientUnaryCall;
    addScopeOwner(request: provenance_metadata_v1_tx_pb.MsgAddScopeOwnerRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddScopeOwnerResponse) => void): grpc.ClientUnaryCall;
    addScopeOwner(request: provenance_metadata_v1_tx_pb.MsgAddScopeOwnerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddScopeOwnerResponse) => void): grpc.ClientUnaryCall;
    addScopeOwner(request: provenance_metadata_v1_tx_pb.MsgAddScopeOwnerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddScopeOwnerResponse) => void): grpc.ClientUnaryCall;
    deleteScopeOwner(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerResponse) => void): grpc.ClientUnaryCall;
    deleteScopeOwner(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerResponse) => void): grpc.ClientUnaryCall;
    deleteScopeOwner(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerResponse) => void): grpc.ClientUnaryCall;
    updateValueOwners(request: provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersResponse) => void): grpc.ClientUnaryCall;
    updateValueOwners(request: provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersResponse) => void): grpc.ClientUnaryCall;
    updateValueOwners(request: provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersResponse) => void): grpc.ClientUnaryCall;
    migrateValueOwner(request: provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerResponse) => void): grpc.ClientUnaryCall;
    migrateValueOwner(request: provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerResponse) => void): grpc.ClientUnaryCall;
    migrateValueOwner(request: provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerResponse) => void): grpc.ClientUnaryCall;
    writeSession(request: provenance_metadata_v1_tx_pb.MsgWriteSessionRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteSessionResponse) => void): grpc.ClientUnaryCall;
    writeSession(request: provenance_metadata_v1_tx_pb.MsgWriteSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteSessionResponse) => void): grpc.ClientUnaryCall;
    writeSession(request: provenance_metadata_v1_tx_pb.MsgWriteSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteSessionResponse) => void): grpc.ClientUnaryCall;
    writeRecord(request: provenance_metadata_v1_tx_pb.MsgWriteRecordRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteRecordResponse) => void): grpc.ClientUnaryCall;
    writeRecord(request: provenance_metadata_v1_tx_pb.MsgWriteRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteRecordResponse) => void): grpc.ClientUnaryCall;
    writeRecord(request: provenance_metadata_v1_tx_pb.MsgWriteRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteRecordResponse) => void): grpc.ClientUnaryCall;
    deleteRecord(request: provenance_metadata_v1_tx_pb.MsgDeleteRecordRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteRecordResponse) => void): grpc.ClientUnaryCall;
    deleteRecord(request: provenance_metadata_v1_tx_pb.MsgDeleteRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteRecordResponse) => void): grpc.ClientUnaryCall;
    deleteRecord(request: provenance_metadata_v1_tx_pb.MsgDeleteRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteRecordResponse) => void): grpc.ClientUnaryCall;
    writeScopeSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    writeScopeSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    writeScopeSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    deleteScopeSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    deleteScopeSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    deleteScopeSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    writeContractSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    writeContractSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    writeContractSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    deleteContractSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    deleteContractSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    deleteContractSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    addContractSpecToScopeSpec(request: provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecResponse) => void): grpc.ClientUnaryCall;
    addContractSpecToScopeSpec(request: provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecResponse) => void): grpc.ClientUnaryCall;
    addContractSpecToScopeSpec(request: provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecResponse) => void): grpc.ClientUnaryCall;
    deleteContractSpecFromScopeSpec(request: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecResponse) => void): grpc.ClientUnaryCall;
    deleteContractSpecFromScopeSpec(request: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecResponse) => void): grpc.ClientUnaryCall;
    deleteContractSpecFromScopeSpec(request: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecResponse) => void): grpc.ClientUnaryCall;
    writeRecordSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    writeRecordSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    writeRecordSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    deleteRecordSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    deleteRecordSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    deleteRecordSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    bindOSLocator(request: provenance_metadata_v1_tx_pb.MsgBindOSLocatorRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgBindOSLocatorResponse) => void): grpc.ClientUnaryCall;
    bindOSLocator(request: provenance_metadata_v1_tx_pb.MsgBindOSLocatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgBindOSLocatorResponse) => void): grpc.ClientUnaryCall;
    bindOSLocator(request: provenance_metadata_v1_tx_pb.MsgBindOSLocatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgBindOSLocatorResponse) => void): grpc.ClientUnaryCall;
    deleteOSLocator(request: provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorResponse) => void): grpc.ClientUnaryCall;
    deleteOSLocator(request: provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorResponse) => void): grpc.ClientUnaryCall;
    deleteOSLocator(request: provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorResponse) => void): grpc.ClientUnaryCall;
    modifyOSLocator(request: provenance_metadata_v1_tx_pb.MsgModifyOSLocatorRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgModifyOSLocatorResponse) => void): grpc.ClientUnaryCall;
    modifyOSLocator(request: provenance_metadata_v1_tx_pb.MsgModifyOSLocatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgModifyOSLocatorResponse) => void): grpc.ClientUnaryCall;
    modifyOSLocator(request: provenance_metadata_v1_tx_pb.MsgModifyOSLocatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgModifyOSLocatorResponse) => void): grpc.ClientUnaryCall;
    setAccountData(request: provenance_metadata_v1_tx_pb.MsgSetAccountDataRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    setAccountData(request: provenance_metadata_v1_tx_pb.MsgSetAccountDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    setAccountData(request: provenance_metadata_v1_tx_pb.MsgSetAccountDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    addNetAssetValues(request: provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    addNetAssetValues(request: provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    addNetAssetValues(request: provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public writeScope(request: provenance_metadata_v1_tx_pb.MsgWriteScopeRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteScopeResponse) => void): grpc.ClientUnaryCall;
    public writeScope(request: provenance_metadata_v1_tx_pb.MsgWriteScopeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteScopeResponse) => void): grpc.ClientUnaryCall;
    public writeScope(request: provenance_metadata_v1_tx_pb.MsgWriteScopeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteScopeResponse) => void): grpc.ClientUnaryCall;
    public deleteScope(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeResponse) => void): grpc.ClientUnaryCall;
    public deleteScope(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeResponse) => void): grpc.ClientUnaryCall;
    public deleteScope(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeResponse) => void): grpc.ClientUnaryCall;
    public addScopeDataAccess(request: provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessResponse) => void): grpc.ClientUnaryCall;
    public addScopeDataAccess(request: provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessResponse) => void): grpc.ClientUnaryCall;
    public addScopeDataAccess(request: provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddScopeDataAccessResponse) => void): grpc.ClientUnaryCall;
    public deleteScopeDataAccess(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessResponse) => void): grpc.ClientUnaryCall;
    public deleteScopeDataAccess(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessResponse) => void): grpc.ClientUnaryCall;
    public deleteScopeDataAccess(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeDataAccessResponse) => void): grpc.ClientUnaryCall;
    public addScopeOwner(request: provenance_metadata_v1_tx_pb.MsgAddScopeOwnerRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddScopeOwnerResponse) => void): grpc.ClientUnaryCall;
    public addScopeOwner(request: provenance_metadata_v1_tx_pb.MsgAddScopeOwnerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddScopeOwnerResponse) => void): grpc.ClientUnaryCall;
    public addScopeOwner(request: provenance_metadata_v1_tx_pb.MsgAddScopeOwnerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddScopeOwnerResponse) => void): grpc.ClientUnaryCall;
    public deleteScopeOwner(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerResponse) => void): grpc.ClientUnaryCall;
    public deleteScopeOwner(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerResponse) => void): grpc.ClientUnaryCall;
    public deleteScopeOwner(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeOwnerResponse) => void): grpc.ClientUnaryCall;
    public updateValueOwners(request: provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersResponse) => void): grpc.ClientUnaryCall;
    public updateValueOwners(request: provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersResponse) => void): grpc.ClientUnaryCall;
    public updateValueOwners(request: provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgUpdateValueOwnersResponse) => void): grpc.ClientUnaryCall;
    public migrateValueOwner(request: provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerResponse) => void): grpc.ClientUnaryCall;
    public migrateValueOwner(request: provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerResponse) => void): grpc.ClientUnaryCall;
    public migrateValueOwner(request: provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgMigrateValueOwnerResponse) => void): grpc.ClientUnaryCall;
    public writeSession(request: provenance_metadata_v1_tx_pb.MsgWriteSessionRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteSessionResponse) => void): grpc.ClientUnaryCall;
    public writeSession(request: provenance_metadata_v1_tx_pb.MsgWriteSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteSessionResponse) => void): grpc.ClientUnaryCall;
    public writeSession(request: provenance_metadata_v1_tx_pb.MsgWriteSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteSessionResponse) => void): grpc.ClientUnaryCall;
    public writeRecord(request: provenance_metadata_v1_tx_pb.MsgWriteRecordRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteRecordResponse) => void): grpc.ClientUnaryCall;
    public writeRecord(request: provenance_metadata_v1_tx_pb.MsgWriteRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteRecordResponse) => void): grpc.ClientUnaryCall;
    public writeRecord(request: provenance_metadata_v1_tx_pb.MsgWriteRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteRecordResponse) => void): grpc.ClientUnaryCall;
    public deleteRecord(request: provenance_metadata_v1_tx_pb.MsgDeleteRecordRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteRecordResponse) => void): grpc.ClientUnaryCall;
    public deleteRecord(request: provenance_metadata_v1_tx_pb.MsgDeleteRecordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteRecordResponse) => void): grpc.ClientUnaryCall;
    public deleteRecord(request: provenance_metadata_v1_tx_pb.MsgDeleteRecordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteRecordResponse) => void): grpc.ClientUnaryCall;
    public writeScopeSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    public writeScopeSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    public writeScopeSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    public deleteScopeSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    public deleteScopeSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    public deleteScopeSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteScopeSpecificationResponse) => void): grpc.ClientUnaryCall;
    public writeContractSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    public writeContractSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    public writeContractSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    public deleteContractSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    public deleteContractSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    public deleteContractSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecificationResponse) => void): grpc.ClientUnaryCall;
    public addContractSpecToScopeSpec(request: provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecResponse) => void): grpc.ClientUnaryCall;
    public addContractSpecToScopeSpec(request: provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecResponse) => void): grpc.ClientUnaryCall;
    public addContractSpecToScopeSpec(request: provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddContractSpecToScopeSpecResponse) => void): grpc.ClientUnaryCall;
    public deleteContractSpecFromScopeSpec(request: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecResponse) => void): grpc.ClientUnaryCall;
    public deleteContractSpecFromScopeSpec(request: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecResponse) => void): grpc.ClientUnaryCall;
    public deleteContractSpecFromScopeSpec(request: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteContractSpecFromScopeSpecResponse) => void): grpc.ClientUnaryCall;
    public writeRecordSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    public writeRecordSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    public writeRecordSpecification(request: provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgWriteRecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    public deleteRecordSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    public deleteRecordSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    public deleteRecordSpecification(request: provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteRecordSpecificationResponse) => void): grpc.ClientUnaryCall;
    public bindOSLocator(request: provenance_metadata_v1_tx_pb.MsgBindOSLocatorRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgBindOSLocatorResponse) => void): grpc.ClientUnaryCall;
    public bindOSLocator(request: provenance_metadata_v1_tx_pb.MsgBindOSLocatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgBindOSLocatorResponse) => void): grpc.ClientUnaryCall;
    public bindOSLocator(request: provenance_metadata_v1_tx_pb.MsgBindOSLocatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgBindOSLocatorResponse) => void): grpc.ClientUnaryCall;
    public deleteOSLocator(request: provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorResponse) => void): grpc.ClientUnaryCall;
    public deleteOSLocator(request: provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorResponse) => void): grpc.ClientUnaryCall;
    public deleteOSLocator(request: provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgDeleteOSLocatorResponse) => void): grpc.ClientUnaryCall;
    public modifyOSLocator(request: provenance_metadata_v1_tx_pb.MsgModifyOSLocatorRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgModifyOSLocatorResponse) => void): grpc.ClientUnaryCall;
    public modifyOSLocator(request: provenance_metadata_v1_tx_pb.MsgModifyOSLocatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgModifyOSLocatorResponse) => void): grpc.ClientUnaryCall;
    public modifyOSLocator(request: provenance_metadata_v1_tx_pb.MsgModifyOSLocatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgModifyOSLocatorResponse) => void): grpc.ClientUnaryCall;
    public setAccountData(request: provenance_metadata_v1_tx_pb.MsgSetAccountDataRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    public setAccountData(request: provenance_metadata_v1_tx_pb.MsgSetAccountDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    public setAccountData(request: provenance_metadata_v1_tx_pb.MsgSetAccountDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    public addNetAssetValues(request: provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesRequest, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    public addNetAssetValues(request: provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    public addNetAssetValues(request: provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_metadata_v1_tx_pb.MsgAddNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
}
