import Ajv from 'ajv';
import { Contract, MessageDefinitions, ProvenanceClient } from './';
import { CodeAccessConfig, Coin, TxResponse } from '../types';
import { Key } from '../wallet/Key';
export type Contractish = Contract | any;
export declare class ContractFactory {
    constructor(bytecode: Buffer, schemas: any[] | string[], signer?: Key, msgDefs?: MessageDefinitions, client?: ProvenanceClient);
    attach(addr: string): Promise<Contractish>;
    attachByName(name: string): Promise<Contractish>;
    connect(signer: Key): ContractFactory;
    deploy(label: string, args?: any, admin?: string, funds?: Coin[], access?: CodeAccessConfig): Promise<Contractish>;
    deployFromCodeId(label: string, codeId: number, args?: any, admin?: string, funds?: Coin[]): Promise<Contractish>;
    store(access?: CodeAccessConfig): Promise<number>;
    protected static getLogAttribute(txRes: TxResponse, msgIdx: number, eventType: string, key: string): string;
    readonly bytecode: Buffer;
    readonly msgDefs: MessageDefinitions;
    readonly signer?: Key;
    protected readonly client: ProvenanceClient;
    protected readonly schemas: any[] | string[];
    protected readonly ajv: Ajv;
}
