// package: cosmwasm.wasm.v1
// file: cosmwasm/wasm/v1/tx.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmwasm_wasm_v1_types_pb from "../../../cosmwasm/wasm/v1/types_pb";

export class MsgStoreCode extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgStoreCode;
    getWasmByteCode(): Uint8Array | string;
    getWasmByteCode_asU8(): Uint8Array;
    getWasmByteCode_asB64(): string;
    setWasmByteCode(value: Uint8Array | string): MsgStoreCode;

    hasInstantiatePermission(): boolean;
    clearInstantiatePermission(): void;
    getInstantiatePermission(): cosmwasm_wasm_v1_types_pb.AccessConfig | undefined;
    setInstantiatePermission(value?: cosmwasm_wasm_v1_types_pb.AccessConfig): MsgStoreCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgStoreCode.AsObject;
    static toObject(includeInstance: boolean, msg: MsgStoreCode): MsgStoreCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgStoreCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgStoreCode;
    static deserializeBinaryFromReader(message: MsgStoreCode, reader: jspb.BinaryReader): MsgStoreCode;
}

export namespace MsgStoreCode {
    export type AsObject = {
        sender: string,
        wasmByteCode: Uint8Array | string,
        instantiatePermission?: cosmwasm_wasm_v1_types_pb.AccessConfig.AsObject,
    }
}

export class MsgStoreCodeResponse extends jspb.Message { 
    getCodeId(): number;
    setCodeId(value: number): MsgStoreCodeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgStoreCodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgStoreCodeResponse): MsgStoreCodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgStoreCodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgStoreCodeResponse;
    static deserializeBinaryFromReader(message: MsgStoreCodeResponse, reader: jspb.BinaryReader): MsgStoreCodeResponse;
}

export namespace MsgStoreCodeResponse {
    export type AsObject = {
        codeId: number,
    }
}

export class MsgInstantiateContract extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgInstantiateContract;
    getAdmin(): string;
    setAdmin(value: string): MsgInstantiateContract;
    getCodeId(): number;
    setCodeId(value: number): MsgInstantiateContract;
    getLabel(): string;
    setLabel(value: string): MsgInstantiateContract;
    getMsg(): Uint8Array | string;
    getMsg_asU8(): Uint8Array;
    getMsg_asB64(): string;
    setMsg(value: Uint8Array | string): MsgInstantiateContract;
    clearFundsList(): void;
    getFundsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
    setFundsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MsgInstantiateContract;
    addFunds(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgInstantiateContract.AsObject;
    static toObject(includeInstance: boolean, msg: MsgInstantiateContract): MsgInstantiateContract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgInstantiateContract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgInstantiateContract;
    static deserializeBinaryFromReader(message: MsgInstantiateContract, reader: jspb.BinaryReader): MsgInstantiateContract;
}

export namespace MsgInstantiateContract {
    export type AsObject = {
        sender: string,
        admin: string,
        codeId: number,
        label: string,
        msg: Uint8Array | string,
        fundsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    }
}

export class MsgInstantiateContractResponse extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): MsgInstantiateContractResponse;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): MsgInstantiateContractResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgInstantiateContractResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgInstantiateContractResponse): MsgInstantiateContractResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgInstantiateContractResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgInstantiateContractResponse;
    static deserializeBinaryFromReader(message: MsgInstantiateContractResponse, reader: jspb.BinaryReader): MsgInstantiateContractResponse;
}

export namespace MsgInstantiateContractResponse {
    export type AsObject = {
        address: string,
        data: Uint8Array | string,
    }
}

export class MsgExecuteContract extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgExecuteContract;
    getContract(): string;
    setContract(value: string): MsgExecuteContract;
    getMsg(): Uint8Array | string;
    getMsg_asU8(): Uint8Array;
    getMsg_asB64(): string;
    setMsg(value: Uint8Array | string): MsgExecuteContract;
    clearFundsList(): void;
    getFundsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
    setFundsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): MsgExecuteContract;
    addFunds(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgExecuteContract.AsObject;
    static toObject(includeInstance: boolean, msg: MsgExecuteContract): MsgExecuteContract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgExecuteContract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgExecuteContract;
    static deserializeBinaryFromReader(message: MsgExecuteContract, reader: jspb.BinaryReader): MsgExecuteContract;
}

