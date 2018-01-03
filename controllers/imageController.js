"use strict";

const express = require("express");
const router = express.Router();

const apiObj = require("../middleware/imageMiddleware");
// const events = require('events');

// query sample request with GET
router.get("/images/album_number/:album_number", (req, res) => {
  // console.log(req);
  var albumNumber = req.params.album_number;
  // console.log("images");

  apiObj.getImagesForAlbumNumber(albumNumber, (err, result) => {
    if (err) {
      res.status(400);
      res.json({ status: 400, message: err });
    } else {
      res.status(200);
      res.json({ status: 200, message: "success", data: result });
    }
  });
});

router.get("/images/all", function(req, res) {
  // console.log("images");
  apiObj.getAllImages((err, result) => {
    if (err) {
      res.status(400);
      res.json({ status: 400, message: err });
    } else {
      res.status(200);
      res.json({ status: 200, message: "success", data: result });
    }
  });
});

router.post("/images/create", function(req, res) {
  // res.json({ message: 'hooray! welcome to our apisss!' });

  let body = req.body;
  apiObj.createImages(body, (err, result) => {
    if (err) {
      res.status(400);
      res.json({ status: 400, message: err });
    } else {
      res.status(200);
      res.json({ status: 200, message: "success", data: result });
    }
  });
});

router.put("/images/update/like", function(req, res) {
  // res.json({ message: 'hooray! welcome to our apisss!' });
  // console.log("body:");
  // console.log(req.body);
  // let imageId = req.body.imageId;
  // let imageLiked = req.body.isLiked;
  apiObj.updateNumberOfLikesForImage(req.body, (err, result) => {
    if (err) {
      res.status(400);
      res.json({ status: 400, message: err });
    } else {
      res.status(200);
      res.json({ status: 200, message: "success", data: result });
    }
  });
});

router.put("/images/update/unlike", function(req, res) {
  // res.json({ message: 'hooray! welcome to our apisss!' });

  // let imageId = req.body.imageId;
  // let imageLiked = req.body.isLiked;
  apiObj.updateNumberOfUnlikesForImage(req.body, (err, result) => {
    if (err) {
      res.status(400);
      res.json({ status: 400, message: err });
    } else {
      res.status(200);
      res.json({ status: 200, message: "success", data: result });
    }
  });
});

router.delete("/images/all", function(req, res) {
  apiObj.deleteAllImages((err, result) => {
    if (err) {
      res.status(400);
      res.json({ status: 400, message: err });
    } else {
      res.status(200);
      res.json({ status: 200, message: "success", data: result });
    }
  });
});

router.get("/albums/all", function(req, res) {
  // console.log("album");
  apiObj.getAllAlbums((err, result) => {
    if (err) {
      res.status(400);
      res.json({ status: 400, message: err });
    } else {
      res.status(200);
      res.json({ status: 200, message: "success", data: result });
    }
  });
});

router.post("/albums/create", function(req, res) {
  // res.json({ message: 'hooray! welcome to our apisss!' });

  let body = req.body;
  apiObj.createAlbums(body, (err, result) => {
    if (err) {
      res.status(400);
      res.json({ status: 400, message: err });
    } else {
      res.status(200);
      res.json({ status: 200, message: "success", data: result });
    }
  });
});

router.delete("/albums/all", function(req, res) {
  apiObj.deleteAllAlbums((err, result) => {
    if (err) {
      res.status(400);
      res.json({ status: 400, message: err });
    } else {
      res.status(200);
      res.json({ status: 200, message: "success", data: result });
    }
  });
});

module.exports = router;
