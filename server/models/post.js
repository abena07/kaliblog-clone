const mongoose = require('mongoose');

const User = require('./user');

const countWords = require('../helpers/utils').countWords;
const readTime = require('../helpers/utils').readTime;


// const postImageSchema = mongoose.Schema({
//     name: String,
//     img: {
//         data: Buffer,
//         contentType: String
//     }
// });


const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String
    },
    image:{
        name: String,
        img: {
            data: Buffer,
            contentType: String
        }
    },
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    upVotes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    },
    doVotes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    },
    views: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // comments: [Comment]
})


postSchema.methods.count = () => {
    return countWords(this.description);
}
postSchema.methods.readTime = () => {
    return readTime(this.description);
}


postSchema.set('toJSON', {
    transform: (document, returnedPost) => {
        returnedPost.id = returnedPost._id.toString();
        // const user = User.findById(returnedPost.user);
        // returnedPost.author = `${user.firstName} ${user.lastName}`;
        delete returnedPost._id;
        delete returnedPost.__v;
    }
})


module.exports = mongoose.model('Post', postSchema);