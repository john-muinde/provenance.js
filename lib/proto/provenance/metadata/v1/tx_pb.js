// source: provenance/metadata/v1/tx.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js');
goog.object.extend(proto, cosmos_msg_v1_msg_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var provenance_metadata_v1_metadata_pb = require('../../../provenance/metadata/v1/metadata_pb.js');
goog.object.extend(proto, provenance_metadata_v1_metadata_pb);
var provenance_metadata_v1_objectstore_pb = require('../../../provenance/metadata/v1/objectstore_pb.js');
goog.object.extend(proto, provenance_metadata_v1_objectstore_pb);
var provenance_metadata_v1_p8e_p8e_pb = require('../../../provenance/metadata/v1/p8e/p8e_pb.js');
goog.object.extend(proto, provenance_metadata_v1_p8e_p8e_pb);
var provenance_metadata_v1_scope_pb = require('../../../provenance/metadata/v1/scope_pb.js');
goog.object.extend(proto, provenance_metadata_v1_scope_pb);
var provenance_metadata_v1_specification_pb = require('../../../provenance/metadata/v1/specification_pb.js');
goog.object.extend(proto, provenance_metadata_v1_specification_pb);
goog.exportSymbol('proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgAddScopeOwnerRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgAddScopeOwnerResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgBindOSLocatorRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgBindOSLocatorResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteRecordRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteRecordResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteScopeRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteScopeResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgModifyOSLocatorRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgModifyOSLocatorResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgSetAccountDataRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgSetAccountDataResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteRecordRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteRecordResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteScopeRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteScopeResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteSessionRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.MsgWriteSessionResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.SessionIdComponents', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.SessionIdComponents.ScopeIdentifierCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgWriteScopeRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteScopeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteScopeRequest.displayName = 'proto.provenance.metadata.v1.MsgWriteScopeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteScopeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteScopeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteScopeResponse.displayName = 'proto.provenance.metadata.v1.MsgWriteScopeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgDeleteScopeRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteScopeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteScopeRequest.displayName = 'proto.provenance.metadata.v1.MsgDeleteScopeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteScopeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteScopeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteScopeResponse.displayName = 'proto.provenance.metadata.v1.MsgDeleteScopeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.displayName = 'proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse.displayName = 'proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.displayName = 'proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse.displayName = 'proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgAddScopeOwnerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.displayName = 'proto.provenance.metadata.v1.MsgAddScopeOwnerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgAddScopeOwnerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgAddScopeOwnerResponse.displayName = 'proto.provenance.metadata.v1.MsgAddScopeOwnerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.displayName = 'proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse.displayName = 'proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.displayName = 'proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse.displayName = 'proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.displayName = 'proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse.displayName = 'proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgWriteSessionRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteSessionRequest.displayName = 'proto.provenance.metadata.v1.MsgWriteSessionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.SessionIdComponents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.provenance.metadata.v1.SessionIdComponents.oneofGroups_);
};
goog.inherits(proto.provenance.metadata.v1.SessionIdComponents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.SessionIdComponents.displayName = 'proto.provenance.metadata.v1.SessionIdComponents';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteSessionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteSessionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteSessionResponse.displayName = 'proto.provenance.metadata.v1.MsgWriteSessionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgWriteRecordRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteRecordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteRecordRequest.displayName = 'proto.provenance.metadata.v1.MsgWriteRecordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteRecordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteRecordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteRecordResponse.displayName = 'proto.provenance.metadata.v1.MsgWriteRecordResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgDeleteRecordRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteRecordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteRecordRequest.displayName = 'proto.provenance.metadata.v1.MsgDeleteRecordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteRecordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteRecordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteRecordResponse.displayName = 'proto.provenance.metadata.v1.MsgDeleteRecordResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.displayName = 'proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.displayName = 'proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.displayName = 'proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse.displayName = 'proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.displayName = 'proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.displayName = 'proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.displayName = 'proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse.displayName = 'proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.displayName = 'proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse.displayName = 'proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.displayName = 'proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse.displayName = 'proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.displayName = 'proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.displayName = 'proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.displayName = 'proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse.displayName = 'proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgBindOSLocatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgBindOSLocatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgBindOSLocatorRequest.displayName = 'proto.provenance.metadata.v1.MsgBindOSLocatorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgBindOSLocatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgBindOSLocatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgBindOSLocatorResponse.displayName = 'proto.provenance.metadata.v1.MsgBindOSLocatorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.displayName = 'proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.displayName = 'proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgModifyOSLocatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.displayName = 'proto.provenance.metadata.v1.MsgModifyOSLocatorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgModifyOSLocatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.displayName = 'proto.provenance.metadata.v1.MsgModifyOSLocatorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgSetAccountDataRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgSetAccountDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgSetAccountDataRequest.displayName = 'proto.provenance.metadata.v1.MsgSetAccountDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgSetAccountDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgSetAccountDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgSetAccountDataResponse.displayName = 'proto.provenance.metadata.v1.MsgSetAccountDataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.displayName = 'proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.displayName = 'proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.displayName = 'proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.displayName = 'proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.displayName = 'proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse.displayName = 'proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteScopeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteScopeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scope: (f = msg.getScope()) && provenance_metadata_v1_scope_pb.Scope.toObject(includeInstance, f),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    scopeUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    specUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    usdMills: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeRequest}
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteScopeRequest;
  return proto.provenance.metadata.v1.MsgWriteScopeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteScopeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeRequest}
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_scope_pb.Scope;
      reader.readMessage(value,provenance_metadata_v1_scope_pb.Scope.deserializeBinaryFromReader);
      msg.setScope(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecUuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUsdMills(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteScopeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteScopeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScope();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_scope_pb.Scope.serializeBinaryToWriter
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getScopeUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSpecUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUsdMills();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional Scope scope = 1;
 * @return {?proto.provenance.metadata.v1.Scope}
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.getScope = function() {
  return /** @type{?proto.provenance.metadata.v1.Scope} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_scope_pb.Scope, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.Scope|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeRequest} returns this
*/
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.setScope = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.clearScope = function() {
  return this.setScope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.hasScope = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};


/**
 * optional string scope_uuid = 3;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.getScopeUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.setScopeUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string spec_uuid = 4;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.getSpecUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.setSpecUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 usd_mills = 5;
 * @return {number}
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.getUsdMills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeRequest.prototype.setUsdMills = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteScopeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteScopeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteScopeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteScopeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeIdInfo: (f = msg.getScopeIdInfo()) && provenance_metadata_v1_metadata_pb.ScopeIdInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeResponse}
 */
proto.provenance.metadata.v1.MsgWriteScopeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteScopeResponse;
  return proto.provenance.metadata.v1.MsgWriteScopeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteScopeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeResponse}
 */
proto.provenance.metadata.v1.MsgWriteScopeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_metadata_pb.ScopeIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.ScopeIdInfo.deserializeBinaryFromReader);
      msg.setScopeIdInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteScopeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteScopeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteScopeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteScopeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeIdInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_metadata_pb.ScopeIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScopeIdInfo scope_id_info = 1;
 * @return {?proto.provenance.metadata.v1.ScopeIdInfo}
 */
proto.provenance.metadata.v1.MsgWriteScopeResponse.prototype.getScopeIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.ScopeIdInfo, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeResponse} returns this
*/
proto.provenance.metadata.v1.MsgWriteScopeResponse.prototype.setScopeIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeResponse} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeResponse.prototype.clearScopeIdInfo = function() {
  return this.setScopeIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteScopeResponse.prototype.hasScopeIdInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteScopeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeId: msg.getScopeId_asB64(),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeRequest}
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteScopeRequest;
  return proto.provenance.metadata.v1.MsgDeleteScopeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeRequest}
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScopeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteScopeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bytes scope_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.prototype.getScopeId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes scope_id = 1;
 * This is a type-conversion wrapper around `getScopeId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.prototype.getScopeId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScopeId()));
};


/**
 * optional bytes scope_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScopeId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.prototype.getScopeId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScopeId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.prototype.setScopeId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteScopeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteScopeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeResponse}
 */
proto.provenance.metadata.v1.MsgDeleteScopeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteScopeResponse;
  return proto.provenance.metadata.v1.MsgDeleteScopeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeResponse}
 */
proto.provenance.metadata.v1.MsgDeleteScopeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteScopeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteScopeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeId: msg.getScopeId_asB64(),
    dataAccessList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    signersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest;
  return proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScopeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDataAccess(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDataAccessList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional bytes scope_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.getScopeId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes scope_id = 1;
 * This is a type-conversion wrapper around `getScopeId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.getScopeId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScopeId()));
};


