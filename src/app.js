const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: [
        'capacitor://localhost',
        'http://localhost',
        'http://localhost:8100',
        'https://localhost',
        'https://copy-paste-production-528f.up.railway.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
const movieRoutes = require('./routes/movieRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/movies', movieRoutes);

module.exports = app;