const express = require('express');
const cors = require('cors');
const app = express();
const movieRoutes = require('./routes/movieRoutes');
require('dotenv').config();

app.use(cors({
    origin: 'http://localhost:8100', // permite o frontend Ionic
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // se você estiver usando cookies/autenticação
}));
app.use(express.json());
app.use('/movies', movieRoutes);

module.exports = app;