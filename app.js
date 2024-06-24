const express = require('express');
const path = require('path');
const main = require('./routes/main');

const port = process.env.PORT;

const app = express();

// setting view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', main);

app.listen(port);
