var mongoose = require("mongoose");
// var shortid = require('shortid');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
  imageId: { type: String, default: "" },
  imageName: { type: String, default: "" },
  imageURL: { type: String, default: "" },
  albumName: { type: String, default: "" },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 }
});

// create model if not exists.
var image = mongoose.model("Image", imageSchema);
module.exports = image;
