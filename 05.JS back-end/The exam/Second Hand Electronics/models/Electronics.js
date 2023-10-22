const mongoose = require('mongoose');

const electronicsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required!'],
    minLength: [10, 'Name should be at least 10 characters long!'],
  },
  type: {
    type: String,
    required: [true, 'Type is required!'],
    minLength: [2, 'Type should be at least 2 characters long!'],
  },
  damages: {
    type: String,
    required: [true, 'Damages is required!'],
    minLength: [10, 'Damages should be at least 10 characters long!'],
  },
  image: {
    type: String,
    required: [true, 'Image is required!'],
    match: [/^https?:\/\//, 'URL is not valid!'],
  },
  type: {
    type: String,
    required: [true, 'Type is required!'],
  },
  description: {
    type: String,
    required: [true, 'Description is required!'],
    minLength: [10, 'Description should be between 10 and 200 characters long!'],
    maxLength: [200, 'Description should be between 10 and 200 characters long!'],
  },
  production: {
    type: Number,
    required: [true, 'Production is required!'],
    min: [1900, 'Production year should be between 1900 and 2023!'],
    max: [2023, 'Production year should be between 1900 and 2023!'],
  },
  exploitation: {
    type: Number,
    required: [true, 'Exploitation is required!'],
    min: [0, 'Exploitation should be a positive number!'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required!'],
    min: [0, 'Price should be a positive number!'],
  },
  buyingList: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

const Electronics = mongoose.model('Electronics', electronicsSchema);

module.exports = Electronics;
