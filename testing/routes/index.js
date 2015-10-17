var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.user == null){
	  res.render('login.html', { title: 'Express' });
	} else {
	  res.render('index.html', { title: 'Express' });

	}

});

module.exports = router;
