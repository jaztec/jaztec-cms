/**
 * @param {object} db
 * @returns {void}
 */
module.exports = function(response) {
    this.response = response;
};

/**
 * The JSON view class.
 * 
 * @type {views.Json}
 */
module.exports.prototype = {
    extend: function(properties) {
        var child = module.exports;
        child.prototype = module.exports.prototype;
        for (var key in properties) {
            child.prototype[key] = properties[key];
        }
        return child;
    },
    render: function(data) {
        if (this.response) {
            this.response.setHeader("Content-Type", "application/json");
            this.response.send(JSON.stringify({data: data}));
        }
    }
};
