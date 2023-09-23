const User = require('../models/User');
const { mongoErrorHandler } = require('../utils/mongoErrorHandler');

const router = require('express').Router();

router.post('/register', async (req, res) => {
  try {
    const { username, password, rePassword } = req.body;

    if (!username || !password || !rePassword) {
      return res.status(406).json({ message: 'All fields are required!' });
    }

    if (password !== rePassword) {
      return res.status(406).json({ message: "Password doesn't match!" });
    }

    const isDuplicateUser = await User.findOne({ username }).lean();

    if (isDuplicateUser) {
      return res.status(406).json({ message: 'User already exist!' });
    }

    const user = await User.create({ username, password });
    return res.status(200).json(user);
  } catch (error) {
    res.status(406).json({ message: mongoErrorHandler(error) });
  }
});

router.post('/login', (req, res) => {});

router.get('/logout', (req, res) => {});

module.exports = router;
