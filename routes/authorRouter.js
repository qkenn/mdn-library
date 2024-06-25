const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// GET request for list of all author items.
router.get('/', authorController.displayAuthors);

// GET request for creating a author.
router.get('/create', authorController.createAuthorGET);

// POST request for creating author.
router.post('/create', authorController.createAuthorPOST);

// GET request for one author.
router.get('/:id', authorController.displayAuthor);

// GET request to delete author.
router.get('/:id/delete', authorController.deleteAuthorGET);

// POST request to delete author.
router.post('/:id/delete', authorController.deleteAuthorPOST);

// GET request to update author.
router.get('/:id/update', authorController.updateAuthorGET);

// POST request to update author.
router.post('/:id/update', authorController.updateAuthorPOST);

module.exports = router;
