const mongoose = require('mongoose');           // Mongoose Dependency
const Grid = require('gridfs-stream');          // GridFS Stream Dependency
const GridFSStorage = require('multer-gridfs-storage');
const multer = require('multer');
const crypto = require('crypto');
const config = require('./config')
const path = require('path');

/**
 * Error Messages
 * @type {{SERVER_ERROR_500: string, BAD_REQUEST_400: string, INVALID_TOKEN: string, NOT_AUTHORIZED_401: string, NOT_FOUND_404: string}}
 */
const errorMessages = {
    INVALID_TOKEN: "Token missen or invalid",
    SERVER_ERROR_500: "Internal Server Error",
    NOT_FOUND_404: "Resource Not Found 404!",
    BAD_REQUEST_400: "Bad Request",
    NOT_AUTHORIZED_401: "Not Authorized",
    RESOURCE_DELETED_204: "Resource Deleted"
}

/**
 * Returns True if array contains 1 or more null elements
 * @param fields
 * @returns {boolean}
 */
const isEmpty = fields => {
    let empty = false;
    for (let i of fields) {
        if (i === null) {
            empty = true;
        }
    }
    return empty;
}
/**
 * Return Number of words a blog post contains
 *
 * @param content
 * @returns {number}
 */
const countWords = content => {
    return content.split(" ").length
}

/**
 *
 * Return the readTime of a blog post assuming
 * Assumption made is 200wpm reading
 * @param (content)
 * @returns {number}
 */
const readTime = content => {
    const count = countWords(content);
    return Math.ceil(count/200);
}



/*
    Middleware helpers
 */
/**
 * Returns the token of from the headers of a request
 * @param request
 * @returns {string|null}
 */
const getToken = request => {
    const auth = request.get("authorization");
    // console.log(auth && auth.toLowerCase().startsWith('token'));
    return (auth && auth.toLowerCase().startsWith('token')) ? auth.substring(6) : null;
}


const getGridFSInstance = mongooseConn => {
    return Grid(mongooseConn.db, mongoose.mongo);
}

/**
 * Create Storage Engine
 * @type {{}}'
 *
 * Stream initialization
 * gfs.collections(bucketName);
 */
const cloudStorage = new GridFSStorage({
    url: config.MONGODB_URI,
    file: (request, file) => {
        return new Promise((resolve, reject)=> {
            crypto.randomBytes(16, (error, buffer)=> {
                if (error){
                    console.log("Error occurred uploading image")
                    return reject(error)
                }
                const filename = new Date().toISOString() + buffer.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: config.FILE_UPLOAD_BUCKET_NAME
                }
                resolve(fileInfo);
            })
        })
    }
})

const imageOnlyFilters = (request, file, callback) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        callback(null, true)
    } else {
        callback(null, false);
    }
}

const cloudUpload = multer({
    storage: cloudStorage,
    fileFilter: imageOnlyFilters,
    limits: 1024 * 1024 * 4
})


const getCloudImage = async (request, response, image) => {
    console.log("Getting image", image)
    const db = mongoose.connection.db;
    const collection = db.collection('postImages.files');
    const collectionChunks = db.collection('postImages.chunks');

    collection.find({filename: image}).toArray(function(error, documents){
        if (error) {
            return response.status(500).send({error: "INTERNAL SERVER ERROR"});
        }

        if (!documents || documents.length === 0) {
            return response.status(404).send({error: "FILE NOT FOUND"});
        } else {
            collectionChunks.find({files_id: documents[0]._id})
                .sort({n:1}).toArray(function(error, chunks){
                    if (error) {
                        return response.status(500).send({error: "INTERNAL SERVER ERROR"});
                    }
                    if (!chunks || chunks.length === 0) {
                        return response.status(404).send({error: "NO DATA"})
                    }

                    let fileData = [];
                    for (let i=0; i<chunks.length; i++) {
                        fileData.push(chunks[i].data.toString('base64'));
                    }
                    let finalFile = 'data:' + documents[0].contentType + ';base64,'
                + fileData.join('');
                    return response.status(200).send({
                        success: 1,
                        file: {
                            url: finalFile
                        }
                    })
            })
        }
        console.log(`Search for image ${image} done`)
    })
}

module.exports = {
    isEmpty,
    countWords,
    readTime,
    getToken,
    errorMessages,
    cloudUpload,
    getCloudImage,
}