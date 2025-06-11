const Utente = require('../models/user.js');
const Evento = require('../models/event.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// CREA un nuovo utente
exports.createUtente = async (req, res) => {
  try {
    req.body.pwdUser = await bcrypt.hash(req.body.pwdUser, 13);
    const utente = new Utente(req.body);
    await utente.save();
    res.status(201).json(utente);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// LOGIN
exports.loginUtente = async (req, res) => {
  try {
    const emailUser = req.body.emailUser;
    const utente = await Utente.findOne({ emailUser });
    if (!utente) {
      return res.status(404).json({ message: 'Utente non trovato' });
    }

    const isPasswordValid = await bcrypt.compare(req.body.pwdUser, utente.pwdUser);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Password errata' });
    }

    const token = jwt.sign({ userId: utente._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login riuscito!', token: token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// MIDDELWARE: Verifica token
exports.verificaToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token mancante' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: 'Token non valido' });
    }

    req.userId = payload.userId;
    next();
  });
};

// AGGIUNTA di evento preferito tramite IDUTENTE
exports.putEventoPreferito = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);
    if (!evento) {
      return res.status(404).json({ message: 'Evento non trovato' });
    }

    // 2. Recupera l'utente
    const utente = await Utente.findById(req.userId);
    if (!utente) {
      return res.status(404).json({ message: 'Utente non trovato' });
    }

    // (EVITA DUPLICATI)
    const alreadyExists = utente.eventFavorite.some(ev => ev._id.toString() === evento._id.toString());
    if (alreadyExists) {
      return res.status(400).json({ message: 'Evento giÃ  nei preferiti' });
    }

    // 3. Aggiungi l'evento ai preferiti dell'utente
    utente.eventFavorite.push(evento.toJSON());

    // 4. Salva l'utente aggiornato
    await utente.save();

    // 5. Rispondi con l'utente aggiornato
    res.status(200).json(utente);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET eventi preferiti per l'utente
exports.getEventiPreferiti = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: 'Autenticazione richiesta: ID utente non trovato.' });
    }
    const utente = await Utente.findById(userId);
    if (!utente) {
      return res.status(404).json({ message: 'Utente non trovato.' });
    }
    res.status(200).json(utente.eventFavorite);
  } catch (err) {
    res.status(500).json({ message: 'Errore interno del server.', error: err.message });
  }
};

// DELETE eventi preferiti per l'utente
exports.deleteEventoPreferito = async (req, res) => {
  try {
    // RECUPERA evento da aggiungere tramite ID
    const evento = await Evento.findById(req.params.id);
    if (!evento) {
      return res.status(404).json({ message: 'Evento non trovato' });
    }

    // 2. Recupera l'utente
    const utente = await Utente.findById(req.userId);
    if (!utente) {
      return res.status(404).json({ message: 'Utente non trovato' });
    }

    // 3. Aggiungi l'evento ai preferiti dell'utente
    utente.eventFavorite.remove(evento.toJSON());

    // 4. Salva l'utente aggiornato
    await utente.save();

    // 5. Rispondi con l'utente aggiornato
    res.status(200).json(utente);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
