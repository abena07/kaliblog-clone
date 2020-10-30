require('dotenv').config();


const JWT_SECRET = process.env.JWT_SECRET;
const SESSION_SECRET = process.env.SESSION_SECRET;

const FILE_UPLOAD_BUCKET_NAME = 'postImages'

const PORT = process.env.PORT;
let MONGODB_URI;
const MONGODB_OPTIONS = {
    useNewUrlParser: true,
    useCreateIndex: true,
}

switch (process.env.NODE_ENV){
    case "development":
        MONGODB_URI = process.env.MONGO_DEV_CONN_URI;
        break;
    case "production":
        MONGODB_URI = process.env.MONGO_PROD_CONN_URI;
        break;
    case "test":
        MONGODB_URI = process.env.MONGO_TEST_CONN_URI;
        break;
    default:
        MONGODB_URI = process.env.MONGO_DEV_CONN_URI;
        break;
}


module.exports = {
    MONGODB_URI,
    MONGODB_OPTIONS,
    PORT,
    JWT_SECRET,
    SESSION_SECRET,
    FILE_UPLOAD_BUCKET_NAME
}