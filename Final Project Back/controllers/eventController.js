const mongoose = require('mongoose');
const Evento = require('../models/event.js');
const Utente = require('../models/user.js')

// OTTIENI tutti gli eventi
exports.getEventi = async (req, res) => {
  try {
    const eventi = await Evento.find();
    res.json(eventi);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// OTTIENI evento per ID
exports.getEventoById = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);
    if (!evento) return res.status(404).json({ message: 'Evento non trovato' });
    res.json(evento);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// OTTIENI evento per LOCATION
exports.getEventiByLocation = async (req, res) => {
  try {
    const locationQuery = req.query.q;
    if (!locationQuery) return res.status(400).json({ message: 'Si prega di inserire una location.' });

    const eventi = await Evento.find({ location: { $regex: locationQuery, $options: 'i' } }); // ricerca insensibile a maiuscole
    if (eventi.length === 0) {
      res.status(404).json({ message: "Nessun evento trovato." });
    } else {
      res.json(eventi);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREA un nuovo evento
exports.createEvento = async (req, res) => {
  try {
    const { utenteId } = req.body;
    await Utente.findById(utenteId);
    try {
      const evento = new Evento(req.body);
      await evento.save();
      res.status(201).json(evento);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } catch (err) {
    res.status(401).json({ message: 'Utente non presente o non registrato.' });
  }
};

// AGGIORNA evento
exports.updateEvento = async (req, res) => {
  try {
    const { utenteId } = req.body;
    await Utente.findById(utenteId);
    try {
      await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      res.json({ message: 'Evento aggiornato con successo.' })
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } catch (err) {
    res.status(401).json({ message: 'Utente non presente o non registrato.' });
  }
};

// CANCELLA evento
exports.deleteEvento = async (req, res) => {
  try {
    const { utenteId } = req.body;
    await Utente.findById(utenteId);
    try {
      await Evento.findByIdAndDelete(req.params.id);
      res.json({ message: 'Evento cancellato con successo.' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } catch (err) {
    res.status(401).json({ message: 'Utente non presente o non registrato.' });
  }
};