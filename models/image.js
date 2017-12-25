var mongoose = require("mongoose");
var shortid = require('shortid');
var Schema = mongoose.Schema;

var imageSchema  = new Schema({
    imageId : {type: String, default: shortid.generate()},
    imageName : {type: String, default: shortid.generate() + '.jpg'},
    imageURL : {type: String, default: 'https://s3-ap-southeast-1.amazonaws.com/kr-app-content/images/'},
    albumName: {type: String, default: ''},
    numberOfLikes: {type: Number, default: 0},
});


// create model if not exists.
var image = mongoose.model('Image', imageSchema);
module.exports = image;