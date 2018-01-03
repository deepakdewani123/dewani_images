var mongoose = require("mongoose");
// var shortid = require('shortid');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
  imageId: {
    type: String,
    default: "",
    required: true
  },
  imageName: {
    type: String,
    default: "",
    required: true
  },
  imageURL: {
    type: String,
    default: "",
    required: true
  },
  albumName: {
    type: String,
    default: "",
    required: true
  },
  likeCount: {
    type: Number,
    default: 0
  },
  // isLiked: {
  //   type: Boolean,
  //   default: false
  // },
  views: {
    type: Number,
    default: 0
  },
  likedByUsers: {
    type: Array,
    default: []
  }
});

// create model if not exists.
var image = mongoose.model("Image", imageSchema);
module.exports = image;

// var mongoose = require("mongoose");
// // var shortid = require('shortid');
// var Schema = mongoose.Schema;

// var likeSchema = new Schema({
//   _id: '',
//   userId: { type: String, default: "", required: true },
//   imageId: { type: String, default: "", required: true },
// });

// // create model if not exists.
// var like = mongoose.model("Likes", imageSchema);
// module.exports = like;
