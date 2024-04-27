# cryptocurrency-prices-INR

## Introduction:
cryptocurrency-prices-INR is a Node.js package that allows you to easily retrieve the price of cryptocurrencies in Indian Rupees (INR). It provides a simple interface to fetch cryptocurrency prices and integrate them into your Node.js projects.

## Usage:
After installing the package, you can use the following code snippet to fetch the price of a cryptocurrency in INR:

import { getCryptoPrice } from "cryptocurrency-prices-inr/index.js";

getCryptoPrice("ETH").then(res => {
    console.log(res);
});

## Modify Package.json File:

For this code to work, please ensure that your package.json file includes the "type" field set to "module", like so:

{
  "type": "module"
}

## Cryptocurrency Symbols:

Bitcoin (BTC)
Ethereum (ETH)
Ripple (XRP)
Bitcoin Cash (BCH)
Litecoin (LTC)
Cardano (ADA)
Polkadot (DOT)
Stellar (XLM)
Chainlink (LINK)
Binance Coin (BNB)
Tether (USDT)
Bitcoin SV (BSV)
Monero (XMR)
EOS (EOS)
Tron (TRX)
Tezos (XTZ)
VeChain (VET)
Cosmos (ATOM)
Crypto.com Coin (CRO)
NEO (NEO)

Above are the Cryptocurrency Symbols that you can use to get the price in INR