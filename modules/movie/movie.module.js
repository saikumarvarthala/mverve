
const movieRoutes = require('./movie.routes');
const MovieModule = {
    name: 'MovieModule',
    version: '1.0.0',
    register: async function (server, options) {
        server.route(movieRoutes);
    }
};
module.exports = MovieModule;