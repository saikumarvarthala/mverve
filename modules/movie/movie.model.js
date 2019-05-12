var mongoose = require('mongoose')
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  genreId:{
    type: Schema.ObjectId,
    ref: 'Genre'
  },
  title:{
    type:String
  },
  director:{
    type:String
  },
  year:{
    type:Number
  },
  createdAt:{
    type: Number,
    default:Date.now()
  },
  updatedAt:{
    type :Number
  },
    },{
    versionKey: false 
});
module.exports = mongoose.model('Movie', MovieSchema);