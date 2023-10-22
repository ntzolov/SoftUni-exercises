const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const electronicsService = require('../services/electronicsService');
const { errorHandler } = require('../utils/errorHandler');

router.get('/', async (req, res) => {
  try {
    const electronics = await electronicsService.getAllElectronics();
    res.render('electronics/catalog', { title: 'Catalog', electronics });
  } catch (error) {
    res.redirect('404');
  }
});

router.get('/create', isAuth, (req, res) => {
  res.render('electronics/create', { title: 'Create' });
});

router.post('/create', isAuth, async (req, res) => {
  const { name, type, production, exploitation, damages, image, price, description } = req.body;
  const userId = req.user?._id;
  try {
    await electronicsService.createElectronics({ ...req.body, owner: userId });
    res.redirect('/catalog');
  } catch (error) {
    res.status(400).render('electronics/create', {
      title: 'error',
      error: errorHandler(error),
      body: { name, type, production, exploitation, damages, image, price, description },
    });
  }
});

router.get('/:electronicsId/details', async (req, res) => {
  const { electronicsId } = req.params;
  try {
    const electronics = await electronicsService.getElectronicsById(electronicsId);
    const isOwner = req.user?._id === electronics.owner?.toString();
    const isBought = electronics.buyingList.some((x) => x.toString() === req.user?._id);
    res.render('electronics/details', { title: 'Details', electronics, isOwner, isBought });
  } catch (error) {
    res.redirect('404');
  }
});

router.get('/:electronicsId/buy', isAuth, async (req, res) => {
  const { electronicsId } = req.params;
  const userId = req.user._id;
  try {
    await electronicsService.addUserToBuyingList(electronicsId, userId);
    res.redirect(`/catalog/${electronicsId}/details`);
  } catch (error) {
    res.redirect('404');
  }
});

router.get('/:electronicsId/edit', isAuth, async (req, res) => {
  const { electronicsId } = req.params;
  try {
    const electronics = await electronicsService.getElectronicsById(electronicsId);
    res.render('electronics/edit', { title: 'Edit', electronics });
  } catch (error) {
    res.redirect('404');
  }
});

router.post('/:electronicsId/edit', isAuth, async (req, res) => {
  const { electronicsId } = req.params;
  const { name, type, production, exploitation, damages, image, price, description } = req.body;
  try {
    await electronicsService.updateElectronicsById(electronicsId, req.body);
    res.redirect(`/catalog/${electronicsId}/details`);
  } catch (error) {
    const electronics = { name, type, production, exploitation, damages, image, price, description };
    res.render('electronics/edit', { title: 'error', error: errorHandler(error), electronics });
  }
});

router.get('/:electronicsId/delete', isAuth, async (req, res) => {
  const { electronicsId } = req.params;
  try {
    await electronicsService.deleteElectronicsById(electronicsId);
    res.redirect('/catalog');
  } catch (error) {
    res.redirect('404');
  }
});

router.get('/search', isAuth, async (req, res) => {
  try {
    const electronics = await electronicsService.getAllElectronics();
    res.render('electronics/search', { title: 'search', electronics });
  } catch (error) {
    res.redirect('404');
  }
});

router.post('/search', isAuth, async (req, res) => {
  const { name, type } = req.body;
  try {
    const electronics = await electronicsService.searchElectronics(name, type);
    res.render('electronics/search', { title: 'search', electronics, body: { name, type } });
  } catch (error) {
    res.redirect('404');
  }
});

module.exports = router;
