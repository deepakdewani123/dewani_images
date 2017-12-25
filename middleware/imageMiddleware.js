const Api = require('../helper/imageHelper');


const getImagesForAlbumNumber = (albumNumber, callback) => {
    let apiObj = new Api;

    apiObj.on('error', (err) => {
        callback(err, null);
    });

    apiObj.on('success', (result) => {
        callback(null, result);
    });

    apiObj.readImagesForAlbumNumber(albumNumber);
}

const getAllImages = (callback) => {
    let apiObj = new Api;

    apiObj.on('error', (err) => {
        callback(err, null);
    });

    apiObj.on('success', (result) => {
        callback(null, result);
    });

    apiObj.readAllImages();
}

const createImages = (body, callback) => {
    let apiObj = new Api;

    apiObj.on('error', (err) => {
        callback(err, null);
    });

    apiObj.on('success', (result) => {
        callback(null, result);
    });

    apiObj.insertImages(body);
}

const deleteAllImages = (callback) => {
    let apiObj = new Api;

    apiObj.on('error', (err) => {
        callback(err, null);
    });

    apiObj.on('success', (result) => {
        callback(null, result);
    });

    apiObj.removeAllImages();
}
const updateNumberOfLikesForImage = (imageId, callback) => {
    let apiObj = new Api;

    apiObj.on('error', (err) => {
        callback(err, null);
    });

    apiObj.on('success', (result) => {
        callback(null, result);
    });

    apiObj.updateLikesForImage(imageId);
}



module.exports = {
    getImagesForAlbumNumber,
    getAllImages,
    createImages,
    deleteAllImages,
    updateNumberOfLikesForImage
}