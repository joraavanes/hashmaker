const express = require('express');
require('dotenv').config();

const cryptoAPI = require('./crypto/cryptoRoutes');

const app = express();

app.use(express.json());

app.use('/', cryptoAPI);

module.exports = app;