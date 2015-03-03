/* Allows user to add a new page to the wiki*/

var mongoose = require('mongoose');
var models = require('../models/topicModel');

var routes = {};

var Topic = models.Topic;

/*form data comes in the req.body and this function 
saves the new wiki data to the database*/
routes.addTopic = function(req,res){
	console.log("Got to addTopic!");

	var name = req.body.name;
	var img = req.body.img;
	var description = req.body.description;
	var dateAdded = new Date();
	var rules = req.body.rules;

	var newTopic = new Topic({name:name, 
		img:img, 
		description:description,
		dateAdded:dateAdded,
		rules:rules});
	//save added topic to database
	newTopic.save(function(err){
		if(err){
			console.error('Cant add topic');
			res.status(500).send("Couldn't add topic");
		}
		console.log(newTopic);
		//res.json(newTopic);
		res.send(newTopic);
	});
}


module.exports = routes;