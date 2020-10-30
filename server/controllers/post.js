const postRouter = require('express').Router();
const Post = require('../models/post');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const getToken = require('../helpers/utils').getToken;
const errorMessages = require('../helpers/utils').errorMessages;

/**
 * Get all posts
 */
postRouter.get('/', async (request, response)=> {
    await Post.find().exec((error, posts)=> {
        if (error){
            console.log("Could not fetch posts");
            return response.status(500).send({error: errorMessages.SERVER_ERROR_500});
        }
        // console.log(modifiedPosts[0]) //.then(data=> console.log(data))
        response.status(200).send(posts);
    });
});


/**
 * Get a single post given its id
 */
postRouter.get('/:id', async(request, response)=> {
    await Post.findById(request.params.id).exec((error, post)=> {
        if (error){
            console.log("Could not fetch posts\n", error);
            return response.status(500).send({error: errorMessages.SERVER_ERROR_500});
        }
        response.status(200).send(post);
    });
});


/**
 * Create a post
 */
postRouter.post('/', async (request, response)=> {
    const token = getToken(request);
    console.log("jwt Token: ================== : ", token);
    const data = request.body
    // console.log("Image ")
    try {
        const decryptedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decrypted Token: =============================== :", decryptedToken);
        (!token || !decryptedToken.id) ? response.status(401).json(errorMessages.INVALID_TOKEN) : {}
        const user = await User.findById(decryptedToken.id);
        const post = new Post({
            title: data.title,
            subTitle: data.subTitle,
            description: data.description,
            user: user._id
        })

        const savedPost = await post.save();
        user.posts = user.posts.concat(savedPost._id);
        await user.save();
        return response.status(201).json(savedPost);
    }catch(exception) {
        console.log(exception);
        response.status(500).send({error: exception});
    }
})


/**
 * Update a post
 */
postRouter.put('/:id', async(request, response)=> {
    const body = request.body;

    const token = getToken(request);
    try {
        const decryptedData = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decryptedData);
        (!token && !decryptedData.id) ? response.status(401).json({error: errorMessages.INVALID_TOKEN}) : {}
        const user = await User.findById(decryptedData.id);

        const post = await Post.findById(request.params.id);
        !post ? response.status(404).json({error: errorMessages.NOT_FOUND_404}) : {}

        const authorized = post.user == user.id;
        if (authorized) {
            console.log(authorized)
            Post.findByIdAndUpdate(post.id, body)
                .then(updatedUpdate=> response.status(200).send(updatedUpdate)
                    .catch((error)=> {
                        console.log(error);
                        response.status(500).json({error: errorMessages.SERVER_ERROR_500});
                        }
                    )
                );
        } else {
            // console.log(authorized);
            // console.log("User Post Id:", user.id, typeof(user.id));
            // console.log("Post Id:", post.user, typeof(post.user));
            // console.log("Comparing Both:", user.id==post.user)
            response.status(401).json({error: errorMessages.NOT_AUTHORIZED_401});
        }
    }catch(exception) {
        console.log(exception)
        response.status(500).send({error: "Internal Server Error"});
    }
})


/**
 * Delete a post
 */
postRouter.delete('/id:', async (request, response)=> {
    await Post.deleteOne({_id: params.id}).exec((error, post)=> {
        if (error){
            console.log("Could not delete post");
            return response.status(500).send({error: "Internal Server Error"});
        }
        response.status(204).json(post);
    })
})


/**
 * Delete all posts (danger though)
 */
postRouter.delete('/', async (request, response)=> {
    await Post.deleteMany({}).exec((error, post)=> {
        error ? response.status(500).send({error: errorMessages.SERVER_ERROR_500}) : {};
        response.status(204).json({status: errorMessages.RESOURCE_DELETED_204})
    })
})


/**
 * Add a comment
 */
postRouter.post('/:id/comments/', async (request, response)=> {
    const token = getToken(request);
    try {
        const decryptedData = jwt.verify(token, config.JWT_SECRET);
        (!token && !decryptedData.id) ? response.status(401).send({error: errorMessages.NOT_AUTHORIZED_401}) : {};

        const user = await User.findById(decryptedData.id);
        const post = await Post.findById(request.params.id);

    } catch (exception) {
        console.log(exception);
        response.status(500).send({error: errorMessages.SERVER_ERROR_500})
    }
})



module.exports = postRouter;
