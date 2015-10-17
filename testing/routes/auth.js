var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/facebook',
  passport.authenticate('facebook', {scope : ['email', 'user_location', 'user_hometown']}),
  function(req, res){
  });

router.get('/facebook/callback', 
  passport.authenticate('facebook', {failureRedirect: '/login'}),
  function(req, res) {
    console.log(req);
    res.redirect('/');
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/')
}


module.exports = router;

