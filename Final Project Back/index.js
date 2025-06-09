const express = require('express');
const mongoose = require('mongoose');
const eventoRoutes = require('./routes/eventRoutes.js');
const userRoutes = require('./routes/userRoutes.js')
const cors = require('cors');

//const mongoose = require('mongoose');
//const mongoURI = 'mongodb+srv://ggraziano2003:Peppe.2025@finalproject-danny.ufquo1e.mongodb.net/?retryWrites=true&w=majority&appName=FinalProject-Danny';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connetti a MongoDB (metti la tua URI)
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connesso'))
  .catch(err => console.error(err));


// Usa le rotte
app.use('/api/eventi', eventoRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});