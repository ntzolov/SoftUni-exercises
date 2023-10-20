const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: [true, 'Headline is required!'],
    minLength: [4, 'Headline must be at least 4 characters long!'],
  },
  location: {
    type: String,
    required: [true, 'Location is required!'],
    minLength: [8, 'Location must be at least 8 characters long!'],
  },
  companyName: {
    type: String,
    required: [true, 'Company name is required!'],
    minLength: [3, 'Company name must be at least 3 characters long!'],
  },
  companyDescription: {
    type: String,
    required: [true, 'Company description is required!'],
    maxLength: [40, 'Company description must be maximum 40 characters long!'],
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  usersApplied: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;
