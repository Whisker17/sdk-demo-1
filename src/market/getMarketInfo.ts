// import SDK from "@zeitgeistpm/sdk";
import SDK from "../../tools/packages/sdk/dist";
async function main() {
  // Initialise the provider to connect to the local node
  // wss://bsr.zeitgeist.pm
  // wss://bp-rpc.zeitgeist.pm
  const ZTGNET = "wss://bsr.zeitgeist.pm";

  const sdk = await SDK.initialize(ZTGNET);
  const marketId: number = 1;

  const res = await sdk.models.fetchMarketData(marketId);
  console.log(res.toJSONString());
  const res2 = await sdk.models.getMarketCount();

  console.log(res2);
}

main()
  .catch(console.error)
  .finally(() => process.exit());
