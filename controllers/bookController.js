const Book = require('../models/book');

// Display all books
exports.displayBooks = async (req, res, next) => {
  res.send('Not implemented');
};

// Display a single book
exports.displayBook = async (req, res, next) => {
  res.send(`Here you go ${req.params.id}`);
};

// Display create book form
exports.createBookGET = async (req, res, next) => {
  res.send('not implemented');
};

// Handles create book
exports.createBookPOST = async (req, res, next) => {
  res.send('not implemented');
};

// Display update book form
exports.updateBookGET = async (req, res, next) => {
  res.send('not implemented');
};

// Handles update book
exports.updateBookPOST = async (req, res, next) => {
  res.send('not implemented');
};

// Display delete book form
exports.deleteBookGET = async (req, res, next) => {
  res.send('not implemented');
};

// Handles delete book
exports.deleteBookPOST = async (req, res, next) => {
  res.send('not implemented');
};
