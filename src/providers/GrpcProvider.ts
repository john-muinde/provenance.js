import { ChannelCredentials, credentials } from '@grpc/grpc-js';
import { Network } from '../types/Network';
import { IProvider } from "./IProvider";

export class GrpcProvider implements IProvider {

    constructor(network: Network, isSecure?: boolean) {
        this.network = network;
        this.isSecure = isSecure || false;
        this.credentials = this.isSecure ? credentials.createSsl() : credentials.createInsecure();
    }
    
    generateCredentials(): ChannelCredentials {
        return (this.isSecure || false) ? credentials.createSsl() : credentials.createInsecure();
    }

    readonly network: Network;
    readonly isSecure: boolean;
    readonly credentials: ChannelCredentials;
}
