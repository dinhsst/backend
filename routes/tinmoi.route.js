const express = require('express');
const router = express.Router();

const tinmoi_controller = require('../controllers/tinmoi.controller');

router.get('/tinmoi', tinmoi_controller.test);
module.exports = router;