export namespace MsgExecuteContract {
    export type AsObject = {
        sender: string,
        contract: string,
        msg: Uint8Array | string,
        fundsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    }
}

export class MsgExecuteContractResponse extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): MsgExecuteContractResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgExecuteContractResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgExecuteContractResponse): MsgExecuteContractResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgExecuteContractResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgExecuteContractResponse;
    static deserializeBinaryFromReader(message: MsgExecuteContractResponse, reader: jspb.BinaryReader): MsgExecuteContractResponse;
}

export namespace MsgExecuteContractResponse {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class MsgMigrateContract extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgMigrateContract;
    getContract(): string;
    setContract(value: string): MsgMigrateContract;
    getCodeId(): number;
    setCodeId(value: number): MsgMigrateContract;
    getMsg(): Uint8Array | string;
    getMsg_asU8(): Uint8Array;
    getMsg_asB64(): string;
    setMsg(value: Uint8Array | string): MsgMigrateContract;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgMigrateContract.AsObject;
    static toObject(includeInstance: boolean, msg: MsgMigrateContract): MsgMigrateContract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgMigrateContract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgMigrateContract;
    static deserializeBinaryFromReader(message: MsgMigrateContract, reader: jspb.BinaryReader): MsgMigrateContract;
}

export namespace MsgMigrateContract {
    export type AsObject = {
        sender: string,
        contract: string,
        codeId: number,
        msg: Uint8Array | string,
    }
}

export class MsgMigrateContractResponse extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): MsgMigrateContractResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgMigrateContractResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgMigrateContractResponse): MsgMigrateContractResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgMigrateContractResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgMigrateContractResponse;
    static deserializeBinaryFromReader(message: MsgMigrateContractResponse, reader: jspb.BinaryReader): MsgMigrateContractResponse;
}

export namespace MsgMigrateContractResponse {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class MsgUpdateAdmin extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgUpdateAdmin;
    getNewAdmin(): string;
    setNewAdmin(value: string): MsgUpdateAdmin;
    getContract(): string;
    setContract(value: string): MsgUpdateAdmin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateAdmin.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateAdmin): MsgUpdateAdmin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateAdmin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateAdmin;
    static deserializeBinaryFromReader(message: MsgUpdateAdmin, reader: jspb.BinaryReader): MsgUpdateAdmin;
}

export namespace MsgUpdateAdmin {
    export type AsObject = {
        sender: string,
        newAdmin: string,
        contract: string,
    }
}

export class MsgUpdateAdminResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUpdateAdminResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUpdateAdminResponse): MsgUpdateAdminResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUpdateAdminResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUpdateAdminResponse;
    static deserializeBinaryFromReader(message: MsgUpdateAdminResponse, reader: jspb.BinaryReader): MsgUpdateAdminResponse;
}

export namespace MsgUpdateAdminResponse {
    export type AsObject = {
    }
}

export class MsgClearAdmin extends jspb.Message { 
    getSender(): string;
    setSender(value: string): MsgClearAdmin;
    getContract(): string;
    setContract(value: string): MsgClearAdmin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgClearAdmin.AsObject;
    static toObject(includeInstance: boolean, msg: MsgClearAdmin): MsgClearAdmin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgClearAdmin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgClearAdmin;
    static deserializeBinaryFromReader(message: MsgClearAdmin, reader: jspb.BinaryReader): MsgClearAdmin;
}

export namespace MsgClearAdmin {
    export type AsObject = {
        sender: string,
        contract: string,
    }
}

export class MsgClearAdminResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgClearAdminResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgClearAdminResponse): MsgClearAdminResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgClearAdminResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgClearAdminResponse;
    static deserializeBinaryFromReader(message: MsgClearAdminResponse, reader: jspb.BinaryReader): MsgClearAdminResponse;
}

export namespace MsgClearAdminResponse {
    export type AsObject = {
    }
}
