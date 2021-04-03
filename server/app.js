const express = require('express');
const cryptoAPI = require('./crypto/cryptoRoutes');

const app = express();

app.use(express.json());

app.use('/hash', cryptoAPI);

module.exports = app;