// package: provenance.marker.v1
// file: provenance/marker/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as provenance_marker_v1_tx_pb from "../../../provenance/marker/v1/tx_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_bank_v1beta1_bank_pb from "../../../cosmos/bank/v1beta1/bank_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";
import * as ibc_applications_transfer_v1_tx_pb from "../../../ibc/applications/transfer/v1/tx_pb";
import * as provenance_marker_v1_marker_pb from "../../../provenance/marker/v1/marker_pb";
import * as provenance_marker_v1_accessgrant_pb from "../../../provenance/marker/v1/accessgrant_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    finalize: IMsgService_IFinalize;
    activate: IMsgService_IActivate;
    cancel: IMsgService_ICancel;
    delete: IMsgService_IDelete;
    mint: IMsgService_IMint;
    burn: IMsgService_IBurn;
    addAccess: IMsgService_IAddAccess;
    deleteAccess: IMsgService_IDeleteAccess;
    withdraw: IMsgService_IWithdraw;
    addMarker: IMsgService_IAddMarker;
    transfer: IMsgService_ITransfer;
    ibcTransfer: IMsgService_IIbcTransfer;
    setDenomMetadata: IMsgService_ISetDenomMetadata;
    grantAllowance: IMsgService_IGrantAllowance;
    addFinalizeActivateMarker: IMsgService_IAddFinalizeActivateMarker;
    supplyIncreaseProposal: IMsgService_ISupplyIncreaseProposal;
    supplyDecreaseProposal: IMsgService_ISupplyDecreaseProposal;
    updateRequiredAttributes: IMsgService_IUpdateRequiredAttributes;
    updateForcedTransfer: IMsgService_IUpdateForcedTransfer;
    setAccountData: IMsgService_ISetAccountData;
    updateSendDenyList: IMsgService_IUpdateSendDenyList;
    addNetAssetValues: IMsgService_IAddNetAssetValues;
    setAdministratorProposal: IMsgService_ISetAdministratorProposal;
    removeAdministratorProposal: IMsgService_IRemoveAdministratorProposal;
    changeStatusProposal: IMsgService_IChangeStatusProposal;
    withdrawEscrowProposal: IMsgService_IWithdrawEscrowProposal;
    setDenomMetadataProposal: IMsgService_ISetDenomMetadataProposal;
    updateParams: IMsgService_IUpdateParams;
}

