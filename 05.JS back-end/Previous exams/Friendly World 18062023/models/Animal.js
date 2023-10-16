const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required!'],
    minLength: [2, 'Name should be at least 2 characters long!'],
  },
  years: {
    type: Number,
    required: [true, 'Years is required!'],
    min: [0, 'Years should be between 0 and 100!'],
    max: [100, 'Years should be between 0 and 100!'],
  },
  kind: {
    type: String,
    required: [true, 'Kind is required!'],
    minLength: [3, 'Kind should be at least 3 characters long!'],
  },
  image: {
    type: String,
    required: [true, 'Image is required!'],
    match: [/^https?:\/\//, 'URL is not valid!'],
  },
  need: {
    type: String,
    required: [true, 'Need is required!'],
    minLength: [3, 'Need should be between 3 and 20!'],
    maxLength: [20, 'Need should be between 3 and 20!'],
  },
  location: {
    type: String,
    required: [true, 'Location is required!'],
    minLength: [5, 'Location should be between 5 and 15!'],
    maxLength: [15, 'Location should be between 5 and 15!'],
  },
  description: {
    type: String,
    required: [true, 'Description is required!'],
    minLength: [5, 'Description should be between 5 and 50!'],
    maxLength: [50, 'Description should be between 5 and 50!'],
  },
  donations: [
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

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
