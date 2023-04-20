const logger = require('../winston');
exports.test = function (req, res) {
    logger.error(new Error('Location => ' + req.query.lat + ',' + req.query.lng));
    res.send("");
};