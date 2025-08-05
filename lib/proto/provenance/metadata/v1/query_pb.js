// source: provenance/metadata/v1/query.proto
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

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
goog.object.extend(proto, cosmos_base_query_v1beta1_pagination_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var provenance_metadata_v1_metadata_pb = require('../../../provenance/metadata/v1/metadata_pb.js');
goog.object.extend(proto, provenance_metadata_v1_metadata_pb);
var provenance_metadata_v1_scope_pb = require('../../../provenance/metadata/v1/scope_pb.js');
goog.object.extend(proto, provenance_metadata_v1_scope_pb);
var provenance_metadata_v1_specification_pb = require('../../../provenance/metadata/v1/specification_pb.js');
goog.object.extend(proto, provenance_metadata_v1_specification_pb);
var provenance_metadata_v1_objectstore_pb = require('../../../provenance/metadata/v1/objectstore_pb.js');
goog.object.extend(proto, provenance_metadata_v1_objectstore_pb);
goog.exportSymbol('proto.provenance.metadata.v1.AccountDataRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.AccountDataResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ContractSpecificationRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ContractSpecificationResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ContractSpecificationWrapper', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ContractSpecificationsAllRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ContractSpecificationsAllResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.GetByAddrRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.GetByAddrResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.OSAllLocatorsRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.OSAllLocatorsResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.OSLocatorParamsRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.OSLocatorParamsResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.OSLocatorRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.OSLocatorResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.OSLocatorsByScopeRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.OSLocatorsByScopeResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.OSLocatorsByURIRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.OSLocatorsByURIResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.OwnershipRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.OwnershipResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.QueryParamsRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.QueryParamsResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.RecordSpecificationRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.RecordSpecificationResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.RecordSpecificationWrapper', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.RecordSpecificationsAllRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.RecordSpecificationsAllResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.RecordWrapper', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.RecordsAllRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.RecordsAllResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.RecordsRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.RecordsResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ScopeRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ScopeResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ScopeSpecificationRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ScopeSpecificationResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ScopeSpecificationWrapper', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ScopeSpecificationsAllRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ScopeSpecificationsAllResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ScopeWrapper', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ScopesAllRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ScopesAllResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.SessionWrapper', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.SessionsAllRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.SessionsAllResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.SessionsRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.SessionsResponse', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ValueOwnershipRequest', null, global);
goog.exportSymbol('proto.provenance.metadata.v1.ValueOwnershipResponse', null, global);
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
proto.provenance.metadata.v1.QueryParamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.QueryParamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.QueryParamsRequest.displayName = 'proto.provenance.metadata.v1.QueryParamsRequest';
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
proto.provenance.metadata.v1.QueryParamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.QueryParamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.QueryParamsResponse.displayName = 'proto.provenance.metadata.v1.QueryParamsResponse';
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
proto.provenance.metadata.v1.ScopeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.ScopeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ScopeRequest.displayName = 'proto.provenance.metadata.v1.ScopeRequest';
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
proto.provenance.metadata.v1.ScopeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.ScopeResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.ScopeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ScopeResponse.displayName = 'proto.provenance.metadata.v1.ScopeResponse';
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
proto.provenance.metadata.v1.ScopeWrapper = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.ScopeWrapper, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ScopeWrapper.displayName = 'proto.provenance.metadata.v1.ScopeWrapper';
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
proto.provenance.metadata.v1.ScopesAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.ScopesAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ScopesAllRequest.displayName = 'proto.provenance.metadata.v1.ScopesAllRequest';
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
proto.provenance.metadata.v1.ScopesAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.ScopesAllResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.ScopesAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ScopesAllResponse.displayName = 'proto.provenance.metadata.v1.ScopesAllResponse';
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
proto.provenance.metadata.v1.SessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.SessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.SessionsRequest.displayName = 'proto.provenance.metadata.v1.SessionsRequest';
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
proto.provenance.metadata.v1.SessionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.SessionsResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.SessionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.SessionsResponse.displayName = 'proto.provenance.metadata.v1.SessionsResponse';
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
proto.provenance.metadata.v1.SessionWrapper = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.SessionWrapper, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.SessionWrapper.displayName = 'proto.provenance.metadata.v1.SessionWrapper';
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
proto.provenance.metadata.v1.SessionsAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.SessionsAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.SessionsAllRequest.displayName = 'proto.provenance.metadata.v1.SessionsAllRequest';
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
proto.provenance.metadata.v1.SessionsAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.SessionsAllResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.SessionsAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.SessionsAllResponse.displayName = 'proto.provenance.metadata.v1.SessionsAllResponse';
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
proto.provenance.metadata.v1.RecordsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.RecordsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.RecordsRequest.displayName = 'proto.provenance.metadata.v1.RecordsRequest';
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
proto.provenance.metadata.v1.RecordsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.RecordsResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.RecordsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.RecordsResponse.displayName = 'proto.provenance.metadata.v1.RecordsResponse';
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
proto.provenance.metadata.v1.RecordWrapper = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.RecordWrapper, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.RecordWrapper.displayName = 'proto.provenance.metadata.v1.RecordWrapper';
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
proto.provenance.metadata.v1.RecordsAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.RecordsAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.RecordsAllRequest.displayName = 'proto.provenance.metadata.v1.RecordsAllRequest';
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
proto.provenance.metadata.v1.RecordsAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.RecordsAllResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.RecordsAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.RecordsAllResponse.displayName = 'proto.provenance.metadata.v1.RecordsAllResponse';
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
proto.provenance.metadata.v1.OwnershipRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.OwnershipRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.OwnershipRequest.displayName = 'proto.provenance.metadata.v1.OwnershipRequest';
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
proto.provenance.metadata.v1.OwnershipResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.OwnershipResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.OwnershipResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.OwnershipResponse.displayName = 'proto.provenance.metadata.v1.OwnershipResponse';
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
proto.provenance.metadata.v1.ValueOwnershipRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.ValueOwnershipRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ValueOwnershipRequest.displayName = 'proto.provenance.metadata.v1.ValueOwnershipRequest';
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
proto.provenance.metadata.v1.ValueOwnershipResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.ValueOwnershipResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.ValueOwnershipResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ValueOwnershipResponse.displayName = 'proto.provenance.metadata.v1.ValueOwnershipResponse';
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
proto.provenance.metadata.v1.ScopeSpecificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.ScopeSpecificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ScopeSpecificationRequest.displayName = 'proto.provenance.metadata.v1.ScopeSpecificationRequest';
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
proto.provenance.metadata.v1.ScopeSpecificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.ScopeSpecificationResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.ScopeSpecificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ScopeSpecificationResponse.displayName = 'proto.provenance.metadata.v1.ScopeSpecificationResponse';
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
proto.provenance.metadata.v1.ScopeSpecificationWrapper = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.ScopeSpecificationWrapper, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ScopeSpecificationWrapper.displayName = 'proto.provenance.metadata.v1.ScopeSpecificationWrapper';
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
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.ScopeSpecificationsAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.displayName = 'proto.provenance.metadata.v1.ScopeSpecificationsAllRequest';
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
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.ScopeSpecificationsAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.displayName = 'proto.provenance.metadata.v1.ScopeSpecificationsAllResponse';
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
proto.provenance.metadata.v1.ContractSpecificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.ContractSpecificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ContractSpecificationRequest.displayName = 'proto.provenance.metadata.v1.ContractSpecificationRequest';
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
proto.provenance.metadata.v1.ContractSpecificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.ContractSpecificationResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.ContractSpecificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ContractSpecificationResponse.displayName = 'proto.provenance.metadata.v1.ContractSpecificationResponse';
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
proto.provenance.metadata.v1.ContractSpecificationWrapper = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.ContractSpecificationWrapper, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ContractSpecificationWrapper.displayName = 'proto.provenance.metadata.v1.ContractSpecificationWrapper';
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
proto.provenance.metadata.v1.ContractSpecificationsAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.ContractSpecificationsAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ContractSpecificationsAllRequest.displayName = 'proto.provenance.metadata.v1.ContractSpecificationsAllRequest';
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
proto.provenance.metadata.v1.ContractSpecificationsAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.ContractSpecificationsAllResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.ContractSpecificationsAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.ContractSpecificationsAllResponse.displayName = 'proto.provenance.metadata.v1.ContractSpecificationsAllResponse';
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
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.displayName = 'proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest';
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
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.displayName = 'proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse';
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
proto.provenance.metadata.v1.RecordSpecificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.RecordSpecificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.RecordSpecificationRequest.displayName = 'proto.provenance.metadata.v1.RecordSpecificationRequest';
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
proto.provenance.metadata.v1.RecordSpecificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.RecordSpecificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.RecordSpecificationResponse.displayName = 'proto.provenance.metadata.v1.RecordSpecificationResponse';
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
proto.provenance.metadata.v1.RecordSpecificationWrapper = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.RecordSpecificationWrapper, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.RecordSpecificationWrapper.displayName = 'proto.provenance.metadata.v1.RecordSpecificationWrapper';
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
proto.provenance.metadata.v1.RecordSpecificationsAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.RecordSpecificationsAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.RecordSpecificationsAllRequest.displayName = 'proto.provenance.metadata.v1.RecordSpecificationsAllRequest';
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
proto.provenance.metadata.v1.RecordSpecificationsAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.RecordSpecificationsAllResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.RecordSpecificationsAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.RecordSpecificationsAllResponse.displayName = 'proto.provenance.metadata.v1.RecordSpecificationsAllResponse';
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
proto.provenance.metadata.v1.GetByAddrRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.GetByAddrRequest.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.GetByAddrRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.GetByAddrRequest.displayName = 'proto.provenance.metadata.v1.GetByAddrRequest';
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
proto.provenance.metadata.v1.GetByAddrResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.GetByAddrResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.GetByAddrResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.GetByAddrResponse.displayName = 'proto.provenance.metadata.v1.GetByAddrResponse';
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
proto.provenance.metadata.v1.OSLocatorParamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.OSLocatorParamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.OSLocatorParamsRequest.displayName = 'proto.provenance.metadata.v1.OSLocatorParamsRequest';
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
proto.provenance.metadata.v1.OSLocatorParamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.OSLocatorParamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.OSLocatorParamsResponse.displayName = 'proto.provenance.metadata.v1.OSLocatorParamsResponse';
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
proto.provenance.metadata.v1.OSLocatorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.OSLocatorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.OSLocatorRequest.displayName = 'proto.provenance.metadata.v1.OSLocatorRequest';
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
proto.provenance.metadata.v1.OSLocatorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.OSLocatorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.OSLocatorResponse.displayName = 'proto.provenance.metadata.v1.OSLocatorResponse';
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
proto.provenance.metadata.v1.OSLocatorsByURIRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.OSLocatorsByURIRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.OSLocatorsByURIRequest.displayName = 'proto.provenance.metadata.v1.OSLocatorsByURIRequest';
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
proto.provenance.metadata.v1.OSLocatorsByURIResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.OSLocatorsByURIResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.OSLocatorsByURIResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.OSLocatorsByURIResponse.displayName = 'proto.provenance.metadata.v1.OSLocatorsByURIResponse';
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
proto.provenance.metadata.v1.OSLocatorsByScopeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.OSLocatorsByScopeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.OSLocatorsByScopeRequest.displayName = 'proto.provenance.metadata.v1.OSLocatorsByScopeRequest';
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
proto.provenance.metadata.v1.OSLocatorsByScopeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.OSLocatorsByScopeResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.OSLocatorsByScopeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.OSLocatorsByScopeResponse.displayName = 'proto.provenance.metadata.v1.OSLocatorsByScopeResponse';
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
proto.provenance.metadata.v1.OSAllLocatorsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.OSAllLocatorsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.OSAllLocatorsRequest.displayName = 'proto.provenance.metadata.v1.OSAllLocatorsRequest';
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
proto.provenance.metadata.v1.OSAllLocatorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.OSAllLocatorsResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.OSAllLocatorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.OSAllLocatorsResponse.displayName = 'proto.provenance.metadata.v1.OSAllLocatorsResponse';
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
proto.provenance.metadata.v1.AccountDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.AccountDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.AccountDataRequest.displayName = 'proto.provenance.metadata.v1.AccountDataRequest';
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
proto.provenance.metadata.v1.AccountDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.AccountDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.AccountDataResponse.displayName = 'proto.provenance.metadata.v1.AccountDataResponse';
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
proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest.displayName = 'proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest';
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
proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.repeatedFields_, null);
};
goog.inherits(proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.displayName = 'proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse';
}



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
proto.provenance.metadata.v1.QueryParamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.QueryParamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.QueryParamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.QueryParamsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false)
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
 * @return {!proto.provenance.metadata.v1.QueryParamsRequest}
 */
proto.provenance.metadata.v1.QueryParamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.QueryParamsRequest;
  return proto.provenance.metadata.v1.QueryParamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.QueryParamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.QueryParamsRequest}
 */
proto.provenance.metadata.v1.QueryParamsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
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
proto.provenance.metadata.v1.QueryParamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.QueryParamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.QueryParamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.QueryParamsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.QueryParamsRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.QueryParamsRequest} returns this
 */
proto.provenance.metadata.v1.QueryParamsRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
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
proto.provenance.metadata.v1.QueryParamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.QueryParamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.QueryParamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.QueryParamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && provenance_metadata_v1_metadata_pb.Params.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.QueryParamsRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.QueryParamsResponse}
 */
