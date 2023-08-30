const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
  },
  username: {
    type: String,
    required: true,
    minLength: 5,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9]+$/.test(value);
      },
      message: 'Username must be only in latin letters and numbers!',
    },
  },
  password: {
    type: String,
    required: true,
    minLength: [8, 'Username should be at least 8 characters!'],
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9]+$/.test(value);
      },
      message: 'Password must be only in latin letters and numbers!',
    },
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

const User = mongoose.model('User', userSchema);

module.exports = User;
