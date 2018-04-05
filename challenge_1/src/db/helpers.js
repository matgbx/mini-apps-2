const mongoose = require('mongoose');
const Currency = require('./schema');
const coinData = require('./data');

mongoose.connect('mongodb://localhost/cryptograph');

// const insert = (data, callback) => {
const insert = (data) => {
  Currency.create(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log('inserted ====>', result);
    // callback(result);
  });
};

const find = (query, cb) => {
  Currency.find(query, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

// insert(coinData);

module.exports.insert = insert;
module.exports.find = find;
