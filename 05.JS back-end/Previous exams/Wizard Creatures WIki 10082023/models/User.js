const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required!'],
    minLength: [3, 'First name should be at least 3 characters long!'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required!'],
    minLength: [3, 'Last name should be at least 3 characters long!'],
  },
  email: {
    type: String,
    required: [true, 'Email is required!'],
    minLength: [10, 'Email should be at least 10 characters long!'],
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    minLength: [4, 'Password should be at least 4 characters long!'],
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
