const bcrypt = require('bcrypt');

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

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;

    next();
  });
});

userSchema.method('comparePassword', function (password) {
  return bcrypt.compare(password, this.password);
});

const User = model('User', userSchema);

module.exports = User;
