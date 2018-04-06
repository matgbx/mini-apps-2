const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  first: String,
  last: String,
  email: String,
  password: String,
  addressDetails: {
    lineOne: String,
    lineTwo: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
  },
  paymentDetails: {
    name: String,
    cardNumber: String,
    expiryDate: String,
    cvv: String,
  },
});

const UserData = mongoose.model('users', userSchema);


mongoose.connect('mongodb://localhost/checkout');

