var mongoose = require('mongoose');
var routes = {};

//HOME DOES NOTHING REALLY BUT TELL YOU WHERE TO GO
routes.home = function(req, res){
	res.render("home");
}

module.exports = routes;
