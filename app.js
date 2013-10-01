
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./controllers');
var user = require('./controllers/user');
var http = require('http');
var path = require('path');
var mongoClient = require('mongodb').MongoClient;

// Configuration
var config = require('./config')();

var app = express();

// all environments
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

// The MongoDB is leading for the application. It will
// initiate the entire application.
mongoClient.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/jaztec-cms', function(err, db) {
    if (err) {
        console.log('No MongoDB has been found')
    } else {
        http.createServer(app).listen(config.port, function() {
            console.log('Express server listening on port ' + config.port);
        });
    }
})