/**
 * optional bytes scope_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScopeId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.getScopeId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScopeId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.setScopeId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string data_access = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.getDataAccessList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.setDataAccessList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.addDataAccess = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.clearDataAccessList = function() {
  return this.setDataAccessList([]);
};


/**
 * repeated string signers = 3;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse;
  return proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddScopeDataAccessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeId: msg.getScopeId_asB64(),
    dataAccessList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    signersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest;
  return proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScopeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDataAccess(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDataAccessList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional bytes scope_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.getScopeId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes scope_id = 1;
 * This is a type-conversion wrapper around `getScopeId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.getScopeId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScopeId()));
};


/**
 * optional bytes scope_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScopeId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.getScopeId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScopeId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.setScopeId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string data_access = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.getDataAccessList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.setDataAccessList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.addDataAccess = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.clearDataAccessList = function() {
  return this.setDataAccessList([]);
};


/**
 * repeated string signers = 3;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse;
  return proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeDataAccessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgAddScopeOwnerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeId: msg.getScopeId_asB64(),
    ownersList: jspb.Message.toObjectList(msg.getOwnersList(),
    provenance_metadata_v1_scope_pb.Party.toObject, includeInstance),
    signersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgAddScopeOwnerRequest}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgAddScopeOwnerRequest;
  return proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgAddScopeOwnerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgAddScopeOwnerRequest}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScopeId(value);
      break;
    case 2:
      var value = new provenance_metadata_v1_scope_pb.Party;
      reader.readMessage(value,provenance_metadata_v1_scope_pb.Party.deserializeBinaryFromReader);
      msg.addOwners(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgAddScopeOwnerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOwnersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      provenance_metadata_v1_scope_pb.Party.serializeBinaryToWriter
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional bytes scope_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.getScopeId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes scope_id = 1;
 * This is a type-conversion wrapper around `getScopeId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.getScopeId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScopeId()));
};


/**
 * optional bytes scope_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScopeId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.getScopeId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScopeId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgAddScopeOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.setScopeId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated Party owners = 2;
 * @return {!Array<!proto.provenance.metadata.v1.Party>}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.getOwnersList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.Party>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_scope_pb.Party, 2));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.Party>} value
 * @return {!proto.provenance.metadata.v1.MsgAddScopeOwnerRequest} returns this
*/
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.setOwnersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.provenance.metadata.v1.Party=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.Party}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.addOwners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.provenance.metadata.v1.Party, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgAddScopeOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.clearOwnersList = function() {
  return this.setOwnersList([]);
};


