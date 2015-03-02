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

	// Get the id of the thing to edit from the url
	var editId = req.params.topic;

	//Finds the topic by id and updates the description, rules, img, etc.
	//TODO: only update the ones the user actually changed
	var query = {_id : editId};
	var update = {description: newDescription, img: newImg, rules: newRules};
	Topic.findOneAndUpdate(query, update, function (err, editedTopic){
		if (err) {
			console.error("Couldn't find and update the topic ", err);
			res.status(500).send("Couldn't find and update the topic!");
		};
		console.log(editedTopic);
		res.send(editedTopic);
	});
};

module.exports = routes;