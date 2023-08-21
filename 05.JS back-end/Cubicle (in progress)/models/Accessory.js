const mongoose = require('mongoose');

const accessorySchema = {
  id: {
    type: mongoose.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
    match: [/^https?:\/\//, 'URL is not valid!'],
  },
  description: {
    type: String,
    required: true,
    maxLength: 150,
  },
};

const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;
