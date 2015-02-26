//var path = require('path');

var mongoose = require('mongoose');
var models = require('../models/topicModel');

var routes = {};

var Topic = models.Topic;

routes.addTopic = function(req,res){
	//var name = req.body.name;
	var name = 'Pirates';
	var img = 'url/ugly.png';
	var description = 'Dress up and stuff';
	var dateAdded = new Date();
	dateAdded = dateAdded.getDate();
	var rules = 'do this do that'

	var newTopic = new Topic({name:name, 
		img:img, 
		description:description,
		dateAdded:dateAdded,
		rules:rules});

	newTopic.save(function(err){
		if(err){
			console.error('Cant add topic');
			res.status(500).send("Couldn't add topic");
		}
		console.log(newTopic);
		res.json(newTopic);
		//res.send(newTopic);
	});
}


module.exports = routes;