const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 150,
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
  accessories: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Accessory',
    },
  ],
});

const Cube = mongoose.model('Cube', cubeSchema);
module.exports = Cube;
