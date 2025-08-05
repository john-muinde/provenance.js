import * as jspb from 'google-protobuf';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
export declare function getMessageTypeUrl(msg: jspb.Message): string;
export declare function messageToAny(msg: jspb.Message, typeUrlPrefix?: string): google_protobuf_any_pb.Any;
export declare function anyToMessage(obj: google_protobuf_any_pb.Any, typeUrlPrefix?: string): jspb.Message | undefined;
