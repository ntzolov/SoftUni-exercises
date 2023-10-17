const { isAuth } = require('../middlewares/authMiddleware');
const authService = require('../services/authService');
const { errorHandler } = require('../utils/errorHandler');

const router = require('express').Router();

router.get('/register', (req, res) => {
  res.render('auth/register', { title: 'Register' });
});

router.post('/register', async (req, res) => {
  const { email, password, rePassword } = req.body;
  try {
    const token = await authService.register(email, password, rePassword);

    res.cookie('auth', token);
    res.redirect('/');
  } catch (error) {
    res.status(404).render('auth/register', { error: errorHandler(error), body: { email, password, rePassword } });
  }
});

router.get('/login', (req, res) => {
  res.render('auth/login', { title: 'Login' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await authService.login(email, password);

    res.cookie('auth', token);
    res.redirect('/');
  } catch (error) {
    console.log(email, password);
    res.status(404).render('auth/login', { error: errorHandler(error), body: { email, password } });
  }
});

router.get('/logout', isAuth, (req, res) => {
  res.clearCookie('auth');
  res.redirect('/');
});

module.exports = router;