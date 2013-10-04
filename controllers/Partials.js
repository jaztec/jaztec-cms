var BaseController = require('./Base'),
    View = require('../views/Base');
/*
 * GET partials page.
 */
module.exports = BaseController.extend({
    name: 'Partials',
    run: function(request, response, next) {
        var view = new View(response, 'partials/' + request.params.name);
        view.render();
    }
});
