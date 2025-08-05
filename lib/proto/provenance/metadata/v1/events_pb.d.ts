// package: provenance.metadata.v1
// file: provenance/metadata/v1/events.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class EventTxCompleted extends jspb.Message { 
    getModule(): string;
    setModule(value: string): EventTxCompleted;
    getEndpoint(): string;
    setEndpoint(value: string): EventTxCompleted;
    clearSignersList(): void;
    getSignersList(): Array<string>;
    setSignersList(value: Array<string>): EventTxCompleted;
    addSigners(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventTxCompleted.AsObject;
    static toObject(includeInstance: boolean, msg: EventTxCompleted): EventTxCompleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventTxCompleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventTxCompleted;
    static deserializeBinaryFromReader(message: EventTxCompleted, reader: jspb.BinaryReader): EventTxCompleted;
}

export namespace EventTxCompleted {
    export type AsObject = {
        module: string,
        endpoint: string,
        signersList: Array<string>,
    }
}

export class EventScopeCreated extends jspb.Message { 
    getScopeAddr(): string;
    setScopeAddr(value: string): EventScopeCreated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventScopeCreated.AsObject;
    static toObject(includeInstance: boolean, msg: EventScopeCreated): EventScopeCreated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventScopeCreated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventScopeCreated;
    static deserializeBinaryFromReader(message: EventScopeCreated, reader: jspb.BinaryReader): EventScopeCreated;
}

export namespace EventScopeCreated {
    export type AsObject = {
        scopeAddr: string,
    }
}

export class EventScopeUpdated extends jspb.Message { 
    getScopeAddr(): string;
    setScopeAddr(value: string): EventScopeUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventScopeUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: EventScopeUpdated): EventScopeUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventScopeUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventScopeUpdated;
    static deserializeBinaryFromReader(message: EventScopeUpdated, reader: jspb.BinaryReader): EventScopeUpdated;
}

export namespace EventScopeUpdated {
    export type AsObject = {
        scopeAddr: string,
    }
}

export class EventScopeDeleted extends jspb.Message { 
    getScopeAddr(): string;
    setScopeAddr(value: string): EventScopeDeleted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventScopeDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: EventScopeDeleted): EventScopeDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventScopeDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventScopeDeleted;
    static deserializeBinaryFromReader(message: EventScopeDeleted, reader: jspb.BinaryReader): EventScopeDeleted;
}

export namespace EventScopeDeleted {
    export type AsObject = {
        scopeAddr: string,
    }
}

export class EventSessionCreated extends jspb.Message { 
    getSessionAddr(): string;
    setSessionAddr(value: string): EventSessionCreated;
    getScopeAddr(): string;
    setScopeAddr(value: string): EventSessionCreated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventSessionCreated.AsObject;
    static toObject(includeInstance: boolean, msg: EventSessionCreated): EventSessionCreated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventSessionCreated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventSessionCreated;
    static deserializeBinaryFromReader(message: EventSessionCreated, reader: jspb.BinaryReader): EventSessionCreated;
}

export namespace EventSessionCreated {
    export type AsObject = {
        sessionAddr: string,
        scopeAddr: string,
    }
}

export class EventSessionUpdated extends jspb.Message { 
    getSessionAddr(): string;
    setSessionAddr(value: string): EventSessionUpdated;
    getScopeAddr(): string;
    setScopeAddr(value: string): EventSessionUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventSessionUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: EventSessionUpdated): EventSessionUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventSessionUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventSessionUpdated;
    static deserializeBinaryFromReader(message: EventSessionUpdated, reader: jspb.BinaryReader): EventSessionUpdated;
}

export namespace EventSessionUpdated {
    export type AsObject = {
        sessionAddr: string,
        scopeAddr: string,
    }
}

export class EventSessionDeleted extends jspb.Message { 
    getSessionAddr(): string;
    setSessionAddr(value: string): EventSessionDeleted;
    getScopeAddr(): string;
    setScopeAddr(value: string): EventSessionDeleted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventSessionDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: EventSessionDeleted): EventSessionDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventSessionDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventSessionDeleted;
    static deserializeBinaryFromReader(message: EventSessionDeleted, reader: jspb.BinaryReader): EventSessionDeleted;
}

export namespace EventSessionDeleted {
    export type AsObject = {
        sessionAddr: string,
        scopeAddr: string,
    }
}

export class EventRecordCreated extends jspb.Message { 
    getRecordAddr(): string;
    setRecordAddr(value: string): EventRecordCreated;
    getSessionAddr(): string;
    setSessionAddr(value: string): EventRecordCreated;
    getScopeAddr(): string;
    setScopeAddr(value: string): EventRecordCreated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventRecordCreated.AsObject;
    static toObject(includeInstance: boolean, msg: EventRecordCreated): EventRecordCreated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventRecordCreated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventRecordCreated;
    static deserializeBinaryFromReader(message: EventRecordCreated, reader: jspb.BinaryReader): EventRecordCreated;
}

export namespace EventRecordCreated {
    export type AsObject = {
        recordAddr: string,
        sessionAddr: string,
        scopeAddr: string,
    }
}

