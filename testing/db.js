/*

This document is responsible for:
    1) setting up the mongo schema 
    2) connecting to the DB 

The document will create Post, Comments, Clinic
Doctor, User models and DoctorClinic association

*/



var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Post = new Schema({
    user: { type: String, required: true },  
    content: { type: String, required: true},  
    points: { type: Number, unique: false }
    // comments: [Schema.Types.ObjectId]
});

var Comment = new Schema({
    user: { type: String, required: true},
    content: { type: String, required: true},
    postID : { type: Schema.Types.ObjectId, required: true}
    // points: { type: Number, unique: false }
});

var DoctorClinic = new Schema({
    ClinicID: { type: Schema.Types.ObjectId, required: true},
    DoctorID: { type: Schema.Types.ObjectId, required: true}
});

var Clinic = new Schema({
    addr: { type: String, required: true},
    specs: { type: String, required: true}
});

var Doctor = new Schema({
    name: { type: String, required: true},
    licenseNumber: { type: Number, required: true},
    location: { type: String, required: true},
    admin: { type: Boolean, required: true}
});

var User = new Schema({
    name: { type: String, required: true},
    location: { type: String, required: true},
    gender: {type: String, required: true},
    admin: { type: Boolean, required: true}
});


mongoose.model('Post', Post);
mongoose.model('Comment', Comment);
mongoose.model('DoctorClinic', DoctorClinic);
mongoose.model('Clinic', Clinic);
mongoose.model('Doctor', Doctor);
mongoose.model('User', User);
mongoose.connect('mongodb://localhost/cfg');

