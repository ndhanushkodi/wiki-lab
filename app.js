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
app.get("/", index.home);

app.get("/pages", pages.getPages);

app.get("/pages/:topic", pages.dispTopic);

app.post("/editTopic", edit.editTopic);

app.post("/addTopic", add.addTopic);

mongoose.connect(process.env.MONGOURI || 'mongodb://localhost/test');
var PORT = 3000;

app.listen(process.env.PORT || PORT);