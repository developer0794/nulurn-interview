/* ---------------------------------------------------------------
** Variable declaration
------------------------------------------------------------------*/
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
//require('./api/data/mysql-connection.js')

/* ---------------------------------------------------------------
** ** Declarations of routes
------------------------------------------------------------------*/
var appRoutes = require('./app/index.js');

/* ---------------------------------------------------------------
** Express Setting
---------------------------------------------------------------- */
var app = express();
// app.engine('html', require('ejs').renderFile)
// app.set('view engine', 'html');
// app.set('views', 'dist')
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  );
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});
/* ---------------------------------------------------------------
** Set Routes
---------------------------------------------------------------- */
// app.use(cors())
app.options('*', cors());
app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.send('ok');
});

module.exports = app;
