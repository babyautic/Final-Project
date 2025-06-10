const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    imageUser: { type: String },
    nameUser: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    emailUser: { type: String, required: true },
    pwdUser: { type: String, required: true },
    eventFavorite: [
        {
            image: { type: String },
            nameEvent: { type: String },
            data: { type: Date },
            location: { type: String },
            description: { type: String }
        }
    ]
});

const User = mongoose.model('User', userSchema, 'Users');
module.exports = User;