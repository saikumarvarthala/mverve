var mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    genreType:{
      type:String
    },
    createdAt:{
        type: Number,
        default:Date.now()
    },
    updatedAt:{
        type: Number
    },
    },{
    versionKey: false 
});
module.exports = mongoose.model('Genre', GenreSchema);