const jwt = require('jsonwebtoken');
const secret = 'JWTSECRET';

function authConfirmation(req, res, next) {
  const token = req.cookies['auth'];

  if (token) {
    try {
      const decodedToken = jwt.verify(token, secret);

      req.user = decodedToken;
      req.isAuthenticated = true;

      res.locals.username = decodedToken.username;
      res.locals.isAuthenticated = true;
    } catch (error) {
      console.log(error.message);

      res.clearCookie('auth');
      res.redirect('/404');
    }
  }

  next();
}

function isAuthenticated(req, res, next) {
  if (!req.isAuthenticated) {
    res.redirect('/login');
  }

  next();
}

module.exports = {
  authConfirmation,
  isAuthenticated,
};
