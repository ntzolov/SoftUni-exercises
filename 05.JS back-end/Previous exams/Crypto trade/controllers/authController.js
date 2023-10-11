const { isAuth } = require('../middlewares/authMiddleware');
const authService = require('../services/authService');
const { errorHandler } = require('../utils/errorHandler');

const router = require('express').Router();

router.get('/register', (req, res) => {
  res.render('auth/register');
});

router.post('/register', async (req, res) => {
  const { username, email, password, rePassword } = req.body;
  try {
    await authService.register(username, email, password, rePassword);

    res.redirect('/auth/login');
  } catch (error) {
    res.status(404).render('auth/register', { error: errorHandler(error) });
  }
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await authService.login(email, password);

    res.cookie('auth', token);
    res.redirect('/');
  } catch (error) {
    res.status(404).render('auth/login', { error: errorHandler(error) });
  }
});

router.get('/logout', isAuth, (req, res) => {
  res.clearCookie('auth');
  res.redirect('/');
});

module.exports = router;
