const mongoose = require('mongoose');

const currencySchema = mongoose.Schema({
  index: { type: Number, unique: true },
  name: String,
});

const Currency = mongoose.model('currencies', currencySchema);

module.exports = Currency;
