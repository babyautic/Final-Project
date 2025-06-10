const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/register', userController.createUtente);
router.post('/login', userController.loginUtente);
router.put('/eventi/:id/preferiti', userController.verificaToken, userController.putEventoPreferito)
router.get('/eventsFavourites', userController.verificaToken, userController.getEventiPreferiti)
router.delete('/eventi/:id/preferiti', userController.verificaToken, userController.deleteEventoPreferito)

//router.get('/', userController.getUtenti);
//router.get('/:id', userController.getUtenteById);
//router.put('/:userId/favoriti/:id', userController.putEventoPreferito)

module.exports = router;