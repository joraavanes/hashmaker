const express = require('express');
const cors = require('cors');
require('dotenv').config();

const cryptoAPI = require('./crypto/cryptoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', cryptoAPI);

module.exports = app;