proto.provenance.metadata.v1.QueryParamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.QueryParamsResponse;
  return proto.provenance.metadata.v1.QueryParamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.QueryParamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.QueryParamsResponse}
 */
proto.provenance.metadata.v1.QueryParamsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_metadata_pb.Params;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.QueryParamsRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.QueryParamsRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.provenance.metadata.v1.QueryParamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.QueryParamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.QueryParamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.QueryParamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_metadata_pb.Params.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.QueryParamsRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.provenance.metadata.v1.Params}
 */
proto.provenance.metadata.v1.QueryParamsResponse.prototype.getParams = function() {
  return /** @type{?proto.provenance.metadata.v1.Params} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.Params, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.Params|undefined} value
 * @return {!proto.provenance.metadata.v1.QueryParamsResponse} returns this
*/
proto.provenance.metadata.v1.QueryParamsResponse.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.QueryParamsResponse} returns this
 */
proto.provenance.metadata.v1.QueryParamsResponse.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.QueryParamsResponse.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional QueryParamsRequest request = 98;
 * @return {?proto.provenance.metadata.v1.QueryParamsRequest}
 */
proto.provenance.metadata.v1.QueryParamsResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.QueryParamsRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.QueryParamsRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.QueryParamsRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.QueryParamsResponse} returns this
*/
proto.provenance.metadata.v1.QueryParamsResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.QueryParamsResponse} returns this
 */
proto.provenance.metadata.v1.QueryParamsResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.QueryParamsResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
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
proto.provenance.metadata.v1.ScopeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ScopeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ScopeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sessionAddr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordAddr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    includeSessions: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    includeRecords: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false)
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
 * @return {!proto.provenance.metadata.v1.ScopeRequest}
 */
proto.provenance.metadata.v1.ScopeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ScopeRequest;
  return proto.provenance.metadata.v1.ScopeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ScopeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ScopeRequest}
 */
proto.provenance.metadata.v1.ScopeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSessionAddr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordAddr(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeSessions(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRecords(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
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
proto.provenance.metadata.v1.ScopeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ScopeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ScopeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionAddr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIncludeSessions();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getIncludeRecords();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
};


/**
 * optional string scope_id = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.getScopeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.ScopeRequest} returns this
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.setScopeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string session_addr = 2;
 * @return {string}
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.getSessionAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.ScopeRequest} returns this
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.setSessionAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string record_addr = 3;
 * @return {string}
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.getRecordAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.ScopeRequest} returns this
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.setRecordAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool include_sessions = 10;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.getIncludeSessions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ScopeRequest} returns this
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.setIncludeSessions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool include_records = 11;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.getIncludeRecords = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ScopeRequest} returns this
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.setIncludeRecords = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ScopeRequest} returns this
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ScopeRequest} returns this
 */
proto.provenance.metadata.v1.ScopeRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.ScopeResponse.repeatedFields_ = [2,3];



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
proto.provenance.metadata.v1.ScopeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ScopeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ScopeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scope: (f = msg.getScope()) && proto.provenance.metadata.v1.ScopeWrapper.toObject(includeInstance, f),
    sessionsList: jspb.Message.toObjectList(msg.getSessionsList(),
    proto.provenance.metadata.v1.SessionWrapper.toObject, includeInstance),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto.provenance.metadata.v1.RecordWrapper.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.ScopeRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.ScopeResponse}
 */
proto.provenance.metadata.v1.ScopeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ScopeResponse;
  return proto.provenance.metadata.v1.ScopeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ScopeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ScopeResponse}
 */
proto.provenance.metadata.v1.ScopeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.ScopeWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.ScopeWrapper.deserializeBinaryFromReader);
      msg.setScope(value);
      break;
    case 2:
      var value = new proto.provenance.metadata.v1.SessionWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.SessionWrapper.deserializeBinaryFromReader);
      msg.addSessions(value);
      break;
    case 3:
      var value = new proto.provenance.metadata.v1.RecordWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordWrapper.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.ScopeRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.ScopeRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.provenance.metadata.v1.ScopeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ScopeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ScopeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScope();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.provenance.metadata.v1.ScopeWrapper.serializeBinaryToWriter
    );
  }
  f = message.getSessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.provenance.metadata.v1.SessionWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.provenance.metadata.v1.RecordWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.ScopeRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScopeWrapper scope = 1;
 * @return {?proto.provenance.metadata.v1.ScopeWrapper}
 */
proto.provenance.metadata.v1.ScopeResponse.prototype.getScope = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeWrapper} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.ScopeWrapper, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeWrapper|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopeResponse} returns this
*/
proto.provenance.metadata.v1.ScopeResponse.prototype.setScope = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopeResponse} returns this
 */
proto.provenance.metadata.v1.ScopeResponse.prototype.clearScope = function() {
  return this.setScope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeResponse.prototype.hasScope = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SessionWrapper sessions = 2;
 * @return {!Array<!proto.provenance.metadata.v1.SessionWrapper>}
 */
proto.provenance.metadata.v1.ScopeResponse.prototype.getSessionsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.SessionWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.SessionWrapper, 2));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.SessionWrapper>} value
 * @return {!proto.provenance.metadata.v1.ScopeResponse} returns this
*/
proto.provenance.metadata.v1.ScopeResponse.prototype.setSessionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.provenance.metadata.v1.SessionWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.SessionWrapper}
 */
proto.provenance.metadata.v1.ScopeResponse.prototype.addSessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.provenance.metadata.v1.SessionWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.ScopeResponse} returns this
 */
proto.provenance.metadata.v1.ScopeResponse.prototype.clearSessionsList = function() {
  return this.setSessionsList([]);
};


/**
 * repeated RecordWrapper records = 3;
 * @return {!Array<!proto.provenance.metadata.v1.RecordWrapper>}
 */
proto.provenance.metadata.v1.ScopeResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.RecordWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.RecordWrapper, 3));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.RecordWrapper>} value
 * @return {!proto.provenance.metadata.v1.ScopeResponse} returns this
*/
proto.provenance.metadata.v1.ScopeResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.provenance.metadata.v1.RecordWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.RecordWrapper}
 */
proto.provenance.metadata.v1.ScopeResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.provenance.metadata.v1.RecordWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.ScopeResponse} returns this
 */
proto.provenance.metadata.v1.ScopeResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional ScopeRequest request = 98;
 * @return {?proto.provenance.metadata.v1.ScopeRequest}
 */
proto.provenance.metadata.v1.ScopeResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.ScopeRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopeResponse} returns this
*/
proto.provenance.metadata.v1.ScopeResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopeResponse} returns this
 */
proto.provenance.metadata.v1.ScopeResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
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
proto.provenance.metadata.v1.ScopeWrapper.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ScopeWrapper.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ScopeWrapper} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeWrapper.toObject = function(includeInstance, msg) {
  var f, obj = {
    scope: (f = msg.getScope()) && provenance_metadata_v1_scope_pb.Scope.toObject(includeInstance, f),
    scopeIdInfo: (f = msg.getScopeIdInfo()) && provenance_metadata_v1_metadata_pb.ScopeIdInfo.toObject(includeInstance, f),
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
 * @return {!proto.provenance.metadata.v1.ScopeWrapper}
 */
proto.provenance.metadata.v1.ScopeWrapper.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ScopeWrapper;
  return proto.provenance.metadata.v1.ScopeWrapper.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ScopeWrapper} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ScopeWrapper}
 */
proto.provenance.metadata.v1.ScopeWrapper.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new provenance_metadata_v1_metadata_pb.ScopeIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.ScopeIdInfo.deserializeBinaryFromReader);
      msg.setScopeIdInfo(value);
      break;
    case 3:
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
proto.provenance.metadata.v1.ScopeWrapper.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ScopeWrapper.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ScopeWrapper} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeWrapper.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScope();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_scope_pb.Scope.serializeBinaryToWriter
    );
  }
  f = message.getScopeIdInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      provenance_metadata_v1_metadata_pb.ScopeIdInfo.serializeBinaryToWriter
    );
  }
  f = message.getScopeSpecIdInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Scope scope = 1;
 * @return {?proto.provenance.metadata.v1.Scope}
 */
proto.provenance.metadata.v1.ScopeWrapper.prototype.getScope = function() {
  return /** @type{?proto.provenance.metadata.v1.Scope} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_scope_pb.Scope, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.Scope|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopeWrapper} returns this
*/
proto.provenance.metadata.v1.ScopeWrapper.prototype.setScope = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopeWrapper} returns this
 */
proto.provenance.metadata.v1.ScopeWrapper.prototype.clearScope = function() {
  return this.setScope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeWrapper.prototype.hasScope = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ScopeIdInfo scope_id_info = 2;
 * @return {?proto.provenance.metadata.v1.ScopeIdInfo}
 */
proto.provenance.metadata.v1.ScopeWrapper.prototype.getScopeIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.ScopeIdInfo, 2));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopeWrapper} returns this
*/
proto.provenance.metadata.v1.ScopeWrapper.prototype.setScopeIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopeWrapper} returns this
 */
proto.provenance.metadata.v1.ScopeWrapper.prototype.clearScopeIdInfo = function() {
  return this.setScopeIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeWrapper.prototype.hasScopeIdInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ScopeSpecIdInfo scope_spec_id_info = 3;
 * @return {?proto.provenance.metadata.v1.ScopeSpecIdInfo}
 */
proto.provenance.metadata.v1.ScopeWrapper.prototype.getScopeSpecIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeSpecIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo, 3));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeSpecIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopeWrapper} returns this
*/
proto.provenance.metadata.v1.ScopeWrapper.prototype.setScopeSpecIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopeWrapper} returns this
 */
proto.provenance.metadata.v1.ScopeWrapper.prototype.clearScopeSpecIdInfo = function() {
  return this.setScopeSpecIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeWrapper.prototype.hasScopeSpecIdInfo = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.provenance.metadata.v1.ScopesAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ScopesAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ScopesAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopesAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.ScopesAllRequest}
 */
proto.provenance.metadata.v1.ScopesAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ScopesAllRequest;
  return proto.provenance.metadata.v1.ScopesAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ScopesAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ScopesAllRequest}
 */
proto.provenance.metadata.v1.ScopesAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.ScopesAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ScopesAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ScopesAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopesAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopesAllRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ScopesAllRequest} returns this
 */
proto.provenance.metadata.v1.ScopesAllRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopesAllRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ScopesAllRequest} returns this
 */
proto.provenance.metadata.v1.ScopesAllRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.provenance.metadata.v1.ScopesAllRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopesAllRequest} returns this
*/
proto.provenance.metadata.v1.ScopesAllRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopesAllRequest} returns this
 */
proto.provenance.metadata.v1.ScopesAllRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopesAllRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.ScopesAllResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.ScopesAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ScopesAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ScopesAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopesAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopesList: jspb.Message.toObjectList(msg.getScopesList(),
    proto.provenance.metadata.v1.ScopeWrapper.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.ScopesAllRequest.toObject(includeInstance, f),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.ScopesAllResponse}
 */
proto.provenance.metadata.v1.ScopesAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ScopesAllResponse;
  return proto.provenance.metadata.v1.ScopesAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ScopesAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ScopesAllResponse}
 */
proto.provenance.metadata.v1.ScopesAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.ScopeWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.ScopeWrapper.deserializeBinaryFromReader);
      msg.addScopes(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.ScopesAllRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.ScopesAllRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.ScopesAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ScopesAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ScopesAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopesAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.provenance.metadata.v1.ScopeWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.ScopesAllRequest.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ScopeWrapper scopes = 1;
 * @return {!Array<!proto.provenance.metadata.v1.ScopeWrapper>}
 */
proto.provenance.metadata.v1.ScopesAllResponse.prototype.getScopesList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.ScopeWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.ScopeWrapper, 1));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.ScopeWrapper>} value
 * @return {!proto.provenance.metadata.v1.ScopesAllResponse} returns this
*/
proto.provenance.metadata.v1.ScopesAllResponse.prototype.setScopesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.provenance.metadata.v1.ScopeWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.ScopeWrapper}
 */
proto.provenance.metadata.v1.ScopesAllResponse.prototype.addScopes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.provenance.metadata.v1.ScopeWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.ScopesAllResponse} returns this
 */
proto.provenance.metadata.v1.ScopesAllResponse.prototype.clearScopesList = function() {
  return this.setScopesList([]);
};


/**
 * optional ScopesAllRequest request = 98;
 * @return {?proto.provenance.metadata.v1.ScopesAllRequest}
 */
proto.provenance.metadata.v1.ScopesAllResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopesAllRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.ScopesAllRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopesAllRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopesAllResponse} returns this
*/
proto.provenance.metadata.v1.ScopesAllResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopesAllResponse} returns this
 */
proto.provenance.metadata.v1.ScopesAllResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopesAllResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.provenance.metadata.v1.ScopesAllResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopesAllResponse} returns this
*/
proto.provenance.metadata.v1.ScopesAllResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopesAllResponse} returns this
 */
proto.provenance.metadata.v1.ScopesAllResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopesAllResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
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
proto.provenance.metadata.v1.SessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.SessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.SessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.SessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sessionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordAddr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    recordName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    includeScope: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    includeRecords: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false)
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
 * @return {!proto.provenance.metadata.v1.SessionsRequest}
 */
