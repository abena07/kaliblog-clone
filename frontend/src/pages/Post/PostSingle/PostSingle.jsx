import React, {useContext, useEffect, useState} from "react";
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import Header from "../../../widgets/Header";

import {blogContext} from "../../../reducer/blogReducer";
import {mainContext} from "../../../App";
import Loader from "../../../widgets/Loader";
import Footer from "../../../widgets/Footer";

import Top from "./Top";
import MainSection from "./MainSection";
import ShareSection from "./ShareSection";
import RelatedArticles from "./RelatedArticles";
import {animateElements} from "../../../utils";
import CommentSection from "./CommentSection";


const PostSingle = props => {
    const main_context = useContext(mainContext);

    const [post, setPost] = useState({
        title: "",
        subTitle: "",
        content: ""
    });
    const blog_context = useContext(blogContext);
    const postId = props.match.params.id;

    const getContent = description => {
        const content = JSON.parse(description)
        const blocks = content.blocks;

        /**
         * Remove Image, Title and subTitle from block data
         * @type {any}
         */
        blocks.shift()
        blocks.shift()
        blocks.shift()
        content.blocks = blocks;

        return content;
    }

    useEffect(()=> {
        if (blog_context.state.posts.length <= 0) {
            axios.get(`/api/posts/${postId}`)
                .then(response=> {

                    setPost({
                        title: JSON.parse(response.data.title).data.text,
                        subTitle: JSON.parse(response.data.subTitle).data.text,
                        content: getContent(response.data.description)
                    })
                })
        } else {
            const matchPost = blog_context.state.posts.find(post=> post.id === postId);

            setPost({
                title: JSON.parse(matchPost.title).data.text,
                subTitle: JSON.parse(matchPost.subTitle).data.text,
                content: getContent(matchPost.description)
            })
        }
    }, [])

    return (
        <>
            {
                main_context.appState.isLoading ? <Loader/> :
                    (
                        <>
                            <Header nav={true}></Header>
                            <main>
                                <Top title={post.title} subTitle={post.subTitle}/>
                                <MainSection content={post.content}/>
                                <ShareSection />
                                <RelatedArticles />
                                <CommentSection />
                                <Footer />
                            </main>
                        </>
                    )
            }
        </>
    )
}


export default withRouter(PostSingle);