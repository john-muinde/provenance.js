import { ITxClient } from '../../client';
import { BaseAccount, MarkerAccount } from '../../types';
import { IProvider } from '../../providers/IProvider';
import { IQueryClient } from '../../proto/cosmos/auth/v1beta1/query_grpc_pb';
export declare class AuthCore {
    constructor(provider: IProvider, txClient: ITxClient);
    static getBaseAccount(provider: IProvider, addr: string): Promise<BaseAccount>;
    static getMarkerAccount(provider: IProvider, addr: string): Promise<MarkerAccount>;
    getBaseAccount(addr: string): Promise<BaseAccount>;
    getMarkerAccount(addr: string): Promise<MarkerAccount>;
    protected readonly provider: IProvider;
    protected readonly txClient: ITxClient;
    protected queryClient: IQueryClient;
}
