var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.user == null){
	  res.render('login.html', { user: req.user });
	} else {
	  res.render('index.html', { user: req.user });

	}

});


module.exports = router;
