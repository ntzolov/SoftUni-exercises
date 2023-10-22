const router = require('express').Router();
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const catalogController = require('../controllers/catalogController');

router.use(homeController);
router.use('/auth', authController);
router.use('/catalog', catalogController);
router.use('*', (req, res) => {
  res.render('404');
});

module.exports = router;
