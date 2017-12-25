const events = require('events'),
    request = require('request'),
    querystring = require('querystring'),
    Image = require('../models/image');


class imageApi extends events {
    constructor() {
        super();
    }

    readImagesForAlbumNumber(albumName) {
        let self = this;
        Image.find({"albumName": albumName}, function (err, images) {
            if (err) {
                // res.send(err);
                self.emit('error', { error: 'error' });
            }
            else {
                if (images.length == 0) {
                    self.emit('success', {"message": "No images found for the album name"});
                } else {
                    self.emit('success', images);
                }
            }
        });
    }

    readAllImages() {
        let self = this;
        Image.find(function (err, images) {
            if (err) {
                // res.send(err);
                self.emit('error', { error: 'error' });
            }
            else {
                // res.json(images);
                
                if (images.length == 0) {
                    self.emit('success', {"message": "No images found"});
                } else {
                    self.emit('success', images);
                }
                
            }
        });
    }

    insertImage(body) {
        let self = this;
        // create a new instance of the Image model
        var image = new Image();
        image.imageId = body.imageId;  // set the bears name (comes from the request)
        image.imageName = body.imageName;
        image.imageURL = body.imageURL;
        image.albumName = body.albumName;

        // save the bear and check for errors
        image.save(function (err) {
            if (err) {
                // res.send(err);
                // res.json({ message: 'error!' });
                self.emit('error', { error: 'error' });
            }
            else {
                // res.json({ message: 'Image created!' });
                self.emit('success', { message: 'Image created!' });
            }
        });
    }

    removeAllImages() {
        let self = this;
        // create a new instance of the Image model
        Image.remove({
        }, function(err) {
            if (err) {
                // res.send(err);
                self.emit('error', { error: 'error' });
            }
            else {
                self.emit('success', { message: 'Successfully deleted all images' });
            }
        });
    }

    updateLikesForImage(imageId) {
        let self = this;
        // create a new instance of the Image model

        Image.update(
            {"imageId": imageId},
            {$inc: {"numberOfLikes": 1}},
            {new: true},
            function(err) {
            if (err) {
                // res.send(err);
                self.emit('error', { error: 'error' });
            }
            else {
                self.emit('success', { message: `Successfully updated number of likes for ${imageId}` });
            }
        });
    }
}

module.exports = imageApi;