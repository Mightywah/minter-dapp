const fetch = require('node-fetch');

const url = 'https://api.nftport.xyz/v0/contracts/collections';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: '24c20d62-b9b1-4e08-8e48-cc05410eee74'
  },
  body: JSON.stringify({
    team_reserve: 0,
    chain: 'polygon',
    name: 'PixelLemurs',
    symbol: 'C',
    max_supply: 5000,
    mint_price: 7.6,
    tokens_per_mint: 10,
    owner_address: '0x2EDB44D9bcb976A94AFA68A0a55880f462132e33',
    treasury_address: '0x2EDB44D9bcb976A94AFA68A0a55880f462132e33',
    public_mint_start_date: '2023-01-26T11:30:45+00:00',
    metadata_updatable: false,
    royalties_share: 1000,
    royalties_address: '0x2EDB44D9bcb976A94AFA68A0a55880f462132e33'
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));