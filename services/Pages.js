var Service = require('./Base');
var BaseService = new Service({});
/**
 * @type @exp;BaseService@call;extend
 */
module.exports = BaseService.extend({
    collection: function() {
        if (this._collection) {
            return this._collection;
        }
        return this._collection = this.db.collection('Pages');
    }
});
