import type { Enum, Option, Struct } from '@polkadot/types';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';
import type { Asset } from '@zeitgeistpm/types/dist/interfaces/index';
export interface Order extends Struct {
    readonly side: OrderSide;
    readonly maker: AccountId;
    readonly taker: Option<AccountId>;
    readonly asset: Asset;
    readonly total: Balance;
    readonly price: Balance;
    readonly filled: Balance;
}
export interface OrderSide extends Enum {
    readonly isBid: boolean;
    readonly isAsk: boolean;
    readonly type: 'Bid' | 'Ask';
}
export declare type PHANTOM_ORDERBOOK = 'orderbook';
