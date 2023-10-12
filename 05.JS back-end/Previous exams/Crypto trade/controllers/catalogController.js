const { errorHandler } = require('../utils/errorHandler');
const cryptoService = require('../services/cryptoService');
const { isAuth } = require('../middlewares/authMiddleware');
const { generateSelectMenuOptions } = require('../utils/generateSelectMenuOptions');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const cryptos = await cryptoService.getAll();
    res.render('catalog', { cryptos });
  } catch (error) {
    res.render('catalog', { error: errorHandler(error) });
  }
});

router.get('/create', isAuth, (req, res) => {
  res.render('create');
});

router.post('/create', isAuth, async (req, res) => {
  try {
    await cryptoService.create(req.body, req.user._id);
    res.status(200).redirect('/catalog');
  } catch (error) {
    res.status(400).render('create', { error: errorHandler(error) });
  }
});

router.get('/:cryptoId/details', async (req, res) => {
  const { cryptoId } = req.params;
  try {
    const crypto = await cryptoService.getCryptoById(cryptoId);
    const isOwner = req.user?._id === crypto.owner?.toString();
    const isBought = crypto.buyers?.toString().includes(req.user?._id);
    res.render('details', { crypto, isOwner, isBought });
  } catch (error) {
    res.status(400).render('catalog', { error: errorHandler(error) });
  }
});

router.get('/:cryptoId/details/edit', isAuth, async (req, res) => {
  try {
    const crypto = await cryptoService.getCryptoById(req.params.cryptoId);
    const options = generateSelectMenuOptions(crypto.paymentMethod);
    res.status(200).render('edit', { crypto, options });
  } catch (error) {
    res.status(400).render('catalog', { error: errorHandler(error) });
  }
});

router.post('/:cryptoId/details/edit', isAuth, async (req, res) => {
  try {
    const cryptoId = req.params.cryptoId;
    await cryptoService.updateCryptoById(cryptoId, req.body);
    res.status(200).redirect(`/catalog/${cryptoId}/details`);
  } catch (error) {
    res.status(400).render('catalog', { error: errorHandler(error) });
  }
});

router.get('/:cryptoId/details/delete', isAuth, async (req, res) => {
  try {
    await cryptoService.deleteCryptoById(req.params.cryptoId);
    res.redirect('/catalog');
  } catch (error) {
    res.status(400).render('catalog', { error: errorHandler(error) });
  }
});

router.get('/:cryptoId/details/buy', isAuth, async (req, res) => {
  try {
    const cryptoId = req.params.cryptoId;
    await cryptoService.addBuyer(cryptoId, req.user._id);
    res.redirect(`/catalog/${cryptoId}/details`);
  } catch (error) {
    res.redirect(`/catalog`, { error: errorHandler(error) });
  }
});

router.get('/search', isAuth, async (req, res) => {
  const cryptos = await cryptoService.getAll();
  res.render('search', { cryptos });
});

router.post('/search', isAuth, async (req, res) => {
  const { search, paymentMethod } = req.body;
  const cryptos = await cryptoService.searchCryptos(search);
  res.render('search', { cryptos });
});

module.exports = router;
