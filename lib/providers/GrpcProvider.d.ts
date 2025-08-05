import { ChannelCredentials, ClientOptions } from '@grpc/grpc-js';
import { Network } from '../types/Network';
import { IProvider } from "./IProvider";
export declare class GrpcProvider implements IProvider {
    constructor(network: Network, isSecure?: boolean, options?: Partial<ClientOptions>);
    readonly network: Network;
    readonly isSecure: boolean;
    readonly credentials: ChannelCredentials;
    readonly options?: Partial<ClientOptions>;
}
