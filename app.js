
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var sys = require('sys');
var mongoClient = require('mongodb').MongoClient;

/**
 * Controllers.
 */
var Index = require('./controllers/Index');
var Partials = require('./controllers/Partials');
var Pages = require('./controllers/Pages');

// Configuration
var config = require('./config')();

var app = express();

// all environments
app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

// The MongoDB is leading for the application. It will
// initiate the entire application.
mongoClient.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/jaztec-cms', function(err, db) {
    if (err) {
        sys.log('No MongoDB has been found');
    } else {
        /**
         * Injects the MongoDB connection into the request object.
         * 
         * @param {object} request
         * @param {object} response
         * @param {fn} next
         * @returns {void}
         */
        var injectDb = function(request, response, next) {
            request.db = db;
            next();
        };
        /**
         * Set the routes.
         */
        console.log('Setting up routes...');
        app.all('/', injectDb, function(request, response, next){
            Index.run(request, response, next);
        });
        app.all('/partials/:name', injectDb, function(request, response, next){
            Partials.run(request, response, next);
        });
        app.all('/pages/:url', injectDb, function(request, response, next){
            Pages.run(request, response, next);
        });
        /**
         * Start the server.
         */
        console.log('Start server...');
        http.createServer(app).listen(config.port, function() {
            console.log('Server started and listening on port ' + config.port);
        });
    }
});
