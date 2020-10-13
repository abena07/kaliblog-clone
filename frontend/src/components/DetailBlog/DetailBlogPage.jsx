import React, {useContext} from "react";
import DetailBlog from "./DetailBlog";
import Header from "../Header/Header";
import {blogContext} from "../../reducer/blogReducer";


const DetailBlogPage = () => {
    const blog_context = useContext(blogContext);

    return (
        <div>
            <Header />
            <DetailBlog downVote={()=> "test"} upVote={(posts)=> "me"} posts={blog_context.states.posts} />
        </div>
    )
}


export default DetailBlogPage;