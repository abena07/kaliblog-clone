const mongoose = require('mongoose');


const commentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    }
})


commentSchema.set('toJSON', {
    transform: (document, returnedComments) => {
        returnedComments.id = returnedComments._id.toString();
        delete returnedComments._id;
        delete returnedComments.__v;
    }
})


module.exports = mongoose.model('Comment', commentSchema);