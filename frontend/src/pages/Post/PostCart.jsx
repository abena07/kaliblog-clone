import React from 'react';
import Moment from "react-moment";

import postImg from '../../assets/assets/images/photos/coming_soon.png'
import {Link} from "react-router-dom";


const parse = require('html-react-parser');


const PostCard = props => {
    const postTitle = JSON.parse(props.post.title).data.text;
    const subTitle = JSON.parse(props.post.subTitle).data.text;
    return (
        <Link to={`/posts/${props.post.id}`} className="card shadow-sm lift mb-5 mb-lg-6" href="#">
            <div className="row no-gutters">
                <div className={`col-lg-5 ${!(props.count % 2 === 0) ? 'order-lg-last': ''} py-8 py-md-9`}>
                    <div className={`bg-image bg-cover`} style={{backgroundImage: `url(${postImg})`}}>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="card-body p-5 py-lg-6 px-lg-5">
                        <p className="font-size-6 text-uppercase font-weight-bold mb-0">
                            <Moment format={'LLL'}>{props.post.dateCreated}</Moment>
                        </p>
                        <h3 className="card-title">
                            {parse(postTitle)}
                            <svg width={22} height={22} className="fill-secondary ml-2 mt-n1"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>View Post Detail</title>
                                <path
                                    d="M23.7,10.209a1,1,0,0,0,0-1.414L20.2,5.3A1,1,0,0,0,18.5,6v1.75a.249.249,0,0,1-.25.25H12.5a4.005,4.005,0,0,0-4,4v2a1.5,1.5,0,0,0,3,0V12a1,1,0,0,1,1-1h5.75a.249.249,0,0,1,.25.25V13a1,1,0,0,0,1.708.707Z"/>
                                <path
                                    d="M16,12.5a1,1,0,0,0-1,1V18a.5.5,0,0,1-.5.5H2.5A.5.5,0,0,1,2,18V6a.5.5,0,0,1,.5-.5H15a1,1,0,1,0,2,0,2,2,0,0,0-2-2H2a2,2,0,0,0-2,2v13a2,2,0,0,0,2,2H15a2,2,0,0,0,2-2v-5A1,1,0,0,0,16,12.5Z"/>
                            </svg>
                        </h3>
                        <p className="card-text">
                            {parse(subTitle)}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}


export default PostCard;