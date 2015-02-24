/* Allows user to edit an existing page in the wiki */

var mongoose = require('mongoose');
var models = require('../models/topicModel');

var routes = {};

var Topic = models.Topic;

routes.editTopic = function(req, res) {
// Find an existing page and make edit based on user input

	// these values are for testing only
	// TODO: update these to req.body once post requests working
	var topicName = 'test';
	var newDescription = 'Dummy Description';

	//Finds the topic by id and updates the description
	Topic.findOneAndUpdate({ name: topicName}, {description: newDescription}, function (err, editedTopic){
		if (err) {
			console.error("Couldn't find and update the topic ", err);
			res.status(500).send("Couldn't find and update the topic!");
		};
		console.log(editedTopic);
		res.send(editedTopic);
	});
};

module.exports = routes;