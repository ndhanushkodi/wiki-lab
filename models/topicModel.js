//Data sent to each topic page
//img is a string of a url so the picture
//is not a file upload
var mongoose = require("mongoose");

var topicSchema = mongoose.Schema({
	name: String,
	img: String,
	description: String,
	dateAdded: Date,
	rules: String
});

module.exports = mongoose.model('Topic', topicSchema);

