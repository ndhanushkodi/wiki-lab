var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var exphbs  = require("express-handlebars");
var mongoose = require("mongoose");

var index = require("./routes/index");
var edit = require("./routes/edit");
var add = require("./routes/add");
var pages = require("./routes/pages");


var app = express();

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


//ROUTES!!!!!!!!!!!
//api
app.get("/api/", index.home);

app.get("/api/pages", pages.getPages);

app.get("/api/pages/:topic", pages.dispTopic);

app.post("/api/editTopic", edit.editTopic);

app.post("/api/addTopic", add.addTopic);

app.post("/api/search", index.search);

/*app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});*/

mongoose.connect(process.env.MONGOURI || 'mongodb://localhost/test');
var PORT = 3000;

app.listen(process.env.PORT || PORT);