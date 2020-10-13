import React, {useContext, useEffect, useState} from 'react';
import './DetailBlog.css';
import Header from "../Header/Header";
import { withRouter } from 'react-router-dom';


const DetailBlog = (props) => {

    const countWords = (content) => {
        return content ? content.split(" ").length * 4 : 0;
    }
    const post = props.posts.find(post=> props.match.params.id)
    return (
        <div>
            <div className="detail-blog-container">
                <h2>{post.title}</h2>
                <p className="sub">
                    <span className="subleft">
                        <i className="author">{post.author}</i><i className="material-icons">alarm</i> <span className="date">{post.date}</span>
                    </span>
                    <span className="subright">
                        <i className="read-time">{post.readTime} minutes</i><i className="words-count">{countWords(post.body)} words</i>
                    </span>
                </p>
                <p>
                    {post.content}<br /><br />
                    {post.content}<br />
                    {post.content}<br /><br />
                    {post.content}<br />
                </p>
                <p className="footer">
                    <span className="footer-left">

                    </span>
                    <span className="footer-right">
                        <span className="like">
                            <i onClick={() => props.upVote(post.id)} className="material-icons">thumb_up</i>
                            <span className="count">{props.post.upVotes}</span>
                        </span>
                        <span className="dislike">
                            <i onClick={() => props.downVote(post.id)} className="material-icons">thumb_down</i>
                            <span className="count">{post.downVotes}</span>
                        </span>
                    </span>
                </p>
            </div>
        </div>
    )
}


export default withRouter(DetailBlog);