proto.provenance.metadata.v1.SessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.SessionsRequest;
  return proto.provenance.metadata.v1.SessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.SessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.SessionsRequest}
 */
proto.provenance.metadata.v1.SessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSessionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordAddr(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordName(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeScope(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRecords(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
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
proto.provenance.metadata.v1.SessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.SessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.SessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.SessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRecordName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIncludeScope();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getIncludeRecords();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
};


/**
 * optional string scope_id = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.getScopeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.SessionsRequest} returns this
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.setScopeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.SessionsRequest} returns this
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string record_addr = 3;
 * @return {string}
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.getRecordAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.SessionsRequest} returns this
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.setRecordAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string record_name = 4;
 * @return {string}
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.getRecordName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.SessionsRequest} returns this
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.setRecordName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool include_scope = 10;
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.getIncludeScope = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.SessionsRequest} returns this
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.setIncludeScope = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool include_records = 11;
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.getIncludeRecords = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.SessionsRequest} returns this
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.setIncludeRecords = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.SessionsRequest} returns this
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.SessionsRequest} returns this
 */
proto.provenance.metadata.v1.SessionsRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.SessionsResponse.repeatedFields_ = [2,3];



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
proto.provenance.metadata.v1.SessionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.SessionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.SessionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.SessionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scope: (f = msg.getScope()) && proto.provenance.metadata.v1.ScopeWrapper.toObject(includeInstance, f),
    sessionsList: jspb.Message.toObjectList(msg.getSessionsList(),
    proto.provenance.metadata.v1.SessionWrapper.toObject, includeInstance),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto.provenance.metadata.v1.RecordWrapper.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.SessionsRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.SessionsResponse}
 */
proto.provenance.metadata.v1.SessionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.SessionsResponse;
  return proto.provenance.metadata.v1.SessionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.SessionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.SessionsResponse}
 */
proto.provenance.metadata.v1.SessionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.ScopeWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.ScopeWrapper.deserializeBinaryFromReader);
      msg.setScope(value);
      break;
    case 2:
      var value = new proto.provenance.metadata.v1.SessionWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.SessionWrapper.deserializeBinaryFromReader);
      msg.addSessions(value);
      break;
    case 3:
      var value = new proto.provenance.metadata.v1.RecordWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordWrapper.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.SessionsRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.SessionsRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.provenance.metadata.v1.SessionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.SessionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.SessionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.SessionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScope();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.provenance.metadata.v1.ScopeWrapper.serializeBinaryToWriter
    );
  }
  f = message.getSessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.provenance.metadata.v1.SessionWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.provenance.metadata.v1.RecordWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.SessionsRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScopeWrapper scope = 1;
 * @return {?proto.provenance.metadata.v1.ScopeWrapper}
 */
proto.provenance.metadata.v1.SessionsResponse.prototype.getScope = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeWrapper} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.ScopeWrapper, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeWrapper|undefined} value
 * @return {!proto.provenance.metadata.v1.SessionsResponse} returns this
*/
proto.provenance.metadata.v1.SessionsResponse.prototype.setScope = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.SessionsResponse} returns this
 */
proto.provenance.metadata.v1.SessionsResponse.prototype.clearScope = function() {
  return this.setScope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionsResponse.prototype.hasScope = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SessionWrapper sessions = 2;
 * @return {!Array<!proto.provenance.metadata.v1.SessionWrapper>}
 */
proto.provenance.metadata.v1.SessionsResponse.prototype.getSessionsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.SessionWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.SessionWrapper, 2));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.SessionWrapper>} value
 * @return {!proto.provenance.metadata.v1.SessionsResponse} returns this
*/
proto.provenance.metadata.v1.SessionsResponse.prototype.setSessionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.provenance.metadata.v1.SessionWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.SessionWrapper}
 */
proto.provenance.metadata.v1.SessionsResponse.prototype.addSessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.provenance.metadata.v1.SessionWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.SessionsResponse} returns this
 */
proto.provenance.metadata.v1.SessionsResponse.prototype.clearSessionsList = function() {
  return this.setSessionsList([]);
};


/**
 * repeated RecordWrapper records = 3;
 * @return {!Array<!proto.provenance.metadata.v1.RecordWrapper>}
 */
proto.provenance.metadata.v1.SessionsResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.RecordWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.RecordWrapper, 3));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.RecordWrapper>} value
 * @return {!proto.provenance.metadata.v1.SessionsResponse} returns this
*/
proto.provenance.metadata.v1.SessionsResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.provenance.metadata.v1.RecordWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.RecordWrapper}
 */
proto.provenance.metadata.v1.SessionsResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.provenance.metadata.v1.RecordWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.SessionsResponse} returns this
 */
proto.provenance.metadata.v1.SessionsResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional SessionsRequest request = 98;
 * @return {?proto.provenance.metadata.v1.SessionsRequest}
 */
proto.provenance.metadata.v1.SessionsResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.SessionsRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.SessionsRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.SessionsRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.SessionsResponse} returns this
*/
proto.provenance.metadata.v1.SessionsResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.SessionsResponse} returns this
 */
proto.provenance.metadata.v1.SessionsResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionsResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
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
proto.provenance.metadata.v1.SessionWrapper.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.SessionWrapper.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.SessionWrapper} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.SessionWrapper.toObject = function(includeInstance, msg) {
  var f, obj = {
    session: (f = msg.getSession()) && provenance_metadata_v1_scope_pb.Session.toObject(includeInstance, f),
    sessionIdInfo: (f = msg.getSessionIdInfo()) && provenance_metadata_v1_metadata_pb.SessionIdInfo.toObject(includeInstance, f),
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
 * @return {!proto.provenance.metadata.v1.SessionWrapper}
 */
proto.provenance.metadata.v1.SessionWrapper.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.SessionWrapper;
  return proto.provenance.metadata.v1.SessionWrapper.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.SessionWrapper} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.SessionWrapper}
 */
proto.provenance.metadata.v1.SessionWrapper.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new provenance_metadata_v1_metadata_pb.SessionIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.SessionIdInfo.deserializeBinaryFromReader);
      msg.setSessionIdInfo(value);
      break;
    case 3:
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
proto.provenance.metadata.v1.SessionWrapper.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.SessionWrapper.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.SessionWrapper} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.SessionWrapper.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_scope_pb.Session.serializeBinaryToWriter
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
  f = message.getContractSpecIdInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      provenance_metadata_v1_metadata_pb.ContractSpecIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Session session = 1;
 * @return {?proto.provenance.metadata.v1.Session}
 */
proto.provenance.metadata.v1.SessionWrapper.prototype.getSession = function() {
  return /** @type{?proto.provenance.metadata.v1.Session} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_scope_pb.Session, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.Session|undefined} value
 * @return {!proto.provenance.metadata.v1.SessionWrapper} returns this
*/
proto.provenance.metadata.v1.SessionWrapper.prototype.setSession = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.SessionWrapper} returns this
 */
proto.provenance.metadata.v1.SessionWrapper.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionWrapper.prototype.hasSession = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SessionIdInfo session_id_info = 2;
 * @return {?proto.provenance.metadata.v1.SessionIdInfo}
 */
proto.provenance.metadata.v1.SessionWrapper.prototype.getSessionIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.SessionIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.SessionIdInfo, 2));
};


/**
 * @param {?proto.provenance.metadata.v1.SessionIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.SessionWrapper} returns this
*/
proto.provenance.metadata.v1.SessionWrapper.prototype.setSessionIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.SessionWrapper} returns this
 */
proto.provenance.metadata.v1.SessionWrapper.prototype.clearSessionIdInfo = function() {
  return this.setSessionIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionWrapper.prototype.hasSessionIdInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ContractSpecIdInfo contract_spec_id_info = 3;
 * @return {?proto.provenance.metadata.v1.ContractSpecIdInfo}
 */
proto.provenance.metadata.v1.SessionWrapper.prototype.getContractSpecIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.ContractSpecIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.ContractSpecIdInfo, 3));
};


/**
 * @param {?proto.provenance.metadata.v1.ContractSpecIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.SessionWrapper} returns this
*/
proto.provenance.metadata.v1.SessionWrapper.prototype.setContractSpecIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.SessionWrapper} returns this
 */
proto.provenance.metadata.v1.SessionWrapper.prototype.clearContractSpecIdInfo = function() {
  return this.setContractSpecIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionWrapper.prototype.hasContractSpecIdInfo = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.provenance.metadata.v1.SessionsAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.SessionsAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.SessionsAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.SessionsAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.SessionsAllRequest}
 */
proto.provenance.metadata.v1.SessionsAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.SessionsAllRequest;
  return proto.provenance.metadata.v1.SessionsAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.SessionsAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.SessionsAllRequest}
 */
proto.provenance.metadata.v1.SessionsAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.SessionsAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.SessionsAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.SessionsAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.SessionsAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionsAllRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.SessionsAllRequest} returns this
 */
proto.provenance.metadata.v1.SessionsAllRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionsAllRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.SessionsAllRequest} returns this
 */
proto.provenance.metadata.v1.SessionsAllRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.provenance.metadata.v1.SessionsAllRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.SessionsAllRequest} returns this
*/
proto.provenance.metadata.v1.SessionsAllRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.SessionsAllRequest} returns this
 */
proto.provenance.metadata.v1.SessionsAllRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionsAllRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.SessionsAllResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.SessionsAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.SessionsAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.SessionsAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.SessionsAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionsList: jspb.Message.toObjectList(msg.getSessionsList(),
    proto.provenance.metadata.v1.SessionWrapper.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.SessionsAllRequest.toObject(includeInstance, f),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.SessionsAllResponse}
 */
proto.provenance.metadata.v1.SessionsAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.SessionsAllResponse;
  return proto.provenance.metadata.v1.SessionsAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.SessionsAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.SessionsAllResponse}
 */
proto.provenance.metadata.v1.SessionsAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.SessionWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.SessionWrapper.deserializeBinaryFromReader);
      msg.addSessions(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.SessionsAllRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.SessionsAllRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.SessionsAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.SessionsAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.SessionsAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.SessionsAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.provenance.metadata.v1.SessionWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.SessionsAllRequest.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SessionWrapper sessions = 1;
 * @return {!Array<!proto.provenance.metadata.v1.SessionWrapper>}
 */
proto.provenance.metadata.v1.SessionsAllResponse.prototype.getSessionsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.SessionWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.SessionWrapper, 1));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.SessionWrapper>} value
 * @return {!proto.provenance.metadata.v1.SessionsAllResponse} returns this
*/
proto.provenance.metadata.v1.SessionsAllResponse.prototype.setSessionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.provenance.metadata.v1.SessionWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.SessionWrapper}
 */
proto.provenance.metadata.v1.SessionsAllResponse.prototype.addSessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.provenance.metadata.v1.SessionWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.SessionsAllResponse} returns this
 */
proto.provenance.metadata.v1.SessionsAllResponse.prototype.clearSessionsList = function() {
  return this.setSessionsList([]);
};


/**
 * optional SessionsAllRequest request = 98;
 * @return {?proto.provenance.metadata.v1.SessionsAllRequest}
 */
proto.provenance.metadata.v1.SessionsAllResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.SessionsAllRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.SessionsAllRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.SessionsAllRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.SessionsAllResponse} returns this
*/
proto.provenance.metadata.v1.SessionsAllResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.SessionsAllResponse} returns this
 */
proto.provenance.metadata.v1.SessionsAllResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionsAllResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.provenance.metadata.v1.SessionsAllResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.provenance.metadata.v1.SessionsAllResponse} returns this
*/
proto.provenance.metadata.v1.SessionsAllResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.SessionsAllResponse} returns this
 */
proto.provenance.metadata.v1.SessionsAllResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.SessionsAllResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
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
proto.provenance.metadata.v1.RecordsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.RecordsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.RecordsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sessionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    includeScope: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    includeSessions: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false)
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
 * @return {!proto.provenance.metadata.v1.RecordsRequest}
 */
proto.provenance.metadata.v1.RecordsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.RecordsRequest;
  return proto.provenance.metadata.v1.RecordsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.RecordsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.RecordsRequest}
 */
proto.provenance.metadata.v1.RecordsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordAddr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeScope(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeSessions(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
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
proto.provenance.metadata.v1.RecordsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.RecordsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.RecordsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIncludeScope();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getIncludeSessions();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
};


/**
 * optional string record_addr = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.getRecordAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.RecordsRequest} returns this
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.setRecordAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_id = 2;
 * @return {string}
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.getScopeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.RecordsRequest} returns this
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.setScopeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string session_id = 3;
 * @return {string}
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.RecordsRequest} returns this
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.RecordsRequest} returns this
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool include_scope = 10;
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.getIncludeScope = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.RecordsRequest} returns this
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.setIncludeScope = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool include_sessions = 11;
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.getIncludeSessions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.RecordsRequest} returns this
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.setIncludeSessions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.RecordsRequest} returns this
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.RecordsRequest} returns this
 */
proto.provenance.metadata.v1.RecordsRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.RecordsResponse.repeatedFields_ = [2,3];



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
proto.provenance.metadata.v1.RecordsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.RecordsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.RecordsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scope: (f = msg.getScope()) && proto.provenance.metadata.v1.ScopeWrapper.toObject(includeInstance, f),
    sessionsList: jspb.Message.toObjectList(msg.getSessionsList(),
    proto.provenance.metadata.v1.SessionWrapper.toObject, includeInstance),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto.provenance.metadata.v1.RecordWrapper.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.RecordsRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.RecordsResponse}
 */
