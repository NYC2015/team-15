/*Document is required for authentication via facebook*/

var express = require('express');
var router = express.Router();
var passport = require('passport');


/*Using pasport middle ware to get certain data from FB*/
router.get('/facebook',
  passport.authenticate('facebook', {scope : ['email', 'user_location', 'user_hometown']}),
  function(req, res){
  });


/*Callback that is called when login completes*/
router.get('/facebook/callback', 
  passport.authenticate('facebook', {failureRedirect: '/login'}),
  function(req, res) {
    res.redirect('/');
  });


/*logs out the user (handled by passport)*/
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

/*Middleware to ensure that the user is authenticated*/
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/')
}


module.exports = router;

