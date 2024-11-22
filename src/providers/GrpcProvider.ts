import { ChannelCredentials, credentials } from '@grpc/grpc-js';
import { Network } from '../types/Network';
import { IProvider } from "./IProvider";

export class GrpcProvider implements IProvider {

    constructor(network: Network, isSecure?: boolean) {
        this.network = network;
        this.credentials = (isSecure || false) ? credentials.createSsl() : credentials.createInsecure();
    }

    readonly network: Network;
    readonly credentials: ChannelCredentials;
}
