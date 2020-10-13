import React from "react";
// const initial_posts = require('../components/Blog/posts').blogPosts;


export const blogContext = React.createContext()



export const initialPosts = {
    posts: []
}

export const blogReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            console.log("Puayload: ", typeof(action.payload))
            return {
                ...state,
                posts: action.payload
            }
        default:
            return initialPosts
    }
}


