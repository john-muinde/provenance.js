// package: provenance.metadata.v1.p8e
// file: provenance/metadata/v1/p8e/p8e.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Contract extends jspb.Message { 

    hasDefinition(): boolean;
    clearDefinition(): void;
    getDefinition(): DefinitionSpec | undefined;
    setDefinition(value?: DefinitionSpec): Contract;

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): Fact | undefined;
    setSpec(value?: Fact): Contract;

    hasInvoker(): boolean;
    clearInvoker(): void;
    getInvoker(): SigningAndEncryptionPublicKeys | undefined;
    setInvoker(value?: SigningAndEncryptionPublicKeys): Contract;
    clearInputsList(): void;
    getInputsList(): Array<Fact>;
    setInputsList(value: Array<Fact>): Contract;
    addInputs(value?: Fact, index?: number): Fact;
    clearConditionsList(): void;
    getConditionsList(): Array<Condition>;
    setConditionsList(value: Array<Condition>): Contract;
    addConditions(value?: Condition, index?: number): Condition;
    clearConsiderationsList(): void;
    getConsiderationsList(): Array<Consideration>;
    setConsiderationsList(value: Array<Consideration>): Contract;
    addConsiderations(value?: Consideration, index?: number): Consideration;
    clearRecitalsList(): void;
    getRecitalsList(): Array<Recital>;
    setRecitalsList(value: Array<Recital>): Contract;
    addRecitals(value?: Recital, index?: number): Recital;
    getTimesExecuted(): number;
    setTimesExecuted(value: number): Contract;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): Timestamp | undefined;
    setStartTime(value?: Timestamp): Contract;
    getContext(): Uint8Array | string;
    getContext_asU8(): Uint8Array;
    getContext_asB64(): string;
    setContext(value: Uint8Array | string): Contract;

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
        definition?: DefinitionSpec.AsObject,
        spec?: Fact.AsObject,
        invoker?: SigningAndEncryptionPublicKeys.AsObject,
        inputsList: Array<Fact.AsObject>,
        conditionsList: Array<Condition.AsObject>,
        considerationsList: Array<Consideration.AsObject>,
        recitalsList: Array<Recital.AsObject>,
        timesExecuted: number,
        startTime?: Timestamp.AsObject,
        context: Uint8Array | string,
    }
}

export class DefinitionSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): DefinitionSpec;

    hasResourceLocation(): boolean;
    clearResourceLocation(): void;
    getResourceLocation(): Location | undefined;
    setResourceLocation(value?: Location): DefinitionSpec;

    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): Signature | undefined;
    setSignature(value?: Signature): DefinitionSpec;
    getType(): DefinitionSpecType;
    setType(value: DefinitionSpecType): DefinitionSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DefinitionSpec.AsObject;
    static toObject(includeInstance: boolean, msg: DefinitionSpec): DefinitionSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DefinitionSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DefinitionSpec;
    static deserializeBinaryFromReader(message: DefinitionSpec, reader: jspb.BinaryReader): DefinitionSpec;
}

export namespace DefinitionSpec {
    export type AsObject = {
        name: string,
        resourceLocation?: Location.AsObject,
        signature?: Signature.AsObject,
        type: DefinitionSpecType,
    }
}

export class Fact extends jspb.Message { 
    getName(): string;
    setName(value: string): Fact;

    hasDataLocation(): boolean;
    clearDataLocation(): void;
    getDataLocation(): Location | undefined;
    setDataLocation(value?: Location): Fact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fact.AsObject;
    static toObject(includeInstance: boolean, msg: Fact): Fact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fact;
    static deserializeBinaryFromReader(message: Fact, reader: jspb.BinaryReader): Fact;
}

export namespace Fact {
    export type AsObject = {
        name: string,
        dataLocation?: Location.AsObject,
    }
}

export class Condition extends jspb.Message { 
    getConditionName(): string;
    setConditionName(value: string): Condition;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): ExecutionResult | undefined;
    setResult(value?: ExecutionResult): Condition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Condition.AsObject;
    static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Condition;
    static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
    export type AsObject = {
        conditionName: string,
        result?: ExecutionResult.AsObject,
    }
}

