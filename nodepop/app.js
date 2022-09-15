var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./lib/connectMongoose');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Rutas del API
 */

app.use('/api/anuncios', require('./routes/api/anuncios'))

/**
 * Rutas de la APP
 */
app.use('/',      require('./routes/index'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  // En caso de que una peticion al API de un error responderemos con un JSON.
  if(req.originalUrl.startsWith('/api')) {
    res.json( {err: `Se ha producido un ERROR ${err.message} ${err.status} ` } );
    return;
  };



  // render the error page
  
  res.render('error');
});

module.exports = app;
