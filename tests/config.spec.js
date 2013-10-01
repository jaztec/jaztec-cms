/**
 * Unit tests for the configuration.
 */
describe("Configuration tests", function() {
    it ("should load local configuratons", function (next) {
        var config = require('../config')();
        expect(config.mode).toBe('local');
        next();
    });
    it ("should load staging configuratons", function (next) {
        var config = require('../config')('staging');
        expect(config.mode).toBe('staging');
        next();
    });
    it ("should load local configuratons", function (next) {
        var config = require('../config')('production');
        expect(config.mode).toBe('production');
        next();
    });
});