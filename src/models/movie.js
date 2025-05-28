const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('Movie', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    movie_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    movie_value: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'movies'
});

module.exports = Movie;