const router = require('express').Router();
const controller = require('./cryptoController');

router.post('/hash', controller.generateHash);

module.exports = router;