export class Consideration extends jspb.Message { 
    getConsiderationName(): string;
    setConsiderationName(value: string): Consideration;
    clearInputsList(): void;
    getInputsList(): Array<ProposedFact>;
    setInputsList(value: Array<ProposedFact>): Consideration;
    addInputs(value?: ProposedFact, index?: number): ProposedFact;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): ExecutionResult | undefined;
    setResult(value?: ExecutionResult): Consideration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Consideration.AsObject;
    static toObject(includeInstance: boolean, msg: Consideration): Consideration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Consideration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Consideration;
    static deserializeBinaryFromReader(message: Consideration, reader: jspb.BinaryReader): Consideration;
}

export namespace Consideration {
    export type AsObject = {
        considerationName: string,
        inputsList: Array<ProposedFact.AsObject>,
        result?: ExecutionResult.AsObject,
    }
}

export class ProposedFact extends jspb.Message { 
    getName(): string;
    setName(value: string): ProposedFact;
    getHash(): string;
    setHash(value: string): ProposedFact;
    getClassname(): string;
    setClassname(value: string): ProposedFact;

    hasAncestor(): boolean;
    clearAncestor(): void;
    getAncestor(): ProvenanceReference | undefined;
    setAncestor(value?: ProvenanceReference): ProposedFact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposedFact.AsObject;
    static toObject(includeInstance: boolean, msg: ProposedFact): ProposedFact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposedFact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposedFact;
    static deserializeBinaryFromReader(message: ProposedFact, reader: jspb.BinaryReader): ProposedFact;
}

export namespace ProposedFact {
    export type AsObject = {
        name: string,
        hash: string,
        classname: string,
        ancestor?: ProvenanceReference.AsObject,
    }
}

export class ExecutionResult extends jspb.Message { 

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): ProposedFact | undefined;
    setOutput(value?: ProposedFact): ExecutionResult;
    getResult(): ExecutionResultType;
    setResult(value: ExecutionResultType): ExecutionResult;

    hasRecordedAt(): boolean;
    clearRecordedAt(): void;
    getRecordedAt(): Timestamp | undefined;
    setRecordedAt(value?: Timestamp): ExecutionResult;
    getErrorMessage(): string;
    setErrorMessage(value: string): ExecutionResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutionResult.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutionResult): ExecutionResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutionResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutionResult;
    static deserializeBinaryFromReader(message: ExecutionResult, reader: jspb.BinaryReader): ExecutionResult;
}

export namespace ExecutionResult {
    export type AsObject = {
        output?: ProposedFact.AsObject,
        result: ExecutionResultType,
        recordedAt?: Timestamp.AsObject,
        errorMessage: string,
    }
}

export class Recitals extends jspb.Message { 
    clearPartiesList(): void;
    getPartiesList(): Array<Recital>;
    setPartiesList(value: Array<Recital>): Recitals;
    addParties(value?: Recital, index?: number): Recital;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Recitals.AsObject;
    static toObject(includeInstance: boolean, msg: Recitals): Recitals.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Recitals, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Recitals;
    static deserializeBinaryFromReader(message: Recitals, reader: jspb.BinaryReader): Recitals;
}

export namespace Recitals {
    export type AsObject = {
        partiesList: Array<Recital.AsObject>,
    }
}

export class Recital extends jspb.Message { 
    getSignerRole(): PartyType;
    setSignerRole(value: PartyType): Recital;

    hasSigner(): boolean;
    clearSigner(): void;
    getSigner(): SigningAndEncryptionPublicKeys | undefined;
    setSigner(value?: SigningAndEncryptionPublicKeys): Recital;
    getAddress(): Uint8Array | string;
    getAddress_asU8(): Uint8Array;
    getAddress_asB64(): string;
    setAddress(value: Uint8Array | string): Recital;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Recital.AsObject;
    static toObject(includeInstance: boolean, msg: Recital): Recital.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Recital, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Recital;
    static deserializeBinaryFromReader(message: Recital, reader: jspb.BinaryReader): Recital;
}

