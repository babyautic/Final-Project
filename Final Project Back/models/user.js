const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    imageUser: { type: String, required: false },
    nameUser: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    emailUser: { type: String, required: true },
    pwdUser: { type: String, required: true },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});

const User = mongoose.model('User', userSchema, 'Users');
module.exports = User;