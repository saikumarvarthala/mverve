const Genre = require('./genre.model');

module.exports = {
  async create(req, reply) {
    try {
      var exist=await Genre.findOne({genreType:req.payload.genreType})
      if(exist){
        return reply.response({response_code:500,response_data:"genre already exist."});
      }
      else{
        const genre = new Genre(req.payload);
        await genre.save();
        return reply.response({response_data:'genre data saved successfully.',response_code:200});
      }
    }
    catch(err){
      throw err;
    }
  },
  async list(req, reply) {
    try {
        const genre = await Genre.find({});
        return reply.response({response_data:genre,response_code:200});
    }
    catch(err){
      throw err;
    }
  },
  async getOne(req, reply) {
    try {
        const genre = await Genre.findById(req.params.id);
        return reply.response({response_data:genre,response_code:200});
    }
    catch(err){
      throw err;
    }
  },
  async update(req, reply) {
    try {
        const genre = await Genre.findByIdAndUpdate(req.params.id,req.payload,{new:true});
        return reply.response({response_data:genre,response_code:200});
    }
    catch(err){
      throw err;
    }
  },
  async delete(req, reply) {
    try {
        const genre = await Genre.findByIdAndDelete(req.params.id);
        return reply.response({response_data:"Genre deleted successfully.",response_code:200});
    }
    catch(err){
      throw err;
    }
  },
}