const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const animalService = require('../services/animalsService');
const { errorHandler } = require('../utils/errorHandler');

router.get('/', async (req, res) => {
  try {
    const animals = await animalService.getAllAnimals();
    res.render('animals/dashboard', { title: 'Catalog animals', animals });
  } catch (error) {
    res.render('home/home', { title: 'error', error: errorHandler(error) });
  }
});

router.get('/create', isAuth, (req, res) => {
  res.render('animals/create', { title: 'Create animal' });
});

router.post('/create', isAuth, async (req, res) => {
  const { name, years, kind, image, need, location, description } = req.body;
  const owner = req.user._id;
  try {
    await animalService.createAnimal({ ...req.body, owner });
    res.redirect('/catalog');
  } catch (error) {
    res.status(400).render('animals/create', {
      error: errorHandler(error),
      title: 'Create animal',
      body: { name, years, kind, image, need, location, description },
    });
  }
});

router.get('/:animalId/details', async (req, res) => {
  const { animalId } = req.params;
  try {
    const animal = await animalService.getAnimalById(animalId);
    const isOwner = req.user?._id === animal.owner?._id.toString();
    const isDonated = animal.donations.some((x) => x._id.toString() === req.user?._id);
    res.render('animals/details', { title: 'Details', animal, isOwner, isDonated });
  } catch (error) {
    res.status(400).render('animals/dashboard', {
      error: errorHandler(error),
      title: 'error',
    });
  }
});

router.get('/:animalId/delete', isAuth, async (req, res) => {
  const { animalId } = req.params;
  try {
    await animalService.deleteAnimalById(animalId);
    res.redirect('/catalog');
  } catch (error) {
    res.status(400).render('animals/dashboard', {
      error: errorHandler(error),
      title: 'error',
    });
  }
});

router.get('/:animalId/edit', isAuth, async (req, res) => {
  const { animalId } = req.params;
  try {
    const animal = await animalService.getAnimalById(animalId);
    res.render('animals/edit', { title: 'Animal edit', animal });
  } catch (error) {
    res.status(400).render('animals/dashboard', {
      error: errorHandler(error),
      title: 'error',
    });
  }
});

router.post('/:animalId/edit', isAuth, async (req, res) => {
  const { animalId } = req.params;
  try {
    await animalService.updateAnimalById(animalId, req.body);
    res.redirect(`/catalog/${animalId}/details`);
  } catch (error) {
    const animal = { ...req.body };
    res.status(400).render('animals/edit', {
      error: errorHandler(error),
      title: 'error',
      animal,
    });
  }
});

router.get('/:animalId/donate', isAuth, async (req, res) => {
  const { animalId } = req.params;
  const userId = req.user._id;
  try {
    await animalService.addDonation(animalId, userId);
    res.redirect(`/catalog/${animalId}/details`);
  } catch (error) {
    res.status(400).render('animals/dashboard', {
      error: errorHandler(error),
      title: 'error',
    });
  }
});

router.get('/search', async (req, res) => {
  res.render('search', { title: 'Search animal by location' });
});

router.post('/search', async (req, res) => {
  const { search } = req.body;
  try {
    const animals = await animalService.searchAnimals(search);
    res.render('search', { title: 'Search animal by location', animals });
  } catch (error) {
    res.status(400).render('search', {
      error: errorHandler(error),
      title: 'error',
    });
  }
});

module.exports = router;
