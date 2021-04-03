const router = require('express').Router();
const controller = require('./cryptoController');

router.post('/', controller.generateHash);

module.exports = router;