/**
 * Return jade rendered AngularJS partials.
 * 
 * @param {object} req
 * @param {object} res
 * @returns {void}
 */
exports.fetch = function(req, res) {
    res.render();
};

var BaseController = require('./Base'),
    View = require('../views/Base');
/*
 * GET partials page.
 */
module.exports = BaseController.extend({
    name: 'Partials',
    run: function(request, response, next) {
        var view = new View('res', 'partials/' + request.params.name);
        view.render();
    }
});
