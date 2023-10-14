const mongoose = require('mongoose');

const creatureSchema = {
  name: {
    type: String,
    required: [true, 'Name is Required!'],
    minLength: [2, 'Name should be at least 2 characters long!'],
  },
  species: {
    type: String,
    required: [true, 'Species is Required!'],
    minLength: [3, 'Species should be at least 3 characters long!'],
  },
  skinColor: {
    type: String,
    required: [true, 'Skin color is Required!'],
    minLength: [3, 'Skin color should be at least 3 characters long!'],
  },
  eyeColor: {
    type: String,
    required: [true, 'Eye color is Required!'],
    minLength: [3, 'Eye color should be at least 3 characters long!'],
  },
  image: {
    type: String,
    required: [true, 'Image is Required!'],
    match: [/^https?:\/\//, 'URL is not valid!'],
  },
  description: {
    type: String,
    required: [true, 'Description is Required!'],
    minLength: [5, 'Description should be at least 5 characters long!'],
  },
  votes: [
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

const Creature = mongoose.model('Creature', creatureSchema);

module.exports = Creature;
