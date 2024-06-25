const Genre = require('../models/genre');

// Display all authors
exports.displayGenres = async (req, res, next) => {
  res.send('Not implemented');
};

// Display a single genre
exports.displayGenre = async (req, res, next) => {
  res.send(`Here you go ${req.params.id}`);
};

// Display create genre form
exports.createGenreGET = async (req, res, next) => {
  res.send('not implemented');
};

// Handles create genre
exports.createGenrePOST = async (req, res, next) => {
  res.send('not implemented');
};

// Display update genre form
exports.updateGenreGET = async (req, res, next) => {
  res.send('not implemented');
};

// Handles update genre
exports.updateGenrePOST = async (req, res, next) => {
  res.send('not implemented');
};

// Display delete genre form
exports.deleteGenreGET = async (req, res, next) => {
  res.send('not implemented');
};

// Handles delete genre
exports.deleteGenrePOST = async (req, res, next) => {
  res.send('not implemented');
};
