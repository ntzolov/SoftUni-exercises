const { getFirstTreeAds } = require('../services/adService');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const ads = await getFirstTreeAds();
    res.render('home/home', { title: 'Home Page', ads });
  } catch (error) {
    res.redirect('/');
  }
});

module.exports = router;
