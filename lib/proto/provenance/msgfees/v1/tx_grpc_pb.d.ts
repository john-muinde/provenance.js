// package: provenance.msgfees.v1
// file: provenance/msgfees/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as provenance_msgfees_v1_tx_pb from "../../../provenance/msgfees/v1/tx_pb";
import * as amino_amino_pb from "../../../amino/amino_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmos_msg_v1_msg_pb from "../../../cosmos/msg/v1/msg_pb";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    assessCustomMsgFee: IMsgService_IAssessCustomMsgFee;
    addMsgFeeProposal: IMsgService_IAddMsgFeeProposal;
    updateMsgFeeProposal: IMsgService_IUpdateMsgFeeProposal;
    removeMsgFeeProposal: IMsgService_IRemoveMsgFeeProposal;
    updateNhashPerUsdMilProposal: IMsgService_IUpdateNhashPerUsdMilProposal;
    updateConversionFeeDenomProposal: IMsgService_IUpdateConversionFeeDenomProposal;
}

interface IMsgService_IAssessCustomMsgFee extends grpc.MethodDefinition<provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest, provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse> {
    path: "/provenance.msgfees.v1.Msg/AssessCustomMsgFee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest>;
    requestDeserialize: grpc.deserialize<provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest>;
    responseSerialize: grpc.serialize<provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse>;
    responseDeserialize: grpc.deserialize<provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse>;
}
interface IMsgService_IAddMsgFeeProposal extends grpc.MethodDefinition<provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest, provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse> {
    path: "/provenance.msgfees.v1.Msg/AddMsgFeeProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest>;
    requestDeserialize: grpc.deserialize<provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest>;
    responseSerialize: grpc.serialize<provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse>;
    responseDeserialize: grpc.deserialize<provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse>;
}
interface IMsgService_IUpdateMsgFeeProposal extends grpc.MethodDefinition<provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest, provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse> {
    path: "/provenance.msgfees.v1.Msg/UpdateMsgFeeProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest>;
    requestDeserialize: grpc.deserialize<provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest>;
    responseSerialize: grpc.serialize<provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse>;
    responseDeserialize: grpc.deserialize<provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse>;
}
interface IMsgService_IRemoveMsgFeeProposal extends grpc.MethodDefinition<provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest, provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse> {
    path: "/provenance.msgfees.v1.Msg/RemoveMsgFeeProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest>;
    requestDeserialize: grpc.deserialize<provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest>;
    responseSerialize: grpc.serialize<provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse>;
    responseDeserialize: grpc.deserialize<provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse>;
}
interface IMsgService_IUpdateNhashPerUsdMilProposal extends grpc.MethodDefinition<provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest, provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse> {
    path: "/provenance.msgfees.v1.Msg/UpdateNhashPerUsdMilProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest>;
    requestDeserialize: grpc.deserialize<provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest>;
    responseSerialize: grpc.serialize<provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse>;
    responseDeserialize: grpc.deserialize<provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse>;
}
interface IMsgService_IUpdateConversionFeeDenomProposal extends grpc.MethodDefinition<provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest, provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse> {
    path: "/provenance.msgfees.v1.Msg/UpdateConversionFeeDenomProposal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest>;
    requestDeserialize: grpc.deserialize<provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest>;
    responseSerialize: grpc.serialize<provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse>;
    responseDeserialize: grpc.deserialize<provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
    assessCustomMsgFee: grpc.handleUnaryCall<provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest, provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse>;
    addMsgFeeProposal: grpc.handleUnaryCall<provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest, provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse>;
    updateMsgFeeProposal: grpc.handleUnaryCall<provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest, provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse>;
    removeMsgFeeProposal: grpc.handleUnaryCall<provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest, provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse>;
    updateNhashPerUsdMilProposal: grpc.handleUnaryCall<provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest, provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse>;
    updateConversionFeeDenomProposal: grpc.handleUnaryCall<provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest, provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse>;
}

export interface IMsgClient {
    assessCustomMsgFee(request: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse) => void): grpc.ClientUnaryCall;
    assessCustomMsgFee(request: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse) => void): grpc.ClientUnaryCall;
    assessCustomMsgFee(request: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse) => void): grpc.ClientUnaryCall;
    addMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    addMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    addMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    updateMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    updateMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    updateMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    removeMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    removeMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    removeMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    updateNhashPerUsdMilProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse) => void): grpc.ClientUnaryCall;
    updateNhashPerUsdMilProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse) => void): grpc.ClientUnaryCall;
    updateNhashPerUsdMilProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse) => void): grpc.ClientUnaryCall;
    updateConversionFeeDenomProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse) => void): grpc.ClientUnaryCall;
    updateConversionFeeDenomProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse) => void): grpc.ClientUnaryCall;
    updateConversionFeeDenomProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse) => void): grpc.ClientUnaryCall;
}

export class MsgClient extends grpc.Client implements IMsgClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public assessCustomMsgFee(request: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse) => void): grpc.ClientUnaryCall;
    public assessCustomMsgFee(request: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse) => void): grpc.ClientUnaryCall;
    public assessCustomMsgFee(request: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgAssessCustomMsgFeeResponse) => void): grpc.ClientUnaryCall;
    public addMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    public addMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    public addMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgAddMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    public updateMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    public updateMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    public updateMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    public removeMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    public removeMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    public removeMsgFeeProposal(request: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgRemoveMsgFeeProposalResponse) => void): grpc.ClientUnaryCall;
    public updateNhashPerUsdMilProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse) => void): grpc.ClientUnaryCall;
    public updateNhashPerUsdMilProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse) => void): grpc.ClientUnaryCall;
    public updateNhashPerUsdMilProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateNhashPerUsdMilProposalResponse) => void): grpc.ClientUnaryCall;
    public updateConversionFeeDenomProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse) => void): grpc.ClientUnaryCall;
    public updateConversionFeeDenomProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse) => void): grpc.ClientUnaryCall;
    public updateConversionFeeDenomProposal(request: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: provenance_msgfees_v1_tx_pb.MsgUpdateConversionFeeDenomProposalResponse) => void): grpc.ClientUnaryCall;
}
