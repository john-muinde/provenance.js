import { Message, ITxClient } from '../../client';
import { IProvider } from '../../providers/IProvider';
import { NameRecord } from '../../types';
import { IQueryClient } from '../../proto/provenance/name/v1/query_grpc_pb';
export declare class NameModule {
    constructor(provider: IProvider, txClient: ITxClient);
    lookupNamesForAddress(addr: string): Promise<string[]>;
    resolveName(name: string): Promise<string>;
    bindName(name: string | NameRecord, parent: string | NameRecord, addr?: string): Message;
    deleteName(name: string | NameRecord, addr?: string): Message;
    bindNamePath(namePath: string, owner: string): Promise<Message>;
    deleteNamePath(namePath: string, numElems: number, addr: string): Message;
    protected readonly provider: IProvider;
    protected readonly txClient: ITxClient;
    protected readonly queryClient: IQueryClient;
}
