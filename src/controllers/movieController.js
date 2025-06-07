const { Movie } = require('../models');

module.exports = {
    async list(req, res) {
        const movies = await Movie.findAll();
        return res.json(movies);
    },

    async getById(req, res) {
        const { uuid } = req.params;
        const movie = await Movie.findByPk(uuid);
        if (!movie) return res.status(404).json({ error: 'Filme não encontrado' });
        return res.json(movie);
    },

    async create(req, res) {
        const { movie_name, movie_value } = req.body;
        const movie = await Movie.create({ movie_name, movie_value });
        return res.status(201).json(movie);
    },

    async update(req, res) {
        const { uuid } = req.params;
        const { movie_name, movie_value } = req.body;
        const movie = await Movie.findByPk(uuid);
        if (!movie) return res.status(404).json({ error: 'Filme não encontrado' });
        await movie.update({ movie_name, movie_value });
        return res.json(movie);
    },

    async delete(req, res) {
        const { uuid } = req.params;
        const movie = await Movie.findByPk(uuid);
        if (!movie) return res.status(404).json({ error: 'Filme não encontrado' });
        await movie.destroy();
        return res.status(204).send();
    },

    async bulkDelete(req, res) {
        const { uuids } = req.body;
        if (!Array.isArray(uuids) || uuids.length === 0) {
            return res.status(400).json({ error: 'Lista de UUIDs inválida' });
        }
        await Movie.destroy({ where: { uuid: uuids } });
        return res.status(204).json({ message: 'Filmes deletados com sucesso' });
    }
};