var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Post = new Schema({  
    user: { type: String, required: true },  
    content: { type: String, required: true},  
    points: { type: Number, unique: false }
});


mongoose.model('Post', Post);  
mongoose.connect('mongodb://localhost/cfg');

