var mongoose = require("mongoose");
// var shortid = require('shortid');
var Schema = mongoose.Schema;

var albumSchema  = new Schema({
    name : {type: String, default: ''},
    coverImageURL : {type: String, default: ''},
    coverTitle : {type: String, default: ''}
});


// create model if not exists.
var album = mongoose.model('Album', albumSchema);
module.exports = album;