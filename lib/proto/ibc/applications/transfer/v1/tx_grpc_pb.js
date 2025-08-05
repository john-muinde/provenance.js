// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ibc_applications_transfer_v1_tx_pb = require('../../../../ibc/applications/transfer/v1/tx_pb.js');
var amino_amino_pb = require('../../../../amino/amino_pb.js');
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
var cosmos_msg_v1_msg_pb = require('../../../../cosmos/msg/v1/msg_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../../../../cosmos/base/v1beta1/coin_pb.js');
var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js');
var ibc_applications_transfer_v1_transfer_pb = require('../../../../ibc/applications/transfer/v1/transfer_pb.js');

function serialize_ibc_applications_transfer_v1_MsgTransfer(arg) {
  if (!(arg instanceof ibc_applications_transfer_v1_tx_pb.MsgTransfer)) {
    throw new Error('Expected argument of type ibc.applications.transfer.v1.MsgTransfer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_applications_transfer_v1_MsgTransfer(buffer_arg) {
  return ibc_applications_transfer_v1_tx_pb.MsgTransfer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_applications_transfer_v1_MsgTransferResponse(arg) {
  if (!(arg instanceof ibc_applications_transfer_v1_tx_pb.MsgTransferResponse)) {
    throw new Error('Expected argument of type ibc.applications.transfer.v1.MsgTransferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_applications_transfer_v1_MsgTransferResponse(buffer_arg) {
  return ibc_applications_transfer_v1_tx_pb.MsgTransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_applications_transfer_v1_MsgUpdateParams(arg) {
  if (!(arg instanceof ibc_applications_transfer_v1_tx_pb.MsgUpdateParams)) {
    throw new Error('Expected argument of type ibc.applications.transfer.v1.MsgUpdateParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_applications_transfer_v1_MsgUpdateParams(buffer_arg) {
  return ibc_applications_transfer_v1_tx_pb.MsgUpdateParams.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_applications_transfer_v1_MsgUpdateParamsResponse(arg) {
  if (!(arg instanceof ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse)) {
    throw new Error('Expected argument of type ibc.applications.transfer.v1.MsgUpdateParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_applications_transfer_v1_MsgUpdateParamsResponse(buffer_arg) {
  return ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the ibc/transfer Msg service.
var MsgService = exports.MsgService = {
  // Transfer defines a rpc handler method for MsgTransfer.
transfer: {
    path: '/ibc.applications.transfer.v1.Msg/Transfer',
    requestStream: false,
    responseStream: false,
    requestType: ibc_applications_transfer_v1_tx_pb.MsgTransfer,
    responseType: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse,
    requestSerialize: serialize_ibc_applications_transfer_v1_MsgTransfer,
    requestDeserialize: deserialize_ibc_applications_transfer_v1_MsgTransfer,
    responseSerialize: serialize_ibc_applications_transfer_v1_MsgTransferResponse,
    responseDeserialize: deserialize_ibc_applications_transfer_v1_MsgTransferResponse,
  },
  // UpdateParams defines a rpc handler for MsgUpdateParams.
updateParams: {
    path: '/ibc.applications.transfer.v1.Msg/UpdateParams',
    requestStream: false,
    responseStream: false,
    requestType: ibc_applications_transfer_v1_tx_pb.MsgUpdateParams,
    responseType: ibc_applications_transfer_v1_tx_pb.MsgUpdateParamsResponse,
    requestSerialize: serialize_ibc_applications_transfer_v1_MsgUpdateParams,
    requestDeserialize: deserialize_ibc_applications_transfer_v1_MsgUpdateParams,
    responseSerialize: serialize_ibc_applications_transfer_v1_MsgUpdateParamsResponse,
    responseDeserialize: deserialize_ibc_applications_transfer_v1_MsgUpdateParamsResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
