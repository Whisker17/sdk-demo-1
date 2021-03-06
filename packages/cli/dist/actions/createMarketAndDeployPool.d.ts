declare type Options = {
    endpoint: string;
    slug: string;
    description: string;
    oracle: string;
    period: string;
    categories?: string[];
    question: string;
    advised: boolean;
    seed: string;
    timestamp: boolean;
    authorized: string;
    court: boolean;
    amounts: string;
    baseAssetAmount: string;
    weights: string;
    keep: string;
};
declare const createMarketAndDeployPool: (opts: Options) => Promise<void>;
export default createMarketAndDeployPool;
