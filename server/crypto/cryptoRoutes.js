const router = require('express').Router();
const controller = require('./cryptoController');

router.post('/hash', controller.generateHash);

router.post('/pbkdf2', controller.pbkdf2);

module.exports = router;