/**
 * repeated string signers = 3;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgAddScopeOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgAddScopeOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgAddScopeOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgAddScopeOwnerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgAddScopeOwnerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgAddScopeOwnerResponse}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgAddScopeOwnerResponse;
  return proto.provenance.metadata.v1.MsgAddScopeOwnerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgAddScopeOwnerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgAddScopeOwnerResponse}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgAddScopeOwnerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgAddScopeOwnerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddScopeOwnerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeId: msg.getScopeId_asB64(),
    ownersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    signersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest;
  return proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScopeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addOwners(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOwnersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional bytes scope_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.getScopeId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes scope_id = 1;
 * This is a type-conversion wrapper around `getScopeId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.getScopeId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScopeId()));
};


/**
 * optional bytes scope_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScopeId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.getScopeId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScopeId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.setScopeId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string owners = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.getOwnersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.setOwnersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.addOwners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.clearOwnersList = function() {
  return this.setOwnersList([]);
};


/**
 * repeated string signers = 3;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse;
  return proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeOwnerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.repeatedFields_ = [1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeIdsList: msg.getScopeIdsList_asB64(),
    valueOwnerAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest;
  return proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addScopeIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValueOwnerAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeIdsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
  f = message.getValueOwnerAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated bytes scope_ids = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.getScopeIdsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes scope_ids = 1;
 * This is a type-conversion wrapper around `getScopeIdsList()`
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.getScopeIdsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getScopeIdsList()));
};


/**
 * repeated bytes scope_ids = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScopeIdsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.getScopeIdsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getScopeIdsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest} returns this
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.setScopeIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest} returns this
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.addScopeIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest} returns this
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.clearScopeIdsList = function() {
  return this.setScopeIdsList([]);
};


/**
 * optional string value_owner_address = 2;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.getValueOwnerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest} returns this
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.setValueOwnerAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string signers = 3;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest} returns this
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest} returns this
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest} returns this
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse;
  return proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgUpdateValueOwnersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    existing: jspb.Message.getFieldWithDefault(msg, 1, ""),
    proposed: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest}
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest;
  return proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest}
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExisting(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposed(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExisting();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProposed();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string existing = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.prototype.getExisting = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.prototype.setExisting = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string proposed = 2;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.prototype.getProposed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.prototype.setProposed = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string signers = 3;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest} returns this
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse}
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse;
  return proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse}
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgMigrateValueOwnerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    session: (f = msg.getSession()) && provenance_metadata_v1_scope_pb.Session.toObject(includeInstance, f),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    sessionIdComponents: (f = msg.getSessionIdComponents()) && proto.provenance.metadata.v1.SessionIdComponents.toObject(includeInstance, f),
    specUuid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionRequest}
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteSessionRequest;
  return proto.provenance.metadata.v1.MsgWriteSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionRequest}
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_scope_pb.Session;
      reader.readMessage(value,provenance_metadata_v1_scope_pb.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    case 3:
      var value = new proto.provenance.metadata.v1.SessionIdComponents;
      reader.readMessage(value,proto.provenance.metadata.v1.SessionIdComponents.deserializeBinaryFromReader);
      msg.setSessionIdComponents(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_scope_pb.Session.serializeBinaryToWriter
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSessionIdComponents();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.provenance.metadata.v1.SessionIdComponents.serializeBinaryToWriter
    );
  }
  f = message.getSpecUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional Session session = 1;
 * @return {?proto.provenance.metadata.v1.Session}
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.getSession = function() {
  return /** @type{?proto.provenance.metadata.v1.Session} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_scope_pb.Session, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.Session|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionRequest} returns this
*/
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.setSession = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.hasSession = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};


/**
 * optional SessionIdComponents session_id_components = 3;
 * @return {?proto.provenance.metadata.v1.SessionIdComponents}
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.getSessionIdComponents = function() {
  return /** @type{?proto.provenance.metadata.v1.SessionIdComponents} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.SessionIdComponents, 3));
};


/**
 * @param {?proto.provenance.metadata.v1.SessionIdComponents|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionRequest} returns this
*/
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.setSessionIdComponents = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.clearSessionIdComponents = function() {
  return this.setSessionIdComponents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.hasSessionIdComponents = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string spec_uuid = 4;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.getSpecUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteSessionRequest.prototype.setSpecUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.provenance.metadata.v1.SessionIdComponents.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.provenance.metadata.v1.SessionIdComponents.ScopeIdentifierCase = {
  SCOPE_IDENTIFIER_NOT_SET: 0,
  SCOPE_UUID: 1,
  SCOPE_ADDR: 2
};

/**
 * @return {proto.provenance.metadata.v1.SessionIdComponents.ScopeIdentifierCase}
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.getScopeIdentifierCase = function() {
  return /** @type {proto.provenance.metadata.v1.SessionIdComponents.ScopeIdentifierCase} */(jspb.Message.computeOneofCase(this, proto.provenance.metadata.v1.SessionIdComponents.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.SessionIdComponents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.SessionIdComponents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.SessionIdComponents.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeAddr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sessionUuid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.SessionIdComponents}
 */
proto.provenance.metadata.v1.SessionIdComponents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.SessionIdComponents;
  return proto.provenance.metadata.v1.SessionIdComponents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.SessionIdComponents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.SessionIdComponents}
 */
proto.provenance.metadata.v1.SessionIdComponents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeAddr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.SessionIdComponents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.SessionIdComponents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.SessionIdComponents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSessionUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string scope_uuid = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.getScopeUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.SessionIdComponents} returns this
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.setScopeUuid = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.provenance.metadata.v1.SessionIdComponents.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.provenance.metadata.v1.SessionIdComponents} returns this
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.clearScopeUuid = function() {
  return jspb.Message.setOneofField(this, 1, proto.provenance.metadata.v1.SessionIdComponents.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.hasScopeUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string scope_addr = 2;
 * @return {string}
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.getScopeAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.SessionIdComponents} returns this
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.setScopeAddr = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.provenance.metadata.v1.SessionIdComponents.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.provenance.metadata.v1.SessionIdComponents} returns this
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.clearScopeAddr = function() {
  return jspb.Message.setOneofField(this, 2, proto.provenance.metadata.v1.SessionIdComponents.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.hasScopeAddr = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string session_uuid = 3;
 * @return {string}
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.getSessionUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.SessionIdComponents} returns this
 */
proto.provenance.metadata.v1.SessionIdComponents.prototype.setSessionUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteSessionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteSessionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteSessionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteSessionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionIdInfo: (f = msg.getSessionIdInfo()) && provenance_metadata_v1_metadata_pb.SessionIdInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionResponse}
 */
proto.provenance.metadata.v1.MsgWriteSessionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteSessionResponse;
  return proto.provenance.metadata.v1.MsgWriteSessionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteSessionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionResponse}
 */
proto.provenance.metadata.v1.MsgWriteSessionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_metadata_pb.SessionIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.SessionIdInfo.deserializeBinaryFromReader);
      msg.setSessionIdInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteSessionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteSessionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteSessionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteSessionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionIdInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_metadata_pb.SessionIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional SessionIdInfo session_id_info = 1;
 * @return {?proto.provenance.metadata.v1.SessionIdInfo}
 */
proto.provenance.metadata.v1.MsgWriteSessionResponse.prototype.getSessionIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.SessionIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.SessionIdInfo, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.SessionIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionResponse} returns this
*/
proto.provenance.metadata.v1.MsgWriteSessionResponse.prototype.setSessionIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteSessionResponse} returns this
 */
