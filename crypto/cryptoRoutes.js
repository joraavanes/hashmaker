const router = require('express').Router();
const controller = require('./cryptoController');

router.post('/hash', controller.generateHash);

router.post('/pbkdf2', controller.pbkdf2);

router.post('/cipheriv', controller.encrypt);

module.exports = router;