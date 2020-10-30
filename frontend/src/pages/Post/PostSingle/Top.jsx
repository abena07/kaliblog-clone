import React, {useContext} from "react";

import {authContext} from "../../../reducer/auth";

import PostBg from '../../../assets/assets/images/photos/photo-39.jpg';
import PostImg from '../../../assets/assets/images/photos/coming_soon.png';

const parse = require('html-react-parser');


const Top = props => {
    const auth_context = useContext(authContext);

    return (
        <>
            <section className="pt-8 mb-6 mb-lg-7" id="content">
                <div className="container">
                    <div className="row no-gutters align-items-center">
                        <div className="col-lg-7 order-lg-last posiion-relative z-index-1 aos-init aos-animate"
                             data-aos="fade-left" data-aos-delay="200">
                            <div
                                className="bg-primary text-white p-5 px-lg-7 py-lg-6 ml-lg-n5 z-index-1 position-relative">
                                <h1>{parse(props.title)}</h1>
                                <p className="lead">{parse(props.subTitle)}</p><p
                                className="small font-weight-bold mt-7 mt-lg-10 mb-0">{auth_context.user.firstName} {auth_context.user.lastName},
                                Sept 17, 2018</p>
                                <span
                                    className="position-absolute bottom-0 left-0 mr-5 mb-n7 ml-6 opacity-30 d-none d-lg-block"><svg
                                    className="fill-primary" width="30" height="30" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"><title>diagram-arrow-down</title><path
                                    d="M5.5,15.215A1,1,0,0,0,4.767,16.9l6.16,6.633a1.458,1.458,0,0,0,2.146,0l6.16-6.633a1,1,0,0,0-.733-1.681H15.25a.25.25,0,0,1-.25-.25V1.5A1.5,1.5,0,0,0,13.5,0h-3A1.5,1.5,0,0,0,9,1.5V14.965a.25.25,0,0,1-.25.25Z"></path></svg></span>
                            </div>
                        </div>
                        <div className="col-lg aos-init aos-animate" data-aos="fade-right">
                            <div className="img-shifted shift-left vh-75">
                                <div className="bg-image bg-cover" style={{backgroundImage: 'none', zIndex: 0}}
                                     data-jarallax="" data-speed=".8"
                                     data-jarallax-original-styles={`background-image: url(${PostBg})`}>
                                    <div id="jarallax-container-0"
                                         style={{
                                             position: "absolute",
                                             top: 0,
                                             left: 0,
                                             width: "100%",
                                             height: "100%",
                                             overflow: 'hidden',
                                             pointerEvents: "none",
                                             zIndex: "-100"
                                         }}>
                                        <div
                                            style={{
                                                backgroundPosition: "50% 50%",
                                                backgroundSize: "cover",
                                                backgroundRepeat: "no-repeat",
                                                backgroundImage: `url(${PostImg})`,
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: 552.844,
                                                height: 712,
                                                overflow: "hidden",
                                                pointerEvents: "none",
                                                marginTop: 89,
                                                transform: 'translate3d(0px, -62.8px, 0px)'
                                            }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Top;