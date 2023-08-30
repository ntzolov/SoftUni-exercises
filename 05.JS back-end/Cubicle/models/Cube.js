const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
    minLength: [5, 'Name should be at least 5 characters!'],
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9 ]+$/.test(value);
      },
      message: 'Name must be only in latin letters, numbers and spaces!',
    },
  },
  description: {
    type: String,
    required: true,
    minLength: [20, 'Description should be at least 20 characters!'],
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9 ]+$/.test(value);
      },
      message: 'Description must be only in latin letters, numbers and spaces!',
    },
  },
  imageUrl: {
    type: String,
    required: true,
    match: [/^https?:\/\//, 'URL is not valid!'],
  },
  difficultyLevel: {
    type: Number,
    required: true,
    min: 1,
    max: 6,
  },
  creatorId: {
    type: String,
    required: true,
  },
  accessories: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Accessory',
    },
  ],
});

const Cube = mongoose.model('Cube', cubeSchema);
module.exports = Cube;
