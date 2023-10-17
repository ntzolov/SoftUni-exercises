const router = require('express').Router();
const bookService = require('../services/bookService');

router.get('/profile', async (req, res) => {
  const userId = req.user._id;
  try {
    const books = await bookService.getAllWishedBooks(userId);
    res.render('user/profile', { title: 'Profile', books });
  } catch (error) {
    res.redirect('404');
  }
});

module.exports = router;
