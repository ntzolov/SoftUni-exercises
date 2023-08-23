const User = require('../models/User');
const jwt = require('jsonwebtoken');
const secret = 'JWTSECRET';

function getUsernameByUsername(username) {
  return User.findOne({ username });
}

async function login(password, username) {
  const user = await this.getUsernameByUsername(username);

  const isPasswordMatched = await user.comparePassword(password);

  if (!user || !isPasswordMatched) {
    throw new Error("Username or password doesn't match!");
  }

  const payload = { username: user.username, _id: user._id };
  const token = await jwt.sign(payload, secret, { expiresIn: '1h' });

  return token;
}

module.exports = {
  getUsernameByUsername,
  login,
};
