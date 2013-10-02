/**
 * Return jade rendered AngularJS partials.
 * 
 * @param {object} req
 * @param {object} res
 * @returns {void}
 */
exports.fetch = function(req, res) {
    res.render('partials/' + req.params.name);
};