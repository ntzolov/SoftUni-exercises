const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('catalog');
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res) => {
  const { name, imageUrl, price, description, paymentMethod } = req.body;
  const userId = req.user?._id;
});

module.exports = router;
