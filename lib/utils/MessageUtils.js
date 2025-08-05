"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageTypeUrl = getMessageTypeUrl;
exports.messageToAny = messageToAny;
exports.anyToMessage = anyToMessage;
var google_protobuf_any_pb = require("google-protobuf/google/protobuf/any_pb");
var MessageTypeMap_1 = require("./MessageTypeMap");
var UNKNOWN_TYPE_URL = 'UnknownType';
function getMessageTypeUrl(msg) {
    var typeUrl = UNKNOWN_TYPE_URL;
    for (var idx = 0; idx < MessageTypeMap_1.MessageTypeMap.length && typeUrl === UNKNOWN_TYPE_URL; idx++) {
        if (msg.constructor === MessageTypeMap_1.MessageTypeMap[idx].type) {
            typeUrl = "/".concat(MessageTypeMap_1.MessageTypeMap[idx].typeUrl);
        }
    }
    return typeUrl;
}
function messageToAny(msg, typeUrlPrefix) {
    if (typeUrlPrefix === void 0) { typeUrlPrefix = ''; }
    var anyMsg = new google_protobuf_any_pb.Any();
    anyMsg.setValue(msg.serializeBinary());
    anyMsg.setTypeUrl("".concat(typeUrlPrefix).concat(getMessageTypeUrl(msg)));
    return anyMsg;
}
function anyToMessage(obj, typeUrlPrefix) {
    if (typeUrlPrefix === void 0) { typeUrlPrefix = ''; }
    var msg = undefined;
    for (var idx = 0; idx < MessageTypeMap_1.MessageTypeMap.length && msg === undefined; idx++) {
        if (obj.getTypeUrl() === "/".concat(MessageTypeMap_1.MessageTypeMap[idx].typeUrl)) {
            msg = MessageTypeMap_1.MessageTypeMap[idx].type.deserializeBinary(obj.getValue());
        }
    }
    return msg;
}
