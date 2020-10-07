const express = require('express');
const cors = require('cors');
const config = require('./helpers/config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const GridFsStorage = require('multer-gridfs-storage');
const multer = require('multer');


// Create my app instance
const app = express();


// Controller Imports Here
const authRouter = require('./controllers/auth');
const postRouter = require('./controllers/post');
const testRouter = require('./controllers/test');


// My Mongodb Connection Setup Here
mongoose.connect(config.MONGODB_URI, config.MONGODB_OPTIONS).then(()=> {
    console.log("Connection to MONGODB Success");
})
.catch(error=> {
    console.log("Connection to MONGODB Failed");
})


// Middleware Usage comes here
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public/views'));

/**
 * Create Storage Engine
 * @type {{}}'
 *
 * Stream initialization
 * gfs.collections('uploads');
 */
const storage = new GridFsStorage({
    url: config.MONGODB_URI,
    file: (request, response) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (error, buffer)=> {
                if (error) {
                    return reject
                }
                const filename = buffer.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: config.FILE_UPLOAD_BUCKET_NAME
                }
                resolve(fileInfo);
            })
        })
    }
})


const upload = multer({ storage });         // Multer Storage (Image Upload)
// app.use(upload.array())


// My routes here
app.use('/api/auth', authRouter);       // Handles User Authentication and Authorization
app.use('/api/posts', postRouter);      // Handles Blog Posts CRUD
app.use('/api/test', testRouter);       // Handling test of exceptions occurred within the server


app.post('/posts/new', upload.single('image'), (request, response)=> {
    // response.status(201).send({file: request.file})
    console.log(request.params);
})

app.get('/', (request, response)=> {
    response.sendFile(path.resolve(__dirname) + '/public/views/index.html')
})

// Export app for index.js
module.exports = app
