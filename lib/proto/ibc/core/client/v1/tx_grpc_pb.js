// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ibc_core_client_v1_tx_pb = require('../../../../ibc/core/client/v1/tx_pb.js');
var cosmos_msg_v1_msg_pb = require('../../../../cosmos/msg/v1/msg_pb.js');
var cosmos_upgrade_v1beta1_upgrade_pb = require('../../../../cosmos/upgrade/v1beta1/upgrade_pb.js');
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js');

function serialize_ibc_core_client_v1_MsgCreateClient(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgCreateClient)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgCreateClient');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgCreateClient(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgCreateClient.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgCreateClientResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgCreateClientResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgCreateClientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgCreateClientResponse(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgCreateClientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgIBCSoftwareUpgrade(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgIBCSoftwareUpgrade)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgIBCSoftwareUpgrade');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgIBCSoftwareUpgrade(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgIBCSoftwareUpgrade.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgIBCSoftwareUpgradeResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgIBCSoftwareUpgradeResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgIBCSoftwareUpgradeResponse(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgIBCSoftwareUpgradeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgRecoverClient(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgRecoverClient)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgRecoverClient');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgRecoverClient(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgRecoverClient.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgRecoverClientResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgRecoverClientResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgRecoverClientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgRecoverClientResponse(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgRecoverClientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgSubmitMisbehaviour(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgSubmitMisbehaviour');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgSubmitMisbehaviour(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgSubmitMisbehaviourResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgSubmitMisbehaviourResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgSubmitMisbehaviourResponse(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgUpdateClient(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgUpdateClient)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgUpdateClient');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgUpdateClient(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgUpdateClient.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgUpdateClientResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgUpdateClientResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgUpdateClientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgUpdateClientResponse(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgUpdateClientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgUpdateParams(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgUpdateParams)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgUpdateParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgUpdateParams(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgUpdateParams.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgUpdateParamsResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgUpdateParamsResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgUpdateParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgUpdateParamsResponse(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgUpdateParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgUpgradeClient(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgUpgradeClient)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgUpgradeClient');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgUpgradeClient(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgUpgradeClient.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ibc_core_client_v1_MsgUpgradeClientResponse(arg) {
  if (!(arg instanceof ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse)) {
    throw new Error('Expected argument of type ibc.core.client.v1.MsgUpgradeClientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ibc_core_client_v1_MsgUpgradeClientResponse(buffer_arg) {
  return ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the ibc/client Msg service.
var MsgService = exports.MsgService = {
  // CreateClient defines a rpc handler method for MsgCreateClient.
createClient: {
    path: '/ibc.core.client.v1.Msg/CreateClient',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_tx_pb.MsgCreateClient,
    responseType: ibc_core_client_v1_tx_pb.MsgCreateClientResponse,
    requestSerialize: serialize_ibc_core_client_v1_MsgCreateClient,
    requestDeserialize: deserialize_ibc_core_client_v1_MsgCreateClient,
    responseSerialize: serialize_ibc_core_client_v1_MsgCreateClientResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_MsgCreateClientResponse,
  },
  // UpdateClient defines a rpc handler method for MsgUpdateClient.
updateClient: {
    path: '/ibc.core.client.v1.Msg/UpdateClient',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_tx_pb.MsgUpdateClient,
    responseType: ibc_core_client_v1_tx_pb.MsgUpdateClientResponse,
    requestSerialize: serialize_ibc_core_client_v1_MsgUpdateClient,
    requestDeserialize: deserialize_ibc_core_client_v1_MsgUpdateClient,
    responseSerialize: serialize_ibc_core_client_v1_MsgUpdateClientResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_MsgUpdateClientResponse,
  },
  // UpgradeClient defines a rpc handler method for MsgUpgradeClient.
upgradeClient: {
    path: '/ibc.core.client.v1.Msg/UpgradeClient',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_tx_pb.MsgUpgradeClient,
    responseType: ibc_core_client_v1_tx_pb.MsgUpgradeClientResponse,
    requestSerialize: serialize_ibc_core_client_v1_MsgUpgradeClient,
    requestDeserialize: deserialize_ibc_core_client_v1_MsgUpgradeClient,
    responseSerialize: serialize_ibc_core_client_v1_MsgUpgradeClientResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_MsgUpgradeClientResponse,
  },
  // SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.
submitMisbehaviour: {
    path: '/ibc.core.client.v1.Msg/SubmitMisbehaviour',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour,
    responseType: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviourResponse,
    requestSerialize: serialize_ibc_core_client_v1_MsgSubmitMisbehaviour,
    requestDeserialize: deserialize_ibc_core_client_v1_MsgSubmitMisbehaviour,
    responseSerialize: serialize_ibc_core_client_v1_MsgSubmitMisbehaviourResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_MsgSubmitMisbehaviourResponse,
  },
  // RecoverClient defines a rpc handler method for MsgRecoverClient.
recoverClient: {
    path: '/ibc.core.client.v1.Msg/RecoverClient',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_tx_pb.MsgRecoverClient,
    responseType: ibc_core_client_v1_tx_pb.MsgRecoverClientResponse,
    requestSerialize: serialize_ibc_core_client_v1_MsgRecoverClient,
    requestDeserialize: deserialize_ibc_core_client_v1_MsgRecoverClient,
    responseSerialize: serialize_ibc_core_client_v1_MsgRecoverClientResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_MsgRecoverClientResponse,
  },
  // IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade.
iBCSoftwareUpgrade: {
    path: '/ibc.core.client.v1.Msg/IBCSoftwareUpgrade',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_tx_pb.MsgIBCSoftwareUpgrade,
    responseType: ibc_core_client_v1_tx_pb.MsgIBCSoftwareUpgradeResponse,
    requestSerialize: serialize_ibc_core_client_v1_MsgIBCSoftwareUpgrade,
    requestDeserialize: deserialize_ibc_core_client_v1_MsgIBCSoftwareUpgrade,
    responseSerialize: serialize_ibc_core_client_v1_MsgIBCSoftwareUpgradeResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_MsgIBCSoftwareUpgradeResponse,
  },
  // UpdateClientParams defines a rpc handler method for MsgUpdateParams.
updateClientParams: {
    path: '/ibc.core.client.v1.Msg/UpdateClientParams',
    requestStream: false,
    responseStream: false,
    requestType: ibc_core_client_v1_tx_pb.MsgUpdateParams,
    responseType: ibc_core_client_v1_tx_pb.MsgUpdateParamsResponse,
    requestSerialize: serialize_ibc_core_client_v1_MsgUpdateParams,
    requestDeserialize: deserialize_ibc_core_client_v1_MsgUpdateParams,
    responseSerialize: serialize_ibc_core_client_v1_MsgUpdateParamsResponse,
    responseDeserialize: deserialize_ibc_core_client_v1_MsgUpdateParamsResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
