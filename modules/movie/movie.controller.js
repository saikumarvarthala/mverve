const Movie = require('./movie.model');

module.exports = {
    async create(req, reply) {
        try {
            const movie = new Movie(req.payload);
            await movie.save();
            return reply.response({response_data:'movie data saved successfully.',response_code:200});
        }
        catch(err){
          throw err;
        }
    },
    async list(req, reply) {
      try {
          const movie = await Movie.find({});
          return reply.response({response_data:movie,response_code:200});
      }
      catch(err){
        throw err;
      }
    },
    async getOne(req, reply) {
      try {
          const movie = await Movie.findById(req.params.id);
          return reply.response({response_data:movie,response_code:200});
      }
      catch(err){
        throw err;
      }
    },
    async getListBygenre(req, reply) {
      try {
          const movie = await Movie.find({genreId:req.params.genreId},{});
          return reply.response({response_data:movie,response_code:200});
      }
      catch(err){
        throw err;
      }
    },
    async update(req, reply) {
      try {
          const movie = await Movie.findByIdAndUpdate(req.params.id,req.payload,{new:true});
          return reply.response({response_data:movie,response_code:200});
      }
      catch(err){
        throw err;
      }
    },
    async delete(req, reply) {
      try {
          const movie = await Movie.findByIdAndDelete(req.params.id);
          return reply.response({response_data:"movie deleted successfully.",response_code:200});
      }
      catch(err){
        throw err;
      }
    },
}