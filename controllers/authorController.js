const Author = require('../models/author');

// Display all authors
exports.displayAuthors = async (req, res, next) => {
  res.send('Not implemented');
};

// Display a single author
exports.displayAuthor = async (req, res, next) => {
  res.send(`Here you go ${req.params.id}`);
};

// Display create author form
exports.createAuthorGET = async (req, res, next) => {
  res.send('not implemented');
};

// Handles create author
exports.createAuthorPOST = async (req, res, next) => {
  res.send('not implemented');
};

// Display update author form
exports.updateAuthorGET = async (req, res, next) => {
  res.send('not implemented');
};

// Handles update auhor
exports.updateAuthorPOST = async (req, res, next) => {
  res.send('not implemented');
};

// Display delete author form
exports.deleteAuthorGET = async (req, res, next) => {
  res.send('not implemented');
};

// Handles delete author
exports.deleteAuthorPOST = async (req, res, next) => {
  res.send('not implemented');
};
