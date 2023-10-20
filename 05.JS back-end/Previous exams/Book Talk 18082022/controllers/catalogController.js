const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const bookService = require('../services/bookService');
const { errorHandler } = require('../utils/errorHandler');

router.get('/', async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.render('books/catalog', { title: 'Catalog', books });
  } catch (error) {
    res.redirect('404');
  }
});

router.get('/create', isAuth, (req, res) => {
  res.render('books/create', { title: 'Create' });
});

router.post('/create', isAuth, async (req, res) => {
  const { title, author, genre, stars, image, bookReview } = req.body;
  const userId = req.user._id;
  try {
    await bookService.createBook(req.body, userId);
    res.redirect('/catalog');
  } catch (error) {
    res.status(400).render('books/create', {
      title: 'error',
      error: errorHandler(error),
      body: { title, author, genre, stars, image, bookReview },
    });
  }
});

router.get('/:bookId/details', async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await bookService.getBookById(bookId);
    const isOwner = req.user?._id === book.owner?._id.toString();
    const isWished = book.wishingList.some((x) => x._id.toString() === req.user?._id);
    res.render('books/details', { title: 'Details', book, isOwner, isWished });
  } catch (error) {
    res.redirect('404');
  }
});

router.get('/:bookId/edit', isAuth, async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await bookService.getBookById(bookId);
    res.render('books/edit', { title: 'Edit', book });
  } catch (error) {
    res.redirect('404');
  }
});

router.post('/:bookId/edit', isAuth, async (req, res) => {
  const { bookId } = req.params;
  const { title, author, genre, stars, image, bookReview } = req.body;
  try {
    await bookService.updateBookById(bookId, req.body);
    res.redirect(`/catalog/${bookId}/details`);
  } catch (error) {
    const book = { title, author, genre, stars, image, bookReview };
    res.render('books/edit', { title: 'error', book, error: errorHandler(error) });
  }
});

router.get('/:bookId/delete', isAuth, async (req, res) => {
  const { bookId } = req.params;
  try {
    await bookService.deleteBookById(bookId);
    res.redirect('/catalog');
  } catch (error) {
    res.redirect('404');
  }
});

router.get('/:bookId/wish', isAuth, async (req, res) => {
  const { bookId } = req.params;
  const userId = req.user._id;
  try {
    await bookService.addBookToUserWishlist(bookId, userId);
    res.redirect(`/catalog/${bookId}/details`);
  } catch (error) {
    res.redirect('404');
  }
});

module.exports = router;