interface IMsgService_IFinalize extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgFinalizeRequest, provenance_marker_v1_tx_pb.MsgFinalizeResponse> {
    path: "/provenance.marker.v1.Msg/Finalize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgFinalizeRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgFinalizeRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgFinalizeResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgFinalizeResponse>;
}
interface IMsgService_IActivate extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgActivateRequest, provenance_marker_v1_tx_pb.MsgActivateResponse> {
    path: "/provenance.marker.v1.Msg/Activate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgActivateRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgActivateRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgActivateResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgActivateResponse>;
}
interface IMsgService_ICancel extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgCancelRequest, provenance_marker_v1_tx_pb.MsgCancelResponse> {
    path: "/provenance.marker.v1.Msg/Cancel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgCancelRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgCancelRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgCancelResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgCancelResponse>;
}
interface IMsgService_IDelete extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgDeleteRequest, provenance_marker_v1_tx_pb.MsgDeleteResponse> {
    path: "/provenance.marker.v1.Msg/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgDeleteRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgDeleteRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgDeleteResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgDeleteResponse>;
}
interface IMsgService_IMint extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgMintRequest, provenance_marker_v1_tx_pb.MsgMintResponse> {
    path: "/provenance.marker.v1.Msg/Mint";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgMintRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgMintRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgMintResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgMintResponse>;
}
interface IMsgService_IBurn extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgBurnRequest, provenance_marker_v1_tx_pb.MsgBurnResponse> {
    path: "/provenance.marker.v1.Msg/Burn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgBurnRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgBurnRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgBurnResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgBurnResponse>;
}
interface IMsgService_IAddAccess extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgAddAccessRequest, provenance_marker_v1_tx_pb.MsgAddAccessResponse> {
    path: "/provenance.marker.v1.Msg/AddAccess";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgAddAccessRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgAddAccessRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgAddAccessResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgAddAccessResponse>;
}
interface IMsgService_IDeleteAccess extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgDeleteAccessRequest, provenance_marker_v1_tx_pb.MsgDeleteAccessResponse> {
    path: "/provenance.marker.v1.Msg/DeleteAccess";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgDeleteAccessRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgDeleteAccessRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgDeleteAccessResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgDeleteAccessResponse>;
}
interface IMsgService_IWithdraw extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgWithdrawRequest, provenance_marker_v1_tx_pb.MsgWithdrawResponse> {
    path: "/provenance.marker.v1.Msg/Withdraw";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgWithdrawRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgWithdrawRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgWithdrawResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgWithdrawResponse>;
}
interface IMsgService_IAddMarker extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgAddMarkerRequest, provenance_marker_v1_tx_pb.MsgAddMarkerResponse> {
    path: "/provenance.marker.v1.Msg/AddMarker";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgAddMarkerRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgAddMarkerRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgAddMarkerResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgAddMarkerResponse>;
}
interface IMsgService_ITransfer extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgTransferRequest, provenance_marker_v1_tx_pb.MsgTransferResponse> {
    path: "/provenance.marker.v1.Msg/Transfer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgTransferRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgTransferRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgTransferResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgTransferResponse>;
}
interface IMsgService_IIbcTransfer extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgIbcTransferRequest, provenance_marker_v1_tx_pb.MsgIbcTransferResponse> {
    path: "/provenance.marker.v1.Msg/IbcTransfer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgIbcTransferRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgIbcTransferRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgIbcTransferResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgIbcTransferResponse>;
}
interface IMsgService_ISetDenomMetadata extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgSetDenomMetadataRequest, provenance_marker_v1_tx_pb.MsgSetDenomMetadataResponse> {
    path: "/provenance.marker.v1.Msg/SetDenomMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgSetDenomMetadataRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgSetDenomMetadataRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgSetDenomMetadataResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgSetDenomMetadataResponse>;
}
interface IMsgService_IGrantAllowance extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgGrantAllowanceRequest, provenance_marker_v1_tx_pb.MsgGrantAllowanceResponse> {
    path: "/provenance.marker.v1.Msg/GrantAllowance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgGrantAllowanceRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgGrantAllowanceRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgGrantAllowanceResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgGrantAllowanceResponse>;
}
interface IMsgService_IAddFinalizeActivateMarker extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerRequest, provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerResponse> {
    path: "/provenance.marker.v1.Msg/AddFinalizeActivateMarker";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerResponse>;
}
interface IMsgService_ISupplyIncreaseProposal extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalRequest, provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalResponse> {
    path: "/provenance.marker.v1.Msg/SupplyIncreaseProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalResponse>;
}
interface IMsgService_ISupplyDecreaseProposal extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalRequest, provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalResponse> {
    path: "/provenance.marker.v1.Msg/SupplyDecreaseProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalResponse>;
}
interface IMsgService_IUpdateRequiredAttributes extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesRequest, provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesResponse> {
    path: "/provenance.marker.v1.Msg/UpdateRequiredAttributes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesResponse>;
}
interface IMsgService_IUpdateForcedTransfer extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgUpdateForcedTransferRequest, provenance_marker_v1_tx_pb.MsgUpdateForcedTransferResponse> {
    path: "/provenance.marker.v1.Msg/UpdateForcedTransfer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgUpdateForcedTransferRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgUpdateForcedTransferRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgUpdateForcedTransferResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgUpdateForcedTransferResponse>;
}
interface IMsgService_ISetAccountData extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgSetAccountDataRequest, provenance_marker_v1_tx_pb.MsgSetAccountDataResponse> {
    path: "/provenance.marker.v1.Msg/SetAccountData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgSetAccountDataRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgSetAccountDataRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgSetAccountDataResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgSetAccountDataResponse>;
}
interface IMsgService_IUpdateSendDenyList extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgUpdateSendDenyListRequest, provenance_marker_v1_tx_pb.MsgUpdateSendDenyListResponse> {
    path: "/provenance.marker.v1.Msg/UpdateSendDenyList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgUpdateSendDenyListRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgUpdateSendDenyListRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgUpdateSendDenyListResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgUpdateSendDenyListResponse>;
}
interface IMsgService_IAddNetAssetValues extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgAddNetAssetValuesRequest, provenance_marker_v1_tx_pb.MsgAddNetAssetValuesResponse> {
    path: "/provenance.marker.v1.Msg/AddNetAssetValues";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgAddNetAssetValuesRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgAddNetAssetValuesRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgAddNetAssetValuesResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgAddNetAssetValuesResponse>;
}
interface IMsgService_ISetAdministratorProposal extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgSetAdministratorProposalRequest, provenance_marker_v1_tx_pb.MsgSetAdministratorProposalResponse> {
    path: "/provenance.marker.v1.Msg/SetAdministratorProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgSetAdministratorProposalRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgSetAdministratorProposalRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgSetAdministratorProposalResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgSetAdministratorProposalResponse>;
}
interface IMsgService_IRemoveAdministratorProposal extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalRequest, provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalResponse> {
    path: "/provenance.marker.v1.Msg/RemoveAdministratorProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalResponse>;
}
interface IMsgService_IChangeStatusProposal extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgChangeStatusProposalRequest, provenance_marker_v1_tx_pb.MsgChangeStatusProposalResponse> {
    path: "/provenance.marker.v1.Msg/ChangeStatusProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgChangeStatusProposalRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgChangeStatusProposalRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgChangeStatusProposalResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgChangeStatusProposalResponse>;
}
interface IMsgService_IWithdrawEscrowProposal extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalRequest, provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalResponse> {
    path: "/provenance.marker.v1.Msg/WithdrawEscrowProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalResponse>;
}
interface IMsgService_ISetDenomMetadataProposal extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalRequest, provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalResponse> {
    path: "/provenance.marker.v1.Msg/SetDenomMetadataProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalResponse>;
}
interface IMsgService_IUpdateParams extends grpc.MethodDefinition<provenance_marker_v1_tx_pb.MsgUpdateParamsRequest, provenance_marker_v1_tx_pb.MsgUpdateParamsResponse> {
    path: "/provenance.marker.v1.Msg/UpdateParams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgUpdateParamsRequest>;
    requestDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgUpdateParamsRequest>;
    responseSerialize: grpc.serialize<provenance_marker_v1_tx_pb.MsgUpdateParamsResponse>;
    responseDeserialize: grpc.deserialize<provenance_marker_v1_tx_pb.MsgUpdateParamsResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
    finalize: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgFinalizeRequest, provenance_marker_v1_tx_pb.MsgFinalizeResponse>;
    activate: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgActivateRequest, provenance_marker_v1_tx_pb.MsgActivateResponse>;
    cancel: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgCancelRequest, provenance_marker_v1_tx_pb.MsgCancelResponse>;
    delete: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgDeleteRequest, provenance_marker_v1_tx_pb.MsgDeleteResponse>;
    mint: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgMintRequest, provenance_marker_v1_tx_pb.MsgMintResponse>;
    burn: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgBurnRequest, provenance_marker_v1_tx_pb.MsgBurnResponse>;
    addAccess: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgAddAccessRequest, provenance_marker_v1_tx_pb.MsgAddAccessResponse>;
    deleteAccess: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgDeleteAccessRequest, provenance_marker_v1_tx_pb.MsgDeleteAccessResponse>;
    withdraw: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgWithdrawRequest, provenance_marker_v1_tx_pb.MsgWithdrawResponse>;
    addMarker: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgAddMarkerRequest, provenance_marker_v1_tx_pb.MsgAddMarkerResponse>;
    transfer: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgTransferRequest, provenance_marker_v1_tx_pb.MsgTransferResponse>;
    ibcTransfer: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgIbcTransferRequest, provenance_marker_v1_tx_pb.MsgIbcTransferResponse>;
    setDenomMetadata: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgSetDenomMetadataRequest, provenance_marker_v1_tx_pb.MsgSetDenomMetadataResponse>;
    grantAllowance: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgGrantAllowanceRequest, provenance_marker_v1_tx_pb.MsgGrantAllowanceResponse>;
    addFinalizeActivateMarker: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerRequest, provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerResponse>;
    supplyIncreaseProposal: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalRequest, provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalResponse>;
    supplyDecreaseProposal: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalRequest, provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalResponse>;
    updateRequiredAttributes: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesRequest, provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesResponse>;
    updateForcedTransfer: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgUpdateForcedTransferRequest, provenance_marker_v1_tx_pb.MsgUpdateForcedTransferResponse>;
    setAccountData: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgSetAccountDataRequest, provenance_marker_v1_tx_pb.MsgSetAccountDataResponse>;
    updateSendDenyList: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgUpdateSendDenyListRequest, provenance_marker_v1_tx_pb.MsgUpdateSendDenyListResponse>;
    addNetAssetValues: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgAddNetAssetValuesRequest, provenance_marker_v1_tx_pb.MsgAddNetAssetValuesResponse>;
    setAdministratorProposal: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgSetAdministratorProposalRequest, provenance_marker_v1_tx_pb.MsgSetAdministratorProposalResponse>;
    removeAdministratorProposal: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalRequest, provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalResponse>;
    changeStatusProposal: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgChangeStatusProposalRequest, provenance_marker_v1_tx_pb.MsgChangeStatusProposalResponse>;
    withdrawEscrowProposal: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalRequest, provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalResponse>;
    setDenomMetadataProposal: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalRequest, provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalResponse>;
    updateParams: grpc.handleUnaryCall<provenance_marker_v1_tx_pb.MsgUpdateParamsRequest, provenance_marker_v1_tx_pb.MsgUpdateParamsResponse>;
}

