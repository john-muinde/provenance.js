import { Message, ITxClient } from '../../client';
import { IProvider } from '../../providers/IProvider';
import { Coin, DenomMetadata, MultiSendInput, MultiSendOutput } from '../../types';
import { IQueryClient } from '../../proto/cosmos/bank/v1beta1/query_grpc_pb';
export declare class BankCore {
    constructor(provider: IProvider, txClient: ITxClient);
    /**
     * Get the balance of a denom in an account.
     * @param addr The account address to query.
     * @param denom The denom to query on the account.
     * @returns The account balance of the specified address for the specified denom.
     */
    balance(addr: string, denom: string): Promise<Coin>;
    /**
     * Get balances for all denoms held by an account.
     * @param addr The account address to query.
     * @returns All account balances for the specified address.
     */
    allBalances(addr: string): Promise<Coin[]>;
    /**
     * Get the total supply of coins on the chain.
     * @returns The total supply of coins on the chain.
     */
    totalSupply(): Promise<Coin[]>;
    /**
     * Get the total supply for a denom.
     * @param denom The denom to query.
     * @returns The total supply of the specified denom.
     */
    supplyOf(denom: string): Promise<Coin>;
    /**
     * Get the metadata for a denom.
     * @param denom The denom to query.
     * @returns The denom metadata.
     */
    denomMetadata(denom: string): Promise<DenomMetadata>;
    /**
     * Get the metadata for all denoms.
     * @returns The metadata for all denoms.
     */
    denomsMetadata(): Promise<DenomMetadata[]>;
    /**
     * Send coin(s) from one account to another.
     * @param from The address of the account sending the coin.
     * @param to The address of the account to send the coin to.
     * @param amount The coins and balances to send.
     * @returns The provenance transaction message.
     */
    send(from: string, to: string, amount: Coin | Coin[]): Message;
    /**
     * Send coin(s) from multiple accounts to multiple accounts.
     * @param inputs The address/coins to send from.
     * @param outputs The address/coins to send to.
     * @returns The provenance transaction message.
     */
    multiSend(inputs: MultiSendInput[], outputs: MultiSendOutput[]): Message;
    protected readonly provider: IProvider;
    protected readonly txClient: ITxClient;
    protected queryClient: IQueryClient;
}
