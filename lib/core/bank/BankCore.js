"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankCore = void 0;
var client_1 = require("../../client");
var query_grpc_pb_1 = require("../../proto/cosmos/bank/v1beta1/query_grpc_pb");
var cosmos_bank_v1beta1_bank_pb = require("../../proto/cosmos/bank/v1beta1/bank_pb");
var cosmos_bank_v1beta1_query_pb = require("../../proto/cosmos/bank/v1beta1/query_pb");
var cosmos_bank_v1beta1_tx_pb = require("../../proto/cosmos/bank/v1beta1/tx_pb");
var cosmos_base_v1beta1_coin_pb = require("../../proto/cosmos/base/v1beta1/coin_pb");
var BankCore = /** @class */ (function () {
    function BankCore(provider, txClient) {
        this.provider = provider;
        this.txClient = txClient;
        this.queryClient = new query_grpc_pb_1.QueryClient(this.provider.network.uri.toString(), provider.credentials, this.provider.options);
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Query
    //----------------------------------------------------------------------------------------------------------------------------------------------
    /**
     * Get the balance of a denom in an account.
     * @param addr The account address to query.
     * @param denom The denom to query on the account.
     * @returns The account balance of the specified address for the specified denom.
     */
    BankCore.prototype.balance = function (addr, denom) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmos_bank_v1beta1_query_pb.QueryBalanceRequest())
                .setAddress(addr)
                .setDenom(denom);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.balance(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(res.getBalance().toObject());
                }
            });
        });
    };
    /**
     * Get balances for all denoms held by an account.
     * @param addr The account address to query.
     * @returns All account balances for the specified address.
     */
    BankCore.prototype.allBalances = function (addr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmos_bank_v1beta1_query_pb.QueryAllBalancesRequest())
                .setAddress(addr);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.allBalances(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var balanceList = [];
                    res.getBalancesList().forEach(function (balance) {
                        balanceList.push(balance.toObject());
                    });
                    resolve(balanceList);
                }
            });
        });
    };
    /**
     * Get the total supply of coins on the chain.
     * @returns The total supply of coins on the chain.
     */
    BankCore.prototype.totalSupply = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmos_bank_v1beta1_query_pb.QueryTotalSupplyRequest());
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.totalSupply(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var supplyList = [];
                    res.getSupplyList().forEach(function (supply) {
                        supplyList.push(supply.toObject());
                    });
                    resolve(supplyList);
                }
            });
        });
    };
    /**
     * Get the total supply for a denom.
     * @param denom The denom to query.
     * @returns The total supply of the specified denom.
     */
    BankCore.prototype.supplyOf = function (denom) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmos_bank_v1beta1_query_pb.QuerySupplyOfRequest())
                .setDenom(denom);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.supplyOf(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(res.getAmount().toObject());
                }
            });
        });
    };
    /**
     * Get the metadata for a denom.
     * @param denom The denom to query.
     * @returns The denom metadata.
     */
    BankCore.prototype.denomMetadata = function (denom) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmos_bank_v1beta1_query_pb.QueryDenomMetadataRequest())
                .setDenom(denom);
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.denomMetadata(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    resolve(res.getMetadata().toObject());
                }
            });
        });
    };
    /**
     * Get the metadata for all denoms.
     * @returns The metadata for all denoms.
     */
    BankCore.prototype.denomsMetadata = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = (new cosmos_bank_v1beta1_query_pb.QueryDenomsMetadataRequest());
            // TODO: Move GRPC unary call to the provider
            _this.queryClient.denomsMetadata(req, function (err, res) {
                if (err != null) {
                    reject(err);
                }
                else {
                    var metadataList = [];
                    res.getMetadatasList().forEach(function (metadata) {
                        metadataList.push(metadata.toObject());
                    });
                    resolve(metadataList);
                }
            });
        });
    };
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // TX
    //----------------------------------------------------------------------------------------------------------------------------------------------
    /**
     * Send coin(s) from one account to another.
     * @param from The address of the account sending the coin.
     * @param to The address of the account to send the coin to.
     * @param amount The coins and balances to send.
     * @returns The provenance transaction message.
     */
    BankCore.prototype.send = function (from, to, amount) {
        if (amount.constructor.name !== 'Array') {
            amount = [amount];
        }
        var amounts = [];
        amount.forEach(function (amount) {
            amounts.push((new cosmos_base_v1beta1_coin_pb.Coin)
                .setAmount(amount.amount)
                .setDenom(amount.denom));
        });
        var req = (new cosmos_bank_v1beta1_tx_pb.MsgSend())
            .setFromAddress(from)
            .setToAddress(to)
            .setAmountList(amounts);
        return new client_1.Message([req], this.txClient);
    };
    /**
     * Send coin(s) from multiple accounts to multiple accounts.
     * @param inputs The address/coins to send from.
     * @param outputs The address/coins to send to.
     * @returns The provenance transaction message.
     */
    BankCore.prototype.multiSend = function (inputs, outputs) {
        var inputList = [];
        inputs.forEach(function (input) {
            var coins = [];
            input.coinsList.forEach(function (coin) {
                coins.push((new cosmos_base_v1beta1_coin_pb.Coin())
                    .setAmount(coin.amount)
                    .setDenom(coin.denom));
            });
            inputList.push((new cosmos_bank_v1beta1_bank_pb.Input())
                .setAddress(input.address)
                .setCoinsList(coins));
        });
        var outputList = [];
        outputs.forEach(function (output) {
            var coins = [];
            output.coinsList.forEach(function (coin) {
                coins.push((new cosmos_base_v1beta1_coin_pb.Coin())
                    .setAmount(coin.amount)
                    .setDenom(coin.denom));
            });
            outputList.push((new cosmos_bank_v1beta1_bank_pb.Output())
                .setAddress(output.address)
                .setCoinsList(coins));
        });
        var req = (new cosmos_bank_v1beta1_tx_pb.MsgMultiSend())
            .setInputsList(inputList)
            .setOutputsList(outputList);
        return new client_1.Message([req], this.txClient);
    };
    return BankCore;
}());
exports.BankCore = BankCore;
