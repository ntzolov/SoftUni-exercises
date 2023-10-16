const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const gameService = require('../services/gameService');
const { errorHandler } = require('../utils/errorHandler');
const { generateSelectMenuOptions } = require('../utils/generateSelectMenuOptions');

router.get('/', async (req, res) => {
  try {
    const games = await gameService.getAllGames();
    res.render('games/catalog', { title: 'Catalog games', games });
  } catch (error) {
    res.status(404).render('404');
  }
});

router.get('/create', isAuth, (req, res) => {
  res.render('games/create', { title: 'Create game' });
});

router.post('/create', isAuth, async (req, res) => {
  const { platform, name, image, price, genre, description } = req.body;
  const userId = req.user?._id;
  try {
    await gameService.createGame(req.body, userId);
    res.redirect('/catalog');
  } catch (error) {
    res.status(400).render('games/create', {
      title: 'error',
      error: errorHandler(error),
      body: { platform, name, image, price, genre, description },
    });
  }
});

router.get('/:gameId/details', async (req, res) => {
  const { gameId } = req.params;
  try {
    const game = await gameService.getGameById(gameId);
    const isOwner = req.user?._id === game.owner?._id.toString();
    const isBought = game.boughtBy.some((x) => x._id.toString() === req.user?._id);
    res.render('games/details', { title: 'Game details', game, isOwner, isBought });
  } catch (error) {
    console.log(error);
    res.status(404).render('404');
  }
});

router.get('/:gameId/edit', isAuth, async (req, res) => {
  const { gameId } = req.params;
  try {
    const game = await gameService.getGameById(gameId);
    const options = generateSelectMenuOptions(game.platform);
    res.render('games/edit', { title: 'Edit game', game, options });
  } catch (error) {
    res.status(400).render('games/edit', { title: 'error', error: errorHandler(error) });
  }
});

router.post('/:gameId/edit', isAuth, async (req, res) => {
  const { platform, name, image, price, genre, description } = req.body;
  const { gameId } = req.params;
  const options = generateSelectMenuOptions(platform);
  try {
    await gameService.updateGameById(gameId, req.body);
    res.redirect(`/catalog/${gameId}/details`);
  } catch (error) {
    game = {
      platform,
      name,
      image,
      price,
      genre,
      description,
    };
    res.status(400).render('games/edit', {
      title: 'error',
      error: errorHandler(error),
      game,
      options,
    });
  }
});

router.get('/:gameId/delete', isAuth, async (req, res) => {
  const { gameId } = req.params;
  try {
    await gameService.deleteGameById(gameId);
    res.redirect('/catalog');
  } catch (error) {
    res.status(404).render('404');
  }
});

router.get('/:gameId/buy', isAuth, async (req, res) => {
  const { gameId } = req.params;
  const userId = req.user._id;
  try {
    await gameService.addBuyerToGame(gameId, userId);
    res.redirect(`/catalog/${gameId}/details`);
  } catch (error) {
    res.status(404).render('404');
  }
});

router.get('/search', async (req, res) => {
  try {
    const games = await gameService.getAllGames();
    res.render('games/search', { title: 'Search for a game', games });
  } catch (error) {
    res.status(404).render('404');
  }
});

router.post('/search', async (req, res) => {
  const { searchInput, platformInput } = req.body;
  try {
    const games = await gameService.searchGame(searchInput, platformInput);
    res.render('games/search', { title: 'Search for a game', games });
  } catch (error) {
    res.status(404).render('404');
  }
});

module.exports = router;
