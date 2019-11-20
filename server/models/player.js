const mongoose = require('mongoose')

const Schema = mongoose.Schema
const playerSchema = new Schema({
   
    name: String,
	position: Number,
	rating: Number,
    country: String,
    firstname: String,
    lastname: String,
    runscored: String,
    topscore: String,
	fours:String,
	sixes:String,
	average:String,
    strikerate:String

})
//exporting module like the     module name,schema created,collection name in MongoDB
module.exports = mongoose.model('player',playerSchema,'Players')