var _ = require("underscore");
/**
 * Base type for all MvC controllers.
 * 
 * @type {controllers.Base}
 */
module.exports = {
	name: "base",
	extend: function(child) {
		return _.extend({}, this, child);
	},
	run: function(req, res, next) {

	}
};