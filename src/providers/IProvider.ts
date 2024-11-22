import { ChannelCredentials } from '@grpc/grpc-js';
import { Network } from '../types/Network';

export interface IProvider {

    readonly network: Network;
    readonly isSecure: boolean;
    readonly credentials: ChannelCredentials;
}
