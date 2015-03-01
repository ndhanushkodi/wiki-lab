var mongoose = require('mongoose');
var routes = {};

//HOME DOES NOTHING REALLY BUT TELL YOU WHERE TO GO
routes.home = function(req, res){
//MAke this into search functionality 
	res.send("The search page and stuff");
}

module.exports = routes;
