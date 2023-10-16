const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required!'],
    minLength: [4, 'Name should be at least 4 characters long!'],
  },
  image: {
    type: String,
    required: [true, 'Image is required!'],
    match: [/^https?:\/\//, 'URL is not valid!'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required!'],
    min: [0, 'Price must be a positive number!'],
  },
  description: {
    type: String,
    required: [true, 'Description is required!'],
    minLength: [10, 'Description should be at least 10 characters long!'],
  },
  genre: {
    type: String,
    required: [true, 'Genre is required!'],
    minLength: [2, 'Genre should be at least 2 characters long!'],
  },
  platform: {
    type: String,
    required: [true, 'Platform is required!'],
    enum: {
      values: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
      message: 'Invalid value!',
    },
  },
  boughtBy: [
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

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
