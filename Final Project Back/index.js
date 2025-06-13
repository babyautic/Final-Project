const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const eventoRoutes = require('./routes/eventRoutes.js');
const userRoutes = require('./routes/userRoutes.js')


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Consente richieste da localhost:5173
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Connetti a MongoDB (metti la tua URI)
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('MongoDB Connesso')).catch(err => console.error(err));

// Usa le rotte
app.use('/api/eventi', eventoRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});