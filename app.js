const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'hashmaker-client', 'build')));

app.use('/', require('./crypto/cryptoRoutes'));

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'hashmaker-client', 'build', 'index.html'));
});

module.exports = app;