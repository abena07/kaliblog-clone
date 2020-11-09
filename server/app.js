const express = require('express');
const cors = require('cors');
const config = require('./helpers/config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
const {cloudUpload, getCloudImage} = require('./helpers/utils');

const authenticate = require('./middlewares/auth');


// Create my app instance
const app = express();

// Controller Imports Here
const authRouter = require('./controllers/auth');
const postRouter = require('./controllers/post');
const testRouter = require('./controllers/test');


// My Mongodb Connection Setup Here
mongoose.connect(config.MONGODB_URI, config.MONGODB_OPTIONS).then(() => {
    console.log("Connection to MONGODB Success");
})
    .catch(error => {
        console.log("Connection to MONGODB Failed");
    })


// app.use(authenticate);

// Middleware Usage comes here
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(jwt({
//     secret: config.JWT_SECRET,
//     getToken: request => request.cookie.token
// }))
app.use(express.static('public/views'));

app.use(authenticate);

// My routes here
app.use('/api/auth', authRouter);       // Handles User Authentication and Authorization
app.use('/api/posts', postRouter);      // Handles Blog Posts CRUD
app.use('/api/test', testRouter);       // Handling test of exceptions occurred within the server

/**
 * <input type="file" name="image" />
 */

app.post('/api/post/image/', cloudUpload.single('image'), async (request, response) => {
    await getCloudImage(request, response, request.file.filename)
    console.log(request.params);
})

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname) + '/public/views/index.html')
    // response.render("<h1>Hey trying to fiddle with httpOnly cookies</h1>")
})

// Export app for index.js
module.exports = app
