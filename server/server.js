//params
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var rootPath = "../client/index.html"

//create instance of express server
var app = express();

//middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'))

//eventually might want to add some routes

//direct server to listen on port 3000
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("weather app listening on port: " +  port);
});

//export app, which is now listening on port 3000
module.exports = app;
