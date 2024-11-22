import { ChannelCredentials } from 'grpc';
import { Network } from '../types/Network';

export interface IProvider {

    readonly network: Network;
    readonly credentials: ChannelCredentials;

}
