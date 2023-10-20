const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    minLength: [5, 'Username should be at least 5 characters long!'],
    required: [true, 'Username is required!'],
    unique: [true, 'test'],
  },
  email: {
    type: String,
    minLength: [10, 'Email should be at least 10 characters long!'],
    required: [true, 'Email is required!'],
  },
  password: {
    type: String,
    minLength: [4, 'Password should be at least 4 characters long!'],
    required: [true, 'Password is required!'],
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
