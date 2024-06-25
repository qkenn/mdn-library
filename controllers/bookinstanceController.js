const BookInstance = require('../models/bookinstance');

// Display all book instances
exports.displayBookInstances = async (req, res, next) => {
  res.send('Not implemented');
};

// Display a single book instance
exports.displayBookInstance = async (req, res, next) => {
  res.send(`Here you go ${req.params.id}`);
};

// Display create book instance form
exports.createBookInstanceGET = async (req, res, next) => {
  res.send('not implemented');
};

// Handles create book instance
exports.createBookInstancePOST = async (req, res, next) => {
  res.send('not implemented');
};

// Display update book instance form
exports.updateBookInstanceGET = async (req, res, next) => {
  res.send('not implemented');
};

// Handles update book instance
exports.updateBookInstancePOST = async (req, res, next) => {
  res.send('not implemented');
};

// Display delete book instance form
exports.deleteBookInstanceGET = async (req, res, next) => {
  res.send('not implemented');
};

// Handles delete book instance
exports.deleteBookInstancePOST = async (req, res, next) => {
  res.send('not implemented');
};
