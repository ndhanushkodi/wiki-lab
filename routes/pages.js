/* Lists all current pages in the db */

var mongoose = require('mongoose');
var models = require('../models/topicModel');

var routes = {};

var Topic = models.Topic;

routes.getPages = function(req, res) {

	// Finds all of the topics in the db
	Topic.find({}, function (err, topics) {
		if (err) {
			console.error("Couldn't find the topics", err);
			res.status(500).send("Couldn't find the topics");
		};
		//Sends an array of Topic objects
		res.send(topics);
	});

};

routes.dispTopic = function(req,res){
	//
}

module.exports = routes;