proto.provenance.metadata.v1.MsgWriteSessionResponse.prototype.clearSessionIdInfo = function() {
  return this.setSessionIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteSessionResponse.prototype.hasSessionIdInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.repeatedFields_ = [2,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteRecordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteRecordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    record: (f = msg.getRecord()) && provenance_metadata_v1_scope_pb.Record.toObject(includeInstance, f),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    sessionIdComponents: (f = msg.getSessionIdComponents()) && proto.provenance.metadata.v1.SessionIdComponents.toObject(includeInstance, f),
    contractSpecUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    partiesList: jspb.Message.toObjectList(msg.getPartiesList(),
    provenance_metadata_v1_scope_pb.Party.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordRequest}
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteRecordRequest;
  return proto.provenance.metadata.v1.MsgWriteRecordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteRecordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordRequest}
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_scope_pb.Record;
      reader.readMessage(value,provenance_metadata_v1_scope_pb.Record.deserializeBinaryFromReader);
      msg.setRecord(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    case 3:
      var value = new proto.provenance.metadata.v1.SessionIdComponents;
      reader.readMessage(value,proto.provenance.metadata.v1.SessionIdComponents.deserializeBinaryFromReader);
      msg.setSessionIdComponents(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractSpecUuid(value);
      break;
    case 5:
      var value = new provenance_metadata_v1_scope_pb.Party;
      reader.readMessage(value,provenance_metadata_v1_scope_pb.Party.deserializeBinaryFromReader);
      msg.addParties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteRecordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteRecordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecord();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_scope_pb.Record.serializeBinaryToWriter
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSessionIdComponents();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.provenance.metadata.v1.SessionIdComponents.serializeBinaryToWriter
    );
  }
  f = message.getContractSpecUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPartiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      provenance_metadata_v1_scope_pb.Party.serializeBinaryToWriter
    );
  }
};


/**
 * optional Record record = 1;
 * @return {?proto.provenance.metadata.v1.Record}
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.getRecord = function() {
  return /** @type{?proto.provenance.metadata.v1.Record} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_scope_pb.Record, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.Record|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordRequest} returns this
*/
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.setRecord = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.clearRecord = function() {
  return this.setRecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.hasRecord = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};


/**
 * optional SessionIdComponents session_id_components = 3;
 * @return {?proto.provenance.metadata.v1.SessionIdComponents}
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.getSessionIdComponents = function() {
  return /** @type{?proto.provenance.metadata.v1.SessionIdComponents} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.SessionIdComponents, 3));
};


/**
 * @param {?proto.provenance.metadata.v1.SessionIdComponents|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordRequest} returns this
*/
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.setSessionIdComponents = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.clearSessionIdComponents = function() {
  return this.setSessionIdComponents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.hasSessionIdComponents = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string contract_spec_uuid = 4;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.getContractSpecUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.setContractSpecUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Party parties = 5;
 * @return {!Array<!proto.provenance.metadata.v1.Party>}
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.getPartiesList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.Party>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_scope_pb.Party, 5));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.Party>} value
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordRequest} returns this
*/
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.setPartiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.provenance.metadata.v1.Party=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.Party}
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.addParties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.provenance.metadata.v1.Party, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordRequest.prototype.clearPartiesList = function() {
  return this.setPartiesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteRecordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteRecordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteRecordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteRecordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordIdInfo: (f = msg.getRecordIdInfo()) && provenance_metadata_v1_metadata_pb.RecordIdInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordResponse}
 */
proto.provenance.metadata.v1.MsgWriteRecordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteRecordResponse;
  return proto.provenance.metadata.v1.MsgWriteRecordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteRecordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordResponse}
 */
proto.provenance.metadata.v1.MsgWriteRecordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_metadata_pb.RecordIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.RecordIdInfo.deserializeBinaryFromReader);
      msg.setRecordIdInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteRecordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteRecordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteRecordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteRecordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordIdInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_metadata_pb.RecordIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional RecordIdInfo record_id_info = 1;
 * @return {?proto.provenance.metadata.v1.RecordIdInfo}
 */
proto.provenance.metadata.v1.MsgWriteRecordResponse.prototype.getRecordIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.RecordIdInfo, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordResponse} returns this
*/
proto.provenance.metadata.v1.MsgWriteRecordResponse.prototype.setRecordIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordResponse} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordResponse.prototype.clearRecordIdInfo = function() {
  return this.setRecordIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteRecordResponse.prototype.hasRecordIdInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteRecordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteRecordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordId: msg.getRecordId_asB64(),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordRequest}
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteRecordRequest;
  return proto.provenance.metadata.v1.MsgDeleteRecordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteRecordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordRequest}
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRecordId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteRecordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteRecordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bytes record_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.prototype.getRecordId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes record_id = 1;
 * This is a type-conversion wrapper around `getRecordId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.prototype.getRecordId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRecordId()));
};


/**
 * optional bytes record_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRecordId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.prototype.getRecordId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRecordId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.prototype.setRecordId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteRecordRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteRecordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteRecordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteRecordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteRecordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordResponse}
 */
proto.provenance.metadata.v1.MsgDeleteRecordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteRecordResponse;
  return proto.provenance.metadata.v1.MsgDeleteRecordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteRecordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordResponse}
 */
proto.provenance.metadata.v1.MsgDeleteRecordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteRecordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteRecordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteRecordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteRecordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    specification: (f = msg.getSpecification()) && provenance_metadata_v1_specification_pb.ScopeSpecification.toObject(includeInstance, f),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    specUuid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest;
  return proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_specification_pb.ScopeSpecification;
      reader.readMessage(value,provenance_metadata_v1_specification_pb.ScopeSpecification.deserializeBinaryFromReader);
      msg.setSpecification(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_specification_pb.ScopeSpecification.serializeBinaryToWriter
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSpecUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ScopeSpecification specification = 1;
 * @return {?proto.provenance.metadata.v1.ScopeSpecification}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.prototype.getSpecification = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeSpecification} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_specification_pb.ScopeSpecification, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeSpecification|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest} returns this
*/
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.prototype.setSpecification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.prototype.clearSpecification = function() {
  return this.setSpecification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.prototype.hasSpecification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};


/**
 * optional string spec_uuid = 3;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.prototype.getSpecUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationRequest.prototype.setSpecUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeSpecIdInfo: (f = msg.getScopeSpecIdInfo()) && provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse;
  return proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo.deserializeBinaryFromReader);
      msg.setScopeSpecIdInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeSpecIdInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScopeSpecIdInfo scope_spec_id_info = 1;
 * @return {?proto.provenance.metadata.v1.ScopeSpecIdInfo}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.prototype.getScopeSpecIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeSpecIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeSpecIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.prototype.setScopeSpecIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.prototype.clearScopeSpecIdInfo = function() {
  return this.setScopeSpecIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteScopeSpecificationResponse.prototype.hasScopeSpecIdInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    specificationId: msg.getSpecificationId_asB64(),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest}
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest;
  return proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest}
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSpecificationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecificationId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bytes specification_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.prototype.getSpecificationId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes specification_id = 1;
 * This is a type-conversion wrapper around `getSpecificationId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.prototype.getSpecificationId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSpecificationId()));
};