proto.provenance.metadata.v1.RecordsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.RecordsResponse;
  return proto.provenance.metadata.v1.RecordsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.RecordsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.RecordsResponse}
 */
proto.provenance.metadata.v1.RecordsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.ScopeWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.ScopeWrapper.deserializeBinaryFromReader);
      msg.setScope(value);
      break;
    case 2:
      var value = new proto.provenance.metadata.v1.SessionWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.SessionWrapper.deserializeBinaryFromReader);
      msg.addSessions(value);
      break;
    case 3:
      var value = new proto.provenance.metadata.v1.RecordWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordWrapper.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.RecordsRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordsRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.provenance.metadata.v1.RecordsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.RecordsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.RecordsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScope();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.provenance.metadata.v1.ScopeWrapper.serializeBinaryToWriter
    );
  }
  f = message.getSessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.provenance.metadata.v1.SessionWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.provenance.metadata.v1.RecordWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.RecordsRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScopeWrapper scope = 1;
 * @return {?proto.provenance.metadata.v1.ScopeWrapper}
 */
proto.provenance.metadata.v1.RecordsResponse.prototype.getScope = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeWrapper} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.ScopeWrapper, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeWrapper|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordsResponse} returns this
*/
proto.provenance.metadata.v1.RecordsResponse.prototype.setScope = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordsResponse} returns this
 */
proto.provenance.metadata.v1.RecordsResponse.prototype.clearScope = function() {
  return this.setScope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordsResponse.prototype.hasScope = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated SessionWrapper sessions = 2;
 * @return {!Array<!proto.provenance.metadata.v1.SessionWrapper>}
 */
proto.provenance.metadata.v1.RecordsResponse.prototype.getSessionsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.SessionWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.SessionWrapper, 2));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.SessionWrapper>} value
 * @return {!proto.provenance.metadata.v1.RecordsResponse} returns this
*/
proto.provenance.metadata.v1.RecordsResponse.prototype.setSessionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.provenance.metadata.v1.SessionWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.SessionWrapper}
 */
proto.provenance.metadata.v1.RecordsResponse.prototype.addSessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.provenance.metadata.v1.SessionWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.RecordsResponse} returns this
 */
proto.provenance.metadata.v1.RecordsResponse.prototype.clearSessionsList = function() {
  return this.setSessionsList([]);
};


/**
 * repeated RecordWrapper records = 3;
 * @return {!Array<!proto.provenance.metadata.v1.RecordWrapper>}
 */
proto.provenance.metadata.v1.RecordsResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.RecordWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.RecordWrapper, 3));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.RecordWrapper>} value
 * @return {!proto.provenance.metadata.v1.RecordsResponse} returns this
*/
proto.provenance.metadata.v1.RecordsResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.provenance.metadata.v1.RecordWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.RecordWrapper}
 */
proto.provenance.metadata.v1.RecordsResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.provenance.metadata.v1.RecordWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.RecordsResponse} returns this
 */
proto.provenance.metadata.v1.RecordsResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional RecordsRequest request = 98;
 * @return {?proto.provenance.metadata.v1.RecordsRequest}
 */
proto.provenance.metadata.v1.RecordsResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordsRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.RecordsRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordsRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordsResponse} returns this
*/
proto.provenance.metadata.v1.RecordsResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordsResponse} returns this
 */
proto.provenance.metadata.v1.RecordsResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordsResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
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
proto.provenance.metadata.v1.RecordWrapper.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.RecordWrapper.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.RecordWrapper} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordWrapper.toObject = function(includeInstance, msg) {
  var f, obj = {
    record: (f = msg.getRecord()) && provenance_metadata_v1_scope_pb.Record.toObject(includeInstance, f),
    recordIdInfo: (f = msg.getRecordIdInfo()) && provenance_metadata_v1_metadata_pb.RecordIdInfo.toObject(includeInstance, f),
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
 * @return {!proto.provenance.metadata.v1.RecordWrapper}
 */
proto.provenance.metadata.v1.RecordWrapper.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.RecordWrapper;
  return proto.provenance.metadata.v1.RecordWrapper.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.RecordWrapper} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.RecordWrapper}
 */
proto.provenance.metadata.v1.RecordWrapper.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new provenance_metadata_v1_metadata_pb.RecordIdInfo;
      reader.readMessage(value,provenance_metadata_v1_metadata_pb.RecordIdInfo.deserializeBinaryFromReader);
      msg.setRecordIdInfo(value);
      break;
    case 3:
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
proto.provenance.metadata.v1.RecordWrapper.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.RecordWrapper.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.RecordWrapper} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordWrapper.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecord();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_scope_pb.Record.serializeBinaryToWriter
    );
  }
  f = message.getRecordIdInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      provenance_metadata_v1_metadata_pb.RecordIdInfo.serializeBinaryToWriter
    );
  }
  f = message.getRecordSpecIdInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      provenance_metadata_v1_metadata_pb.RecordSpecIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Record record = 1;
 * @return {?proto.provenance.metadata.v1.Record}
 */
proto.provenance.metadata.v1.RecordWrapper.prototype.getRecord = function() {
  return /** @type{?proto.provenance.metadata.v1.Record} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_scope_pb.Record, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.Record|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordWrapper} returns this
*/
proto.provenance.metadata.v1.RecordWrapper.prototype.setRecord = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordWrapper} returns this
 */
proto.provenance.metadata.v1.RecordWrapper.prototype.clearRecord = function() {
  return this.setRecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordWrapper.prototype.hasRecord = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RecordIdInfo record_id_info = 2;
 * @return {?proto.provenance.metadata.v1.RecordIdInfo}
 */
proto.provenance.metadata.v1.RecordWrapper.prototype.getRecordIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.RecordIdInfo, 2));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordWrapper} returns this
*/
proto.provenance.metadata.v1.RecordWrapper.prototype.setRecordIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordWrapper} returns this
 */
proto.provenance.metadata.v1.RecordWrapper.prototype.clearRecordIdInfo = function() {
  return this.setRecordIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordWrapper.prototype.hasRecordIdInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RecordSpecIdInfo record_spec_id_info = 3;
 * @return {?proto.provenance.metadata.v1.RecordSpecIdInfo}
 */
proto.provenance.metadata.v1.RecordWrapper.prototype.getRecordSpecIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordSpecIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.RecordSpecIdInfo, 3));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordSpecIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordWrapper} returns this
*/
proto.provenance.metadata.v1.RecordWrapper.prototype.setRecordSpecIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordWrapper} returns this
 */
proto.provenance.metadata.v1.RecordWrapper.prototype.clearRecordSpecIdInfo = function() {
  return this.setRecordSpecIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordWrapper.prototype.hasRecordSpecIdInfo = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.provenance.metadata.v1.RecordsAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.RecordsAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.RecordsAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordsAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.RecordsAllRequest}
 */
proto.provenance.metadata.v1.RecordsAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.RecordsAllRequest;
  return proto.provenance.metadata.v1.RecordsAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.RecordsAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.RecordsAllRequest}
 */
proto.provenance.metadata.v1.RecordsAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.RecordsAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.RecordsAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.RecordsAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordsAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordsAllRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.RecordsAllRequest} returns this
 */
proto.provenance.metadata.v1.RecordsAllRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordsAllRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.RecordsAllRequest} returns this
 */
proto.provenance.metadata.v1.RecordsAllRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.provenance.metadata.v1.RecordsAllRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordsAllRequest} returns this
*/
proto.provenance.metadata.v1.RecordsAllRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordsAllRequest} returns this
 */
proto.provenance.metadata.v1.RecordsAllRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordsAllRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.RecordsAllResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.RecordsAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.RecordsAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.RecordsAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordsAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto.provenance.metadata.v1.RecordWrapper.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.RecordsAllRequest.toObject(includeInstance, f),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.RecordsAllResponse}
 */
proto.provenance.metadata.v1.RecordsAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.RecordsAllResponse;
  return proto.provenance.metadata.v1.RecordsAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.RecordsAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.RecordsAllResponse}
 */
proto.provenance.metadata.v1.RecordsAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.RecordWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordWrapper.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.RecordsAllRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordsAllRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.RecordsAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.RecordsAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.RecordsAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordsAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.provenance.metadata.v1.RecordWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.RecordsAllRequest.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RecordWrapper records = 1;
 * @return {!Array<!proto.provenance.metadata.v1.RecordWrapper>}
 */
proto.provenance.metadata.v1.RecordsAllResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.RecordWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.RecordWrapper, 1));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.RecordWrapper>} value
 * @return {!proto.provenance.metadata.v1.RecordsAllResponse} returns this
*/
proto.provenance.metadata.v1.RecordsAllResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.provenance.metadata.v1.RecordWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.RecordWrapper}
 */
proto.provenance.metadata.v1.RecordsAllResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.provenance.metadata.v1.RecordWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.RecordsAllResponse} returns this
 */
proto.provenance.metadata.v1.RecordsAllResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional RecordsAllRequest request = 98;
 * @return {?proto.provenance.metadata.v1.RecordsAllRequest}
 */
proto.provenance.metadata.v1.RecordsAllResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordsAllRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.RecordsAllRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordsAllRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordsAllResponse} returns this
*/
proto.provenance.metadata.v1.RecordsAllResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordsAllResponse} returns this
 */
proto.provenance.metadata.v1.RecordsAllResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordsAllResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.provenance.metadata.v1.RecordsAllResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordsAllResponse} returns this
*/
proto.provenance.metadata.v1.RecordsAllResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordsAllResponse} returns this
 */
proto.provenance.metadata.v1.RecordsAllResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordsAllResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
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
proto.provenance.metadata.v1.OwnershipRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.OwnershipRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.OwnershipRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OwnershipRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.OwnershipRequest}
 */
proto.provenance.metadata.v1.OwnershipRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.OwnershipRequest;
  return proto.provenance.metadata.v1.OwnershipRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.OwnershipRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.OwnershipRequest}
 */
proto.provenance.metadata.v1.OwnershipRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.OwnershipRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.OwnershipRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.OwnershipRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OwnershipRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.OwnershipRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.OwnershipRequest} returns this
 */
proto.provenance.metadata.v1.OwnershipRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.OwnershipRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.OwnershipRequest} returns this
 */
proto.provenance.metadata.v1.OwnershipRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.provenance.metadata.v1.OwnershipRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.OwnershipRequest} returns this
*/
proto.provenance.metadata.v1.OwnershipRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OwnershipRequest} returns this
 */
proto.provenance.metadata.v1.OwnershipRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OwnershipRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.OwnershipResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.OwnershipResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.OwnershipResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.OwnershipResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OwnershipResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeUuidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.OwnershipRequest.toObject(includeInstance, f),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.OwnershipResponse}
 */
proto.provenance.metadata.v1.OwnershipResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.OwnershipResponse;
  return proto.provenance.metadata.v1.OwnershipResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.OwnershipResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.OwnershipResponse}
 */
proto.provenance.metadata.v1.OwnershipResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addScopeUuids(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.OwnershipRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.OwnershipRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.OwnershipResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.OwnershipResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.OwnershipResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OwnershipResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeUuidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.OwnershipRequest.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string scope_uuids = 1;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.OwnershipResponse.prototype.getScopeUuidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.OwnershipResponse} returns this
 */
proto.provenance.metadata.v1.OwnershipResponse.prototype.setScopeUuidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.OwnershipResponse} returns this
 */
proto.provenance.metadata.v1.OwnershipResponse.prototype.addScopeUuids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.OwnershipResponse} returns this
 */
proto.provenance.metadata.v1.OwnershipResponse.prototype.clearScopeUuidsList = function() {
  return this.setScopeUuidsList([]);
};


/**
 * optional OwnershipRequest request = 98;
 * @return {?proto.provenance.metadata.v1.OwnershipRequest}
 */
proto.provenance.metadata.v1.OwnershipResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.OwnershipRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.OwnershipRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.OwnershipRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.OwnershipResponse} returns this
*/
proto.provenance.metadata.v1.OwnershipResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OwnershipResponse} returns this
 */
proto.provenance.metadata.v1.OwnershipResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OwnershipResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.provenance.metadata.v1.OwnershipResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.provenance.metadata.v1.OwnershipResponse} returns this
*/
proto.provenance.metadata.v1.OwnershipResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OwnershipResponse} returns this
 */
proto.provenance.metadata.v1.OwnershipResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OwnershipResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
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
proto.provenance.metadata.v1.ValueOwnershipRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ValueOwnershipRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ValueOwnershipRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ValueOwnershipRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.ValueOwnershipRequest}
 */
proto.provenance.metadata.v1.ValueOwnershipRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ValueOwnershipRequest;
  return proto.provenance.metadata.v1.ValueOwnershipRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ValueOwnershipRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ValueOwnershipRequest}
 */
proto.provenance.metadata.v1.ValueOwnershipRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.ValueOwnershipRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ValueOwnershipRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ValueOwnershipRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ValueOwnershipRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.ValueOwnershipRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.ValueOwnershipRequest} returns this
 */
proto.provenance.metadata.v1.ValueOwnershipRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ValueOwnershipRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ValueOwnershipRequest} returns this
 */
