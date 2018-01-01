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

const createAlbums = (body, callback) => {
    let apiObj = new Api;

    apiObj.on('error', (err) => {
        callback(err, null);
    });

    apiObj.on('success', (result) => {
        callback(null, result);
    });

    apiObj.insertAlbums(body);
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

const updateNumberOfUnlikesForImage = (imageId, callback) => {
    let apiObj = new Api;

    apiObj.on('error', (err) => {
        callback(err, null);
    });

    apiObj.on('success', (result) => {
        callback(null, result);
    });

    apiObj.updateUnlikesForImage(imageId);
}

const getAllAlbums = (callback) => {
    let apiObj = new Api;

    apiObj.on('error', (err) => {
        callback(err, null);
    });

    apiObj.on('success', (result) => {
        callback(null, result);
    });

    apiObj.readAllAlbums();
}



module.exports = {
    getImagesForAlbumNumber,
    getAllImages,
    createImages,
    deleteAllImages,
    updateNumberOfLikesForImage,
    updateNumberOfUnlikesForImage,
    getAllAlbums,
    createAlbums
}