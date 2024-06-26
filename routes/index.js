const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');
const BookInstance = require('../models/bookinstance');
const Genre = require('../models/genre');

router.get('/', async (req, res, next) => {
  // Get database entry counts from all models
  try {
    const [
      bookCount,
      authorCount,
      bookInstanceCount,
      bookInstanceAvailableCount,
      genreCount,
    ] = await Promise.all(
      [Book.countDocuments({}).exec()],
      [Author.countDocuments({}).exec()],
      [BookInstance.countDocuments({}).exec()],
      [BookInstance.countDocuments({ status: 'Available' }).exec()],
      [Genre.countDocuments({}).exec()]
    );

    res.render('index', {
      bookCount,
      authorCount,
      bookInstanceAvailableCount,
      bookInstanceCount,
      genreCount,
    });
  } catch (error) {
    res.send({ status: 'failed', message: error.message });
  }
});

module.exports = router;
