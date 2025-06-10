const Evento = require('../models/event.js');
const Utente = require('../models/user.js')

// CREATE events
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

// GET all events
exports.getEventi = async (req, res) => {
  try {
    const eventi = await Evento.find();
    res.json(eventi);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};