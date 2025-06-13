const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    image: { type: String, required: false },
    nameEvent: { type: String, required: true },
    location: { type: String, required: true },
    data: { type: Date, required: true },
    description: { type: String, required: true },

    // Aggiunta dei campi solo del dettaglio
    orario: { type: String, required: false },                
    descrizioneDettagliata: { type: String, required: false },
    organizzatore: { type: String, required: false },          

});

const Event = mongoose.model('Event', eventSchema, 'Events');
module.exports = Event;