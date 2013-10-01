/**
 * Variable to hold the different configuration settings.
 * 
 * @type {object} config
 */
var config = {
    local: {
        mode: 'local',
        port: 7522
    },
    staging: {
        mode: 'staging',
        port: 7522
    },
    production: {
        mode: 'production',
        port: 7522
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}