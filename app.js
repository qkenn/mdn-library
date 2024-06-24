const express = require('express');
const main = require('./routes/main');

const port = process.env.PORT;

const app = express();

app.use('/', main);

app.listen(port);
