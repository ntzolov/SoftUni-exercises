const User = require('../models/User');
const authService = require('../services/authService');
const parseMongooseError = require('../utils/mongooseErrors');

function getRegisterPage(req, res) {
  res.render('register');
}

async function postRegisterPage(req, res, next) {
  const { username, password, repeatPassword } = req.body;

  if (password !== repeatPassword) {
    return res.render('register', { error: "Password doesn't match!" });
  }

  const isRegistered = await authService.getUsernameByUsername(username);

  if (isRegistered) {
    return res.render('register', { error: 'User already exist!' });
  }

  try {
    const user = new User({ username, password });
    await user.save();
  } catch (error) {
    const errorMessage = parseMongooseError(error)[0];
    return res.render('register', { error: errorMessage });
  }

  res.redirect('/login');
}

function getLoginPage(req, res) {
  res.render('login');
}

async function postLoginPage(req, res, next) {
  const { username, password } = req.body;

  try {
    const token = await authService.login(password, username);
    res.cookie('auth', token, { httpOnly: true });
  } catch (error) {
    return res.render('login', { error });
  }
  res.redirect('/');
}

function getLogoutPage(req, res) {
  res.clearCookie('auth');

  res.redirect('/');
}

module.exports = {
  getRegisterPage,
  postRegisterPage,
  getLoginPage,
  postLoginPage,
  getLogoutPage,
};
