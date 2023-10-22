const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required!'],
    minLength: [10, 'Email should be at least 10 characters long!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    minLength: [3, 'Username should be at least 3 characters long!'],
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

userSchema.method('comparePassword', async function (password) {
  return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
