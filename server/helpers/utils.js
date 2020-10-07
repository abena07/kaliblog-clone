const mongoose = require('mongoose');           // Mongoose Dependency
const Grid = require('gridfs-stream');          // GridFS Stream Dependency

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

module.exports = {
    isEmpty,
    countWords,
    readTime,
    getToken,
    errorMessages,

    getGridFSInstance
}