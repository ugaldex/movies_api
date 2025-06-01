const express = require('express');
const cors = require('cors');
const app = express();
const movieRoutes = require('./routes/movieRoutes');
require('dotenv').config();

app.use(cors({
    origin: ['capacitor://localhost', 'http://localhost', 'http://localhost:8100'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use('/movies', movieRoutes);

module.exports = app;