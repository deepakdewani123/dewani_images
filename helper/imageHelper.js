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
                    self.emit('success', {"message": "No images found for the album number"});
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
            image.save(function (err) {
                if (err) {
                    self.emit('error', { error: 'error' });
                }
                // else {
                    // res.json({ message: 'Image created!' });
                    // self.emit('success', { message: `${body.images.length} Images created!` });
                // }
            });
        }
        self.emit('success', { message: `${body.images.length} Images created!` });
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
                self.emit('success', { message: `Successfully updated number of likes for imageId: ${imageId}` });
            }
        });
    }
}

module.exports = imageApi;