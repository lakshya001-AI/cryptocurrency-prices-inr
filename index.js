process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import fetch from "node-fetch";

getCryptoPrice("BTC");
export async function getCryptoPrice(currency){
    let response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=INR`);
    let data = await response.json();
    return data.INR;
}

