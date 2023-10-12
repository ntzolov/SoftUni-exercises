const mongoose = require('mongoose');

const cryptoSchema = {
  name: {
    type: String,
    minLength: [2, 'Name should be at least 2 characters long!'],
    required: [true, 'All fields are required!'],
  },
  imageUrl: {
    type: String,
    match: [/^https?:\/\//, 'URL is not valid!'],
    required: [true, 'All fields are required!'],
  },
  price: {
    type: Number,
    min: [0, 'Should use only positive numbers!'],
    required: [true, 'All fields are required!'],
  },
  description: {
    type: String,
    minLength: [10, 'Description should be at least 10 characters long!'],
    required: [true, 'All fields are required!'],
  },
  paymentMethod: {
    type: String,
    enum: {
      values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
      message: 'Invalid value!',
    },
    required: [true, 'All fields are required!'],
  },
  buyers: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
};

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;
