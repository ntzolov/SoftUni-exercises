const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required!'],
    minLength: [2, 'Title should be at least 2 characters long!'],
  },
  author: {
    type: String,
    required: [true, 'Author is required!'],
    minLength: [5, 'Author should be at least 5 characters long!'],
  },
  image: {
    type: String,
    required: [true, 'Image is required!'],
    match: [/^https?:\/\//, 'URL is not valid!'],
  },
  bookReview: {
    type: String,
    required: [true, 'Book review is required!'],
    minLength: [10, 'Book review should be at least 10 characters long!'],
  },
  genre: {
    type: String,
    required: [true, 'Genre is required!'],
    minLength: [3, 'Genre should be at least 3 characters long!'],
  },
  stars: {
    type: Number,
    required: [true, 'Stars is required!'],
    min: [1, 'Stars should be between 1 and 5!'],
    max: [5, 'Stars should be between 1 and 5!'],
  },
  wishingList: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