/**
 * optional bytes specification_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSpecificationId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.prototype.getSpecificationId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSpecificationId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.prototype.setSpecificationId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse}
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse;
  return proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse}
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteScopeSpecificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    specification: (f = msg.getSpecification()) && provenance_metadata_v1_specification_pb.ContractSpecification.toObject(includeInstance, f),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    specUuid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest;
  return proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_specification_pb.ContractSpecification;
      reader.readMessage(value,provenance_metadata_v1_specification_pb.ContractSpecification.deserializeBinaryFromReader);
      msg.setSpecification(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_specification_pb.ContractSpecification.serializeBinaryToWriter
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSpecUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ContractSpecification specification = 1;
 * @return {?proto.provenance.metadata.v1.ContractSpecification}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.prototype.getSpecification = function() {
  return /** @type{?proto.provenance.metadata.v1.ContractSpecification} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_specification_pb.ContractSpecification, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ContractSpecification|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest} returns this
*/
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.prototype.setSpecification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.prototype.clearSpecification = function() {
  return this.setSpecification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.prototype.hasSpecification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};


/**
 * optional string spec_uuid = 3;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.prototype.getSpecUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationRequest.prototype.setSpecUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractSpecIdInfo: (f = msg.getContractSpecIdInfo()) && provenance_metadata_v1_metadata_pb.ContractSpecIdInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse;
  return proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_metadata_pb.ContractSpecIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.ContractSpecIdInfo.deserializeBinaryFromReader);
      msg.setContractSpecIdInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractSpecIdInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_metadata_pb.ContractSpecIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ContractSpecIdInfo contract_spec_id_info = 1;
 * @return {?proto.provenance.metadata.v1.ContractSpecIdInfo}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.prototype.getContractSpecIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.ContractSpecIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.ContractSpecIdInfo, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ContractSpecIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.prototype.setContractSpecIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.prototype.clearContractSpecIdInfo = function() {
  return this.setContractSpecIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteContractSpecificationResponse.prototype.hasContractSpecIdInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractSpecificationId: msg.getContractSpecificationId_asB64(),
    scopeSpecificationId: msg.getScopeSpecificationId_asB64(),
    signersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest;
  return proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContractSpecificationId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScopeSpecificationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractSpecificationId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getScopeSpecificationId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional bytes contract_specification_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.getContractSpecificationId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes contract_specification_id = 1;
 * This is a type-conversion wrapper around `getContractSpecificationId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.getContractSpecificationId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContractSpecificationId()));
};


/**
 * optional bytes contract_specification_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContractSpecificationId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.getContractSpecificationId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContractSpecificationId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.setContractSpecificationId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes scope_specification_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.getScopeSpecificationId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes scope_specification_id = 2;
 * This is a type-conversion wrapper around `getScopeSpecificationId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.getScopeSpecificationId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScopeSpecificationId()));
};


/**
 * optional bytes scope_specification_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScopeSpecificationId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.getScopeSpecificationId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScopeSpecificationId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.setScopeSpecificationId = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * repeated string signers = 3;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse;
  return proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddContractSpecToScopeSpecResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractSpecificationId: msg.getContractSpecificationId_asB64(),
    scopeSpecificationId: msg.getScopeSpecificationId_asB64(),
    signersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest;
  return proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContractSpecificationId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScopeSpecificationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractSpecificationId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getScopeSpecificationId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional bytes contract_specification_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.getContractSpecificationId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes contract_specification_id = 1;
 * This is a type-conversion wrapper around `getContractSpecificationId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.getContractSpecificationId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContractSpecificationId()));
};


/**
 * optional bytes contract_specification_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContractSpecificationId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.getContractSpecificationId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContractSpecificationId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.setContractSpecificationId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes scope_specification_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.getScopeSpecificationId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes scope_specification_id = 2;
 * This is a type-conversion wrapper around `getScopeSpecificationId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.getScopeSpecificationId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScopeSpecificationId()));
};


/**
 * optional bytes scope_specification_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScopeSpecificationId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.getScopeSpecificationId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScopeSpecificationId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.setScopeSpecificationId = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * repeated string signers = 3;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse;
  return proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecFromScopeSpecResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    specificationId: msg.getSpecificationId_asB64(),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest;
  return proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSpecificationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecificationId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bytes specification_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.prototype.getSpecificationId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes specification_id = 1;
 * This is a type-conversion wrapper around `getSpecificationId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.prototype.getSpecificationId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSpecificationId()));
};


/**
 * optional bytes specification_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSpecificationId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.prototype.getSpecificationId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSpecificationId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.prototype.setSpecificationId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse;
  return proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteContractSpecificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    specification: (f = msg.getSpecification()) && provenance_metadata_v1_specification_pb.RecordSpecification.toObject(includeInstance, f),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    contractSpecUuid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest;
  return proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_specification_pb.RecordSpecification;
      reader.readMessage(value,provenance_metadata_v1_specification_pb.RecordSpecification.deserializeBinaryFromReader);
      msg.setSpecification(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractSpecUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_specification_pb.RecordSpecification.serializeBinaryToWriter
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getContractSpecUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional RecordSpecification specification = 1;
 * @return {?proto.provenance.metadata.v1.RecordSpecification}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.prototype.getSpecification = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordSpecification} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_specification_pb.RecordSpecification, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordSpecification|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest} returns this
*/
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.prototype.setSpecification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.prototype.clearSpecification = function() {
  return this.setSpecification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.prototype.hasSpecification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};


