
//Require the db connection
require( './db' );

//required NPM modules 
var express = require('express');
var path = require('path');
var FacebookStrategy = FacebookStrategy = require('passport-facebook').Strategy;
var passport = require('passport');
var session = require('express-session')
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//facebook credentials 
var FACEBOOK_APP_ID = '1622468598005411';
var FACEBOOK_APP_SECRET = "7b33ff4390aed0a93e2fda62991fd306";


//locating the routes 
var routes = require('./routes/index');
var api = require('./routes/api');
var auth = require('./routes/auth');

var app = express();


//serializeing user for cookie purposes 
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


//using facebook login as a middleware
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields : ['email', 'location', 'hometown', 'name']
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      console.log(profile);
      return done(null, profile);
    });
  }
));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'such secret wow' }));


//initialize sessions 
app.use(passport.initialize());
app.use(passport.session());


//set up top level routing
app.use('/auth', auth);
app.use('/api', api);
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.html', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error.html', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
