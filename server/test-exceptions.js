const post = {
    title: "Post Title",
    description: "Post Description content",
    id: "3994u9u90349u3900jt9t0ju094j02094ut",
    user: "90395840934ut0u9tu0t3"
}

try {
    const jsonPost = post.toJSON()

    console.log(jsonPost);
    console.log("AFter JSONPOST is logged here");
}catch (exception) {
    console.log(exception.toJSON());
}