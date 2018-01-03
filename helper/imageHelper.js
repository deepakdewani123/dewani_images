const events = require("events"),
  request = require("request"),
  querystring = require("querystring"),
  Image = require("../models/image"),
  Album = require("../models/album");

class imageApi extends events {
  constructor() {
    super();
  }

  readImagesForAlbumNumber(albumName) {
    let self = this;

    Image.find({
      albumName: albumName
    })
      .exec()
      .then(images => {
        if (images.length == 0) {
          self.emit("success", {
            message: "No images found for the album number"
          });
        } else {
          self.emit("success", {
            images: images
          });
        }
      })
      .catch(err => {
        self.emit("error", {
          message: err.message
        });
      });
  }

  readAllImages() {
    let self = this;
    Image.find(function(err, images) {
      if (err) {
        // res.send(err);
        self.emit("error", {
          message: err.message
        });
      } else {
        // res.json(images);

        if (images.length == 0) {
          self.emit("success", {
            message: "No images found"
          });
        } else {
          self.emit("success", images);
        }
      }
    });
  }

  insertImages(body) {
    let self = this;
    // create a new instance of the Image model
    for (let i of body.images) {
      var image = new Image();
      image.imageId = i.imageId;
      image.imageName = i.imageName;
      image.imageURL = i.imageURL;
      image.albumName = i.albumName;

      // save the data and check for errors
      image.save(function(err) {
        if (err) {
          self.emit("error", {
            message: err.message
          });
        }
      });
    }
    self.emit("success", {
      message: `${body.images.length} Images created!`
    });
  }

  insertAlbums(body) {
    let self = this;
    // create a new instance of the Image model
    for (let i of body.albums) {
      var album = new Album();
      album.name = i.name;
      album.coverImageURL = i.coverImageURL;
      album.coverTitle = i.coverTitle;
      album.loaded = i.loaded;
      // save the data and check for errors
      album.save(function(err) {
        if (err) {
          self.emit("error", {
            message: err.message
          });
        }
      });
    }
    self.emit("success", {
      message: `${body.albums.length} Albums created!`
    });
  }

  removeAllImages() {
    let self = this;
    // create a new instance of the Image model
    Image.remove({}, function(err) {
      if (err) {
        // res.send(err);
        self.emit("error", {
          message: err.message
        });
      } else {
        self.emit("success", {
          message: "Successfully deleted all images"
        });
      }
    });
  }

  updateLikesForImage(body, username) {
    let self = this;
    // create a new instance of the Image model
    // console.log(body);
    Image.findOneAndUpdate(
      {
        imageId: body.imageId
      },
      {
        $inc: {
          likeCount: 1
        },
        // $set: { isLiked: body.isLiked },
        $push: {
          likedByUsers: body.username
        }
      },
      {
        new: true
      },
      function(err, doc) {
        if (err) {
          // res.send(err);
          self.emit("error", {
            message: err.message
          });
        } else {
          self.emit("success", {
            message: `Successfully incremented number of likes for imageId: ${
              body.imageId
            }`,
            document: doc
          });
        }
      }
    );
  }

  updateUnlikesForImage(body, username) {
    let self = this;
    // create a new instance of the Image model

    Image.findOneAndUpdate(
      {
        imageId: body.imageId
      },
      {
        $inc: {
          likeCount: -1
        },
        // $set: {
        //   isLiked: body.isLiked
        // }
        $pull: {
          likedByUsers: body.username
        }
      },
      {
        new: true
      },
      function(err, doc) {
        if (err) {
          // res.send(err);
          self.emit("error", {
            message: err.message
          });
        } else {
          self.emit("success", {
            message: `Successfully decremented number of likes for imageId: ${
              body.imageId
            }`,
            document: doc
          });
        }
      }
    );
  }

  readAllAlbums() {
    let self = this;
    Album.find(function(err, albums) {
      if (err) {
        // res.send(err);
        self.emit("error", {
          message: err.message
        });
      } else {
        // res.json(images);

        if (albums.length == 0) {
          self.emit("success", {
            message: "No albums found"
          });
        } else {
          self.emit("success", albums);
        }
      }
    });
  }

  removeAllAlbums() {
    let self = this;
    // create a new instance of the Image model
    Album.remove({}, function(err) {
      if (err) {
        // res.send(err);
        self.emit("error", {
          message: err.message
        });
      } else {
        self.emit("success", {
          message: "Successfully deleted all albums"
        });
      }
    });
  }
}

module.exports = imageApi;
