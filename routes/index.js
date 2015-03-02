var mongoose = require('mongoose');
var models = require('../models/topicModel');

var routes = {};

var Topic = models.Topic;

//HOME DOES NOTHING REALLY BUT TELL YOU WHERE TO GO
routes.home = function(req, res){
//MAke this into search functionality 
	res.send("The search page and stuff");
};

routes.search = function(req, res) {
	var queryName = req.body.query;
	console.log(queryName);

	Topic.find({name : queryName}, function(err, topics) {
		if (err) {
			console.error("Couldn't find any topics ", err);
			res.status(500).send("Couldn't find any topics matching that query");
		};
		console.log(topics);
		res.send(topics);
	});
};

module.exports = routes;
