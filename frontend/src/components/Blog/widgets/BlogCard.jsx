import React from "react";
import { Link } from "react-router-dom";


const BlogCard = (props) => {
    const postUrl = `posts/${props.post.id}`
    return (
        <Link to={postUrl} href="#blog-detail" className="blog-card">
            <h3 className="blog-head">{props.post.title}</h3>
            <p className="blog-content">
                {props.post.body.substring(0, 400)}
            </p>
            <p className="blog-footer">
                <span className="blog-date"><i className="material-icons">alarm</i> <i>{props.post.date}</i></span>
                <span className="blog-views"><i className="material-icons">visibility</i> {props.post.views} views</span>
            </p>
           
        </Link>
    )
}
    
export default BlogCard;