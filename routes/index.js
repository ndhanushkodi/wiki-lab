var mongoose = require('mongoose');
var models = require('../models/topicModel');

var routes = {};

var Topic = models.Topic;

/*HOME DOES NOTHING REALLY BUT TELL YOU WHERE TO GO. 
this is just to check that this route works. The home page 
has search functionality, which is the post request sent to 
routes.search below
*/
routes.home = function(req, res){

	res.send("The search page and stuff");
};

/*This searches existing pages for the searched page.
The query is sent in req.body. */
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