export interface IMsgClient {
    finalize(request: provenance_marker_v1_tx_pb.MsgFinalizeRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgFinalizeResponse) => void): grpc.ClientUnaryCall;
    finalize(request: provenance_marker_v1_tx_pb.MsgFinalizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgFinalizeResponse) => void): grpc.ClientUnaryCall;
    finalize(request: provenance_marker_v1_tx_pb.MsgFinalizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgFinalizeResponse) => void): grpc.ClientUnaryCall;
    activate(request: provenance_marker_v1_tx_pb.MsgActivateRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgActivateResponse) => void): grpc.ClientUnaryCall;
    activate(request: provenance_marker_v1_tx_pb.MsgActivateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgActivateResponse) => void): grpc.ClientUnaryCall;
    activate(request: provenance_marker_v1_tx_pb.MsgActivateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgActivateResponse) => void): grpc.ClientUnaryCall;
    cancel(request: provenance_marker_v1_tx_pb.MsgCancelRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgCancelResponse) => void): grpc.ClientUnaryCall;
    cancel(request: provenance_marker_v1_tx_pb.MsgCancelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgCancelResponse) => void): grpc.ClientUnaryCall;
    cancel(request: provenance_marker_v1_tx_pb.MsgCancelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgCancelResponse) => void): grpc.ClientUnaryCall;
    delete(request: provenance_marker_v1_tx_pb.MsgDeleteRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgDeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: provenance_marker_v1_tx_pb.MsgDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgDeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: provenance_marker_v1_tx_pb.MsgDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgDeleteResponse) => void): grpc.ClientUnaryCall;
    mint(request: provenance_marker_v1_tx_pb.MsgMintRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgMintResponse) => void): grpc.ClientUnaryCall;
    mint(request: provenance_marker_v1_tx_pb.MsgMintRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgMintResponse) => void): grpc.ClientUnaryCall;
    mint(request: provenance_marker_v1_tx_pb.MsgMintRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgMintResponse) => void): grpc.ClientUnaryCall;
    burn(request: provenance_marker_v1_tx_pb.MsgBurnRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgBurnResponse) => void): grpc.ClientUnaryCall;
    burn(request: provenance_marker_v1_tx_pb.MsgBurnRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgBurnResponse) => void): grpc.ClientUnaryCall;
    burn(request: provenance_marker_v1_tx_pb.MsgBurnRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgBurnResponse) => void): grpc.ClientUnaryCall;
    addAccess(request: provenance_marker_v1_tx_pb.MsgAddAccessRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddAccessResponse) => void): grpc.ClientUnaryCall;
    addAccess(request: provenance_marker_v1_tx_pb.MsgAddAccessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddAccessResponse) => void): grpc.ClientUnaryCall;
    addAccess(request: provenance_marker_v1_tx_pb.MsgAddAccessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddAccessResponse) => void): grpc.ClientUnaryCall;
    deleteAccess(request: provenance_marker_v1_tx_pb.MsgDeleteAccessRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgDeleteAccessResponse) => void): grpc.ClientUnaryCall;
    deleteAccess(request: provenance_marker_v1_tx_pb.MsgDeleteAccessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgDeleteAccessResponse) => void): grpc.ClientUnaryCall;
    deleteAccess(request: provenance_marker_v1_tx_pb.MsgDeleteAccessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgDeleteAccessResponse) => void): grpc.ClientUnaryCall;
    withdraw(request: provenance_marker_v1_tx_pb.MsgWithdrawRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgWithdrawResponse) => void): grpc.ClientUnaryCall;
    withdraw(request: provenance_marker_v1_tx_pb.MsgWithdrawRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgWithdrawResponse) => void): grpc.ClientUnaryCall;
    withdraw(request: provenance_marker_v1_tx_pb.MsgWithdrawRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgWithdrawResponse) => void): grpc.ClientUnaryCall;
    addMarker(request: provenance_marker_v1_tx_pb.MsgAddMarkerRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddMarkerResponse) => void): grpc.ClientUnaryCall;
    addMarker(request: provenance_marker_v1_tx_pb.MsgAddMarkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddMarkerResponse) => void): grpc.ClientUnaryCall;
    addMarker(request: provenance_marker_v1_tx_pb.MsgAddMarkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddMarkerResponse) => void): grpc.ClientUnaryCall;
    transfer(request: provenance_marker_v1_tx_pb.MsgTransferRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    transfer(request: provenance_marker_v1_tx_pb.MsgTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    transfer(request: provenance_marker_v1_tx_pb.MsgTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    ibcTransfer(request: provenance_marker_v1_tx_pb.MsgIbcTransferRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgIbcTransferResponse) => void): grpc.ClientUnaryCall;
    ibcTransfer(request: provenance_marker_v1_tx_pb.MsgIbcTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgIbcTransferResponse) => void): grpc.ClientUnaryCall;
    ibcTransfer(request: provenance_marker_v1_tx_pb.MsgIbcTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgIbcTransferResponse) => void): grpc.ClientUnaryCall;
    setDenomMetadata(request: provenance_marker_v1_tx_pb.MsgSetDenomMetadataRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    setDenomMetadata(request: provenance_marker_v1_tx_pb.MsgSetDenomMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    setDenomMetadata(request: provenance_marker_v1_tx_pb.MsgSetDenomMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    grantAllowance(request: provenance_marker_v1_tx_pb.MsgGrantAllowanceRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgGrantAllowanceResponse) => void): grpc.ClientUnaryCall;
    grantAllowance(request: provenance_marker_v1_tx_pb.MsgGrantAllowanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgGrantAllowanceResponse) => void): grpc.ClientUnaryCall;
    grantAllowance(request: provenance_marker_v1_tx_pb.MsgGrantAllowanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgGrantAllowanceResponse) => void): grpc.ClientUnaryCall;
    addFinalizeActivateMarker(request: provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerResponse) => void): grpc.ClientUnaryCall;
    addFinalizeActivateMarker(request: provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerResponse) => void): grpc.ClientUnaryCall;
    addFinalizeActivateMarker(request: provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerResponse) => void): grpc.ClientUnaryCall;
    supplyIncreaseProposal(request: provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalResponse) => void): grpc.ClientUnaryCall;
    supplyIncreaseProposal(request: provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalResponse) => void): grpc.ClientUnaryCall;
    supplyIncreaseProposal(request: provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalResponse) => void): grpc.ClientUnaryCall;
    supplyDecreaseProposal(request: provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalResponse) => void): grpc.ClientUnaryCall;
    supplyDecreaseProposal(request: provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalResponse) => void): grpc.ClientUnaryCall;
    supplyDecreaseProposal(request: provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalResponse) => void): grpc.ClientUnaryCall;
    updateRequiredAttributes(request: provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesResponse) => void): grpc.ClientUnaryCall;
    updateRequiredAttributes(request: provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesResponse) => void): grpc.ClientUnaryCall;
    updateRequiredAttributes(request: provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesResponse) => void): grpc.ClientUnaryCall;
    updateForcedTransfer(request: provenance_marker_v1_tx_pb.MsgUpdateForcedTransferRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateForcedTransferResponse) => void): grpc.ClientUnaryCall;
    updateForcedTransfer(request: provenance_marker_v1_tx_pb.MsgUpdateForcedTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateForcedTransferResponse) => void): grpc.ClientUnaryCall;
    updateForcedTransfer(request: provenance_marker_v1_tx_pb.MsgUpdateForcedTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateForcedTransferResponse) => void): grpc.ClientUnaryCall;
    setAccountData(request: provenance_marker_v1_tx_pb.MsgSetAccountDataRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    setAccountData(request: provenance_marker_v1_tx_pb.MsgSetAccountDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    setAccountData(request: provenance_marker_v1_tx_pb.MsgSetAccountDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    updateSendDenyList(request: provenance_marker_v1_tx_pb.MsgUpdateSendDenyListRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateSendDenyListResponse) => void): grpc.ClientUnaryCall;
    updateSendDenyList(request: provenance_marker_v1_tx_pb.MsgUpdateSendDenyListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateSendDenyListResponse) => void): grpc.ClientUnaryCall;
    updateSendDenyList(request: provenance_marker_v1_tx_pb.MsgUpdateSendDenyListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateSendDenyListResponse) => void): grpc.ClientUnaryCall;
    addNetAssetValues(request: provenance_marker_v1_tx_pb.MsgAddNetAssetValuesRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    addNetAssetValues(request: provenance_marker_v1_tx_pb.MsgAddNetAssetValuesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    addNetAssetValues(request: provenance_marker_v1_tx_pb.MsgAddNetAssetValuesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    setAdministratorProposal(request: provenance_marker_v1_tx_pb.MsgSetAdministratorProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetAdministratorProposalResponse) => void): grpc.ClientUnaryCall;
    setAdministratorProposal(request: provenance_marker_v1_tx_pb.MsgSetAdministratorProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetAdministratorProposalResponse) => void): grpc.ClientUnaryCall;
    setAdministratorProposal(request: provenance_marker_v1_tx_pb.MsgSetAdministratorProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetAdministratorProposalResponse) => void): grpc.ClientUnaryCall;
    removeAdministratorProposal(request: provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalResponse) => void): grpc.ClientUnaryCall;
    removeAdministratorProposal(request: provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalResponse) => void): grpc.ClientUnaryCall;
    removeAdministratorProposal(request: provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalResponse) => void): grpc.ClientUnaryCall;
    changeStatusProposal(request: provenance_marker_v1_tx_pb.MsgChangeStatusProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgChangeStatusProposalResponse) => void): grpc.ClientUnaryCall;
    changeStatusProposal(request: provenance_marker_v1_tx_pb.MsgChangeStatusProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgChangeStatusProposalResponse) => void): grpc.ClientUnaryCall;
    changeStatusProposal(request: provenance_marker_v1_tx_pb.MsgChangeStatusProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgChangeStatusProposalResponse) => void): grpc.ClientUnaryCall;
    withdrawEscrowProposal(request: provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalResponse) => void): grpc.ClientUnaryCall;
    withdrawEscrowProposal(request: provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalResponse) => void): grpc.ClientUnaryCall;
    withdrawEscrowProposal(request: provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalResponse) => void): grpc.ClientUnaryCall;
    setDenomMetadataProposal(request: provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalResponse) => void): grpc.ClientUnaryCall;
    setDenomMetadataProposal(request: provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalResponse) => void): grpc.ClientUnaryCall;
    setDenomMetadataProposal(request: provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalResponse) => void): grpc.ClientUnaryCall;
    updateParams(request: provenance_marker_v1_tx_pb.MsgUpdateParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    updateParams(request: provenance_marker_v1_tx_pb.MsgUpdateParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    updateParams(request: provenance_marker_v1_tx_pb.MsgUpdateParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public finalize(request: provenance_marker_v1_tx_pb.MsgFinalizeRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgFinalizeResponse) => void): grpc.ClientUnaryCall;
    public finalize(request: provenance_marker_v1_tx_pb.MsgFinalizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgFinalizeResponse) => void): grpc.ClientUnaryCall;
    public finalize(request: provenance_marker_v1_tx_pb.MsgFinalizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgFinalizeResponse) => void): grpc.ClientUnaryCall;
    public activate(request: provenance_marker_v1_tx_pb.MsgActivateRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgActivateResponse) => void): grpc.ClientUnaryCall;
    public activate(request: provenance_marker_v1_tx_pb.MsgActivateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgActivateResponse) => void): grpc.ClientUnaryCall;
    public activate(request: provenance_marker_v1_tx_pb.MsgActivateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgActivateResponse) => void): grpc.ClientUnaryCall;
    public cancel(request: provenance_marker_v1_tx_pb.MsgCancelRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgCancelResponse) => void): grpc.ClientUnaryCall;
    public cancel(request: provenance_marker_v1_tx_pb.MsgCancelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgCancelResponse) => void): grpc.ClientUnaryCall;
    public cancel(request: provenance_marker_v1_tx_pb.MsgCancelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgCancelResponse) => void): grpc.ClientUnaryCall;
    public delete(request: provenance_marker_v1_tx_pb.MsgDeleteRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgDeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: provenance_marker_v1_tx_pb.MsgDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgDeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: provenance_marker_v1_tx_pb.MsgDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgDeleteResponse) => void): grpc.ClientUnaryCall;
    public mint(request: provenance_marker_v1_tx_pb.MsgMintRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgMintResponse) => void): grpc.ClientUnaryCall;
    public mint(request: provenance_marker_v1_tx_pb.MsgMintRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgMintResponse) => void): grpc.ClientUnaryCall;
    public mint(request: provenance_marker_v1_tx_pb.MsgMintRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgMintResponse) => void): grpc.ClientUnaryCall;
    public burn(request: provenance_marker_v1_tx_pb.MsgBurnRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgBurnResponse) => void): grpc.ClientUnaryCall;
    public burn(request: provenance_marker_v1_tx_pb.MsgBurnRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgBurnResponse) => void): grpc.ClientUnaryCall;
    public burn(request: provenance_marker_v1_tx_pb.MsgBurnRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgBurnResponse) => void): grpc.ClientUnaryCall;
    public addAccess(request: provenance_marker_v1_tx_pb.MsgAddAccessRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddAccessResponse) => void): grpc.ClientUnaryCall;
    public addAccess(request: provenance_marker_v1_tx_pb.MsgAddAccessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddAccessResponse) => void): grpc.ClientUnaryCall;
    public addAccess(request: provenance_marker_v1_tx_pb.MsgAddAccessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddAccessResponse) => void): grpc.ClientUnaryCall;
    public deleteAccess(request: provenance_marker_v1_tx_pb.MsgDeleteAccessRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgDeleteAccessResponse) => void): grpc.ClientUnaryCall;
    public deleteAccess(request: provenance_marker_v1_tx_pb.MsgDeleteAccessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgDeleteAccessResponse) => void): grpc.ClientUnaryCall;
    public deleteAccess(request: provenance_marker_v1_tx_pb.MsgDeleteAccessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgDeleteAccessResponse) => void): grpc.ClientUnaryCall;
    public withdraw(request: provenance_marker_v1_tx_pb.MsgWithdrawRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgWithdrawResponse) => void): grpc.ClientUnaryCall;
    public withdraw(request: provenance_marker_v1_tx_pb.MsgWithdrawRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgWithdrawResponse) => void): grpc.ClientUnaryCall;
    public withdraw(request: provenance_marker_v1_tx_pb.MsgWithdrawRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgWithdrawResponse) => void): grpc.ClientUnaryCall;
    public addMarker(request: provenance_marker_v1_tx_pb.MsgAddMarkerRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddMarkerResponse) => void): grpc.ClientUnaryCall;
    public addMarker(request: provenance_marker_v1_tx_pb.MsgAddMarkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddMarkerResponse) => void): grpc.ClientUnaryCall;
    public addMarker(request: provenance_marker_v1_tx_pb.MsgAddMarkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddMarkerResponse) => void): grpc.ClientUnaryCall;
    public transfer(request: provenance_marker_v1_tx_pb.MsgTransferRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    public transfer(request: provenance_marker_v1_tx_pb.MsgTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    public transfer(request: provenance_marker_v1_tx_pb.MsgTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgTransferResponse) => void): grpc.ClientUnaryCall;
    public ibcTransfer(request: provenance_marker_v1_tx_pb.MsgIbcTransferRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgIbcTransferResponse) => void): grpc.ClientUnaryCall;
    public ibcTransfer(request: provenance_marker_v1_tx_pb.MsgIbcTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgIbcTransferResponse) => void): grpc.ClientUnaryCall;
    public ibcTransfer(request: provenance_marker_v1_tx_pb.MsgIbcTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgIbcTransferResponse) => void): grpc.ClientUnaryCall;
    public setDenomMetadata(request: provenance_marker_v1_tx_pb.MsgSetDenomMetadataRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public setDenomMetadata(request: provenance_marker_v1_tx_pb.MsgSetDenomMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public setDenomMetadata(request: provenance_marker_v1_tx_pb.MsgSetDenomMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetDenomMetadataResponse) => void): grpc.ClientUnaryCall;
    public grantAllowance(request: provenance_marker_v1_tx_pb.MsgGrantAllowanceRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgGrantAllowanceResponse) => void): grpc.ClientUnaryCall;
    public grantAllowance(request: provenance_marker_v1_tx_pb.MsgGrantAllowanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgGrantAllowanceResponse) => void): grpc.ClientUnaryCall;
    public grantAllowance(request: provenance_marker_v1_tx_pb.MsgGrantAllowanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgGrantAllowanceResponse) => void): grpc.ClientUnaryCall;
    public addFinalizeActivateMarker(request: provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerResponse) => void): grpc.ClientUnaryCall;
    public addFinalizeActivateMarker(request: provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerResponse) => void): grpc.ClientUnaryCall;
    public addFinalizeActivateMarker(request: provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddFinalizeActivateMarkerResponse) => void): grpc.ClientUnaryCall;
    public supplyIncreaseProposal(request: provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalResponse) => void): grpc.ClientUnaryCall;
    public supplyIncreaseProposal(request: provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalResponse) => void): grpc.ClientUnaryCall;
    public supplyIncreaseProposal(request: provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSupplyIncreaseProposalResponse) => void): grpc.ClientUnaryCall;
    public supplyDecreaseProposal(request: provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalResponse) => void): grpc.ClientUnaryCall;
    public supplyDecreaseProposal(request: provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalResponse) => void): grpc.ClientUnaryCall;
    public supplyDecreaseProposal(request: provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSupplyDecreaseProposalResponse) => void): grpc.ClientUnaryCall;
    public updateRequiredAttributes(request: provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesResponse) => void): grpc.ClientUnaryCall;
    public updateRequiredAttributes(request: provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesResponse) => void): grpc.ClientUnaryCall;
    public updateRequiredAttributes(request: provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateRequiredAttributesResponse) => void): grpc.ClientUnaryCall;
    public updateForcedTransfer(request: provenance_marker_v1_tx_pb.MsgUpdateForcedTransferRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateForcedTransferResponse) => void): grpc.ClientUnaryCall;
    public updateForcedTransfer(request: provenance_marker_v1_tx_pb.MsgUpdateForcedTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateForcedTransferResponse) => void): grpc.ClientUnaryCall;
    public updateForcedTransfer(request: provenance_marker_v1_tx_pb.MsgUpdateForcedTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateForcedTransferResponse) => void): grpc.ClientUnaryCall;
    public setAccountData(request: provenance_marker_v1_tx_pb.MsgSetAccountDataRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    public setAccountData(request: provenance_marker_v1_tx_pb.MsgSetAccountDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    public setAccountData(request: provenance_marker_v1_tx_pb.MsgSetAccountDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetAccountDataResponse) => void): grpc.ClientUnaryCall;
    public updateSendDenyList(request: provenance_marker_v1_tx_pb.MsgUpdateSendDenyListRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateSendDenyListResponse) => void): grpc.ClientUnaryCall;
    public updateSendDenyList(request: provenance_marker_v1_tx_pb.MsgUpdateSendDenyListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateSendDenyListResponse) => void): grpc.ClientUnaryCall;
    public updateSendDenyList(request: provenance_marker_v1_tx_pb.MsgUpdateSendDenyListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateSendDenyListResponse) => void): grpc.ClientUnaryCall;
    public addNetAssetValues(request: provenance_marker_v1_tx_pb.MsgAddNetAssetValuesRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    public addNetAssetValues(request: provenance_marker_v1_tx_pb.MsgAddNetAssetValuesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    public addNetAssetValues(request: provenance_marker_v1_tx_pb.MsgAddNetAssetValuesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgAddNetAssetValuesResponse) => void): grpc.ClientUnaryCall;
    public setAdministratorProposal(request: provenance_marker_v1_tx_pb.MsgSetAdministratorProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetAdministratorProposalResponse) => void): grpc.ClientUnaryCall;
    public setAdministratorProposal(request: provenance_marker_v1_tx_pb.MsgSetAdministratorProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetAdministratorProposalResponse) => void): grpc.ClientUnaryCall;
    public setAdministratorProposal(request: provenance_marker_v1_tx_pb.MsgSetAdministratorProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetAdministratorProposalResponse) => void): grpc.ClientUnaryCall;
    public removeAdministratorProposal(request: provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalResponse) => void): grpc.ClientUnaryCall;
    public removeAdministratorProposal(request: provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalResponse) => void): grpc.ClientUnaryCall;
    public removeAdministratorProposal(request: provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgRemoveAdministratorProposalResponse) => void): grpc.ClientUnaryCall;
    public changeStatusProposal(request: provenance_marker_v1_tx_pb.MsgChangeStatusProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgChangeStatusProposalResponse) => void): grpc.ClientUnaryCall;
    public changeStatusProposal(request: provenance_marker_v1_tx_pb.MsgChangeStatusProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgChangeStatusProposalResponse) => void): grpc.ClientUnaryCall;
    public changeStatusProposal(request: provenance_marker_v1_tx_pb.MsgChangeStatusProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgChangeStatusProposalResponse) => void): grpc.ClientUnaryCall;
    public withdrawEscrowProposal(request: provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalResponse) => void): grpc.ClientUnaryCall;
    public withdrawEscrowProposal(request: provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalResponse) => void): grpc.ClientUnaryCall;
    public withdrawEscrowProposal(request: provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgWithdrawEscrowProposalResponse) => void): grpc.ClientUnaryCall;
    public setDenomMetadataProposal(request: provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalResponse) => void): grpc.ClientUnaryCall;
    public setDenomMetadataProposal(request: provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalResponse) => void): grpc.ClientUnaryCall;
    public setDenomMetadataProposal(request: provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgSetDenomMetadataProposalResponse) => void): grpc.ClientUnaryCall;
    public updateParams(request: provenance_marker_v1_tx_pb.MsgUpdateParamsRequest, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    public updateParams(request: provenance_marker_v1_tx_pb.MsgUpdateParamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
    public updateParams(request: provenance_marker_v1_tx_pb.MsgUpdateParamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_marker_v1_tx_pb.MsgUpdateParamsResponse) => void): grpc.ClientUnaryCall;
}
