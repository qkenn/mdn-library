const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

// Importing routers
const indexRouter = require('./routes/index');
const bookRouter = require('./routes/bookRouter');
const authorRouter = require('./routes/authorRouter');
const bookInstanceRouter = require('./routes/bookInstanceRouter');
const genreRouter = require('./routes/genreRouter');

// environment variables
const port = process.env.PORT;
const mongoDB = process.env.MONGODB_URI;

// initializing
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('atlas connected');
}

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
app.use('/', indexRouter);
app.use('/catalog/books', bookRouter);
app.use('/catalog/authors', authorRouter);
app.use('/catalog/bookinstances', bookInstanceRouter);
app.use('/catalog/genres', genreRouter);

// server
app.listen(port);
