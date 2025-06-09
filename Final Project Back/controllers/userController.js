const Utente = require('../models/user.js');
const Evento = require('../models/event.js');
const User = require('../models/user.js');

// OTTIENI tutti gli utenti
exports.getUtenti = async (req, res) => {
  try {
    const utenti = await Utente.find();
    res.json(utenti);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREA un nuovo utente
exports.createUtente = async (req, res) => {
  try {
    const utente = new Utente(req.body);
    await utente.save();
    res.status(201).json(utente);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// OTTIENI utente per ID
exports.getUtenteById = async (req, res) => {
  try {
    const utente = await Utente.findById(req.params.id);
    if (!utente) return res.status(404).json({ message: 'Utente non trovato' });
    res.json(utente);
  } catch (err) {
    res.status(500).json({ message: 'Utente non trovato o Errore interno del server' });
  }
};

// AGGIUNGI un preferito
exports.addFavorite = async (req, res) => {
  const { userId } = req.params;
  const { eventId } = req.body;
  try {
    const utente = await Utente.findById(userId);
    if (!utente) return res.status(404).json({ error: 'Utente non trovato' });

    if (!utente.favorites.includes(eventId)) {
      utente.favorites.push(eventId);
      await utente.save();
    }
    res.json({ favorites: utente.favorites });
  } catch (err) {
    res.status(500).json({ error: 'Errore nel salvataggio dei preferiti' });
  }
};

// OTTIENI i preferiti
exports.getFavorites = async (req, res) => {
  const { userId } = req.params;
  try {
    const utente = await Utente.findById(userId).populate('favorites');
    if (!utente) return res.status(404).json({ error: 'Utente non trovato' });
    res.json({ favorites: utente.favorites });
  } catch (err) {
    res.status(500).json({ error: 'Errore nel recupero dei preferiti' });
  }
};

// LOGIN utente
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ emailUser: email, pwdUser: password });
    if (!user) return res.status(401).json({ error: 'Credenziali non valide' });
    res.json({ userId: user._id, name: user.nameUser });
  } catch (err) {
    res.status(500).json({ error: 'Errore nel login' });
  }
};

// RIMUOVI un preferito
exports.removeFavorite = async (req, res) => {
  const { userId, eventId } = req.params;
  try {
    const utente = await Utente.findById(userId);
    if (!utente) return res.status(404).json({ error: 'Utente non trovato' });

    utente.favorites = utente.favorites.filter(fav => fav.toString() !== eventId);
    await utente.save();

    res.json({ favorites: utente.favorites });
  } catch (err) {
    res.status(500).json({ error: 'Errore nella rimozione del preferito' });
  }
};

/*
// --- EVENTI (separati, se usi anche queste funzioni) ---

// OTTIENI tutti gli eventi
exports.getEventi = async (req, res) => {
  try {
    const eventi = await Evento.find();
    res.json(eventi);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// AGGIORNA evento
exports.updateEvento = async (req, res) => {
  try {
    const evento = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!evento) return res.status(404).json({ message: 'Evento non trovato' });
    res.json(evento);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// CANCELLA evento
exports.deleteEvento = async (req, res) => {
  try {
    const evento = await Evento.findByIdAndDelete(req.params.id);
    if (!evento) return res.status(404).json({ message: 'Evento non trovato' });
    res.json({ message: 'Evento cancellato' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// OTTIENI evento per LOCATION
exports.getEventiByLocation = async (req, res) => {
  try {
    const locationQuery = req.query.q;
    if (!locationQuery) {
      return res.status(400).json({ message: 'Parametro "q" per la location mancante' });
    }
    const eventi = await Evento.find({
      location: { $regex: locationQuery, $options: 'i' }
    });
    res.json(eventi);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
*/