proto.provenance.metadata.v1.ValueOwnershipRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.provenance.metadata.v1.ValueOwnershipRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.ValueOwnershipRequest} returns this
*/
proto.provenance.metadata.v1.ValueOwnershipRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ValueOwnershipRequest} returns this
 */
proto.provenance.metadata.v1.ValueOwnershipRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ValueOwnershipRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ValueOwnershipResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ValueOwnershipResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeUuidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.ValueOwnershipRequest.toObject(includeInstance, f),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.ValueOwnershipResponse}
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ValueOwnershipResponse;
  return proto.provenance.metadata.v1.ValueOwnershipResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ValueOwnershipResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ValueOwnershipResponse}
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addScopeUuids(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.ValueOwnershipRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.ValueOwnershipRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ValueOwnershipResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ValueOwnershipResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeUuidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.ValueOwnershipRequest.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string scope_uuids = 1;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.getScopeUuidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.ValueOwnershipResponse} returns this
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.setScopeUuidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.ValueOwnershipResponse} returns this
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.addScopeUuids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.ValueOwnershipResponse} returns this
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.clearScopeUuidsList = function() {
  return this.setScopeUuidsList([]);
};


/**
 * optional ValueOwnershipRequest request = 98;
 * @return {?proto.provenance.metadata.v1.ValueOwnershipRequest}
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.ValueOwnershipRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.ValueOwnershipRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.ValueOwnershipRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.ValueOwnershipResponse} returns this
*/
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ValueOwnershipResponse} returns this
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.provenance.metadata.v1.ValueOwnershipResponse} returns this
*/
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ValueOwnershipResponse} returns this
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ValueOwnershipResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
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
proto.provenance.metadata.v1.ScopeSpecificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ScopeSpecificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    specificationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeContractSpecs: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    includeRecordSpecs: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false)
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
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationRequest}
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ScopeSpecificationRequest;
  return proto.provenance.metadata.v1.ScopeSpecificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationRequest}
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecificationId(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeContractSpecs(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRecordSpecs(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
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
proto.provenance.metadata.v1.ScopeSpecificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ScopeSpecificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecificationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeContractSpecs();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getIncludeRecordSpecs();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
};


/**
 * optional string specification_id = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.prototype.getSpecificationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.prototype.setSpecificationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool include_contract_specs = 10;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.prototype.getIncludeContractSpecs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.prototype.setIncludeContractSpecs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool include_record_specs = 11;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.prototype.getIncludeRecordSpecs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.prototype.setIncludeRecordSpecs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.repeatedFields_ = [2,3];



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
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ScopeSpecificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeSpecification: (f = msg.getScopeSpecification()) && proto.provenance.metadata.v1.ScopeSpecificationWrapper.toObject(includeInstance, f),
    contractSpecsList: jspb.Message.toObjectList(msg.getContractSpecsList(),
    proto.provenance.metadata.v1.ContractSpecificationWrapper.toObject, includeInstance),
    recordSpecsList: jspb.Message.toObjectList(msg.getRecordSpecsList(),
    proto.provenance.metadata.v1.RecordSpecificationWrapper.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.ScopeSpecificationRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationResponse}
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ScopeSpecificationResponse;
  return proto.provenance.metadata.v1.ScopeSpecificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationResponse}
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.ScopeSpecificationWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.ScopeSpecificationWrapper.deserializeBinaryFromReader);
      msg.setScopeSpecification(value);
      break;
    case 2:
      var value = new proto.provenance.metadata.v1.ContractSpecificationWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.ContractSpecificationWrapper.deserializeBinaryFromReader);
      msg.addContractSpecs(value);
      break;
    case 3:
      var value = new proto.provenance.metadata.v1.RecordSpecificationWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordSpecificationWrapper.deserializeBinaryFromReader);
      msg.addRecordSpecs(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.ScopeSpecificationRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.ScopeSpecificationRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ScopeSpecificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeSpecification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.provenance.metadata.v1.ScopeSpecificationWrapper.serializeBinaryToWriter
    );
  }
  f = message.getContractSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.provenance.metadata.v1.ContractSpecificationWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRecordSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.provenance.metadata.v1.RecordSpecificationWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.ScopeSpecificationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScopeSpecificationWrapper scope_specification = 1;
 * @return {?proto.provenance.metadata.v1.ScopeSpecificationWrapper}
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.getScopeSpecification = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeSpecificationWrapper} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.ScopeSpecificationWrapper, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeSpecificationWrapper|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.setScopeSpecification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.clearScopeSpecification = function() {
  return this.setScopeSpecification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.hasScopeSpecification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ContractSpecificationWrapper contract_specs = 2;
 * @return {!Array<!proto.provenance.metadata.v1.ContractSpecificationWrapper>}
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.getContractSpecsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.ContractSpecificationWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.ContractSpecificationWrapper, 2));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.ContractSpecificationWrapper>} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.setContractSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.provenance.metadata.v1.ContractSpecificationWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.ContractSpecificationWrapper}
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.addContractSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.provenance.metadata.v1.ContractSpecificationWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.clearContractSpecsList = function() {
  return this.setContractSpecsList([]);
};


/**
 * repeated RecordSpecificationWrapper record_specs = 3;
 * @return {!Array<!proto.provenance.metadata.v1.RecordSpecificationWrapper>}
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.getRecordSpecsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.RecordSpecificationWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.RecordSpecificationWrapper, 3));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.RecordSpecificationWrapper>} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.setRecordSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.provenance.metadata.v1.RecordSpecificationWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.RecordSpecificationWrapper}
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.addRecordSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.provenance.metadata.v1.RecordSpecificationWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.clearRecordSpecsList = function() {
  return this.setRecordSpecsList([]);
};


/**
 * optional ScopeSpecificationRequest request = 98;
 * @return {?proto.provenance.metadata.v1.ScopeSpecificationRequest}
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeSpecificationRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.ScopeSpecificationRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeSpecificationRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
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
proto.provenance.metadata.v1.ScopeSpecificationWrapper.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ScopeSpecificationWrapper.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationWrapper} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeSpecificationWrapper.toObject = function(includeInstance, msg) {
  var f, obj = {
    specification: (f = msg.getSpecification()) && provenance_metadata_v1_specification_pb.ScopeSpecification.toObject(includeInstance, f),
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
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationWrapper}
 */
proto.provenance.metadata.v1.ScopeSpecificationWrapper.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ScopeSpecificationWrapper;
  return proto.provenance.metadata.v1.ScopeSpecificationWrapper.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationWrapper} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationWrapper}
 */
proto.provenance.metadata.v1.ScopeSpecificationWrapper.deserializeBinaryFromReader = function(msg, reader) {
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
proto.provenance.metadata.v1.ScopeSpecificationWrapper.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ScopeSpecificationWrapper.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationWrapper} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeSpecificationWrapper.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_specification_pb.ScopeSpecification.serializeBinaryToWriter
    );
  }
  f = message.getScopeSpecIdInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScopeSpecification specification = 1;
 * @return {?proto.provenance.metadata.v1.ScopeSpecification}
 */
proto.provenance.metadata.v1.ScopeSpecificationWrapper.prototype.getSpecification = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeSpecification} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_specification_pb.ScopeSpecification, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeSpecification|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationWrapper} returns this
*/
proto.provenance.metadata.v1.ScopeSpecificationWrapper.prototype.setSpecification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationWrapper} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationWrapper.prototype.clearSpecification = function() {
  return this.setSpecification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationWrapper.prototype.hasSpecification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ScopeSpecIdInfo scope_spec_id_info = 2;
 * @return {?proto.provenance.metadata.v1.ScopeSpecIdInfo}
 */
proto.provenance.metadata.v1.ScopeSpecificationWrapper.prototype.getScopeSpecIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeSpecIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.ScopeSpecIdInfo, 2));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeSpecIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationWrapper} returns this
*/
proto.provenance.metadata.v1.ScopeSpecificationWrapper.prototype.setScopeSpecIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationWrapper} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationWrapper.prototype.clearScopeSpecIdInfo = function() {
  return this.setScopeSpecIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationWrapper.prototype.hasScopeSpecIdInfo = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationsAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllRequest}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ScopeSpecificationsAllRequest;
  return proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationsAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllRequest}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationsAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllRequest} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllRequest} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllRequest} returns this
*/
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllRequest} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationsAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeSpecificationsList: jspb.Message.toObjectList(msg.getScopeSpecificationsList(),
    proto.provenance.metadata.v1.ScopeSpecificationWrapper.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.toObject(includeInstance, f),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllResponse}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ScopeSpecificationsAllResponse;
  return proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationsAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllResponse}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.ScopeSpecificationWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.ScopeSpecificationWrapper.deserializeBinaryFromReader);
      msg.addScopeSpecifications(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.ScopeSpecificationsAllRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationsAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeSpecificationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.provenance.metadata.v1.ScopeSpecificationWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.ScopeSpecificationsAllRequest.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ScopeSpecificationWrapper scope_specifications = 1;
 * @return {!Array<!proto.provenance.metadata.v1.ScopeSpecificationWrapper>}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.getScopeSpecificationsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.ScopeSpecificationWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.ScopeSpecificationWrapper, 1));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.ScopeSpecificationWrapper>} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllResponse} returns this
*/
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.setScopeSpecificationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.provenance.metadata.v1.ScopeSpecificationWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationWrapper}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.addScopeSpecifications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.provenance.metadata.v1.ScopeSpecificationWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllResponse} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.clearScopeSpecificationsList = function() {
  return this.setScopeSpecificationsList([]);
};


/**
 * optional ScopeSpecificationsAllRequest request = 98;
 * @return {?proto.provenance.metadata.v1.ScopeSpecificationsAllRequest}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.ScopeSpecificationsAllRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.ScopeSpecificationsAllRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.ScopeSpecificationsAllRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllResponse} returns this
*/
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllResponse} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllResponse} returns this
*/
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ScopeSpecificationsAllResponse} returns this
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ScopeSpecificationsAllResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
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
proto.provenance.metadata.v1.ContractSpecificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ContractSpecificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ContractSpecificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ContractSpecificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    specificationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeRecordSpecs: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false)
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
 * @return {!proto.provenance.metadata.v1.ContractSpecificationRequest}
 */
proto.provenance.metadata.v1.ContractSpecificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ContractSpecificationRequest;
  return proto.provenance.metadata.v1.ContractSpecificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ContractSpecificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationRequest}
 */
proto.provenance.metadata.v1.ContractSpecificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecificationId(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRecordSpecs(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
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
proto.provenance.metadata.v1.ContractSpecificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ContractSpecificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ContractSpecificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ContractSpecificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecificationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeRecordSpecs();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
};


/**
 * optional string specification_id = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.ContractSpecificationRequest.prototype.getSpecificationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationRequest.prototype.setSpecificationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool include_record_specs = 10;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ContractSpecificationRequest.prototype.getIncludeRecordSpecs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationRequest.prototype.setIncludeRecordSpecs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ContractSpecificationRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ContractSpecificationRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.repeatedFields_ = [3];



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
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ContractSpecificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ContractSpecificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractSpecification: (f = msg.getContractSpecification()) && proto.provenance.metadata.v1.ContractSpecificationWrapper.toObject(includeInstance, f),
    recordSpecificationsList: jspb.Message.toObjectList(msg.getRecordSpecificationsList(),
    proto.provenance.metadata.v1.RecordSpecificationWrapper.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.ContractSpecificationRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.ContractSpecificationResponse}
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ContractSpecificationResponse;
  return proto.provenance.metadata.v1.ContractSpecificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ContractSpecificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationResponse}
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.ContractSpecificationWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.ContractSpecificationWrapper.deserializeBinaryFromReader);
      msg.setContractSpecification(value);
      break;
    case 3:
      var value = new proto.provenance.metadata.v1.RecordSpecificationWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordSpecificationWrapper.deserializeBinaryFromReader);
      msg.addRecordSpecifications(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.ContractSpecificationRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.ContractSpecificationRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ContractSpecificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ContractSpecificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractSpecification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.provenance.metadata.v1.ContractSpecificationWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRecordSpecificationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.provenance.metadata.v1.RecordSpecificationWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.ContractSpecificationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional ContractSpecificationWrapper contract_specification = 1;
 * @return {?proto.provenance.metadata.v1.ContractSpecificationWrapper}
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.getContractSpecification = function() {
  return /** @type{?proto.provenance.metadata.v1.ContractSpecificationWrapper} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.ContractSpecificationWrapper, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ContractSpecificationWrapper|undefined} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.setContractSpecification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.clearContractSpecification = function() {
  return this.setContractSpecification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.hasContractSpecification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated RecordSpecificationWrapper record_specifications = 3;
 * @return {!Array<!proto.provenance.metadata.v1.RecordSpecificationWrapper>}
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.getRecordSpecificationsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.RecordSpecificationWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.RecordSpecificationWrapper, 3));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.RecordSpecificationWrapper>} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.setRecordSpecificationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.provenance.metadata.v1.RecordSpecificationWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.RecordSpecificationWrapper}
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.addRecordSpecifications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.provenance.metadata.v1.RecordSpecificationWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.clearRecordSpecificationsList = function() {
  return this.setRecordSpecificationsList([]);
};


/**
 * optional ContractSpecificationRequest request = 98;
 * @return {?proto.provenance.metadata.v1.ContractSpecificationRequest}
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.ContractSpecificationRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.ContractSpecificationRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.ContractSpecificationRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ContractSpecificationResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
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
proto.provenance.metadata.v1.ContractSpecificationWrapper.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ContractSpecificationWrapper.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ContractSpecificationWrapper} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ContractSpecificationWrapper.toObject = function(includeInstance, msg) {
  var f, obj = {
    specification: (f = msg.getSpecification()) && provenance_metadata_v1_specification_pb.ContractSpecification.toObject(includeInstance, f),
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
 * @return {!proto.provenance.metadata.v1.ContractSpecificationWrapper}
 */
proto.provenance.metadata.v1.ContractSpecificationWrapper.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ContractSpecificationWrapper;
  return proto.provenance.metadata.v1.ContractSpecificationWrapper.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ContractSpecificationWrapper} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationWrapper}
 */
