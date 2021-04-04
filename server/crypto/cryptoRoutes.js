const router = require('express').Router();
const controller = require('./cryptoController');

router.post('/', controller.generateHash);

router.post('/pbkdf2', controller.pbkdf);

module.exports = router;