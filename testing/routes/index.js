var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { user: req.user });
});

router.get('/testing', function (req, res){
	res.send(req.user);
});

module.exports = router;
