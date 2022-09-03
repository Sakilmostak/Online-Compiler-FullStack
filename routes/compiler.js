const express = require('express');

//extracting the router moudule
const router = express.Router();

const CompilerController = require('../controllers/compiler');

router.post('/',CompilerController.compileCode);

module.exports = router;