/**
 * optional string contract_spec_uuid = 3;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.prototype.getContractSpecUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationRequest.prototype.setContractSpecUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordSpecIdInfo: (f = msg.getRecordSpecIdInfo()) && provenance_metadata_v1_metadata_pb.RecordSpecIdInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse;
  return proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_metadata_pb.RecordSpecIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.RecordSpecIdInfo.deserializeBinaryFromReader);
      msg.setRecordSpecIdInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordSpecIdInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_metadata_pb.RecordSpecIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional RecordSpecIdInfo record_spec_id_info = 1;
 * @return {?proto.provenance.metadata.v1.RecordSpecIdInfo}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.prototype.getRecordSpecIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordSpecIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.RecordSpecIdInfo, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordSpecIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.prototype.setRecordSpecIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.prototype.clearRecordSpecIdInfo = function() {
  return this.setRecordSpecIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteRecordSpecificationResponse.prototype.hasRecordSpecIdInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    specificationId: msg.getSpecificationId_asB64(),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest}
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest;
  return proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest}
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSpecificationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecificationId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bytes specification_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.prototype.getSpecificationId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes specification_id = 1;
 * This is a type-conversion wrapper around `getSpecificationId()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.prototype.getSpecificationId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSpecificationId()));
};


/**
 * optional bytes specification_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSpecificationId()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.prototype.getSpecificationId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSpecificationId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.prototype.setSpecificationId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse}
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse;
  return proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse}
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteRecordSpecificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgBindOSLocatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgBindOSLocatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgBindOSLocatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgBindOSLocatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locator: (f = msg.getLocator()) && provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgBindOSLocatorRequest}
 */
proto.provenance.metadata.v1.MsgBindOSLocatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgBindOSLocatorRequest;
  return proto.provenance.metadata.v1.MsgBindOSLocatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgBindOSLocatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgBindOSLocatorRequest}
 */
proto.provenance.metadata.v1.MsgBindOSLocatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;
      reader.readMessage(value,provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.deserializeBinaryFromReader);
      msg.setLocator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgBindOSLocatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgBindOSLocatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgBindOSLocatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgBindOSLocatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectStoreLocator locator = 1;
 * @return {?proto.provenance.metadata.v1.ObjectStoreLocator}
 */
proto.provenance.metadata.v1.MsgBindOSLocatorRequest.prototype.getLocator = function() {
  return /** @type{?proto.provenance.metadata.v1.ObjectStoreLocator} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ObjectStoreLocator|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgBindOSLocatorRequest} returns this
*/
proto.provenance.metadata.v1.MsgBindOSLocatorRequest.prototype.setLocator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgBindOSLocatorRequest} returns this
 */
proto.provenance.metadata.v1.MsgBindOSLocatorRequest.prototype.clearLocator = function() {
  return this.setLocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgBindOSLocatorRequest.prototype.hasLocator = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgBindOSLocatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgBindOSLocatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgBindOSLocatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgBindOSLocatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locator: (f = msg.getLocator()) && provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgBindOSLocatorResponse}
 */
proto.provenance.metadata.v1.MsgBindOSLocatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgBindOSLocatorResponse;
  return proto.provenance.metadata.v1.MsgBindOSLocatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgBindOSLocatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgBindOSLocatorResponse}
 */
proto.provenance.metadata.v1.MsgBindOSLocatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;
      reader.readMessage(value,provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.deserializeBinaryFromReader);
      msg.setLocator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgBindOSLocatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgBindOSLocatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgBindOSLocatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgBindOSLocatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectStoreLocator locator = 1;
 * @return {?proto.provenance.metadata.v1.ObjectStoreLocator}
 */
proto.provenance.metadata.v1.MsgBindOSLocatorResponse.prototype.getLocator = function() {
  return /** @type{?proto.provenance.metadata.v1.ObjectStoreLocator} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ObjectStoreLocator|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgBindOSLocatorResponse} returns this
*/
proto.provenance.metadata.v1.MsgBindOSLocatorResponse.prototype.setLocator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgBindOSLocatorResponse} returns this
 */
proto.provenance.metadata.v1.MsgBindOSLocatorResponse.prototype.clearLocator = function() {
  return this.setLocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgBindOSLocatorResponse.prototype.hasLocator = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locator: (f = msg.getLocator()) && provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest}
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest;
  return proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest}
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;
      reader.readMessage(value,provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.deserializeBinaryFromReader);
      msg.setLocator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectStoreLocator locator = 1;
 * @return {?proto.provenance.metadata.v1.ObjectStoreLocator}
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.prototype.getLocator = function() {
  return /** @type{?proto.provenance.metadata.v1.ObjectStoreLocator} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ObjectStoreLocator|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest} returns this
*/
proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.prototype.setLocator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest} returns this
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.prototype.clearLocator = function() {
  return this.setLocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorRequest.prototype.hasLocator = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locator: (f = msg.getLocator()) && provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse}
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse;
  return proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse}
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;
      reader.readMessage(value,provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.deserializeBinaryFromReader);
      msg.setLocator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectStoreLocator locator = 1;
 * @return {?proto.provenance.metadata.v1.ObjectStoreLocator}
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.prototype.getLocator = function() {
  return /** @type{?proto.provenance.metadata.v1.ObjectStoreLocator} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ObjectStoreLocator|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse} returns this
*/
proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.prototype.setLocator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse} returns this
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.prototype.clearLocator = function() {
  return this.setLocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgDeleteOSLocatorResponse.prototype.hasLocator = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgModifyOSLocatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locator: (f = msg.getLocator()) && provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgModifyOSLocatorRequest}
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgModifyOSLocatorRequest;
  return proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgModifyOSLocatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgModifyOSLocatorRequest}
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;
      reader.readMessage(value,provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.deserializeBinaryFromReader);
      msg.setLocator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgModifyOSLocatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectStoreLocator locator = 1;
 * @return {?proto.provenance.metadata.v1.ObjectStoreLocator}
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.prototype.getLocator = function() {
  return /** @type{?proto.provenance.metadata.v1.ObjectStoreLocator} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ObjectStoreLocator|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgModifyOSLocatorRequest} returns this
*/
proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.prototype.setLocator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgModifyOSLocatorRequest} returns this
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.prototype.clearLocator = function() {
  return this.setLocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorRequest.prototype.hasLocator = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgModifyOSLocatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locator: (f = msg.getLocator()) && provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgModifyOSLocatorResponse}
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgModifyOSLocatorResponse;
  return proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgModifyOSLocatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgModifyOSLocatorResponse}
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;
      reader.readMessage(value,provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.deserializeBinaryFromReader);
      msg.setLocator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgModifyOSLocatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectStoreLocator locator = 1;
 * @return {?proto.provenance.metadata.v1.ObjectStoreLocator}
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.prototype.getLocator = function() {
  return /** @type{?proto.provenance.metadata.v1.ObjectStoreLocator} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ObjectStoreLocator|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgModifyOSLocatorResponse} returns this
*/
proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.prototype.setLocator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgModifyOSLocatorResponse} returns this
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.prototype.clearLocator = function() {
  return this.setLocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgModifyOSLocatorResponse.prototype.hasLocator = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgSetAccountDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgSetAccountDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadataAddr: msg.getMetadataAddr_asB64(),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgSetAccountDataRequest}
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgSetAccountDataRequest;
  return proto.provenance.metadata.v1.MsgSetAccountDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgSetAccountDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgSetAccountDataRequest}
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMetadataAddr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgSetAccountDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgSetAccountDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadataAddr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional bytes metadata_addr = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.prototype.getMetadataAddr = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes metadata_addr = 1;
 * This is a type-conversion wrapper around `getMetadataAddr()`
 * @return {string}
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.prototype.getMetadataAddr_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMetadataAddr()));
};


