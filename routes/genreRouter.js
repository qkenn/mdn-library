const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

// GET request for list of all author items.
router.get('/', genreController.displayGenres);

// GET request for creating a author.
router.get('/create', genreController.createGenreGET);

// POST request for creating author.
router.post('/create', genreController.createGenrePOST);

// GET request for one author.
router.get('/:id', genreController.displayGenre);

// GET request to delete author.
router.get('/:id/delete', genreController.deleteGenreGET);

// POST request to delete author.
router.post('/:id/delete', genreController.deleteGenrePOST);

// GET request to update author.
router.get('/:id/update', genreController.updateGenreGET);

// POST request to update author.
router.post('/:id/update', genreController.updateGenrePOST);

module.exports = router;
