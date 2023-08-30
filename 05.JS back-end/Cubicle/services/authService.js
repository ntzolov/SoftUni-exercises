const User = require('../models/User');
const jwt = require('jsonwebtoken');
const secret = 'JWTSECRET';

async function getUsernameByUsername(username) {
  return await User.findOne({ username });
}

async function login(password, username) {
  const user = await this.getUsernameByUsername(username);

  if (!user) {
    throw 'Invalid username!';
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    throw 'Invalid password!';
  }

  const payload = { username: user.username, _id: user._id };
  const token = await jwt.sign(payload, secret, { expiresIn: '1h' });

  return token;
}

module.exports = {
  getUsernameByUsername,
  login,
};
