const http = require('http');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.get('/', (req, res, next) => {
    res.send('Hashmaker');
});

server.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`));