export namespace Recital {
    export type AsObject = {
        signerRole: PartyType,
        signer?: SigningAndEncryptionPublicKeys.AsObject,
        address: Uint8Array | string,
    }
}

export class Location extends jspb.Message { 

    hasRef(): boolean;
    clearRef(): void;
    getRef(): ProvenanceReference | undefined;
    setRef(value?: ProvenanceReference): Location;
    getClassname(): string;
    setClassname(value: string): Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
    export type AsObject = {
        ref?: ProvenanceReference.AsObject,
        classname: string,
    }
}

export class ProvenanceReference extends jspb.Message { 

    hasScopeUuid(): boolean;
    clearScopeUuid(): void;
    getScopeUuid(): UUID | undefined;
    setScopeUuid(value?: UUID): ProvenanceReference;

    hasGroupUuid(): boolean;
    clearGroupUuid(): void;
    getGroupUuid(): UUID | undefined;
    setGroupUuid(value?: UUID): ProvenanceReference;
    getHash(): string;
    setHash(value: string): ProvenanceReference;
    getName(): string;
    setName(value: string): ProvenanceReference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProvenanceReference.AsObject;
    static toObject(includeInstance: boolean, msg: ProvenanceReference): ProvenanceReference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProvenanceReference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProvenanceReference;
    static deserializeBinaryFromReader(message: ProvenanceReference, reader: jspb.BinaryReader): ProvenanceReference;
}

export namespace ProvenanceReference {
    export type AsObject = {
        scopeUuid?: UUID.AsObject,
        groupUuid?: UUID.AsObject,
        hash: string,
        name: string,
    }
}

export class SignatureSet extends jspb.Message { 
    clearSignaturesList(): void;
    getSignaturesList(): Array<Signature>;
    setSignaturesList(value: Array<Signature>): SignatureSet;
    addSignatures(value?: Signature, index?: number): Signature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignatureSet.AsObject;
    static toObject(includeInstance: boolean, msg: SignatureSet): SignatureSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignatureSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignatureSet;
    static deserializeBinaryFromReader(message: SignatureSet, reader: jspb.BinaryReader): SignatureSet;
}

export namespace SignatureSet {
    export type AsObject = {
        signaturesList: Array<Signature.AsObject>,
    }
}

export class Signature extends jspb.Message { 
    getAlgo(): string;
    setAlgo(value: string): Signature;
    getProvider(): string;
    setProvider(value: string): Signature;
    getSignature(): string;
    setSignature(value: string): Signature;

    hasSigner(): boolean;
    clearSigner(): void;
    getSigner(): SigningAndEncryptionPublicKeys | undefined;
    setSigner(value?: SigningAndEncryptionPublicKeys): Signature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Signature.AsObject;
    static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Signature;
    static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
    export type AsObject = {
        algo: string,
        provider: string,
        signature: string,
        signer?: SigningAndEncryptionPublicKeys.AsObject,
    }
}

export class SigningAndEncryptionPublicKeys extends jspb.Message { 

    hasSigningPublicKey(): boolean;
    clearSigningPublicKey(): void;
    getSigningPublicKey(): PublicKey | undefined;
    setSigningPublicKey(value?: PublicKey): SigningAndEncryptionPublicKeys;

    hasEncryptionPublicKey(): boolean;
    clearEncryptionPublicKey(): void;
    getEncryptionPublicKey(): PublicKey | undefined;
    setEncryptionPublicKey(value?: PublicKey): SigningAndEncryptionPublicKeys;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SigningAndEncryptionPublicKeys.AsObject;
    static toObject(includeInstance: boolean, msg: SigningAndEncryptionPublicKeys): SigningAndEncryptionPublicKeys.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SigningAndEncryptionPublicKeys, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SigningAndEncryptionPublicKeys;
    static deserializeBinaryFromReader(message: SigningAndEncryptionPublicKeys, reader: jspb.BinaryReader): SigningAndEncryptionPublicKeys;
}

