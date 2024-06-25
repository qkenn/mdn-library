const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET request for list of all Book items.
router.get('/', bookController.displayBooks);

// GET request for creating a Book.
router.get('/create', bookController.createBookGET);

// POST request for creating Book.
router.post('/create', bookController.createBookPOST);

// GET request for one Book.
router.get('/:id', bookController.displayBook);

// GET request to delete Book.
router.get('/:id/delete', bookController.deleteBookGET);

// POST request to delete Book.
router.post('/:id/delete', bookController.deleteBookPOST);

// GET request to update Book.
router.get('/:id/update', bookController.updateBookGET);

// POST request to update Book.
router.post('/:id/update', bookController.updateBookPOST);

module.exports = router;
