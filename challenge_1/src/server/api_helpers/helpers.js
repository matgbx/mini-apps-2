require('dotenv').config();
const https = require('https');

const COIN_KEY = process.env.COIN_API_KEY;

const options = {
  method: 'GET',
  hostname: 'rest.coinapi.io',
  path: '/v1/exchanges',
  headers: { 'X-CoinAPI-Key': COIN_KEY },
};

const request = https.request(options, (response) => {
  const chunks = [];
  response.on('data', (chunk) => {
    chunks.push(chunk);
  });
});

request.end();