export namespace SigningAndEncryptionPublicKeys {
    export type AsObject = {
        signingPublicKey?: PublicKey.AsObject,
        encryptionPublicKey?: PublicKey.AsObject,
    }
}

export class PublicKey extends jspb.Message { 
    getPublicKeyBytes(): Uint8Array | string;
    getPublicKeyBytes_asU8(): Uint8Array;
    getPublicKeyBytes_asB64(): string;
    setPublicKeyBytes(value: Uint8Array | string): PublicKey;
    getType(): PublicKeyType;
    setType(value: PublicKeyType): PublicKey;
    getCurve(): PublicKeyCurve;
    setCurve(value: PublicKeyCurve): PublicKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublicKey.AsObject;
    static toObject(includeInstance: boolean, msg: PublicKey): PublicKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublicKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublicKey;
    static deserializeBinaryFromReader(message: PublicKey, reader: jspb.BinaryReader): PublicKey;
}

export namespace PublicKey {
    export type AsObject = {
        publicKeyBytes: Uint8Array | string,
        type: PublicKeyType,
        curve: PublicKeyCurve,
    }
}

export class UUID extends jspb.Message { 
    getValue(): string;
    setValue(value: string): UUID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UUID.AsObject;
    static toObject(includeInstance: boolean, msg: UUID): UUID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UUID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UUID;
    static deserializeBinaryFromReader(message: UUID, reader: jspb.BinaryReader): UUID;
}

export namespace UUID {
    export type AsObject = {
        value: string,
    }
}

export class Timestamp extends jspb.Message { 
    getSeconds(): number;
    setSeconds(value: number): Timestamp;
    getNanos(): number;
    setNanos(value: number): Timestamp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Timestamp.AsObject;
    static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Timestamp;
    static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
    export type AsObject = {
        seconds: number,
        nanos: number,
    }
}

export class ContractSpec extends jspb.Message { 

    hasDefinition(): boolean;
    clearDefinition(): void;
    getDefinition(): DefinitionSpec | undefined;
    setDefinition(value?: DefinitionSpec): ContractSpec;
    clearInputSpecsList(): void;
    getInputSpecsList(): Array<DefinitionSpec>;
    setInputSpecsList(value: Array<DefinitionSpec>): ContractSpec;
    addInputSpecs(value?: DefinitionSpec, index?: number): DefinitionSpec;
    clearPartiesInvolvedList(): void;
    getPartiesInvolvedList(): Array<PartyType>;
    setPartiesInvolvedList(value: Array<PartyType>): ContractSpec;
    addPartiesInvolved(value: PartyType, index?: number): PartyType;
    clearConditionSpecsList(): void;
    getConditionSpecsList(): Array<ConditionSpec>;
    setConditionSpecsList(value: Array<ConditionSpec>): ContractSpec;
    addConditionSpecs(value?: ConditionSpec, index?: number): ConditionSpec;
    clearConsiderationSpecsList(): void;
    getConsiderationSpecsList(): Array<ConsiderationSpec>;
    setConsiderationSpecsList(value: Array<ConsiderationSpec>): ContractSpec;
    addConsiderationSpecs(value?: ConsiderationSpec, index?: number): ConsiderationSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ContractSpec): ContractSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractSpec;
    static deserializeBinaryFromReader(message: ContractSpec, reader: jspb.BinaryReader): ContractSpec;
}

export namespace ContractSpec {
    export type AsObject = {
        definition?: DefinitionSpec.AsObject,
        inputSpecsList: Array<DefinitionSpec.AsObject>,
        partiesInvolvedList: Array<PartyType>,
        conditionSpecsList: Array<ConditionSpec.AsObject>,
        considerationSpecsList: Array<ConsiderationSpec.AsObject>,
    }
}

