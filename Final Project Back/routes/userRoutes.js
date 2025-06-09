const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

// Route specifiche PRIMA
router.get('/:userId/favorites', userController.getFavorites);
router.post('/:userId/favorites', userController.addFavorite);
router.delete('/:userId/favorites/:eventId', userController.removeFavorite);

// Route generiche DOPO
router.get('/', userController.getUtenti);
router.post('/', userController.createUtente);
router.post('/login', userController.loginUser);
router.get('/:id', userController.getUtenteById);

module.exports = router;