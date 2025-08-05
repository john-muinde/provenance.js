// package: cosmwasm.wasm.v1
// file: cosmwasm/wasm/v1/proposal.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as cosmwasm_wasm_v1_types_pb from "../../../cosmwasm/wasm/v1/types_pb";

export class StoreCodeProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): StoreCodeProposal;
    getDescription(): string;
    setDescription(value: string): StoreCodeProposal;
    getRunAs(): string;
    setRunAs(value: string): StoreCodeProposal;
    getWasmByteCode(): Uint8Array | string;
    getWasmByteCode_asU8(): Uint8Array;
    getWasmByteCode_asB64(): string;
    setWasmByteCode(value: Uint8Array | string): StoreCodeProposal;

    hasInstantiatePermission(): boolean;
    clearInstantiatePermission(): void;
    getInstantiatePermission(): cosmwasm_wasm_v1_types_pb.AccessConfig | undefined;
    setInstantiatePermission(value?: cosmwasm_wasm_v1_types_pb.AccessConfig): StoreCodeProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreCodeProposal.AsObject;
    static toObject(includeInstance: boolean, msg: StoreCodeProposal): StoreCodeProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreCodeProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreCodeProposal;
    static deserializeBinaryFromReader(message: StoreCodeProposal, reader: jspb.BinaryReader): StoreCodeProposal;
}

export namespace StoreCodeProposal {
    export type AsObject = {
        title: string,
        description: string,
        runAs: string,
        wasmByteCode: Uint8Array | string,
        instantiatePermission?: cosmwasm_wasm_v1_types_pb.AccessConfig.AsObject,
    }
}

export class InstantiateContractProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): InstantiateContractProposal;
    getDescription(): string;
    setDescription(value: string): InstantiateContractProposal;
    getRunAs(): string;
    setRunAs(value: string): InstantiateContractProposal;
    getAdmin(): string;
    setAdmin(value: string): InstantiateContractProposal;
    getCodeId(): number;
    setCodeId(value: number): InstantiateContractProposal;
    getLabel(): string;
    setLabel(value: string): InstantiateContractProposal;
    getMsg(): Uint8Array | string;
    getMsg_asU8(): Uint8Array;
    getMsg_asB64(): string;
    setMsg(value: Uint8Array | string): InstantiateContractProposal;
    clearFundsList(): void;
    getFundsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
    setFundsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): InstantiateContractProposal;
    addFunds(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstantiateContractProposal.AsObject;
    static toObject(includeInstance: boolean, msg: InstantiateContractProposal): InstantiateContractProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstantiateContractProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstantiateContractProposal;
    static deserializeBinaryFromReader(message: InstantiateContractProposal, reader: jspb.BinaryReader): InstantiateContractProposal;
}

export namespace InstantiateContractProposal {
    export type AsObject = {
        title: string,
        description: string,
        runAs: string,
        admin: string,
        codeId: number,
        label: string,
        msg: Uint8Array | string,
        fundsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    }
}

export class MigrateContractProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): MigrateContractProposal;
    getDescription(): string;
    setDescription(value: string): MigrateContractProposal;
    getRunAs(): string;
    setRunAs(value: string): MigrateContractProposal;
    getContract(): string;
    setContract(value: string): MigrateContractProposal;
    getCodeId(): number;
    setCodeId(value: number): MigrateContractProposal;
    getMsg(): Uint8Array | string;
    getMsg_asU8(): Uint8Array;
    getMsg_asB64(): string;
    setMsg(value: Uint8Array | string): MigrateContractProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MigrateContractProposal.AsObject;
    static toObject(includeInstance: boolean, msg: MigrateContractProposal): MigrateContractProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MigrateContractProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MigrateContractProposal;
    static deserializeBinaryFromReader(message: MigrateContractProposal, reader: jspb.BinaryReader): MigrateContractProposal;
}

export namespace MigrateContractProposal {
    export type AsObject = {
        title: string,
        description: string,
        runAs: string,
        contract: string,
        codeId: number,
        msg: Uint8Array | string,
    }
}

export class UpdateAdminProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): UpdateAdminProposal;
    getDescription(): string;
    setDescription(value: string): UpdateAdminProposal;
    getNewAdmin(): string;
    setNewAdmin(value: string): UpdateAdminProposal;
    getContract(): string;
    setContract(value: string): UpdateAdminProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAdminProposal.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAdminProposal): UpdateAdminProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAdminProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAdminProposal;
    static deserializeBinaryFromReader(message: UpdateAdminProposal, reader: jspb.BinaryReader): UpdateAdminProposal;
}

export namespace UpdateAdminProposal {
    export type AsObject = {
        title: string,
        description: string,
        newAdmin: string,
        contract: string,
    }
}

export class ClearAdminProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): ClearAdminProposal;
    getDescription(): string;
    setDescription(value: string): ClearAdminProposal;
    getContract(): string;
    setContract(value: string): ClearAdminProposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearAdminProposal.AsObject;
    static toObject(includeInstance: boolean, msg: ClearAdminProposal): ClearAdminProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearAdminProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearAdminProposal;
    static deserializeBinaryFromReader(message: ClearAdminProposal, reader: jspb.BinaryReader): ClearAdminProposal;
}

export namespace ClearAdminProposal {
    export type AsObject = {
        title: string,
        description: string,
        contract: string,
    }
}

export class PinCodesProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): PinCodesProposal;
    getDescription(): string;
    setDescription(value: string): PinCodesProposal;
    clearCodeIdsList(): void;
    getCodeIdsList(): Array<number>;
    setCodeIdsList(value: Array<number>): PinCodesProposal;
    addCodeIds(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PinCodesProposal.AsObject;
    static toObject(includeInstance: boolean, msg: PinCodesProposal): PinCodesProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PinCodesProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PinCodesProposal;
    static deserializeBinaryFromReader(message: PinCodesProposal, reader: jspb.BinaryReader): PinCodesProposal;
}

export namespace PinCodesProposal {
    export type AsObject = {
        title: string,
        description: string,
        codeIdsList: Array<number>,
    }
}

export class UnpinCodesProposal extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): UnpinCodesProposal;
    getDescription(): string;
    setDescription(value: string): UnpinCodesProposal;
    clearCodeIdsList(): void;
    getCodeIdsList(): Array<number>;
    setCodeIdsList(value: Array<number>): UnpinCodesProposal;
    addCodeIds(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnpinCodesProposal.AsObject;
    static toObject(includeInstance: boolean, msg: UnpinCodesProposal): UnpinCodesProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnpinCodesProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnpinCodesProposal;
    static deserializeBinaryFromReader(message: UnpinCodesProposal, reader: jspb.BinaryReader): UnpinCodesProposal;
}

export namespace UnpinCodesProposal {
    export type AsObject = {
        title: string,
        description: string,
        codeIdsList: Array<number>,
    }
}
