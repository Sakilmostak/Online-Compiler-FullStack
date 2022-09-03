const express = require('express');

const router = express.Router();

router.get('/compile', require('./compiler'));

module.exports = router;