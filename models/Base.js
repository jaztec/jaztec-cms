/**
 * The base model class.
 */

/**
 * @param {object} db
 * @returns {void}
 */
module.exports = function(db) {
    this.db = db;
};

module.exports.prototype = {
    extend: function(properties) {
        var child = module.exports;
        child.prototype = module.exports.prototype;
        for (var key in properties) {
            child.prototype[key] = properties[key];
        }
        return child;
    },
    setDb: function(db) {
        this.db = db;
    },
    collection: function() {
        if (this._collection) {
            return this._collection;
        }
        return this._collection = this.db.collection('jaztec-cms-content');
    }
};