const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home/home');
});

module.exports = router;
