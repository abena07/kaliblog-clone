import React, {useContext, useEffect} from 'react';

import './Blog.css'
import BlogCard from './widgets/BlogCard';
import RelatedBlogCard from './widgets/RelatedBlogCard';
import { blogPosts, relatedPost } from './posts';
import Header from "../Header/Header";
import {blogContext} from "../../reducer/blogReducer";


const Blog = (props) => {

    const blog_context = useContext(blogContext);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=> response.json()
                .then(data=>{
                    // console.log(data[0])
                    blog_context.dispatchStates({type: "FETCH_POSTS", payload: data})
                    }
                )
            )
    }, [])

    return (
        <div>
            <Header />
            <div className="main-container">
                <div className="blog-container">
                    <div className="blog-left">
                        {blog_context.states.posts.slice(0, 10).map(post => (
                            <BlogCard
                                post={post}
                                key={post.id}
                            />
                        ))
                        }
                    </div>
                    <div className="blog-right">
                        <h2>Related Articles</h2>
                        {relatedPost.map(relatedPost => (
                            <RelatedBlogCard key={relatedPost.id} title={relatedPost.title}
                                content={relatedPost.content}
                                date={relatedPost.date}
                                views={relatedPost.view}
                                />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;