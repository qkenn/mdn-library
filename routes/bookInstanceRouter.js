const express = require('express');
const router = express.Router();
const bookinstanceController = require('../controllers/bookinstanceController');

// GET request for list of all author items.
router.get('/', bookinstanceController.displayBookInstances);

// GET request for creating a author.
router.get('/create', bookinstanceController.createBookInstanceGET);

// POST request for creating author.
router.post('/create', bookinstanceController.createBookInstancePOST);

// GET request for one author.
router.get('/:id', bookinstanceController.displayBookInstance);

// GET request to delete author.
router.get('/:id/delete', bookinstanceController.deleteBookInstanceGET);

// POST request to delete author.
router.post('/:id/delete', bookinstanceController.deleteBookInstancePOST);

// GET request to update author.
router.get('/:id/update', bookinstanceController.updateBookInstanceGET);

// POST request to update author.
router.post('/:id/update', bookinstanceController.updateBookInstancePOST);

module.exports = router;
