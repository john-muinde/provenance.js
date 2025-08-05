import { Message, ITxClient } from '../../client';
import { IProvider } from '../../providers/IProvider';
import { Attribute, AttributeType } from '../../types';
import { IQueryClient } from '../../proto/provenance/attribute/v1/query_grpc_pb';
type AttributeValue = string | Buffer | object;
export interface IAccountAttribute extends Attribute {
    get stringValue(): string;
    get jsonValue(): object;
}
export declare class AccountAttribute implements IAccountAttribute {
    constructor(attr: Attribute);
    get jsonValue(): object;
    get stringValue(): string;
    name: string;
    value: Uint8Array | string;
    attributeType: AttributeType;
    address: string;
}
export declare class AttributeModule {
    constructor(provider: IProvider, txClient: ITxClient);
    getAccountAttributesByName(addr: string, name: string): Promise<AccountAttribute[]>;
    getAllAccountAttributes(addr: string): Promise<AccountAttribute[]>;
    scanAccountAttributesByNameSuffix(addr: string, suffix: string): Promise<AccountAttribute[]>;
    addAttribute(addr: string, type: AttributeType, name: string, value: AttributeValue, owner: string): Message;
    deleteAttribute(addr: string, name: string, owner: string): Message;
    deleteDistinctAttribute(addr: string, name: string, value: AttributeValue, owner: string): Message;
    updateAttribute(addr: string, name: string, oldType: AttributeType, newType: AttributeType, oldValue: AttributeValue, newValue: AttributeValue, owner: string): Message;
    protected readonly provider: IProvider;
    protected readonly txClient: ITxClient;
    protected readonly queryClient: IQueryClient;
}
export {};