/**
 * optional bytes metadata_addr = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMetadataAddr()`
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.prototype.getMetadataAddr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadataAddr()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.MsgSetAccountDataRequest} returns this
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.prototype.setMetadataAddr = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgSetAccountDataRequest} returns this
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string signers = 3;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgSetAccountDataRequest} returns this
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgSetAccountDataRequest} returns this
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgSetAccountDataRequest} returns this
 */
proto.provenance.metadata.v1.MsgSetAccountDataRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgSetAccountDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgSetAccountDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgSetAccountDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgSetAccountDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgSetAccountDataResponse}
 */
proto.provenance.metadata.v1.MsgSetAccountDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgSetAccountDataResponse;
  return proto.provenance.metadata.v1.MsgSetAccountDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgSetAccountDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgSetAccountDataResponse}
 */
proto.provenance.metadata.v1.MsgSetAccountDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgSetAccountDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgSetAccountDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgSetAccountDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgSetAccountDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractspec: (f = msg.getContractspec()) && provenance_metadata_v1_p8e_p8e_pb.ContractSpec.toObject(includeInstance, f),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest;
  return proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_p8e_p8e_pb.ContractSpec;
      reader.readMessage(value,provenance_metadata_v1_p8e_p8e_pb.ContractSpec.deserializeBinaryFromReader);
      msg.setContractspec(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractspec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_p8e_p8e_pb.ContractSpec.serializeBinaryToWriter
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional p8e.ContractSpec contractspec = 1;
 * @return {?proto.provenance.metadata.v1.p8e.ContractSpec}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.prototype.getContractspec = function() {
  return /** @type{?proto.provenance.metadata.v1.p8e.ContractSpec} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_p8e_p8e_pb.ContractSpec, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.p8e.ContractSpec|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest} returns this
*/
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.prototype.setContractspec = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.prototype.clearContractspec = function() {
  return this.setContractspec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.prototype.hasContractspec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest} returns this
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractSpecIdInfo: (f = msg.getContractSpecIdInfo()) && provenance_metadata_v1_metadata_pb.ContractSpecIdInfo.toObject(includeInstance, f),
    recordSpecIdInfosList: jspb.Message.toObjectList(msg.getRecordSpecIdInfosList(),
    provenance_metadata_v1_metadata_pb.RecordSpecIdInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse;
  return proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_metadata_pb.ContractSpecIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.ContractSpecIdInfo.deserializeBinaryFromReader);
      msg.setContractSpecIdInfo(value);
      break;
    case 2:
      var value = new provenance_metadata_v1_metadata_pb.RecordSpecIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.RecordSpecIdInfo.deserializeBinaryFromReader);
      msg.addRecordSpecIdInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractSpecIdInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_metadata_pb.ContractSpecIdInfo.serializeBinaryToWriter
    );
  }
  f = message.getRecordSpecIdInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      provenance_metadata_v1_metadata_pb.RecordSpecIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ContractSpecIdInfo contract_spec_id_info = 1;
 * @return {?proto.provenance.metadata.v1.ContractSpecIdInfo}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.prototype.getContractSpecIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.ContractSpecIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.ContractSpecIdInfo, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ContractSpecIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse} returns this
*/
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.prototype.setContractSpecIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse} returns this
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.prototype.clearContractSpecIdInfo = function() {
  return this.setContractSpecIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.prototype.hasContractSpecIdInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated RecordSpecIdInfo record_spec_id_infos = 2;
 * @return {!Array<!proto.provenance.metadata.v1.RecordSpecIdInfo>}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.prototype.getRecordSpecIdInfosList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.RecordSpecIdInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_metadata_pb.RecordSpecIdInfo, 2));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.RecordSpecIdInfo>} value
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse} returns this
*/
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.prototype.setRecordSpecIdInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.provenance.metadata.v1.RecordSpecIdInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.RecordSpecIdInfo}
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.prototype.addRecordSpecIdInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.provenance.metadata.v1.RecordSpecIdInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse} returns this
 */
