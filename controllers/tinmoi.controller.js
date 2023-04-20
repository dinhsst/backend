const logger = require('../winston');
exports.test = function (req, res) {
    logger.error(new Error('Location => ' + req.query.location));
    res.send("");
};