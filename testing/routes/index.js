var express = require('express');
var router = express.Router();
var text = require('textbelt');

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.user == null){
	  res.render('login.html', { user: req.user });
	} else {
	  res.render('index.html', { title: 'Express' });

	}

});



router.get('/hellos', function(req, res){
	text.sendText('3054092222', 'does this shit work?!?!', 'us', function(done, err){
		var obj = {};
		obj.done = done;
		obj.err = err;

		res.send(obj);
	});
});

module.exports = router;
