const mongoose = require('mongoose');

const accessorySchema = {
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
};

const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;
