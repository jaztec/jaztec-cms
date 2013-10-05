var BaseController = require('./Base'),
    Json = require('../views/Json'),
    Service = require('../services/Pages');
/*
 * GET index page.
 */
module.exports = BaseController.extend({
    name: 'Pages',
    content: null,
    run: function(request, response, next) {
        var me = this,
            url = request.url.substr(request.url.lastIndexOf('/') + 1);
        me.getContent(request, url, function() {
            var view = new Json(response);
            view.render(me.content);
        });
    },
    getContent: function(request, url, callback) {
        var me = this,
            pages = new Service(request.db);
        me.content = {};
        pages.find(function(err, records) {
            if (records.length > 0) {
                me.content = records[0];
            } else {
                me.content = {Url: url};
            }
            callback();
        }, {Url: url});
    }
});
