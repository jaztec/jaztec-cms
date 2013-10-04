var BaseController = require('./Base'),
    View = require('../views/Base');
/*
 * GET index page.
 */
module.exports = BaseController.extend({
    name: 'Index',
    run: function(request, response, next) {
        var view = new View('res', 'index');
        view.render({
            title: 'Jaztec CMS'
        });
    }
});