export class EventRecordUpdated extends jspb.Message { 
    getRecordAddr(): string;
    setRecordAddr(value: string): EventRecordUpdated;
    getSessionAddr(): string;
    setSessionAddr(value: string): EventRecordUpdated;
    getScopeAddr(): string;
    setScopeAddr(value: string): EventRecordUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventRecordUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: EventRecordUpdated): EventRecordUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventRecordUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventRecordUpdated;
    static deserializeBinaryFromReader(message: EventRecordUpdated, reader: jspb.BinaryReader): EventRecordUpdated;
}

export namespace EventRecordUpdated {
    export type AsObject = {
        recordAddr: string,
        sessionAddr: string,
        scopeAddr: string,
    }
}

export class EventRecordDeleted extends jspb.Message { 
    getRecordAddr(): string;
    setRecordAddr(value: string): EventRecordDeleted;
    getScopeAddr(): string;
    setScopeAddr(value: string): EventRecordDeleted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventRecordDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: EventRecordDeleted): EventRecordDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventRecordDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventRecordDeleted;
    static deserializeBinaryFromReader(message: EventRecordDeleted, reader: jspb.BinaryReader): EventRecordDeleted;
}

export namespace EventRecordDeleted {
    export type AsObject = {
        recordAddr: string,
        scopeAddr: string,
    }
}

export class EventScopeSpecificationCreated extends jspb.Message { 
    getScopeSpecificationAddr(): string;
    setScopeSpecificationAddr(value: string): EventScopeSpecificationCreated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventScopeSpecificationCreated.AsObject;
    static toObject(includeInstance: boolean, msg: EventScopeSpecificationCreated): EventScopeSpecificationCreated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventScopeSpecificationCreated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventScopeSpecificationCreated;
    static deserializeBinaryFromReader(message: EventScopeSpecificationCreated, reader: jspb.BinaryReader): EventScopeSpecificationCreated;
}

export namespace EventScopeSpecificationCreated {
    export type AsObject = {
        scopeSpecificationAddr: string,
    }
}

export class EventScopeSpecificationUpdated extends jspb.Message { 
    getScopeSpecificationAddr(): string;
    setScopeSpecificationAddr(value: string): EventScopeSpecificationUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventScopeSpecificationUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: EventScopeSpecificationUpdated): EventScopeSpecificationUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventScopeSpecificationUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventScopeSpecificationUpdated;
    static deserializeBinaryFromReader(message: EventScopeSpecificationUpdated, reader: jspb.BinaryReader): EventScopeSpecificationUpdated;
}

export namespace EventScopeSpecificationUpdated {
    export type AsObject = {
        scopeSpecificationAddr: string,
    }
}

export class EventScopeSpecificationDeleted extends jspb.Message { 
    getScopeSpecificationAddr(): string;
    setScopeSpecificationAddr(value: string): EventScopeSpecificationDeleted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventScopeSpecificationDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: EventScopeSpecificationDeleted): EventScopeSpecificationDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventScopeSpecificationDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventScopeSpecificationDeleted;
    static deserializeBinaryFromReader(message: EventScopeSpecificationDeleted, reader: jspb.BinaryReader): EventScopeSpecificationDeleted;
}

export namespace EventScopeSpecificationDeleted {
    export type AsObject = {
        scopeSpecificationAddr: string,
    }
}

export class EventContractSpecificationCreated extends jspb.Message { 
    getContractSpecificationAddr(): string;
    setContractSpecificationAddr(value: string): EventContractSpecificationCreated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventContractSpecificationCreated.AsObject;
    static toObject(includeInstance: boolean, msg: EventContractSpecificationCreated): EventContractSpecificationCreated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventContractSpecificationCreated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventContractSpecificationCreated;
    static deserializeBinaryFromReader(message: EventContractSpecificationCreated, reader: jspb.BinaryReader): EventContractSpecificationCreated;
}

export namespace EventContractSpecificationCreated {
    export type AsObject = {
        contractSpecificationAddr: string,
    }
}

export class EventContractSpecificationUpdated extends jspb.Message { 
    getContractSpecificationAddr(): string;
    setContractSpecificationAddr(value: string): EventContractSpecificationUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventContractSpecificationUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: EventContractSpecificationUpdated): EventContractSpecificationUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventContractSpecificationUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventContractSpecificationUpdated;
    static deserializeBinaryFromReader(message: EventContractSpecificationUpdated, reader: jspb.BinaryReader): EventContractSpecificationUpdated;
}

export namespace EventContractSpecificationUpdated {
    export type AsObject = {
        contractSpecificationAddr: string,
    }
}

export class EventContractSpecificationDeleted extends jspb.Message { 
    getContractSpecificationAddr(): string;
    setContractSpecificationAddr(value: string): EventContractSpecificationDeleted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventContractSpecificationDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: EventContractSpecificationDeleted): EventContractSpecificationDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventContractSpecificationDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventContractSpecificationDeleted;
    static deserializeBinaryFromReader(message: EventContractSpecificationDeleted, reader: jspb.BinaryReader): EventContractSpecificationDeleted;
}

