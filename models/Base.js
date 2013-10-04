var _ = require("underscore");
/**
 * The base model class.
 * 
 * @type {models.Base}
 */
module.exports = {
    extend: function(child) {
        return _.extend({}, this, child);
    }
};