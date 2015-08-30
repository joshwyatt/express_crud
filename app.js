var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var movies = require('./routes/movie');
var app = express();

var dbName = 'movieDB';
var dbAddress = process.env.MONGO_PORT_27017_TCP_ADDR;
var dbPort = process.env.MONGO_PORT_27017_TCP_PORT;
var connectionString = 'mongodb://' + dbAddress + ':' + dbPort + dbName;

// var connectionString = process.env.MONGO_PORT + dbName;
// var connectionString = 'mongodb://localhost:27017' + dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', movies);

module.exports = app;

