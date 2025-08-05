import { ITxClient } from '../../client';
import { IProvider } from '../../providers/IProvider';
import { IQueryClient } from '../../proto/provenance/metadata/v1/query_grpc_pb';
export declare class MetadataModule {
    constructor(provider: IProvider, txClient: ITxClient);
    protected readonly provider: IProvider;
    protected readonly txClient: ITxClient;
    protected readonly queryClient: IQueryClient;
}
