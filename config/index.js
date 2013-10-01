/**
 * Variable to hold the different configuration settings.
 * 
 * @type {object} config
 */
var config = {
    local: {
        mode: 'local',
        port: 7522,
        mongo: {
            host: '127.0.0.1',
            port: '27017'
        }
    },
    staging: {
        mode: 'staging',
        port: 7522,
        mongo: {
            host: '127.0.0.1',
            port: '27017'
        }
    },
    production: {
        mode: 'production',
        port: 7522,
        mongo: {
            host: '127.0.0.1',
            port: '27017'
        }
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}