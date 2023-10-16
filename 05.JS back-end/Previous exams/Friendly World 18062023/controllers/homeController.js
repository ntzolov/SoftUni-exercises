const router = require('express').Router();
const animalsService = require('../services/animalsService');

router.get('/', async (req, res) => {
  try {
    const animals = await animalsService.getLastTreeAnimals();
    res.render('home/home', { title: 'Home Page', animals });
  } catch (error) {}
});

module.exports = router;
