const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

// environment variables
const port = process.env.PORT;

// initializing
const app = express();

// importing routes
const main = require('./routes/main');

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// setting view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// routes
app.use('/', main);

// server
app.listen(port);
