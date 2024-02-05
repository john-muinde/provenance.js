import { AuthCore, BankCore, WasmCore } from "../core";
import { AttributeModule, MarkerModule, MetadataModule, MsgFeesModule, NameModule } from "../modules";

export interface IQueryClient {
    // core modules
    auth: AuthCore;
    bank: BankCore;
    wasm: WasmCore;

    // provenance modules
    attribute: AttributeModule;
    marker: MarkerModule;
    metadata: MetadataModule;
    name: NameModule;
    msgFees: MsgFeesModule
}
