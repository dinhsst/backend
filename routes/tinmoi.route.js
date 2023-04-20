const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const tinmoi_controller = require('../controllers/tinmoi.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/tinmoi', tinmoi_controller.test);
module.exports = router;