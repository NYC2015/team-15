var express = require('express');
var router = express.Router();


var mongoose = require( 'mongoose' );
var Post     = mongoose.model( 'Post' );

router.post('/newPost', function(req, res, next) {
	var newPost = req.body;
	new Post({
		user : newPost.user,  
		content : newPost.content,  
		points : newPost.points
	}).save(function (err, users, count){
		res.send(200);
	});
});


router.get('/getPosts', function (req, res, next) {
	Post.find({}, function (err, docs) {
		console.log(err);
	    res.json(docs);
	});
});





module.exports = router;