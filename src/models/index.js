const sequelize = require('../config/database');
const Movie = require('./movie');

const db = { sequelize, Movie };

module.exports = db;