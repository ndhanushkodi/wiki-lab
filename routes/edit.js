/* Allows user to edit an existing page in the wiki */

var mongoose = require('mongoose');
var models = require('../models/topicModel');

var routes = {};

var Topic = models.Topic;

routes.editTopic = function(req, res) {
// Find an existing page and make edit based on user input

	// Get values from the user post
	var topicName = req.body.name;
	var newDescription = req.body.description;
	var newImg = req.body.img;
	var newRules = req.body.rules;

	//Finds the topic by id and updates the description

	//TODO: only update the ones the user actually changed
	Topic.findOneAndUpdate({ name: topicName}, {description: newDescription}, {img: newImg}, {rules: newRules}, function (err, editedTopic){
		if (err) {
			console.error("Couldn't find and update the topic ", err);
			res.status(500).send("Couldn't find and update the topic!");
		};
		console.log(editedTopic);
		res.send(editedTopic);
	});
};

module.exports = routes;