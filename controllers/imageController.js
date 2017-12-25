'use strict';

const express = require('express');
const router = express.Router();

const apiObj = require('../middleware/imageMiddleware');
// const events = require('events');


// query sample request with POST
router.get('/images/album_number/:album_number', (req, res) => {
    // console.log(req);
    var albumNumber = req.params.album_number;
    console.log('images');

    apiObj.getImagesForAlbumNumber(albumNumber, (err, result) => {
        if (err) {
            res.status(400);
            res.json({ status: 400, message: err });
        }
        else {
            res.status(200);
            res.json({ status: 200, message: "success", Data: result });
        }
    })
})

router.get('/images/all', function(req, res) {
        
    console.log('images');
    apiObj.getAllImages((err, result) => {
        if (err) {
            res.status(400);
            res.json({ status: 400, message: err });
        }
        else {
            res.status(200);
            res.json({ status: 200, message: "success", Data: result });
        }
    })
})

router.post('/images/create', function(req, res) {
    // res.json({ message: 'hooray! welcome to our apisss!' });

    let body = req.body;
    apiObj.createImage(body, (err, result) => {
        if (err) {
            res.status(400);
            res.json({ status: 400, message: err });
        }
        else {
            res.status(200);
            res.json({ status: 200, message: "success", Data: result });
        }
    })
})

router.put('/images/update/like', function(req, res) {
    // res.json({ message: 'hooray! welcome to our apisss!' });

    let imageId = req.body.imageId;
    apiObj.updateNumberOfLikesForImage(imageId, (err, result) => {
        if (err) {
            res.status(400);
            res.json({ status: 400, message: err });
        }
        else {
            res.status(200);
            res.json({ status: 200, message: "success", Data: result });
        }
    })
})

router.delete('/images/all', function(req, res) {
    apiObj.deleteAllImages((err, result) => {
        if (err) {
            res.status(400);
            res.json({ status: 400, message: err });
        }
        else {
            res.status(200);
            res.json({ status: 200, message: "success", Data: result });
        }
    })
});



module.exports = router;
