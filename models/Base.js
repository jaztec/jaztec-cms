var _ = require("underscore");
/**
 * The base model class.
 * 
 * @type {models.Base}
 */
module.exports = function() {};
module.exports.prototype = {
    extend: function(properties) {
        var child = module.exports;
        child.prototype = module.exports.prototype;
        for(var key in properties) {
            child.prototype[key] = properties[key];
        }
        return child;
    }
};