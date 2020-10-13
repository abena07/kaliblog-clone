import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';

import Header from "../../widgets/Header";

import TopSection from "./TopSection";
import ShowCasePost from "./ShowCasePost";
import PostCard from "./PostCart";
import {blogContext} from "../../reducer/blogReducer";
import {mainContext} from "../../App";
import Loader from "../../widgets/Loader";


const PostList = () => {
    const blog_context = useContext(blogContext);
    const main_context = useContext(mainContext);

    // console.log(blog_context.state.posts)

    useEffect(() => {
        main_context.dispatchAppState({type: "SET_LOADING", is_loading: true})
        axios.get('/api/posts/')
            .then(response => {
                blog_context.dispatchState({type: "FETCH_POSTS", payload: response.data});
                main_context.dispatchAppState({type: "SET_LOADING", is_loading: false})
            })
            .catch(error => {
                console.log(error);
                main_context.dispatchAppState({type: "SET_LOADING", is_loading: false})
            })
    }, [])

    return (
        <div>
            <Header active={2} nav={true} bg={'dark'}/>
            <main>
                {main_context.appState.isLoading ? <Loader/> :
                    (
                        <>
                            <TopSection/>
                            <ShowCasePost/>
                            <section className={"bg-light"}>
                                <div className="container pt-6 pb-7-pt-lg-7 pb-lg-10">
                                    <div className="row">
                                        <div className="col">
                                            <h2>Latest Articles</h2>
                                            {blog_context.state.posts.map(post => (
                                                <PostCard count={blog_context.state.posts.indexOf(post)} key={post.id} post={post}/>
                                            ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                }
            </main>
        </div>
    )
}


export default PostList