proto.provenance.metadata.v1.MsgWriteP8eContractSpecResponse.prototype.clearRecordSpecIdInfosList = function() {
  return this.setRecordSpecIdInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    groupId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    scopeSpecificationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    recitals: (f = msg.getRecitals()) && provenance_metadata_v1_p8e_p8e_pb.Recitals.toObject(includeInstance, f),
    contract: (f = msg.getContract()) && provenance_metadata_v1_p8e_p8e_pb.Contract.toObject(includeInstance, f),
    signatures: (f = msg.getSignatures()) && provenance_metadata_v1_p8e_p8e_pb.SignatureSet.toObject(includeInstance, f),
    invoker: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest;
  return proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeSpecificationId(value);
      break;
    case 4:
      var value = new provenance_metadata_v1_p8e_p8e_pb.Recitals;
      reader.readMessage(value,provenance_metadata_v1_p8e_p8e_pb.Recitals.deserializeBinaryFromReader);
      msg.setRecitals(value);
      break;
    case 5:
      var value = new provenance_metadata_v1_p8e_p8e_pb.Contract;
      reader.readMessage(value,provenance_metadata_v1_p8e_p8e_pb.Contract.deserializeBinaryFromReader);
      msg.setContract(value);
      break;
    case 6:
      var value = new provenance_metadata_v1_p8e_p8e_pb.SignatureSet;
      reader.readMessage(value,provenance_metadata_v1_p8e_p8e_pb.SignatureSet.deserializeBinaryFromReader);
      msg.setSignatures(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvoker(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGroupId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScopeSpecificationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRecitals();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      provenance_metadata_v1_p8e_p8e_pb.Recitals.serializeBinaryToWriter
    );
  }
  f = message.getContract();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      provenance_metadata_v1_p8e_p8e_pb.Contract.serializeBinaryToWriter
    );
  }
  f = message.getSignatures();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      provenance_metadata_v1_p8e_p8e_pb.SignatureSet.serializeBinaryToWriter
    );
  }
  f = message.getInvoker();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string scope_id = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.getScopeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} returns this
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.setScopeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string group_id = 2;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.getGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} returns this
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string scope_specification_id = 3;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.getScopeSpecificationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} returns this
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.setScopeSpecificationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional p8e.Recitals recitals = 4;
 * @return {?proto.provenance.metadata.v1.p8e.Recitals}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.getRecitals = function() {
  return /** @type{?proto.provenance.metadata.v1.p8e.Recitals} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_p8e_p8e_pb.Recitals, 4));
};


/**
 * @param {?proto.provenance.metadata.v1.p8e.Recitals|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} returns this
*/
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.setRecitals = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} returns this
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.clearRecitals = function() {
  return this.setRecitals(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.hasRecitals = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional p8e.Contract contract = 5;
 * @return {?proto.provenance.metadata.v1.p8e.Contract}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.getContract = function() {
  return /** @type{?proto.provenance.metadata.v1.p8e.Contract} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_p8e_p8e_pb.Contract, 5));
};


/**
 * @param {?proto.provenance.metadata.v1.p8e.Contract|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} returns this
*/
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.setContract = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} returns this
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.clearContract = function() {
  return this.setContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.hasContract = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional p8e.SignatureSet signatures = 6;
 * @return {?proto.provenance.metadata.v1.p8e.SignatureSet}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.getSignatures = function() {
  return /** @type{?proto.provenance.metadata.v1.p8e.SignatureSet} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_p8e_p8e_pb.SignatureSet, 6));
};


/**
 * @param {?proto.provenance.metadata.v1.p8e.SignatureSet|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} returns this
*/
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.setSignatures = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} returns this
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.clearSignatures = function() {
  return this.setSignatures(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.hasSignatures = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string invoker = 7;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.getInvoker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest} returns this
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractRequest.prototype.setInvoker = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeIdInfo: (f = msg.getScopeIdInfo()) && provenance_metadata_v1_metadata_pb.ScopeIdInfo.toObject(includeInstance, f),
    sessionIdInfo: (f = msg.getSessionIdInfo()) && provenance_metadata_v1_metadata_pb.SessionIdInfo.toObject(includeInstance, f),
    recordIdInfosList: jspb.Message.toObjectList(msg.getRecordIdInfosList(),
    provenance_metadata_v1_metadata_pb.RecordIdInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse;
  return proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_metadata_pb.ScopeIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.ScopeIdInfo.deserializeBinaryFromReader);
      msg.setScopeIdInfo(value);
      break;
    case 2:
      var value = new provenance_metadata_v1_metadata_pb.SessionIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.SessionIdInfo.deserializeBinaryFromReader);
      msg.setSessionIdInfo(value);
      break;
    case 3:
      var value = new provenance_metadata_v1_metadata_pb.RecordIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.RecordIdInfo.deserializeBinaryFromReader);
      msg.addRecordIdInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeIdInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_metadata_pb.ScopeIdInfo.serializeBinaryToWriter
    );
  }
  f = message.getSessionIdInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      provenance_metadata_v1_metadata_pb.SessionIdInfo.serializeBinaryToWriter
    );
  }
  f = message.getRecordIdInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      provenance_metadata_v1_metadata_pb.RecordIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScopeIdInfo scope_id_info = 1;
 * @return {?proto.provenance.metadata.v1.ScopeIdInfo}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.getScopeIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.ScopeIdInfo, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse} returns this
*/
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.setScopeIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse} returns this
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.clearScopeIdInfo = function() {
  return this.setScopeIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.hasScopeIdInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SessionIdInfo session_id_info = 2;
 * @return {?proto.provenance.metadata.v1.SessionIdInfo}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.getSessionIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.SessionIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.SessionIdInfo, 2));
};


/**
 * @param {?proto.provenance.metadata.v1.SessionIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse} returns this
*/
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.setSessionIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse} returns this
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.clearSessionIdInfo = function() {
  return this.setSessionIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.hasSessionIdInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated RecordIdInfo record_id_infos = 3;
 * @return {!Array<!proto.provenance.metadata.v1.RecordIdInfo>}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.getRecordIdInfosList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.RecordIdInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_metadata_pb.RecordIdInfo, 3));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.RecordIdInfo>} value
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse} returns this
*/
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.setRecordIdInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.provenance.metadata.v1.RecordIdInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.RecordIdInfo}
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.addRecordIdInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.provenance.metadata.v1.RecordIdInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse} returns this
 */
proto.provenance.metadata.v1.MsgP8eMemorializeContractResponse.prototype.clearRecordIdInfosList = function() {
  return this.setRecordIdInfosList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    signersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    netAssetValuesList: jspb.Message.toObjectList(msg.getNetAssetValuesList(),
    provenance_metadata_v1_scope_pb.NetAssetValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest}
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest;
  return proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest}
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    case 3:
      var value = new provenance_metadata_v1_scope_pb.NetAssetValue;
      reader.readMessage(value,provenance_metadata_v1_scope_pb.NetAssetValue.deserializeBinaryFromReader);
      msg.addNetAssetValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getNetAssetValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      provenance_metadata_v1_scope_pb.NetAssetValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string scope_id = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.prototype.getScopeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.prototype.setScopeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string signers = 2;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};


/**
 * repeated NetAssetValue net_asset_values = 3;
 * @return {!Array<!proto.provenance.metadata.v1.NetAssetValue>}
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.prototype.getNetAssetValuesList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.NetAssetValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_scope_pb.NetAssetValue, 3));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.NetAssetValue>} value
 * @return {!proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest} returns this
*/
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.prototype.setNetAssetValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.provenance.metadata.v1.NetAssetValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.NetAssetValue}
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.prototype.addNetAssetValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.provenance.metadata.v1.NetAssetValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest} returns this
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesRequest.prototype.clearNetAssetValuesList = function() {
  return this.setNetAssetValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse}
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse;
  return proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse}
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.MsgAddNetAssetValuesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.provenance.metadata.v1);