export namespace EventContractSpecificationDeleted {
    export type AsObject = {
        contractSpecificationAddr: string,
    }
}

export class EventRecordSpecificationCreated extends jspb.Message { 
    getRecordSpecificationAddr(): string;
    setRecordSpecificationAddr(value: string): EventRecordSpecificationCreated;
    getContractSpecificationAddr(): string;
    setContractSpecificationAddr(value: string): EventRecordSpecificationCreated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventRecordSpecificationCreated.AsObject;
    static toObject(includeInstance: boolean, msg: EventRecordSpecificationCreated): EventRecordSpecificationCreated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventRecordSpecificationCreated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventRecordSpecificationCreated;
    static deserializeBinaryFromReader(message: EventRecordSpecificationCreated, reader: jspb.BinaryReader): EventRecordSpecificationCreated;
}

export namespace EventRecordSpecificationCreated {
    export type AsObject = {
        recordSpecificationAddr: string,
        contractSpecificationAddr: string,
    }
}

export class EventRecordSpecificationUpdated extends jspb.Message { 
    getRecordSpecificationAddr(): string;
    setRecordSpecificationAddr(value: string): EventRecordSpecificationUpdated;
    getContractSpecificationAddr(): string;
    setContractSpecificationAddr(value: string): EventRecordSpecificationUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventRecordSpecificationUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: EventRecordSpecificationUpdated): EventRecordSpecificationUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventRecordSpecificationUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventRecordSpecificationUpdated;
    static deserializeBinaryFromReader(message: EventRecordSpecificationUpdated, reader: jspb.BinaryReader): EventRecordSpecificationUpdated;
}

export namespace EventRecordSpecificationUpdated {
    export type AsObject = {
        recordSpecificationAddr: string,
        contractSpecificationAddr: string,
    }
}

export class EventRecordSpecificationDeleted extends jspb.Message { 
    getRecordSpecificationAddr(): string;
    setRecordSpecificationAddr(value: string): EventRecordSpecificationDeleted;
    getContractSpecificationAddr(): string;
    setContractSpecificationAddr(value: string): EventRecordSpecificationDeleted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventRecordSpecificationDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: EventRecordSpecificationDeleted): EventRecordSpecificationDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventRecordSpecificationDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventRecordSpecificationDeleted;
    static deserializeBinaryFromReader(message: EventRecordSpecificationDeleted, reader: jspb.BinaryReader): EventRecordSpecificationDeleted;
}

export namespace EventRecordSpecificationDeleted {
    export type AsObject = {
        recordSpecificationAddr: string,
        contractSpecificationAddr: string,
    }
}

export class EventOSLocatorCreated extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): EventOSLocatorCreated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventOSLocatorCreated.AsObject;
    static toObject(includeInstance: boolean, msg: EventOSLocatorCreated): EventOSLocatorCreated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventOSLocatorCreated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventOSLocatorCreated;
    static deserializeBinaryFromReader(message: EventOSLocatorCreated, reader: jspb.BinaryReader): EventOSLocatorCreated;
}

export namespace EventOSLocatorCreated {
    export type AsObject = {
        owner: string,
    }
}

export class EventOSLocatorUpdated extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): EventOSLocatorUpdated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventOSLocatorUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: EventOSLocatorUpdated): EventOSLocatorUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventOSLocatorUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventOSLocatorUpdated;
    static deserializeBinaryFromReader(message: EventOSLocatorUpdated, reader: jspb.BinaryReader): EventOSLocatorUpdated;
}

export namespace EventOSLocatorUpdated {
    export type AsObject = {
        owner: string,
    }
}

export class EventOSLocatorDeleted extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): EventOSLocatorDeleted;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventOSLocatorDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: EventOSLocatorDeleted): EventOSLocatorDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventOSLocatorDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventOSLocatorDeleted;
    static deserializeBinaryFromReader(message: EventOSLocatorDeleted, reader: jspb.BinaryReader): EventOSLocatorDeleted;
}

export namespace EventOSLocatorDeleted {
    export type AsObject = {
        owner: string,
    }
}

export class EventSetNetAssetValue extends jspb.Message { 
    getScopeId(): string;
    setScopeId(value: string): EventSetNetAssetValue;
    getPrice(): string;
    setPrice(value: string): EventSetNetAssetValue;
    getSource(): string;
    setSource(value: string): EventSetNetAssetValue;
    getVolume(): string;
    setVolume(value: string): EventSetNetAssetValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventSetNetAssetValue.AsObject;
    static toObject(includeInstance: boolean, msg: EventSetNetAssetValue): EventSetNetAssetValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventSetNetAssetValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventSetNetAssetValue;
    static deserializeBinaryFromReader(message: EventSetNetAssetValue, reader: jspb.BinaryReader): EventSetNetAssetValue;
}

export namespace EventSetNetAssetValue {
    export type AsObject = {
        scopeId: string,
        price: string,
        source: string,
        volume: string,
    }
}