export class ConditionSpec extends jspb.Message { 
    getFuncName(): string;
    setFuncName(value: string): ConditionSpec;
    clearInputSpecsList(): void;
    getInputSpecsList(): Array<DefinitionSpec>;
    setInputSpecsList(value: Array<DefinitionSpec>): ConditionSpec;
    addInputSpecs(value?: DefinitionSpec, index?: number): DefinitionSpec;

    hasOutputSpec(): boolean;
    clearOutputSpec(): void;
    getOutputSpec(): OutputSpec | undefined;
    setOutputSpec(value?: OutputSpec): ConditionSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConditionSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ConditionSpec): ConditionSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConditionSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConditionSpec;
    static deserializeBinaryFromReader(message: ConditionSpec, reader: jspb.BinaryReader): ConditionSpec;
}

export namespace ConditionSpec {
    export type AsObject = {
        funcName: string,
        inputSpecsList: Array<DefinitionSpec.AsObject>,
        outputSpec?: OutputSpec.AsObject,
    }
}

export class ConsiderationSpec extends jspb.Message { 
    getFuncName(): string;
    setFuncName(value: string): ConsiderationSpec;
    getResponsibleParty(): PartyType;
    setResponsibleParty(value: PartyType): ConsiderationSpec;
    clearInputSpecsList(): void;
    getInputSpecsList(): Array<DefinitionSpec>;
    setInputSpecsList(value: Array<DefinitionSpec>): ConsiderationSpec;
    addInputSpecs(value?: DefinitionSpec, index?: number): DefinitionSpec;

    hasOutputSpec(): boolean;
    clearOutputSpec(): void;
    getOutputSpec(): OutputSpec | undefined;
    setOutputSpec(value?: OutputSpec): ConsiderationSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsiderationSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ConsiderationSpec): ConsiderationSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsiderationSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsiderationSpec;
    static deserializeBinaryFromReader(message: ConsiderationSpec, reader: jspb.BinaryReader): ConsiderationSpec;
}

export namespace ConsiderationSpec {
    export type AsObject = {
        funcName: string,
        responsibleParty: PartyType,
        inputSpecsList: Array<DefinitionSpec.AsObject>,
        outputSpec?: OutputSpec.AsObject,
    }
}

export class OutputSpec extends jspb.Message { 

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): DefinitionSpec | undefined;
    setSpec(value?: DefinitionSpec): OutputSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputSpec.AsObject;
    static toObject(includeInstance: boolean, msg: OutputSpec): OutputSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputSpec;
    static deserializeBinaryFromReader(message: OutputSpec, reader: jspb.BinaryReader): OutputSpec;
}

export namespace OutputSpec {
    export type AsObject = {
        spec?: DefinitionSpec.AsObject,
    }
}

export enum DefinitionSpecType {
    DEFINITION_SPEC_TYPE_UNKNOWN = 0,
    DEFINITION_SPEC_TYPE_PROPOSED = 1,
    DEFINITION_SPEC_TYPE_FACT = 2,
    DEFINITION_SPEC_TYPE_FACT_LIST = 3,
}

export enum PublicKeyCurve {
    SECP256K1 = 0,
    P256 = 1,
}

export enum PublicKeyType {
    ELLIPTIC = 0,
}

export enum ExecutionResultType {
    RESULT_TYPE_UNKNOWN = 0,
    RESULT_TYPE_PASS = 1,
    RESULT_TYPE_SKIP = 2,
    RESULT_TYPE_FAIL = 3,
}

export enum PartyType {
    PARTY_TYPE_UNKNOWN = 0,
    PARTY_TYPE_ORIGINATOR = 1,
    PARTY_TYPE_SERVICER = 2,
    PARTY_TYPE_INVESTOR = 3,
    PARTY_TYPE_CUSTODIAN = 4,
    PARTY_TYPE_OWNER = 5,
    PARTY_TYPE_AFFILIATE = 6,
    PARTY_TYPE_OMNIBUS = 7,
    PARTY_TYPE_PROVENANCE = 8,
    PARTY_TYPE_MARKER = 9,
    PARTY_TYPE_CONTROLLER = 10,
    PARTY_TYPE_VALIDATOR = 11,
}
