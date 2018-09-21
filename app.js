var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var apiRouter = require('./routes/patients');

var uri = process.env.MONGOLAB_URI || 'mongodb://localhost/health-e-net';

var mongoose = require('mongoose');
mongoose.connect(uri, { promiseLibrary: require('bluebird') })
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

var app = express();

app.use(session({
  secret: 'secret_key',
  cookie: { maxAge: 1209600000 },

  // store: new MongoStore({
  //   'db': 'meetupplanner'
  // }),

  store: new MongoStore({
    url: process.env.MONGOLAB_URI
  }),

  resave: true,
  saveUninitialized: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/health-e-net')));
app.use('/', express.static(path.join(__dirname, 'dist/health-e-net')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

module.exports = app;