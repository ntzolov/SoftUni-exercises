const router = require('express').Router();
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const catalogController = require('../controllers/catalogController');
const profileController = require('../controllers/profileController');

router.use(homeController);
router.use('/profile', profileController);
router.use('/auth', authController);
router.use('/catalog', catalogController);
router.use('*', (req, res) => {
  res.render('home/404');
});

module.exports = router;
