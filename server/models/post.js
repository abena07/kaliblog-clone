const mongoose = require('mongoose');
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
        type: Number,
        default: 0
    },
    doVotes: {
        type: Number,
        default: 0
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
        delete returnedPost._id;
        delete returnedPost.__v;
    }
})


module.exports = mongoose.model('Post', postSchema);