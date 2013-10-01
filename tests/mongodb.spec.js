/**
 * Unit tests for the MongoDB server.
 */
describe("MongoDB server", function() {
    it("Test for a running local server", function(next) {
        var config = config = require('../config')();
        var mongoClient = require('mongodb').MongoClient;
        mongoClient.connect('mongodb://' +
            config.mongo.host + ':' +
            config.mongo.port +
            '/jaztec-cms', function(err, db)
        {
            expect(err).toBe(null);
            next();
        });
    });
    it("Test for a running staging server", function(next) {
        var config = config = require('../config')('staging');
        var mongoClient = require('mongodb').MongoClient;
        mongoClient.connect('mongodb://' +
            config.mongo.host + ':' +
            config.mongo.port +
            '/jaztec-cms', function(err, db)
        {
            expect(err).toBe(null);
            next();
        });
    });
    it("Test for a running production server", function(next) {
        var config = config = require('../config')('production');
        var mongoClient = require('mongodb').MongoClient;
        mongoClient.connect('mongodb://' +
            config.mongo.host + ':' +
            config.mongo.port +
            '/jaztec-cms', function(err, db)
        {
            expect(err).toBe(null);
            next();
        });
    });
});
