const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../virtualEnv');

exports.findUserByUsername = async (username) => await User.findOne({ username });
exports.findUserByEmail = async (email) => await User.findOne({ email });

exports.register = async (username, email, password, rePassword) => {
  if (password !== rePassword) {
    throw new Error('Password mismatch!');
  }

  const userExist = await this.findUserByUsername(username);
  if (userExist) {
    throw new Error('User already exist!');
  }

  if (!password) {
    throw new Error('Password is required!');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ username, email, password: hashedPassword });
};

exports.login = async (email, password) => {
  const user = await this.findUserByEmail(email);

  if (!user) {
    throw new Error('Invalid username or password!');
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error('Invalid username or password!');
  }

  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };

  const token = await jwt.sign(payload, SECRET);
  return token;
};
