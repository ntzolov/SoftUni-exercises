const router = require('express').Router();
const creaturesService = require('../services/creaturesService');
const { errorHandler } = require('../utils/errorHandler');

router.get('/', async (req, res) => {
  try {
    const creatures = await creaturesService.getAllCreaturesByOwner(req.user._id);
    // const votes = creature.votes.length;
    // const emails = creature.votes.map((x) => x.email).join(', ');
    res.render('profile', { title: 'Profile', creatures });
  } catch (error) {
    res.render('profile', { title: 'Profile', error: errorHandler(error) });
  }
});

module.exports = router;