proto.provenance.metadata.v1.ContractSpecificationWrapper.deserializeBinaryFromReader = function(msg, reader) {
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
proto.provenance.metadata.v1.ContractSpecificationWrapper.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ContractSpecificationWrapper.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ContractSpecificationWrapper} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ContractSpecificationWrapper.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_specification_pb.ContractSpecification.serializeBinaryToWriter
    );
  }
  f = message.getContractSpecIdInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      provenance_metadata_v1_metadata_pb.ContractSpecIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ContractSpecification specification = 1;
 * @return {?proto.provenance.metadata.v1.ContractSpecification}
 */
proto.provenance.metadata.v1.ContractSpecificationWrapper.prototype.getSpecification = function() {
  return /** @type{?proto.provenance.metadata.v1.ContractSpecification} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_specification_pb.ContractSpecification, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ContractSpecification|undefined} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationWrapper} returns this
*/
proto.provenance.metadata.v1.ContractSpecificationWrapper.prototype.setSpecification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationWrapper} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationWrapper.prototype.clearSpecification = function() {
  return this.setSpecification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ContractSpecificationWrapper.prototype.hasSpecification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContractSpecIdInfo contract_spec_id_info = 2;
 * @return {?proto.provenance.metadata.v1.ContractSpecIdInfo}
 */
proto.provenance.metadata.v1.ContractSpecificationWrapper.prototype.getContractSpecIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.ContractSpecIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.ContractSpecIdInfo, 2));
};


/**
 * @param {?proto.provenance.metadata.v1.ContractSpecIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationWrapper} returns this
*/
proto.provenance.metadata.v1.ContractSpecificationWrapper.prototype.setContractSpecIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationWrapper} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationWrapper.prototype.clearContractSpecIdInfo = function() {
  return this.setContractSpecIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ContractSpecificationWrapper.prototype.hasContractSpecIdInfo = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ContractSpecificationsAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ContractSpecificationsAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllRequest}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ContractSpecificationsAllRequest;
  return proto.provenance.metadata.v1.ContractSpecificationsAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ContractSpecificationsAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllRequest}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ContractSpecificationsAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ContractSpecificationsAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllRequest} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllRequest} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllRequest} returns this
*/
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllRequest} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.ContractSpecificationsAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.ContractSpecificationsAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractSpecificationsList: jspb.Message.toObjectList(msg.getContractSpecificationsList(),
    proto.provenance.metadata.v1.ContractSpecificationWrapper.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.ContractSpecificationsAllRequest.toObject(includeInstance, f),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllResponse}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.ContractSpecificationsAllResponse;
  return proto.provenance.metadata.v1.ContractSpecificationsAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.ContractSpecificationsAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllResponse}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.ContractSpecificationWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.ContractSpecificationWrapper.deserializeBinaryFromReader);
      msg.addContractSpecifications(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.ContractSpecificationsAllRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.ContractSpecificationsAllRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.ContractSpecificationsAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.ContractSpecificationsAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractSpecificationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.provenance.metadata.v1.ContractSpecificationWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.ContractSpecificationsAllRequest.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ContractSpecificationWrapper contract_specifications = 1;
 * @return {!Array<!proto.provenance.metadata.v1.ContractSpecificationWrapper>}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.getContractSpecificationsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.ContractSpecificationWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.ContractSpecificationWrapper, 1));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.ContractSpecificationWrapper>} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllResponse} returns this
*/
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.setContractSpecificationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.provenance.metadata.v1.ContractSpecificationWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.ContractSpecificationWrapper}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.addContractSpecifications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.provenance.metadata.v1.ContractSpecificationWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllResponse} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.clearContractSpecificationsList = function() {
  return this.setContractSpecificationsList([]);
};


/**
 * optional ContractSpecificationsAllRequest request = 98;
 * @return {?proto.provenance.metadata.v1.ContractSpecificationsAllRequest}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.ContractSpecificationsAllRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.ContractSpecificationsAllRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.ContractSpecificationsAllRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllResponse} returns this
*/
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllResponse} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllResponse} returns this
*/
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.ContractSpecificationsAllResponse} returns this
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.ContractSpecificationsAllResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
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
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    specificationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false)
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
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest;
  return proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecificationId(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
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
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecificationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
};


/**
 * optional string specification_id = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.prototype.getSpecificationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.prototype.setSpecificationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordSpecificationsList: jspb.Message.toObjectList(msg.getRecordSpecificationsList(),
    proto.provenance.metadata.v1.RecordSpecificationWrapper.toObject, includeInstance),
    contractSpecificationUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contractSpecificationAddr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse;
  return proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.RecordSpecificationWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordSpecificationWrapper.deserializeBinaryFromReader);
      msg.addRecordSpecifications(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractSpecificationUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractSpecificationAddr(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordSpecificationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.provenance.metadata.v1.RecordSpecificationWrapper.serializeBinaryToWriter
    );
  }
  f = message.getContractSpecificationUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContractSpecificationAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RecordSpecificationWrapper record_specifications = 1;
 * @return {!Array<!proto.provenance.metadata.v1.RecordSpecificationWrapper>}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.getRecordSpecificationsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.RecordSpecificationWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.RecordSpecificationWrapper, 1));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.RecordSpecificationWrapper>} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.setRecordSpecificationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.provenance.metadata.v1.RecordSpecificationWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.RecordSpecificationWrapper}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.addRecordSpecifications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.provenance.metadata.v1.RecordSpecificationWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.clearRecordSpecificationsList = function() {
  return this.setRecordSpecificationsList([]);
};


/**
 * optional string contract_specification_uuid = 2;
 * @return {string}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.getContractSpecificationUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.setContractSpecificationUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string contract_specification_addr = 3;
 * @return {string}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.getContractSpecificationAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.setContractSpecificationAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RecordSpecificationsForContractSpecificationRequest request = 98;
 * @return {?proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationsForContractSpecificationResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
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
proto.provenance.metadata.v1.RecordSpecificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.RecordSpecificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.RecordSpecificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    specificationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false)
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
 * @return {!proto.provenance.metadata.v1.RecordSpecificationRequest}
 */
proto.provenance.metadata.v1.RecordSpecificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.RecordSpecificationRequest;
  return proto.provenance.metadata.v1.RecordSpecificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationRequest}
 */
proto.provenance.metadata.v1.RecordSpecificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecificationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
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
proto.provenance.metadata.v1.RecordSpecificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.RecordSpecificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecificationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
};


/**
 * optional string specification_id = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.RecordSpecificationRequest.prototype.getSpecificationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationRequest.prototype.setSpecificationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.provenance.metadata.v1.RecordSpecificationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationRequest} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
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
proto.provenance.metadata.v1.RecordSpecificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.RecordSpecificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.RecordSpecificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordSpecification: (f = msg.getRecordSpecification()) && proto.provenance.metadata.v1.RecordSpecificationWrapper.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.RecordSpecificationRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.RecordSpecificationResponse}
 */
proto.provenance.metadata.v1.RecordSpecificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.RecordSpecificationResponse;
  return proto.provenance.metadata.v1.RecordSpecificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationResponse}
 */
proto.provenance.metadata.v1.RecordSpecificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.RecordSpecificationWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordSpecificationWrapper.deserializeBinaryFromReader);
      msg.setRecordSpecification(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.RecordSpecificationRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordSpecificationRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.provenance.metadata.v1.RecordSpecificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.RecordSpecificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordSpecification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.provenance.metadata.v1.RecordSpecificationWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.RecordSpecificationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional RecordSpecificationWrapper record_specification = 1;
 * @return {?proto.provenance.metadata.v1.RecordSpecificationWrapper}
 */
proto.provenance.metadata.v1.RecordSpecificationResponse.prototype.getRecordSpecification = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordSpecificationWrapper} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.RecordSpecificationWrapper, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordSpecificationWrapper|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.RecordSpecificationResponse.prototype.setRecordSpecification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationResponse.prototype.clearRecordSpecification = function() {
  return this.setRecordSpecification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationResponse.prototype.hasRecordSpecification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RecordSpecificationRequest request = 98;
 * @return {?proto.provenance.metadata.v1.RecordSpecificationRequest}
 */
proto.provenance.metadata.v1.RecordSpecificationResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordSpecificationRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.RecordSpecificationRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordSpecificationRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationResponse} returns this
*/
proto.provenance.metadata.v1.RecordSpecificationResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationResponse} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
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
proto.provenance.metadata.v1.RecordSpecificationWrapper.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.RecordSpecificationWrapper.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.RecordSpecificationWrapper} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationWrapper.toObject = function(includeInstance, msg) {
  var f, obj = {
    specification: (f = msg.getSpecification()) && provenance_metadata_v1_specification_pb.RecordSpecification.toObject(includeInstance, f),
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
 * @return {!proto.provenance.metadata.v1.RecordSpecificationWrapper}
 */
proto.provenance.metadata.v1.RecordSpecificationWrapper.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.RecordSpecificationWrapper;
  return proto.provenance.metadata.v1.RecordSpecificationWrapper.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationWrapper} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationWrapper}
 */
proto.provenance.metadata.v1.RecordSpecificationWrapper.deserializeBinaryFromReader = function(msg, reader) {
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
proto.provenance.metadata.v1.RecordSpecificationWrapper.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.RecordSpecificationWrapper.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationWrapper} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationWrapper.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_specification_pb.RecordSpecification.serializeBinaryToWriter
    );
  }
  f = message.getRecordSpecIdInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      provenance_metadata_v1_metadata_pb.RecordSpecIdInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional RecordSpecification specification = 1;
 * @return {?proto.provenance.metadata.v1.RecordSpecification}
 */
proto.provenance.metadata.v1.RecordSpecificationWrapper.prototype.getSpecification = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordSpecification} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_specification_pb.RecordSpecification, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordSpecification|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationWrapper} returns this
*/
proto.provenance.metadata.v1.RecordSpecificationWrapper.prototype.setSpecification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationWrapper} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationWrapper.prototype.clearSpecification = function() {
  return this.setSpecification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationWrapper.prototype.hasSpecification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RecordSpecIdInfo record_spec_id_info = 2;
 * @return {?proto.provenance.metadata.v1.RecordSpecIdInfo}
 */
proto.provenance.metadata.v1.RecordSpecificationWrapper.prototype.getRecordSpecIdInfo = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordSpecIdInfo} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_metadata_pb.RecordSpecIdInfo, 2));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordSpecIdInfo|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationWrapper} returns this
*/
proto.provenance.metadata.v1.RecordSpecificationWrapper.prototype.setRecordSpecIdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationWrapper} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationWrapper.prototype.clearRecordSpecIdInfo = function() {
  return this.setRecordSpecIdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationWrapper.prototype.hasRecordSpecIdInfo = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.RecordSpecificationsAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.RecordSpecificationsAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    excludeIdInfo: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllRequest}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.RecordSpecificationsAllRequest;
  return proto.provenance.metadata.v1.RecordSpecificationsAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationsAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllRequest}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeIdInfo(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.RecordSpecificationsAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationsAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExcludeIdInfo();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool exclude_id_info = 12;
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.prototype.getExcludeIdInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllRequest} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.prototype.setExcludeIdInfo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllRequest} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllRequest} returns this
*/
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllRequest} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.RecordSpecificationsAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.RecordSpecificationsAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordSpecificationsList: jspb.Message.toObjectList(msg.getRecordSpecificationsList(),
    proto.provenance.metadata.v1.RecordSpecificationWrapper.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.RecordSpecificationsAllRequest.toObject(includeInstance, f),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllResponse}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.RecordSpecificationsAllResponse;
  return proto.provenance.metadata.v1.RecordSpecificationsAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationsAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllResponse}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.provenance.metadata.v1.RecordSpecificationWrapper;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordSpecificationWrapper.deserializeBinaryFromReader);
      msg.addRecordSpecifications(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.RecordSpecificationsAllRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.RecordSpecificationsAllRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.RecordSpecificationsAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.RecordSpecificationsAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordSpecificationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.provenance.metadata.v1.RecordSpecificationWrapper.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.RecordSpecificationsAllRequest.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RecordSpecificationWrapper record_specifications = 1;
 * @return {!Array<!proto.provenance.metadata.v1.RecordSpecificationWrapper>}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.getRecordSpecificationsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.RecordSpecificationWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.provenance.metadata.v1.RecordSpecificationWrapper, 1));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.RecordSpecificationWrapper>} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllResponse} returns this
