const jwt = require('jsonwebtoken')

const config = require('../helpers/config')
const getCookieToken = require('../helpers/utils').getCookieToken
const User = require('../models/user');


const authenticate = async (request, response, next) => {
    const token = getCookieToken(request)
    let valid;
    try {
        valid = jwt.verify(token, config.JWT_SECRET);
    }
    catch(exception) {
        valid = false;
    }
    if (valid) {
        User.findOne({email: valid.email}, (error, user) => {
            if (error) {
                request.isAuthenticated = false;
                next();
            }
            request.user = user;
            request.isAuthenticated = true;
            console.log(request.isAuthenticated)
            next();
        })
    } else {
        next();
    }
}


module.exports = authenticate