const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://ggraziano2003:Peppe.2025@finalproject-danny.ufquo1e.mongodb.net/?retryWrites=true&w=majority&appName=FinalProject-Danny';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Errore di connessione a MongoDB:'));
db.once('open', () => {
  console.log('Connesso a MongoDB Atlas');
});