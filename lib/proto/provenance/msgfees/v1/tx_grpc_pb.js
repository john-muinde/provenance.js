// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var provenance_msgfees_v1_tx_pb = require('../../../provenance/msgfees/v1/tx_pb.js');
var amino_amino_pb = require('../../../amino/amino_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js');

function serialize_provenance_msgfees_v1_MsgAddMsgFeeProposalRequest(arg) {
  if (!(arg instanceof provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest)) {
    throw new Error('Expected argument of type provenance.msgfees.v1.MsgAddMsgFeeProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provenance_msgfees_v1_MsgAddMsgFeeProposalRequest(buffer_arg) {
  return provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provenance_msgfees_v1_MsgAddMsgFeeProposalResponse(arg) {
  if (!(arg instanceof provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse)) {
    throw new Error('Expected argument of type provenance.msgfees.v1.MsgAddMsgFeeProposalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provenance_msgfees_v1_MsgAddMsgFeeProposalResponse(buffer_arg) {
  return provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provenance_msgfees_v1_MsgAssessCustomMsgFeeRequest(arg) {
  if (!(arg instanceof provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest)) {
    throw new Error('Expected argument of type provenance.msgfees.v1.MsgAssessCustomMsgFeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provenance_msgfees_v1_MsgAssessCustomMsgFeeRequest(buffer_arg) {
  return provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provenance_msgfees_v1_MsgAssessCustomMsgFeeResponse(arg) {
  if (!(arg instanceof provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse)) {
    throw new Error('Expected argument of type provenance.msgfees.v1.MsgAssessCustomMsgFeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provenance_msgfees_v1_MsgAssessCustomMsgFeeResponse(buffer_arg) {
  return provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provenance_msgfees_v1_MsgRemoveMsgFeeProposalRequest(arg) {
  if (!(arg instanceof provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest)) {
    throw new Error('Expected argument of type provenance.msgfees.v1.MsgRemoveMsgFeeProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provenance_msgfees_v1_MsgRemoveMsgFeeProposalRequest(buffer_arg) {
  return provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provenance_msgfees_v1_MsgRemoveMsgFeeProposalResponse(arg) {
  if (!(arg instanceof provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse)) {
    throw new Error('Expected argument of type provenance.msgfees.v1.MsgRemoveMsgFeeProposalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provenance_msgfees_v1_MsgRemoveMsgFeeProposalResponse(buffer_arg) {
  return provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provenance_msgfees_v1_MsgUpdateConversionFeeDenomProposalRequest(arg) {
  if (!(arg instanceof provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest)) {
    throw new Error('Expected argument of type provenance.msgfees.v1.MsgUpdateConversionFeeDenomProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provenance_msgfees_v1_MsgUpdateConversionFeeDenomProposalRequest(buffer_arg) {
  return provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provenance_msgfees_v1_MsgUpdateConversionFeeDenomProposalResponse(arg) {
  if (!(arg instanceof provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse)) {
    throw new Error('Expected argument of type provenance.msgfees.v1.MsgUpdateConversionFeeDenomProposalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provenance_msgfees_v1_MsgUpdateConversionFeeDenomProposalResponse(buffer_arg) {
  return provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provenance_msgfees_v1_MsgUpdateMsgFeeProposalRequest(arg) {
  if (!(arg instanceof provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest)) {
    throw new Error('Expected argument of type provenance.msgfees.v1.MsgUpdateMsgFeeProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provenance_msgfees_v1_MsgUpdateMsgFeeProposalRequest(buffer_arg) {
  return provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provenance_msgfees_v1_MsgUpdateMsgFeeProposalResponse(arg) {
  if (!(arg instanceof provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse)) {
    throw new Error('Expected argument of type provenance.msgfees.v1.MsgUpdateMsgFeeProposalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provenance_msgfees_v1_MsgUpdateMsgFeeProposalResponse(buffer_arg) {
  return provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provenance_msgfees_v1_MsgUpdateNhashPerUsdMilProposalRequest(arg) {
  if (!(arg instanceof provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest)) {
    throw new Error('Expected argument of type provenance.msgfees.v1.MsgUpdateNhashPerUsdMilProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provenance_msgfees_v1_MsgUpdateNhashPerUsdMilProposalRequest(buffer_arg) {
  return provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provenance_msgfees_v1_MsgUpdateNhashPerUsdMilProposalResponse(arg) {
  if (!(arg instanceof provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse)) {
    throw new Error('Expected argument of type provenance.msgfees.v1.MsgUpdateNhashPerUsdMilProposalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provenance_msgfees_v1_MsgUpdateNhashPerUsdMilProposalResponse(buffer_arg) {
  return provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the msgfees Msg service.
var MsgService = exports.MsgService = {
  // AssessCustomMsgFee endpoint executes the additional fee charges.
// This will only emit the event and not persist it to the keeper.  Fees are handled with the custom msg fee handlers
// Use Case: smart contracts will be able to charge additional fees and direct partial funds to specified recipient
// for executing contracts
assessCustomMsgFee: {
    path: '/provenance.msgfees.v1.Msg/AssessCustomMsgFee',
    requestStream: false,
    responseStream: false,
    requestType: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest,
    responseType: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse,
    requestSerialize: serialize_provenance_msgfees_v1_MsgAssessCustomMsgFeeRequest,
    requestDeserialize: deserialize_provenance_msgfees_v1_MsgAssessCustomMsgFeeRequest,
    responseSerialize: serialize_provenance_msgfees_v1_MsgAssessCustomMsgFeeResponse,
    responseDeserialize: deserialize_provenance_msgfees_v1_MsgAssessCustomMsgFeeResponse,
  },
  // AddMsgFeeProposal defines a governance proposal to add additional msg based fee
addMsgFeeProposal: {
    path: '/provenance.msgfees.v1.Msg/AddMsgFeeProposal',
    requestStream: false,
    responseStream: false,
    requestType: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest,
    responseType: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse,
    requestSerialize: serialize_provenance_msgfees_v1_MsgAddMsgFeeProposalRequest,
    requestDeserialize: deserialize_provenance_msgfees_v1_MsgAddMsgFeeProposalRequest,
    responseSerialize: serialize_provenance_msgfees_v1_MsgAddMsgFeeProposalResponse,
    responseDeserialize: deserialize_provenance_msgfees_v1_MsgAddMsgFeeProposalResponse,
  },
  // UpdateMsgFeeProposal defines a governance proposal to update a current msg based fee
updateMsgFeeProposal: {
    path: '/provenance.msgfees.v1.Msg/UpdateMsgFeeProposal',
    requestStream: false,
    responseStream: false,
    requestType: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest,
    responseType: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse,
    requestSerialize: serialize_provenance_msgfees_v1_MsgUpdateMsgFeeProposalRequest,
    requestDeserialize: deserialize_provenance_msgfees_v1_MsgUpdateMsgFeeProposalRequest,
    responseSerialize: serialize_provenance_msgfees_v1_MsgUpdateMsgFeeProposalResponse,
    responseDeserialize: deserialize_provenance_msgfees_v1_MsgUpdateMsgFeeProposalResponse,
  },
  // RemoveMsgFeeProposal defines a governance proposal to delete a current msg based fee
removeMsgFeeProposal: {
    path: '/provenance.msgfees.v1.Msg/RemoveMsgFeeProposal',
    requestStream: false,
    responseStream: false,
    requestType: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest,
    responseType: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse,
    requestSerialize: serialize_provenance_msgfees_v1_MsgRemoveMsgFeeProposalRequest,
    requestDeserialize: deserialize_provenance_msgfees_v1_MsgRemoveMsgFeeProposalRequest,
    responseSerialize: serialize_provenance_msgfees_v1_MsgRemoveMsgFeeProposalResponse,
    responseDeserialize: deserialize_provenance_msgfees_v1_MsgRemoveMsgFeeProposalResponse,
  },
  // UpdateNhashPerUsdMilProposal defines a governance proposal to update the nhash per usd mil param
updateNhashPerUsdMilProposal: {
    path: '/provenance.msgfees.v1.Msg/UpdateNhashPerUsdMilProposal',
    requestStream: false,
    responseStream: false,
    requestType: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest,
    responseType: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse,
    requestSerialize: serialize_provenance_msgfees_v1_MsgUpdateNhashPerUsdMilProposalRequest,
    requestDeserialize: deserialize_provenance_msgfees_v1_MsgUpdateNhashPerUsdMilProposalRequest,
    responseSerialize: serialize_provenance_msgfees_v1_MsgUpdateNhashPerUsdMilProposalResponse,
    responseDeserialize: deserialize_provenance_msgfees_v1_MsgUpdateNhashPerUsdMilProposalResponse,
  },
  // UpdateConversionFeeDenomProposal defines a governance proposal to update the msg fee conversion denom
updateConversionFeeDenomProposal: {
    path: '/provenance.msgfees.v1.Msg/UpdateConversionFeeDenomProposal',
    requestStream: false,
    responseStream: false,
    requestType: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest,
    responseType: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse,
    requestSerialize: serialize_provenance_msgfees_v1_MsgUpdateConversionFeeDenomProposalRequest,
    requestDeserialize: deserialize_provenance_msgfees_v1_MsgUpdateConversionFeeDenomProposalRequest,
    responseSerialize: serialize_provenance_msgfees_v1_MsgUpdateConversionFeeDenomProposalResponse,
    responseDeserialize: deserialize_provenance_msgfees_v1_MsgUpdateConversionFeeDenomProposalResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