*/
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.setRecordSpecificationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.provenance.metadata.v1.RecordSpecificationWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.RecordSpecificationWrapper}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.addRecordSpecifications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.provenance.metadata.v1.RecordSpecificationWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllResponse} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.clearRecordSpecificationsList = function() {
  return this.setRecordSpecificationsList([]);
};


/**
 * optional RecordSpecificationsAllRequest request = 98;
 * @return {?proto.provenance.metadata.v1.RecordSpecificationsAllRequest}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.RecordSpecificationsAllRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.RecordSpecificationsAllRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.RecordSpecificationsAllRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllResponse} returns this
*/
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllResponse} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllResponse} returns this
*/
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.RecordSpecificationsAllResponse} returns this
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.RecordSpecificationsAllResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.GetByAddrRequest.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.GetByAddrRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.GetByAddrRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.GetByAddrRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.GetByAddrRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addrsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.provenance.metadata.v1.GetByAddrRequest}
 */
proto.provenance.metadata.v1.GetByAddrRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.GetByAddrRequest;
  return proto.provenance.metadata.v1.GetByAddrRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.GetByAddrRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.GetByAddrRequest}
 */
proto.provenance.metadata.v1.GetByAddrRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddrs(value);
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
proto.provenance.metadata.v1.GetByAddrRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.GetByAddrRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.GetByAddrRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.GetByAddrRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddrsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string addrs = 1;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.GetByAddrRequest.prototype.getAddrsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.GetByAddrRequest} returns this
 */
proto.provenance.metadata.v1.GetByAddrRequest.prototype.setAddrsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.GetByAddrRequest} returns this
 */
proto.provenance.metadata.v1.GetByAddrRequest.prototype.addAddrs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.GetByAddrRequest} returns this
 */
proto.provenance.metadata.v1.GetByAddrRequest.prototype.clearAddrsList = function() {
  return this.setAddrsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.GetByAddrResponse.repeatedFields_ = [1,2,3,4,5,6,7];



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
proto.provenance.metadata.v1.GetByAddrResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.GetByAddrResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.GetByAddrResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.GetByAddrResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopesList: jspb.Message.toObjectList(msg.getScopesList(),
    provenance_metadata_v1_scope_pb.Scope.toObject, includeInstance),
    sessionsList: jspb.Message.toObjectList(msg.getSessionsList(),
    provenance_metadata_v1_scope_pb.Session.toObject, includeInstance),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    provenance_metadata_v1_scope_pb.Record.toObject, includeInstance),
    scopeSpecsList: jspb.Message.toObjectList(msg.getScopeSpecsList(),
    provenance_metadata_v1_specification_pb.ScopeSpecification.toObject, includeInstance),
    contractSpecsList: jspb.Message.toObjectList(msg.getContractSpecsList(),
    provenance_metadata_v1_specification_pb.ContractSpecification.toObject, includeInstance),
    recordSpecsList: jspb.Message.toObjectList(msg.getRecordSpecsList(),
    provenance_metadata_v1_specification_pb.RecordSpecification.toObject, includeInstance),
    notFoundList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse}
 */
proto.provenance.metadata.v1.GetByAddrResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.GetByAddrResponse;
  return proto.provenance.metadata.v1.GetByAddrResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.GetByAddrResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse}
 */
proto.provenance.metadata.v1.GetByAddrResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_scope_pb.Scope;
      reader.readMessage(value,provenance_metadata_v1_scope_pb.Scope.deserializeBinaryFromReader);
      msg.addScopes(value);
      break;
    case 2:
      var value = new provenance_metadata_v1_scope_pb.Session;
      reader.readMessage(value,provenance_metadata_v1_scope_pb.Session.deserializeBinaryFromReader);
      msg.addSessions(value);
      break;
    case 3:
      var value = new provenance_metadata_v1_scope_pb.Record;
      reader.readMessage(value,provenance_metadata_v1_scope_pb.Record.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 4:
      var value = new provenance_metadata_v1_specification_pb.ScopeSpecification;
      reader.readMessage(value,provenance_metadata_v1_specification_pb.ScopeSpecification.deserializeBinaryFromReader);
      msg.addScopeSpecs(value);
      break;
    case 5:
      var value = new provenance_metadata_v1_specification_pb.ContractSpecification;
      reader.readMessage(value,provenance_metadata_v1_specification_pb.ContractSpecification.deserializeBinaryFromReader);
      msg.addContractSpecs(value);
      break;
    case 6:
      var value = new provenance_metadata_v1_specification_pb.RecordSpecification;
      reader.readMessage(value,provenance_metadata_v1_specification_pb.RecordSpecification.deserializeBinaryFromReader);
      msg.addRecordSpecs(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addNotFound(value);
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
proto.provenance.metadata.v1.GetByAddrResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.GetByAddrResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.GetByAddrResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.GetByAddrResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      provenance_metadata_v1_scope_pb.Scope.serializeBinaryToWriter
    );
  }
  f = message.getSessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      provenance_metadata_v1_scope_pb.Session.serializeBinaryToWriter
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      provenance_metadata_v1_scope_pb.Record.serializeBinaryToWriter
    );
  }
  f = message.getScopeSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      provenance_metadata_v1_specification_pb.ScopeSpecification.serializeBinaryToWriter
    );
  }
  f = message.getContractSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      provenance_metadata_v1_specification_pb.ContractSpecification.serializeBinaryToWriter
    );
  }
  f = message.getRecordSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      provenance_metadata_v1_specification_pb.RecordSpecification.serializeBinaryToWriter
    );
  }
  f = message.getNotFoundList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * repeated Scope scopes = 1;
 * @return {!Array<!proto.provenance.metadata.v1.Scope>}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.getScopesList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.Scope>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_scope_pb.Scope, 1));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.Scope>} value
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
*/
proto.provenance.metadata.v1.GetByAddrResponse.prototype.setScopesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.provenance.metadata.v1.Scope=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.Scope}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.addScopes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.provenance.metadata.v1.Scope, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.clearScopesList = function() {
  return this.setScopesList([]);
};


/**
 * repeated Session sessions = 2;
 * @return {!Array<!proto.provenance.metadata.v1.Session>}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.getSessionsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.Session>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_scope_pb.Session, 2));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.Session>} value
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
*/
proto.provenance.metadata.v1.GetByAddrResponse.prototype.setSessionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.provenance.metadata.v1.Session=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.Session}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.addSessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.provenance.metadata.v1.Session, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.clearSessionsList = function() {
  return this.setSessionsList([]);
};


/**
 * repeated Record records = 3;
 * @return {!Array<!proto.provenance.metadata.v1.Record>}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.Record>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_scope_pb.Record, 3));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.Record>} value
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
*/
proto.provenance.metadata.v1.GetByAddrResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.provenance.metadata.v1.Record=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.Record}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.provenance.metadata.v1.Record, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * repeated ScopeSpecification scope_specs = 4;
 * @return {!Array<!proto.provenance.metadata.v1.ScopeSpecification>}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.getScopeSpecsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.ScopeSpecification>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_specification_pb.ScopeSpecification, 4));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.ScopeSpecification>} value
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
*/
proto.provenance.metadata.v1.GetByAddrResponse.prototype.setScopeSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.provenance.metadata.v1.ScopeSpecification=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.ScopeSpecification}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.addScopeSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.provenance.metadata.v1.ScopeSpecification, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.clearScopeSpecsList = function() {
  return this.setScopeSpecsList([]);
};


/**
 * repeated ContractSpecification contract_specs = 5;
 * @return {!Array<!proto.provenance.metadata.v1.ContractSpecification>}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.getContractSpecsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.ContractSpecification>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_specification_pb.ContractSpecification, 5));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.ContractSpecification>} value
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
*/
proto.provenance.metadata.v1.GetByAddrResponse.prototype.setContractSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.provenance.metadata.v1.ContractSpecification=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.ContractSpecification}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.addContractSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.provenance.metadata.v1.ContractSpecification, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.clearContractSpecsList = function() {
  return this.setContractSpecsList([]);
};


/**
 * repeated RecordSpecification record_specs = 6;
 * @return {!Array<!proto.provenance.metadata.v1.RecordSpecification>}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.getRecordSpecsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.RecordSpecification>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_specification_pb.RecordSpecification, 6));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.RecordSpecification>} value
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
*/
proto.provenance.metadata.v1.GetByAddrResponse.prototype.setRecordSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.provenance.metadata.v1.RecordSpecification=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.RecordSpecification}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.addRecordSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.provenance.metadata.v1.RecordSpecification, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.clearRecordSpecsList = function() {
  return this.setRecordSpecsList([]);
};


/**
 * repeated string not_found = 7;
 * @return {!Array<string>}
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.getNotFoundList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.setNotFoundList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.addNotFound = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.GetByAddrResponse} returns this
 */
proto.provenance.metadata.v1.GetByAddrResponse.prototype.clearNotFoundList = function() {
  return this.setNotFoundList([]);
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
proto.provenance.metadata.v1.OSLocatorParamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.OSLocatorParamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.OSLocatorParamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorParamsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false)
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
 * @return {!proto.provenance.metadata.v1.OSLocatorParamsRequest}
 */
proto.provenance.metadata.v1.OSLocatorParamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.OSLocatorParamsRequest;
  return proto.provenance.metadata.v1.OSLocatorParamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.OSLocatorParamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.OSLocatorParamsRequest}
 */
proto.provenance.metadata.v1.OSLocatorParamsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
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
proto.provenance.metadata.v1.OSLocatorParamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.OSLocatorParamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.OSLocatorParamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorParamsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSLocatorParamsRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.OSLocatorParamsRequest} returns this
 */
proto.provenance.metadata.v1.OSLocatorParamsRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
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
proto.provenance.metadata.v1.OSLocatorParamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.OSLocatorParamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.OSLocatorParamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorParamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && provenance_metadata_v1_objectstore_pb.OSLocatorParams.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.OSLocatorParamsRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.OSLocatorParamsResponse}
 */
proto.provenance.metadata.v1.OSLocatorParamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.OSLocatorParamsResponse;
  return proto.provenance.metadata.v1.OSLocatorParamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.OSLocatorParamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.OSLocatorParamsResponse}
 */
proto.provenance.metadata.v1.OSLocatorParamsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_objectstore_pb.OSLocatorParams;
      reader.readMessage(value,provenance_metadata_v1_objectstore_pb.OSLocatorParams.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.OSLocatorParamsRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.OSLocatorParamsRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.provenance.metadata.v1.OSLocatorParamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.OSLocatorParamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.OSLocatorParamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorParamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_objectstore_pb.OSLocatorParams.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.OSLocatorParamsRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional OSLocatorParams params = 1;
 * @return {?proto.provenance.metadata.v1.OSLocatorParams}
 */
proto.provenance.metadata.v1.OSLocatorParamsResponse.prototype.getParams = function() {
  return /** @type{?proto.provenance.metadata.v1.OSLocatorParams} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_objectstore_pb.OSLocatorParams, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.OSLocatorParams|undefined} value
 * @return {!proto.provenance.metadata.v1.OSLocatorParamsResponse} returns this
*/
proto.provenance.metadata.v1.OSLocatorParamsResponse.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OSLocatorParamsResponse} returns this
 */
proto.provenance.metadata.v1.OSLocatorParamsResponse.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSLocatorParamsResponse.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OSLocatorParamsRequest request = 98;
 * @return {?proto.provenance.metadata.v1.OSLocatorParamsRequest}
 */
proto.provenance.metadata.v1.OSLocatorParamsResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.OSLocatorParamsRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.OSLocatorParamsRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.OSLocatorParamsRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.OSLocatorParamsResponse} returns this
*/
proto.provenance.metadata.v1.OSLocatorParamsResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OSLocatorParamsResponse} returns this
 */
proto.provenance.metadata.v1.OSLocatorParamsResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSLocatorParamsResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
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
proto.provenance.metadata.v1.OSLocatorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.OSLocatorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.OSLocatorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false)
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
 * @return {!proto.provenance.metadata.v1.OSLocatorRequest}
 */
proto.provenance.metadata.v1.OSLocatorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.OSLocatorRequest;
  return proto.provenance.metadata.v1.OSLocatorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.OSLocatorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.OSLocatorRequest}
 */
proto.provenance.metadata.v1.OSLocatorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
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
proto.provenance.metadata.v1.OSLocatorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.OSLocatorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.OSLocatorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.OSLocatorRequest.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.OSLocatorRequest} returns this
 */
proto.provenance.metadata.v1.OSLocatorRequest.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSLocatorRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.OSLocatorRequest} returns this
 */
proto.provenance.metadata.v1.OSLocatorRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
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
proto.provenance.metadata.v1.OSLocatorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.OSLocatorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.OSLocatorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locator: (f = msg.getLocator()) && provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.OSLocatorRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.OSLocatorResponse}
 */
proto.provenance.metadata.v1.OSLocatorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.OSLocatorResponse;
  return proto.provenance.metadata.v1.OSLocatorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.OSLocatorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.OSLocatorResponse}
 */
proto.provenance.metadata.v1.OSLocatorResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 98:
      var value = new proto.provenance.metadata.v1.OSLocatorRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.OSLocatorRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.provenance.metadata.v1.OSLocatorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.OSLocatorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.OSLocatorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.OSLocatorRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional ObjectStoreLocator locator = 1;
 * @return {?proto.provenance.metadata.v1.ObjectStoreLocator}
 */
