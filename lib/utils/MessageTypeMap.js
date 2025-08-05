"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTypeMap = void 0;
var cosmos_auth_v1beta1_auth_pb = require("../proto/cosmos/auth/v1beta1/auth_pb");
var cosmos_bank_v1beta1_bank_pb = require("../proto/cosmos/bank/v1beta1/bank_pb");
var cosmos_bank_v1beta1_tx_pb = require("../proto/cosmos/bank/v1beta1/tx_pb");
var cosmos_crypto_secp256k1_keys_pb = require("../proto/cosmos/crypto/secp256k1/keys_pb");
var cosmwasm_wasm_v1_query_pb = require("../proto/cosmwasm/wasm/v1/query_pb");
var cosmwasm_wasm_v1_tx_pb = require("../proto/cosmwasm/wasm/v1/tx_pb");
var provenance_attribute_v1_attribute_pb = require("../proto/provenance/attribute/v1/attribute_pb");
var provenance_attribute_v1_query_pb = require("../proto/provenance/attribute/v1/query_pb");
var provenance_attribute_v1_tx_pb = require("../proto/provenance/attribute/v1/tx_pb");
var provenance_marker_v1_accessgrant_pb = require("../proto/provenance/marker/v1/accessgrant_pb");
var provenance_marker_v1_authz_pb = require("../proto/provenance/marker/v1/authz_pb");
var provenance_marker_v1_marker_pb = require("../proto/provenance/marker/v1/marker_pb");
var provenance_marker_v1_proposals_pb = require("../proto/provenance/marker/v1/proposals_pb");
var provenance_marker_v1_query_pb = require("../proto/provenance/marker/v1/query_pb");
var provenance_marker_v1_tx_pb = require("../proto/provenance/marker/v1/tx_pb");
var provenance_metadata_v1_events_pb = require("../proto/provenance/metadata/v1/events_pb");
var provenance_name_v1_name_pb = require("../proto/provenance/name/v1/name_pb");
var provenance_name_v1_query_pb = require("../proto/provenance/name/v1/query_pb");
var provenance_name_v1_tx_pb = require("../proto/provenance/name/v1/tx_pb");
var COSMOS_AUTH_V1BETA1_TYPE_PACKAGE = 'cosmos.auth.v1beta1';
var COSMOS_BANK_V1BETA1_TYPE_PACKAGE = 'cosmos.bank.v1beta1';
var COSMOS_CRYPTO_SECP256K1_TYPE_PACKAGE = 'cosmos.crypto.secp256k1';
var COSMWASM_WASM_V1_TYPE_PACKAGE = 'cosmwasm.wasm.v1';
var PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE = 'provenance.attribute.v1';
var PROVENANCE_MARKER_V1_TYPE_PACKAGE = 'provenance.marker.v1';
var PROVENANCE_METADATA_V1_TYPE_PACKAGE = 'provenance.metadata.v1';
var PROVENANCE_NAME_V1_TYPE_PACKAGE = 'provenance.name.v1';
exports.MessageTypeMap = [
    // cosmos.auth.v1beta1/auth.proto
    {
        type: cosmos_auth_v1beta1_auth_pb.BaseAccount,
        typeUrl: "".concat(COSMOS_AUTH_V1BETA1_TYPE_PACKAGE, ".BaseAccount")
    },
    {
        type: cosmos_auth_v1beta1_auth_pb.ModuleAccount,
        typeUrl: "".concat(COSMOS_AUTH_V1BETA1_TYPE_PACKAGE, ".ModuleAccount")
    },
    {
        type: cosmos_auth_v1beta1_auth_pb.Params,
        typeUrl: "".concat(COSMOS_AUTH_V1BETA1_TYPE_PACKAGE, ".Params")
    },
    // cosmos.bank.v1beta1/bank.proto
    {
        type: cosmos_bank_v1beta1_bank_pb.DenomUnit,
        typeUrl: "".concat(COSMOS_BANK_V1BETA1_TYPE_PACKAGE, ".DenomUnit")
    },
    {
        type: cosmos_bank_v1beta1_bank_pb.Input,
        typeUrl: "".concat(COSMOS_BANK_V1BETA1_TYPE_PACKAGE, ".Input")
    },
    {
        type: cosmos_bank_v1beta1_bank_pb.Metadata,
        typeUrl: "".concat(COSMOS_BANK_V1BETA1_TYPE_PACKAGE, ".Metadata")
    },
    {
        type: cosmos_bank_v1beta1_bank_pb.Output,
        typeUrl: "".concat(COSMOS_BANK_V1BETA1_TYPE_PACKAGE, ".Output")
    },
    {
        type: cosmos_bank_v1beta1_bank_pb.Params,
        typeUrl: "".concat(COSMOS_BANK_V1BETA1_TYPE_PACKAGE, ".Params")
    },
    {
        type: cosmos_bank_v1beta1_bank_pb.SendEnabled,
        typeUrl: "".concat(COSMOS_BANK_V1BETA1_TYPE_PACKAGE, ".SendEnabled")
    },
    {
        type: cosmos_bank_v1beta1_bank_pb.Supply,
        typeUrl: "".concat(COSMOS_BANK_V1BETA1_TYPE_PACKAGE, ".Supply")
    },
    // cosmos.bank.v1beta1/tx.proto
    {
        type: cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
        typeUrl: "".concat(COSMOS_BANK_V1BETA1_TYPE_PACKAGE, ".MsgMultiSend")
    },
    {
        type: cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse,
        typeUrl: "".concat(COSMOS_BANK_V1BETA1_TYPE_PACKAGE, ".MsgMultiSendResponse")
    },
    {
        type: cosmos_bank_v1beta1_tx_pb.MsgSend,
        typeUrl: "".concat(COSMOS_BANK_V1BETA1_TYPE_PACKAGE, ".MsgSend")
    },
    {
        type: cosmos_bank_v1beta1_tx_pb.MsgSendResponse,
        typeUrl: "".concat(COSMOS_BANK_V1BETA1_TYPE_PACKAGE, ".MsgSendResponse")
    },
    // cosmos.crypto.secp256k1/keys.proto
    {
        type: cosmos_crypto_secp256k1_keys_pb.PrivKey,
        typeUrl: "".concat(COSMOS_CRYPTO_SECP256K1_TYPE_PACKAGE, ".PrivKey")
    },
    {
        type: cosmos_crypto_secp256k1_keys_pb.PubKey,
        typeUrl: "".concat(COSMOS_CRYPTO_SECP256K1_TYPE_PACKAGE, ".PubKey")
    },
    // cosmwasm.wasm.v1/query.proto
    {
        type: cosmwasm_wasm_v1_query_pb.CodeInfoResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".CodeInfoResponse")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryAllContractStateRequest,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryAllContractStateRequest")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryAllContractStateResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryAllContractStateResponse")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryCodeRequest,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryCodeRequest")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryCodeResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryCodeResponse")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryCodesRequest,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryCodesRequest")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryCodesResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryCodesResponse")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryContractHistoryRequest,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryContractHistoryRequest")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryContractHistoryResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryContractHistoryResponse")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryContractInfoRequest,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryContractInfoRequest")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryContractInfoResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryContractInfoResponse")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeRequest,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryContractsByCodeRequest")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryContractsByCodeResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryContractsByCodeResponse")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryRawContractStateRequest,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryRawContractStateRequest")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QueryRawContractStateResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QueryRawContractStateResponse")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateRequest,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QuerySmartContractStateRequest")
    },
    {
        type: cosmwasm_wasm_v1_query_pb.QuerySmartContractStateResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".QuerySmartContractStateResponse")
    },
    // cosmwasm.wasm.v1/tx.proto
    {
        type: cosmwasm_wasm_v1_tx_pb.MsgClearAdmin,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".MsgClearAdmin")
    },
    {
        type: cosmwasm_wasm_v1_tx_pb.MsgClearAdminResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".MsgClearAdminResponse")
    },
    {
        type: cosmwasm_wasm_v1_tx_pb.MsgExecuteContract,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".MsgExecuteContract")
    },
    {
        type: cosmwasm_wasm_v1_tx_pb.MsgExecuteContractResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".MsgExecuteContractResponse")
    },
    {
        type: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".MsgInstantiateContract")
    },
    {
        type: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContractResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".MsgInstantiateContractResponse")
    },
    {
        type: cosmwasm_wasm_v1_tx_pb.MsgMigrateContract,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".MsgMigrateContract")
    },
    {
        type: cosmwasm_wasm_v1_tx_pb.MsgMigrateContractResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".MsgMigrateContractResponse")
    },
    {
        type: cosmwasm_wasm_v1_tx_pb.MsgStoreCode,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".MsgStoreCode")
    },
    {
        type: cosmwasm_wasm_v1_tx_pb.MsgStoreCodeResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".MsgStoreCodeResponse")
    },
    {
        type: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdmin,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".MsgUpdateAdmin")
    },
    {
        type: cosmwasm_wasm_v1_tx_pb.MsgUpdateAdminResponse,
        typeUrl: "".concat(COSMWASM_WASM_V1_TYPE_PACKAGE, ".MsgUpdateAdminResponse")
    },
    // provenance.attribute.v1/attribute.proto
    {
        type: provenance_attribute_v1_attribute_pb.Attribute,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".Attribute")
    },
    {
        type: provenance_attribute_v1_attribute_pb.EventAttributeAdd,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".EventAttributeAdd")
    },
    {
        type: provenance_attribute_v1_attribute_pb.EventAttributeDelete,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".EventAttributeDelete")
    },
    {
        type: provenance_attribute_v1_attribute_pb.EventAttributeDistinctDelete,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".EventAttributeDistinctDelete")
    },
    {
        type: provenance_attribute_v1_attribute_pb.EventAttributeUpdate,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".EventAttributeUpdate")
    },
    {
        type: provenance_attribute_v1_attribute_pb.Params,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".Params")
    },
    // provenance.attribute.v1/query.proto
    {
        type: provenance_attribute_v1_query_pb.QueryAttributeRequest,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".QueryAttributeRequest")
    },
    {
        type: provenance_attribute_v1_query_pb.QueryAttributeResponse,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".QueryAttributeResponse")
    },
    {
        type: provenance_attribute_v1_query_pb.QueryAttributesRequest,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".QueryAttributesRequest")
    },
    {
        type: provenance_attribute_v1_query_pb.QueryAttributesResponse,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".QueryAttributesResponse")
    },
    {
        type: provenance_attribute_v1_query_pb.QueryParamsRequest,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".QueryParamsRequest")
    },
    {
        type: provenance_attribute_v1_query_pb.QueryParamsResponse,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".QueryParamsResponse")
    },
    {
        type: provenance_attribute_v1_query_pb.QueryScanRequest,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".QueryScanRequest")
    },
    {
        type: provenance_attribute_v1_query_pb.QueryScanResponse,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".QueryScanResponse")
    },
    // provenance.attribute.v1/tx.proto
    {
        type: provenance_attribute_v1_tx_pb.MsgAddAttributeRequest,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".MsgAddAttributeRequest")
    },
    {
        type: provenance_attribute_v1_tx_pb.MsgAddAttributeResponse,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".MsgAddAttributeResponse")
    },
    {
        type: provenance_attribute_v1_tx_pb.MsgDeleteAttributeRequest,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".MsgDeleteAttributeRequest")
    },
    {
        type: provenance_attribute_v1_tx_pb.MsgDeleteAttributeResponse,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".MsgDeleteAttributeResponse")
    },
    {
        type: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeRequest,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".MsgDeleteDistinctAttributeRequest")
    },
    {
        type: provenance_attribute_v1_tx_pb.MsgDeleteDistinctAttributeResponse,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".MsgDeleteDistinctAttributeResponse")
    },
    {
        type: provenance_attribute_v1_tx_pb.MsgUpdateAttributeRequest,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".MsgUpdateAttributeRequest")
    },
    {
        type: provenance_attribute_v1_tx_pb.MsgUpdateAttributeResponse,
        typeUrl: "".concat(PROVENANCE_ATTRIBUTE_V1_TYPE_PACKAGE, ".MsgUpdateAttributeResponse")
    },
    // provenance.marker.v1/accessgrant.proto
    {
        type: provenance_marker_v1_accessgrant_pb.AccessGrant,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".AccessGrant")
    },
    // provenance.marker.v1/authz.proto
    {
        type: provenance_marker_v1_authz_pb.MarkerTransferAuthorization,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MarkerTransferAuthorization")
    },
    // provenance.marker.v1/marker.proto
    {
        type: provenance_marker_v1_marker_pb.EventDenomUnit,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventDenomUnit")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerAccess,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerAccess")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerActivate,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerActivate")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerAdd,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerAdd")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerAddAccess,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerAddAccess")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerBurn,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerBurn")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerCancel,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerCancel")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerDelete,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerDelete")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerDeleteAccess,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerDeleteAccess")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerFinalize,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerFinalize")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerMint,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerMint")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerSetDenomMetadata,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerSetDenomMetadata")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerTransfer,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerTransfer")
    },
    {
        type: provenance_marker_v1_marker_pb.EventMarkerWithdraw,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".EventMarkerWithdraw")
    },
    {
        type: provenance_marker_v1_marker_pb.MarkerAccount,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MarkerAccount")
    },
    {
        type: provenance_marker_v1_marker_pb.Params,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".Params")
    },
    // provenance.marker.v1/proposals.proto
    {
        type: provenance_marker_v1_proposals_pb.AddMarkerProposal,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".AddMarkerProposal")
    },
    {
        type: provenance_marker_v1_proposals_pb.ChangeStatusProposal,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".ChangeStatusProposal")
    },
    {
        type: provenance_marker_v1_proposals_pb.RemoveAdministratorProposal,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".RemoveAdministratorProposal")
    },
    {
        type: provenance_marker_v1_proposals_pb.SetAdministratorProposal,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".SetAdministratorProposal")
    },
    {
        type: provenance_marker_v1_proposals_pb.SetDenomMetadataProposal,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".SetDenomMetadataProposal")
    },
    {
        type: provenance_marker_v1_proposals_pb.SupplyDecreaseProposal,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".SupplyDecreaseProposal")
    },
    {
        type: provenance_marker_v1_proposals_pb.SupplyIncreaseProposal,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".SupplyIncreaseProposal")
    },
    {
        type: provenance_marker_v1_proposals_pb.WithdrawEscrowProposal,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".WithdrawEscrowProposal")
    },
    // provenance.marker.v1/query.proto
    {
        type: provenance_marker_v1_query_pb.Balance,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".Balance")
    },
    {
        type: provenance_marker_v1_query_pb.QueryAccessRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryAccessRequest")
    },
    {
        type: provenance_marker_v1_query_pb.QueryAccessResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryAccessResponse")
    },
    {
        type: provenance_marker_v1_query_pb.QueryAllMarkersRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryAllMarkersRequest")
    },
    {
        type: provenance_marker_v1_query_pb.QueryAllMarkersResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryAllMarkersResponse")
    },
    {
        type: provenance_marker_v1_query_pb.QueryDenomMetadataRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryDenomMetadataRequest")
    },
    {
        type: provenance_marker_v1_query_pb.QueryDenomMetadataResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryDenomMetadataResponse")
    },
    {
        type: provenance_marker_v1_query_pb.QueryEscrowRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryEscrowRequest")
    },
    {
        type: provenance_marker_v1_query_pb.QueryEscrowResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryEscrowResponse")
    },
    {
        type: provenance_marker_v1_query_pb.QueryHoldingRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryHoldingRequest")
    },
    {
        type: provenance_marker_v1_query_pb.QueryHoldingResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryHoldingResponse")
    },
    {
        type: provenance_marker_v1_query_pb.QueryMarkerRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryMarkerRequest")
    },
    {
        type: provenance_marker_v1_query_pb.QueryMarkerResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryMarkerResponse")
    },
    {
        type: provenance_marker_v1_query_pb.QueryParamsRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryParamsRequest")
    },
    {
        type: provenance_marker_v1_query_pb.QueryParamsResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QueryParamsResponse")
    },
    {
        type: provenance_marker_v1_query_pb.QuerySupplyRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QuerySupplyRequest")
    },
    {
        type: provenance_marker_v1_query_pb.QuerySupplyResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".QuerySupplyResponse")
    },
    // provenance.marker.v1/tx.proto
    {
        type: provenance_marker_v1_tx_pb.MsgActivateRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgActivateRequest")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgActivateResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgActivateResponse")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgAddAccessRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgAddAccessRequest")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgAddAccessResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgAddAccessResponse")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgAddMarkerRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgAddMarkerRequest")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgAddMarkerResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgAddMarkerResponse")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgBurnRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgBurnRequest")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgBurnResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgBurnResponse")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgCancelRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgCancelRequest")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgCancelResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgCancelResponse")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgDeleteAccessRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgDeleteAccessRequest")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgDeleteAccessResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgDeleteAccessResponse")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgDeleteRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgDeleteRequest")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgDeleteResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgDeleteResponse")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgFinalizeRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgFinalizeRequest")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgFinalizeResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgFinalizeResponse")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgMintRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgMintRequest")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgMintResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgMintResponse")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgSetDenomMetadataRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgSetDenomMetadataRequest")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgSetDenomMetadataResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgSetDenomMetadataResponse")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgTransferRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgTransferRequest")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgTransferResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgTransferResponse")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgWithdrawRequest,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgWithdrawRequest")
    },
    {
        type: provenance_marker_v1_tx_pb.MsgWithdrawResponse,
        typeUrl: "".concat(PROVENANCE_MARKER_V1_TYPE_PACKAGE, ".MsgWithdrawResponse")
    },
    // provenance.metadata.v1/events.proto
    {
        type: provenance_metadata_v1_events_pb.EventContractSpecificationCreated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventContractSpecificationCreated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventContractSpecificationDeleted,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventContractSpecificationDeleted")
    },
    {
        type: provenance_metadata_v1_events_pb.EventContractSpecificationUpdated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventContractSpecificationUpdated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventOSLocatorCreated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventOSLocatorCreated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventOSLocatorDeleted,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventOSLocatorDeleted")
    },
    {
        type: provenance_metadata_v1_events_pb.EventOSLocatorUpdated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventOSLocatorUpdated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventRecordCreated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventRecordCreated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventRecordDeleted,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventRecordDeleted")
    },
    {
        type: provenance_metadata_v1_events_pb.EventRecordSpecificationCreated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventRecordSpecificationCreated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventRecordSpecificationDeleted,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventRecordSpecificationDeleted")
    },
    {
        type: provenance_metadata_v1_events_pb.EventRecordSpecificationUpdated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventRecordSpecificationUpdated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventRecordUpdated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventRecordUpdated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventScopeCreated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventScopeCreated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventScopeDeleted,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventScopeDeleted")
    },
    {
        type: provenance_metadata_v1_events_pb.EventScopeSpecificationCreated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventScopeSpecificationCreated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventScopeSpecificationDeleted,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventScopeSpecificationDeleted")
    },
    {
        type: provenance_metadata_v1_events_pb.EventScopeSpecificationUpdated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventScopeSpecificationUpdated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventScopeUpdated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventScopeUpdated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventSessionCreated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventSessionCreated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventSessionDeleted,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventSessionDeleted")
    },
    {
        type: provenance_metadata_v1_events_pb.EventSessionUpdated,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventSessionUpdated")
    },
    {
        type: provenance_metadata_v1_events_pb.EventTxCompleted,
        typeUrl: "".concat(PROVENANCE_METADATA_V1_TYPE_PACKAGE, ".EventTxCompleted")
    },
    // provenance.metadata.v1/metadata.proto
    // provenance.metadata.v1/objectstore.proto
    // provenance.metadata.v1.p8e/p8e.proto
    // provenance.metadata.v1/query.proto
    // provenance.name.v1/scope.proto
    // provenance.name.v1/specification.proto
    // provenance.name.v1/tx.proto
    {
        type: provenance_name_v1_name_pb.CreateRootNameProposal,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".CreateRootNameProposal")
    },
    {
        type: provenance_name_v1_name_pb.EventNameBound,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".EventNameBound")
    },
    {
        type: provenance_name_v1_name_pb.EventNameUnbound,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".EventNameUnbound")
    },
    {
        type: provenance_name_v1_name_pb.NameRecord,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".NameRecord")
    },
    {
        type: provenance_name_v1_name_pb.Params,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".Params")
    },
    // provenance.name.v1/query.proto
    {
        type: provenance_name_v1_query_pb.QueryParamsRequest,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".QueryParamsRequest")
    },
    {
        type: provenance_name_v1_query_pb.QueryParamsResponse,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".QueryParamsResponse")
    },
    {
        type: provenance_name_v1_query_pb.QueryResolveRequest,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".QueryResolveRequest")
    },
    {
        type: provenance_name_v1_query_pb.QueryResolveResponse,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".QueryResolveResponse")
    },
    {
        type: provenance_name_v1_query_pb.QueryReverseLookupRequest,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".QueryReverseLookupRequest")
    },
    {
        type: provenance_name_v1_query_pb.QueryReverseLookupResponse,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".QueryReverseLookupResponse")
    },
    // provenance.name.v1/tx.proto
    {
        type: provenance_name_v1_tx_pb.MsgBindNameRequest,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".MsgBindNameRequest")
    },
    {
        type: provenance_name_v1_tx_pb.MsgBindNameResponse,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".MsgBindNameResponse")
    },
    {
        type: provenance_name_v1_tx_pb.MsgDeleteNameRequest,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".MsgDeleteNameRequest")
    },
    {
        type: provenance_name_v1_tx_pb.MsgDeleteNameResponse,
        typeUrl: "".concat(PROVENANCE_NAME_V1_TYPE_PACKAGE, ".MsgDeleteNameResponse")
    },
];
