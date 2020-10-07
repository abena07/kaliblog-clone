const testRouter = require('express').Router()


testRouter.get('/exception', async (request, response)=> {
    const post = {
        title: "Post Title",
        description: "Post Description content",
        id: "3994u9u90349u3900jt9t0ju094j02094ut",
        user: "90395840934ut0u9tu0t3"
    }

    try {
        const jsonPost = post;

        response.status(200).end(jsonPost);
    }catch (exception) {
        response.status(500).send({error: exception});
    }
})


module.exports = testRouter