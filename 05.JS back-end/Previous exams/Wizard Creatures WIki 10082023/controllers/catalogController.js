const { errorHandler } = require('../utils/errorHandler');
const creaturesService = require('../services/creaturesService');
const { isAuth } = require('../middlewares/authMiddleware');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const creatures = await creaturesService.getAllCreatures();
    res.render('creatures/catalog', { title: 'Catalog', creatures });
  } catch (error) {
    res.status(400).render('creatures/catalog', { error: errorHandler(error) });
  }
});

router.get('/create', isAuth, (req, res) => {
  res.render('creatures/create', { title: 'Create creature' });
});

router.post('/create', isAuth, async (req, res) => {
  try {
    const userId = req.user._id;
    await creaturesService.createCreature(req.body, userId);

    res.redirect('/catalog');
  } catch (error) {
    res.status(400).render('creatures/create', { error: errorHandler(error) });
  }
});

router.get('/:creatureId/details', async (req, res) => {
  const creature = await creaturesService.getCreatureById(req.params.creatureId);
  const isOwner = req.user?._id === creature.owner?._id.toString();
  const isVoted = creature.votes.some((x) => x._id.toString() === req.user?._id);
  const votes = creature.votes.length;
  const emails = creature.votes.map((x) => x.email).join(', ');

  res.render('creatures/details', { title: 'Creature details', creature, isOwner, isVoted, votes, emails });
});

router.get('/:creatureId/vote', isAuth, async (req, res) => {
  const userId = req.user?._id;
  const creatureId = req.params.creatureId;
  try {
    await creaturesService.creatureVote(userId, creatureId);
    res.redirect(`/catalog/${creatureId}/details`);
  } catch (error) {
    res.redirect(`/catalog/${creatureId}/details`, { error: errorHandler(error) });
  }
});

router.get('/:creatureId/edit', isAuth, async (req, res) => {
  const creatureId = req.params.creatureId;
  try {
    const creature = await creaturesService.getCreatureById(creatureId);
    res.render('creatures/edit', { title: 'Edit creature', creature });
  } catch (error) {
    res.redirect('/catalog', { error: errorHandler(error) });
  }
});

router.post('/:creatureId/edit', isAuth, async (req, res) => {
  const creatureId = req.params.creatureId;
  try {
    await creaturesService.updateCreature(creatureId, req.body);
    res.redirect(`/catalog/${creatureId}/details`);
  } catch (error) {
    res.render('creatures/edit', { error: errorHandler(error) });
  }
});

router.get('/:creatureId/delete', isAuth, async (req, res) => {
  const creatureId = req.params.creatureId;
  try {
    await creaturesService.deleteCreatureById(creatureId);
    res.redirect('/catalog');
  } catch (error) {
    res.redirect('/catalog', { error: errorHandler(error) });
  }
});

module.exports = router;
