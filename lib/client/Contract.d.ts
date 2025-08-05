import Ajv from 'ajv';
import { Key, ProvenanceClient } from '../';
export interface MessageDefinitions {
    instantiate: string;
    execute: string;
    migrate: string;
    query: string;
}
export declare const DEFAULT_MESSAGE_DEFINITIONS: MessageDefinitions;
export declare class Contract {
    constructor(addr: string, ajv: Ajv, msgDefs?: MessageDefinitions, client?: ProvenanceClient, signer?: Key, admin?: Key);
    connect(signer: Key, admin?: Key): Contract;
    private generateExecuteFunctions;
    private generateMigrateFunctions;
    private generateQueryFunctions;
    readonly address: string;
    readonly signer: Key;
    readonly admin: Key;
    protected readonly client: ProvenanceClient;
    protected readonly ajv: Ajv;
    protected readonly msgDefs: MessageDefinitions;
}
