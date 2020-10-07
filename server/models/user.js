const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    is_superuser: {
        type: Boolean,
        default: false
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});


userSchema.set('toJSON', {
    transform: (document, returnedUser) => {
        returnedUser.id = returnedUser._id.toString();
        delete returnedUser._id;
        delete returnedUser.__v;
        delete returnedUser.password;
    }
});


const User = mongoose.model('User', userSchema);


module.exports = User;