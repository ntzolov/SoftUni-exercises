const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required!'],
    match: [/^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/gm, 'Email is not valid!'],
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    minLength: [5, 'Password should be at least 5 characters long!'],
  },
  skills: {
    type: String,
    required: [true, 'Skills is required!'],
    maxLength: [40, 'Skills should be maximum 40 characters long!'],
  },
  myAds: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Ad',
    },
  ],
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
