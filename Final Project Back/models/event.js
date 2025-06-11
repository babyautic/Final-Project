const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    image: { type: String, required: false },
    nameEvent: { type: String, required: true },
    data: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true }
});

const Event = mongoose.model('Event', eventSchema, 'Events');
module.exports = Event;