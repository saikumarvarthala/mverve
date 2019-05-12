
const genreRoutes = require('./genre.routes');
const GenreModule = {
    name: 'GenreModule',
    version: '1.0.0',
    register: async function (server, options) {
        server.route(genreRoutes);
    }
};
module.exports = GenreModule;