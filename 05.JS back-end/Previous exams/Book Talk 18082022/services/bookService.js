const Book = require('../models/Book');

exports.createBook = async (bookDataObj, userId) => {
  await Book.create({ ...bookDataObj, userId });
};

exports.getAllBooks = async () => {
  return await Book.find().lean();
};

exports.getBookById = async (bookId) => {
  return await Book.findById(bookId).lean();
};

exports.updateBookById = async (bookId, bookDataObj) => {
  await Book.findByIdAndUpdate(bookId, bookDataObj, { runValidators: true });
};

exports.deleteBookById = async (bookId) => {
  await Book.findByIdAndDelete(bookId);
};

exports.addBookToUserWishlist = async (bookId, userId) => {
  const book = await Book.findById(bookId);
  book.wishingList.push(userId);
  await book.save();
};

exports.getAllWishedBooks = async (userId) => {
  return await Book.find({
    wishingList: {
      $in: userId,
    },
  }).lean();
};
