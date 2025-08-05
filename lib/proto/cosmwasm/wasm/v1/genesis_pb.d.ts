// package: cosmwasm.wasm.v1
// file: cosmwasm/wasm/v1/genesis.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmwasm_wasm_v1_types_pb from "../../../cosmwasm/wasm/v1/types_pb";
import * as cosmwasm_wasm_v1_tx_pb from "../../../cosmwasm/wasm/v1/tx_pb";

export class GenesisState extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): cosmwasm_wasm_v1_types_pb.Params | undefined;
    setParams(value?: cosmwasm_wasm_v1_types_pb.Params): GenesisState;
    clearCodesList(): void;
    getCodesList(): Array<Code>;
    setCodesList(value: Array<Code>): GenesisState;
    addCodes(value?: Code, index?: number): Code;
    clearContractsList(): void;
    getContractsList(): Array<Contract>;
    setContractsList(value: Array<Contract>): GenesisState;
    addContracts(value?: Contract, index?: number): Contract;
    clearSequencesList(): void;
    getSequencesList(): Array<Sequence>;
    setSequencesList(value: Array<Sequence>): GenesisState;
    addSequences(value?: Sequence, index?: number): Sequence;
    clearGenMsgsList(): void;
    getGenMsgsList(): Array<GenesisState.GenMsgs>;
    setGenMsgsList(value: Array<GenesisState.GenMsgs>): GenesisState;
    addGenMsgs(value?: GenesisState.GenMsgs, index?: number): GenesisState.GenMsgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenesisState.AsObject;
    static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenesisState;
    static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
    export type AsObject = {
        params?: cosmwasm_wasm_v1_types_pb.Params.AsObject,
        codesList: Array<Code.AsObject>,
        contractsList: Array<Contract.AsObject>,
        sequencesList: Array<Sequence.AsObject>,
        genMsgsList: Array<GenesisState.GenMsgs.AsObject>,
    }


    export class GenMsgs extends jspb.Message { 

        hasStoreCode(): boolean;
        clearStoreCode(): void;
        getStoreCode(): cosmwasm_wasm_v1_tx_pb.MsgStoreCode | undefined;
        setStoreCode(value?: cosmwasm_wasm_v1_tx_pb.MsgStoreCode): GenMsgs;

        hasInstantiateContract(): boolean;
        clearInstantiateContract(): void;
        getInstantiateContract(): cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract | undefined;
        setInstantiateContract(value?: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract): GenMsgs;

        hasExecuteContract(): boolean;
        clearExecuteContract(): void;
        getExecuteContract(): cosmwasm_wasm_v1_tx_pb.MsgExecuteContract | undefined;
        setExecuteContract(value?: cosmwasm_wasm_v1_tx_pb.MsgExecuteContract): GenMsgs;

        getSumCase(): GenMsgs.SumCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GenMsgs.AsObject;
        static toObject(includeInstance: boolean, msg: GenMsgs): GenMsgs.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GenMsgs, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GenMsgs;
        static deserializeBinaryFromReader(message: GenMsgs, reader: jspb.BinaryReader): GenMsgs;
    }

    export namespace GenMsgs {
        export type AsObject = {
            storeCode?: cosmwasm_wasm_v1_tx_pb.MsgStoreCode.AsObject,
            instantiateContract?: cosmwasm_wasm_v1_tx_pb.MsgInstantiateContract.AsObject,
            executeContract?: cosmwasm_wasm_v1_tx_pb.MsgExecuteContract.AsObject,
        }

        export enum SumCase {
            SUM_NOT_SET = 0,
            STORE_CODE = 1,
            INSTANTIATE_CONTRACT = 2,
            EXECUTE_CONTRACT = 3,
        }

    }

}

export class Code extends jspb.Message { 
    getCodeId(): number;
    setCodeId(value: number): Code;

    hasCodeInfo(): boolean;
    clearCodeInfo(): void;
    getCodeInfo(): cosmwasm_wasm_v1_types_pb.CodeInfo | undefined;
    setCodeInfo(value?: cosmwasm_wasm_v1_types_pb.CodeInfo): Code;
    getCodeBytes(): Uint8Array | string;
    getCodeBytes_asU8(): Uint8Array;
    getCodeBytes_asB64(): string;
    setCodeBytes(value: Uint8Array | string): Code;
    getPinned(): boolean;
    setPinned(value: boolean): Code;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Code.AsObject;
    static toObject(includeInstance: boolean, msg: Code): Code.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Code, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Code;
    static deserializeBinaryFromReader(message: Code, reader: jspb.BinaryReader): Code;
}

export namespace Code {
    export type AsObject = {
        codeId: number,
        codeInfo?: cosmwasm_wasm_v1_types_pb.CodeInfo.AsObject,
        codeBytes: Uint8Array | string,
        pinned: boolean,
    }
}

export class Contract extends jspb.Message { 
    getContractAddress(): string;
    setContractAddress(value: string): Contract;

    hasContractInfo(): boolean;
    clearContractInfo(): void;
    getContractInfo(): cosmwasm_wasm_v1_types_pb.ContractInfo | undefined;
    setContractInfo(value?: cosmwasm_wasm_v1_types_pb.ContractInfo): Contract;
    clearContractStateList(): void;
    getContractStateList(): Array<cosmwasm_wasm_v1_types_pb.Model>;
    setContractStateList(value: Array<cosmwasm_wasm_v1_types_pb.Model>): Contract;
    addContractState(value?: cosmwasm_wasm_v1_types_pb.Model, index?: number): cosmwasm_wasm_v1_types_pb.Model;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contract.AsObject;
    static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contract;
    static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
}

export namespace Contract {
    export type AsObject = {
        contractAddress: string,
        contractInfo?: cosmwasm_wasm_v1_types_pb.ContractInfo.AsObject,
        contractStateList: Array<cosmwasm_wasm_v1_types_pb.Model.AsObject>,
    }
}

export class Sequence extends jspb.Message { 
    getIdKey(): Uint8Array | string;
    getIdKey_asU8(): Uint8Array;
    getIdKey_asB64(): string;
    setIdKey(value: Uint8Array | string): Sequence;
    getValue(): number;
    setValue(value: number): Sequence;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sequence.AsObject;
    static toObject(includeInstance: boolean, msg: Sequence): Sequence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sequence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sequence;
    static deserializeBinaryFromReader(message: Sequence, reader: jspb.BinaryReader): Sequence;
}

export namespace Sequence {
    export type AsObject = {
        idKey: Uint8Array | string,
        value: number,
    }
}
