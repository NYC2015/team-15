/*Document provides the crud operations for the mongodb*/

var express = require('express');
var router = express.Router();


var mongoose = require( 'mongoose' );
var Post     = mongoose.model( 'Post' );
var Comment  = mongoose.model( 'Comment');
var DoctorClinic = mongoose.model('DoctorClinic', DoctorClinic);
var Clinic = mongoose.model('Clinic', Clinic);
var Doctor = mongoose.model('Doctor', Doctor);
var User = mongoose.model('User', User);



router.post('/upvote', function (req, res) {
	var id = req.param('id');
	// Post.update({ 'id': id }, { $inc: { points: 1 }}, res.send(200));

	Post.findByIdAndUpdate({ _id: id }, {$inc: {points:1}}, function (err, data) {

		res.send(err);
	});


	// Post.findOneAndUpdate({ 'id': id }, { $inc: { points: 1 }}, res.send(200));
	});


router.post('/newPost', function (req, res) {
	console.log("new post");
	var name = req.user.name.givenName + " " + req.user.name.familyName;
	var newPost = req.body;
	console.log(newPost);
	new Post({
		user : name,  
		content : newPost.data,  
		points : 0
		// comments : [Schema.Types.ObjectId]
	}).save(function (err, users, count){
		console.log(err);
		res.send(200);
	});
});

router.get('/getPosts', function (req, res, next) {
	Post.find({}, function (err, docs) {
		console.log(err);
		res.json(docs);
	});
});

router.post('/newComment', function(req, res, next) {
	var newComment = req.body;
	new Comment({
		user : newComment.user,
		content : newComment.content,
		points : newComment.points
	}).save(function(err, users, count) {
			res.send(200);
		});
});

router.post('/newClinic', function(req, res, next) {
	var newClinic = req.body;
	new Clinic({
		addr : newClinic.addr,
		specs : newClinic.specs
	}).save(function(err, users, count) {
			res.send(200);
		});
});

router.get('/getClinics', function (req, res, next) {
	Clinic.find({}, function (err, docs) {
		console.log(err);
		res.json(docs);
	});
});

router.post('/newDoctor', function(req, res, next) {
	var newDoctor = req.body;
	new Doctor({
		name : newDoctor.name,
		licenseNumber : newDoctor.licenseNumber,
		location : newDoctor.location,
		admin : newDoctor.admin
	}).save(function(err, users, count) {
			res.send(200);
		});
});

router.get('/getDoctors', function (req, res, next) {
	Doctor.find({}, function (err, docs) {
		console.log(err);
		res.json(docs);
	});
});

router.post('/newUser', function(req, res, next) {
	var newUser = req.body;
	new User({
		name : newUser.name,
		location : newUser.location,
		gender : newUser.gender,
		admin : newUser.admin
	}).save(function(err, users, count) {
			res.send(200);
		});
});

router.get('/getUsers', function (req, res, next) {
	User.find({}, function (err, docs) {
		console.log(err);
		res.json(docs);
	});
});



module.exports = router;