proto.provenance.metadata.v1.OSLocatorResponse.prototype.getLocator = function() {
  return /** @type{?proto.provenance.metadata.v1.ObjectStoreLocator} */ (
    jspb.Message.getWrapperField(this, provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, 1));
};


/**
 * @param {?proto.provenance.metadata.v1.ObjectStoreLocator|undefined} value
 * @return {!proto.provenance.metadata.v1.OSLocatorResponse} returns this
*/
proto.provenance.metadata.v1.OSLocatorResponse.prototype.setLocator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OSLocatorResponse} returns this
 */
proto.provenance.metadata.v1.OSLocatorResponse.prototype.clearLocator = function() {
  return this.setLocator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSLocatorResponse.prototype.hasLocator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OSLocatorRequest request = 98;
 * @return {?proto.provenance.metadata.v1.OSLocatorRequest}
 */
proto.provenance.metadata.v1.OSLocatorResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.OSLocatorRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.OSLocatorRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.OSLocatorRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.OSLocatorResponse} returns this
*/
proto.provenance.metadata.v1.OSLocatorResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OSLocatorResponse} returns this
 */
proto.provenance.metadata.v1.OSLocatorResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSLocatorResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
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
proto.provenance.metadata.v1.OSLocatorsByURIRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.OSLocatorsByURIRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.OSLocatorsByURIRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorsByURIRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIRequest}
 */
proto.provenance.metadata.v1.OSLocatorsByURIRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.OSLocatorsByURIRequest;
  return proto.provenance.metadata.v1.OSLocatorsByURIRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.OSLocatorsByURIRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIRequest}
 */
proto.provenance.metadata.v1.OSLocatorsByURIRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.OSLocatorsByURIRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.OSLocatorsByURIRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.OSLocatorsByURIRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorsByURIRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.OSLocatorsByURIRequest.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIRequest} returns this
 */
proto.provenance.metadata.v1.OSLocatorsByURIRequest.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSLocatorsByURIRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIRequest} returns this
 */
proto.provenance.metadata.v1.OSLocatorsByURIRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.provenance.metadata.v1.OSLocatorsByURIRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIRequest} returns this
*/
proto.provenance.metadata.v1.OSLocatorsByURIRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIRequest} returns this
 */
proto.provenance.metadata.v1.OSLocatorsByURIRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSLocatorsByURIRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.OSLocatorsByURIResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.OSLocatorsByURIResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locatorsList: jspb.Message.toObjectList(msg.getLocatorsList(),
    provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.OSLocatorsByURIRequest.toObject(includeInstance, f),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIResponse}
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.OSLocatorsByURIResponse;
  return proto.provenance.metadata.v1.OSLocatorsByURIResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.OSLocatorsByURIResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIResponse}
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;
      reader.readMessage(value,provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.deserializeBinaryFromReader);
      msg.addLocators(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.OSLocatorsByURIRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.OSLocatorsByURIRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.OSLocatorsByURIResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.OSLocatorsByURIResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.OSLocatorsByURIRequest.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObjectStoreLocator locators = 1;
 * @return {!Array<!proto.provenance.metadata.v1.ObjectStoreLocator>}
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.getLocatorsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.ObjectStoreLocator>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, 1));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.ObjectStoreLocator>} value
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIResponse} returns this
*/
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.setLocatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.provenance.metadata.v1.ObjectStoreLocator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.ObjectStoreLocator}
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.addLocators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.provenance.metadata.v1.ObjectStoreLocator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIResponse} returns this
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.clearLocatorsList = function() {
  return this.setLocatorsList([]);
};


/**
 * optional OSLocatorsByURIRequest request = 98;
 * @return {?proto.provenance.metadata.v1.OSLocatorsByURIRequest}
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.OSLocatorsByURIRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.OSLocatorsByURIRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.OSLocatorsByURIRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIResponse} returns this
*/
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIResponse} returns this
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIResponse} returns this
*/
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OSLocatorsByURIResponse} returns this
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSLocatorsByURIResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
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
proto.provenance.metadata.v1.OSLocatorsByScopeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.OSLocatorsByScopeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.OSLocatorsByScopeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorsByScopeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false)
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
 * @return {!proto.provenance.metadata.v1.OSLocatorsByScopeRequest}
 */
proto.provenance.metadata.v1.OSLocatorsByScopeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.OSLocatorsByScopeRequest;
  return proto.provenance.metadata.v1.OSLocatorsByScopeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.OSLocatorsByScopeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.OSLocatorsByScopeRequest}
 */
proto.provenance.metadata.v1.OSLocatorsByScopeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
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
proto.provenance.metadata.v1.OSLocatorsByScopeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.OSLocatorsByScopeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.OSLocatorsByScopeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorsByScopeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
};


/**
 * optional string scope_id = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.OSLocatorsByScopeRequest.prototype.getScopeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.OSLocatorsByScopeRequest} returns this
 */
proto.provenance.metadata.v1.OSLocatorsByScopeRequest.prototype.setScopeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSLocatorsByScopeRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.OSLocatorsByScopeRequest} returns this
 */
proto.provenance.metadata.v1.OSLocatorsByScopeRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.OSLocatorsByScopeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.OSLocatorsByScopeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locatorsList: jspb.Message.toObjectList(msg.getLocatorsList(),
    provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.OSLocatorsByScopeRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.OSLocatorsByScopeResponse}
 */
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.OSLocatorsByScopeResponse;
  return proto.provenance.metadata.v1.OSLocatorsByScopeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.OSLocatorsByScopeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.OSLocatorsByScopeResponse}
 */
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;
      reader.readMessage(value,provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.deserializeBinaryFromReader);
      msg.addLocators(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.OSLocatorsByScopeRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.OSLocatorsByScopeRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.OSLocatorsByScopeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.OSLocatorsByScopeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.OSLocatorsByScopeRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObjectStoreLocator locators = 1;
 * @return {!Array<!proto.provenance.metadata.v1.ObjectStoreLocator>}
 */
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.prototype.getLocatorsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.ObjectStoreLocator>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, 1));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.ObjectStoreLocator>} value
 * @return {!proto.provenance.metadata.v1.OSLocatorsByScopeResponse} returns this
*/
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.prototype.setLocatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.provenance.metadata.v1.ObjectStoreLocator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.ObjectStoreLocator}
 */
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.prototype.addLocators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.provenance.metadata.v1.ObjectStoreLocator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.OSLocatorsByScopeResponse} returns this
 */
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.prototype.clearLocatorsList = function() {
  return this.setLocatorsList([]);
};


/**
 * optional OSLocatorsByScopeRequest request = 98;
 * @return {?proto.provenance.metadata.v1.OSLocatorsByScopeRequest}
 */
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.OSLocatorsByScopeRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.OSLocatorsByScopeRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.OSLocatorsByScopeRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.OSLocatorsByScopeResponse} returns this
*/
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OSLocatorsByScopeResponse} returns this
 */
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSLocatorsByScopeResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
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
proto.provenance.metadata.v1.OSAllLocatorsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.OSAllLocatorsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.OSAllLocatorsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSAllLocatorsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeRequest: jspb.Message.getBooleanFieldWithDefault(msg, 98, false),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsRequest}
 */
proto.provenance.metadata.v1.OSAllLocatorsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.OSAllLocatorsRequest;
  return proto.provenance.metadata.v1.OSAllLocatorsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.OSAllLocatorsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsRequest}
 */
proto.provenance.metadata.v1.OSAllLocatorsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 98:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.OSAllLocatorsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.OSAllLocatorsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.OSAllLocatorsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSAllLocatorsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeRequest();
  if (f) {
    writer.writeBool(
      98,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool include_request = 98;
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSAllLocatorsRequest.prototype.getIncludeRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 98, false));
};


/**
 * @param {boolean} value
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsRequest} returns this
 */
proto.provenance.metadata.v1.OSAllLocatorsRequest.prototype.setIncludeRequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 98, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.provenance.metadata.v1.OSAllLocatorsRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsRequest} returns this
*/
proto.provenance.metadata.v1.OSAllLocatorsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsRequest} returns this
 */
proto.provenance.metadata.v1.OSAllLocatorsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSAllLocatorsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.OSAllLocatorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.OSAllLocatorsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locatorsList: jspb.Message.toObjectList(msg.getLocatorsList(),
    provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.toObject, includeInstance),
    request: (f = msg.getRequest()) && proto.provenance.metadata.v1.OSAllLocatorsRequest.toObject(includeInstance, f),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsResponse}
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.OSAllLocatorsResponse;
  return proto.provenance.metadata.v1.OSAllLocatorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.OSAllLocatorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsResponse}
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new provenance_metadata_v1_objectstore_pb.ObjectStoreLocator;
      reader.readMessage(value,provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.deserializeBinaryFromReader);
      msg.addLocators(value);
      break;
    case 98:
      var value = new proto.provenance.metadata.v1.OSAllLocatorsRequest;
      reader.readMessage(value,proto.provenance.metadata.v1.OSAllLocatorsRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 99:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.OSAllLocatorsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.OSAllLocatorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      provenance_metadata_v1_objectstore_pb.ObjectStoreLocator.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto.provenance.metadata.v1.OSAllLocatorsRequest.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObjectStoreLocator locators = 1;
 * @return {!Array<!proto.provenance.metadata.v1.ObjectStoreLocator>}
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.getLocatorsList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.ObjectStoreLocator>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_objectstore_pb.ObjectStoreLocator, 1));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.ObjectStoreLocator>} value
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsResponse} returns this
*/
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.setLocatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.provenance.metadata.v1.ObjectStoreLocator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.ObjectStoreLocator}
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.addLocators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.provenance.metadata.v1.ObjectStoreLocator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsResponse} returns this
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.clearLocatorsList = function() {
  return this.setLocatorsList([]);
};


/**
 * optional OSAllLocatorsRequest request = 98;
 * @return {?proto.provenance.metadata.v1.OSAllLocatorsRequest}
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.getRequest = function() {
  return /** @type{?proto.provenance.metadata.v1.OSAllLocatorsRequest} */ (
    jspb.Message.getWrapperField(this, proto.provenance.metadata.v1.OSAllLocatorsRequest, 98));
};


/**
 * @param {?proto.provenance.metadata.v1.OSAllLocatorsRequest|undefined} value
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsResponse} returns this
*/
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 98, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsResponse} returns this
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 99;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 99));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsResponse} returns this
*/
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.provenance.metadata.v1.OSAllLocatorsResponse} returns this
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.provenance.metadata.v1.OSAllLocatorsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 99) != null;
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
proto.provenance.metadata.v1.AccountDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.AccountDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.AccountDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.AccountDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadataAddr: msg.getMetadataAddr_asB64()
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
 * @return {!proto.provenance.metadata.v1.AccountDataRequest}
 */
proto.provenance.metadata.v1.AccountDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.AccountDataRequest;
  return proto.provenance.metadata.v1.AccountDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.AccountDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.AccountDataRequest}
 */
proto.provenance.metadata.v1.AccountDataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.provenance.metadata.v1.AccountDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.AccountDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.AccountDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.AccountDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadataAddr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes metadata_addr = 1;
 * @return {!(string|Uint8Array)}
 */
proto.provenance.metadata.v1.AccountDataRequest.prototype.getMetadataAddr = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes metadata_addr = 1;
 * This is a type-conversion wrapper around `getMetadataAddr()`
 * @return {string}
 */
proto.provenance.metadata.v1.AccountDataRequest.prototype.getMetadataAddr_asB64 = function() {
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
proto.provenance.metadata.v1.AccountDataRequest.prototype.getMetadataAddr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadataAddr()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.provenance.metadata.v1.AccountDataRequest} returns this
 */
proto.provenance.metadata.v1.AccountDataRequest.prototype.setMetadataAddr = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
proto.provenance.metadata.v1.AccountDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.AccountDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.AccountDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.AccountDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.provenance.metadata.v1.AccountDataResponse}
 */
proto.provenance.metadata.v1.AccountDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.AccountDataResponse;
  return proto.provenance.metadata.v1.AccountDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.AccountDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.AccountDataResponse}
 */
proto.provenance.metadata.v1.AccountDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.provenance.metadata.v1.AccountDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.AccountDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.AccountDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.AccountDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.AccountDataResponse.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.AccountDataResponse} returns this
 */
proto.provenance.metadata.v1.AccountDataResponse.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest}
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest;
  return proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest}
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest} returns this
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.repeatedFields_ = [1];



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
proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
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
 * @return {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse}
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse;
  return proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse}
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetAssetValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      provenance_metadata_v1_scope_pb.NetAssetValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NetAssetValue net_asset_values = 1;
 * @return {!Array<!proto.provenance.metadata.v1.NetAssetValue>}
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.prototype.getNetAssetValuesList = function() {
  return /** @type{!Array<!proto.provenance.metadata.v1.NetAssetValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, provenance_metadata_v1_scope_pb.NetAssetValue, 1));
};


/**
 * @param {!Array<!proto.provenance.metadata.v1.NetAssetValue>} value
 * @return {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse} returns this
*/
proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.prototype.setNetAssetValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.provenance.metadata.v1.NetAssetValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.provenance.metadata.v1.NetAssetValue}
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.prototype.addNetAssetValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.provenance.metadata.v1.NetAssetValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse} returns this
 */
proto.provenance.metadata.v1.QueryScopeNetAssetValuesResponse.prototype.clearNetAssetValuesList = function() {
  return this.setNetAssetValuesList([]);
};


goog.object.extend(exports, proto.provenance.metadata.v1);
