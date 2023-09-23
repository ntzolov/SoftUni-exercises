const {
  Schema,
  Types: { ObjectId },
  model,
} = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, 'All fields required!'],
    minLength: [3, 'Username must be at least 3 characters long'],
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'All fields required!'],
    minLength: [3, 'Password must be at least 3 characters long'],
  },
  characters: [{ type: ObjectId, ref: 'Character' }],
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = model('User', userSchema);

module.exports = User;
