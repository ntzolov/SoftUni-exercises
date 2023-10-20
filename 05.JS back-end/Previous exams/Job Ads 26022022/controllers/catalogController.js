const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const adService = require('../services/adService');
const { errorHandler } = require('../utils/errorHandler');

router.get('/', async (req, res) => {
  try {
    const ads = await adService.getAllAds();
    res.render('ads/all-ads', { title: 'Catalog', ads });
  } catch (error) {}
});

router.get('/create', isAuth, (req, res) => {
  res.render('ads/create', { title: 'Create Ad' });
});

router.post('/create', isAuth, async (req, res) => {
  const { headline, location, companyName, companyDescription } = req.body;
  const userId = req.user?._id;
  try {
    const ad = await adService.createAd({ ...req.body, author: userId });
    await adService.updateUserAds(userId, ad._id);
    res.redirect('/');
  } catch (error) {
    res.status(400).render('ads/create', {
      title: 'error',
      error: errorHandler(error),
      body: { headline, location, companyName, companyDescription },
    });
  }
});

router.get('/:adId/details', async (req, res) => {
  const { adId } = req.params;
  try {
    const ad = await adService.getAllAdsWithCandidates(adId);
    const isOwner = req.user?._id === ad.author?._id.toString();
    const isApplied = ad.usersApplied.some((x) => x._id.toString() === req.user?._id);
    res.render('ads/details', { title: 'Details', ad, isOwner, isApplied });
  } catch (error) {
    res.redirect('404');
  }
});

router.get('/:adId/edit', isAuth, async (req, res) => {
  const { adId } = req.params;
  try {
    const ad = await adService.getAdById(adId);
    res.render('ads/edit', { title: 'Edit', ad });
  } catch (error) {
    res.redirect('404');
  }
});

router.post('/:adId/edit', isAuth, async (req, res) => {
  const { headline, location, companyName, companyDescription } = req.body;
  const { adId } = req.params;
  try {
    await adService.updateAdById(adId, req.body);
    res.redirect(`/catalog/${adId}/details`);
  } catch (error) {
    const ad = { headline, location, companyName, companyDescription };
    res.status(400).render('ads/edit', {
      title: 'error',
      error: errorHandler(error),
      ad,
    });
  }
});

router.get('/:adId/delete', isAuth, async (req, res) => {
  const { adId } = req.params;
  try {
    await adService.deleteAdById(adId);
    res.redirect('/catalog');
  } catch (error) {
    res.redirect('404');
  }
});

router.get('/:adId/apply', isAuth, async (req, res) => {
  const { adId } = req.params;
  const userId = req.user._id;
  try {
    await adService.updateCandidates(adId, userId);
    res.redirect(`/catalog/${adId}/details`);
  } catch (error) {
    res.redirect('404');
  }
});

module.exports = router;
