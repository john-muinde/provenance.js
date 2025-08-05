import { Message, ITxClient } from '../../client';
import { IProvider } from '../../providers/IProvider';
import { Code, CodeAccessConfig, CodeInfo, Coin, ContractCodeHistoryEntry, ContractInfo, ContractModel } from '../../types';
import { IQueryClient } from '../../proto/cosmwasm/wasm/v1/query_grpc_pb';
export declare class WasmCore {
    constructor(provider: IProvider, txClient: ITxClient);
    /**
     * Gets contract info.
     * @param addr The address of the contract.
     * @returns The contract info for the specified contract.
     */
    contractInfo(addr: string): Promise<ContractInfo>;
    /**
     * Gets the history of a contract.
     * @param addr The address of the contract.
     * @returns The history of the specified contract.
     */
    contractHistory(addr: string): Promise<ContractCodeHistoryEntry[]>;
    /**
     * Gets all contract addresses using a WASM code id.
     * @param codeId The WASM code id.
     * @returns All contract addresses using the specified code id.
     */
    contractsByCode(codeId: number): Promise<string[]>;
    /**
     * Gets the state of a contract.
     * @param addr The address of the contraact.
     * @returns The state of the specified contract.
     */
    allContractStates(addr: string): Promise<ContractModel[]>;
    /**
     *
     * @param addr
     * @param query
     * @returns
     */
    rawContractState(addr: string, query: string | object | Buffer): Promise<string | Uint8Array>;
    /**
     *
     * @param addr
     * @param query
     * @returns
     */
    smartContractState(addr: string, query: string | object): Promise<any>;
    /**
     *
     * @param codeId
     * @returns
     */
    code(codeId: number): Promise<Code>;
    /**
     *
     * @returns
     */
    codes(): Promise<CodeInfo[]>;
    /**
     *
     * @param bytecode
     * @param sender
     * @param access
     * @returns
     */
    storeCode(bytecode: Buffer, sender: string, access?: CodeAccessConfig): Message;
    /**
     *
     * @param codeId
     * @param label
     * @param sender
     * @param args
     * @param admin
     * @param funds
     * @returns
     */
    instantiateContract(codeId: number, label: string, sender: string, args?: string | object, admin?: string, funds?: Coin[]): Message;
    /**
     *
     * @param addr
     * @param sender
     * @param args
     * @param admin
     * @param funds
     * @returns
     */
    executeContract(addr: string, sender: string, args?: string | object, admin?: string, funds?: Coin[]): Message;
    /**
     *
     * @param addr
     * @param codeId
     * @param sender
     * @param args
     * @returns
     */
    migrateContract(addr: string, codeId: number, sender: string, args?: string | object): Message;
    /**
     *
     * @param addr
     * @param newAdmin
     * @param sender
     * @returns
     */
    updateAdmin(addr: string, newAdmin: string, sender: string): Message;
    /**
     *
     * @param addr
     * @param sender
     * @returns
     */
    clearAdmin(addr: string, sender: string): Message;
    protected readonly provider: IProvider;
    protected readonly txClient: ITxClient;
    protected queryClient: IQueryClient;
}
