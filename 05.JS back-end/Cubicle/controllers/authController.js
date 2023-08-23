const User = require('../models/User');
const authService = require('../services/authService');

function getRegisterPage(req, res) {
  res.render('register');
}

function postRegisterPage(req, res) {
  const { username, password, repeatPassword } = req.body;

  if (password !== repeatPassword) {
    return res.redirect('/404');
  }

  const isRegistered = authService.getUsernameByUsername(username);

  if (isRegistered) {
    return res.redirect('/404');
  }

  const user = new User({ username, password });
  user.save();

  res.redirect('/login');
}

function getLoginPage(req, res) {
  res.render('login');
}

async function postLoginPage(req, res) {
  const { username, password } = req.body;

  try {
    const token = await authService.login(password, username);

    res.cookie('auth', token, { httpOnly: true });
    res.redirect('/');
  } catch (error) {
    res.redirect('/404');
  }
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
