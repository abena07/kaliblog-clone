import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import landingImage from '../assets/assets/images/photos/photo-93.jpg';
import {animateElements} from "../utils";


const LandingContent = () => {
    const landingText = "" +
        ["Kaliblog.io, a fully flexible Blogging platform for people",
        " from diverse backgrounds and fields of specialties. Here you get",
        " to read the most catchy and interesting and knowledge based posts about, art, science",
        " technology, politics and many more"]

    // useEffect(()=> {
    //     const animationContainers = document.querySelectorAll('animateCont');
    //     animationContainers.classList.add("aos-animate", "aos-init")
    // }, [])
    useEffect(()=> {
        const animationContainers = document.getElementById('animateCont');
        const rightBg = document.getElementById("right-bg");
        setTimeout(()=> animateElements([animationContainers, rightBg]), 700)
        // container.classList.add("")
    })
    return (
        <section className={"mb-6 mb-lg-7"} id={'content'}>
            <div className={"container"}>
                <div className={"row align-items-center"}>
                    <div id={"animateCont"} className={"col-lg-4 pr-lg-2 py-10 z-index-1"} data-aos={"fade-right"}>
                        <h1 className={"display-3 text-nowrap"}>
                            The real beauty of<br />
                            <span className={"font-weight-lighter"}>
                            simplicity</span>
                        </h1>
                        <p className={"mb-6"}>
                            {landingText}
                        </p>
                        <Link to={"/posts"} data-scroll className={"btn btn-secondary text-uppercase d-inline-flex align-items-center"}>
                                Explore<svg width={16} height={16} className={"ml-2"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 24 24"}>
                                <title>
                                arrow-right-1</title>
                                <path d={"M19.5,12a2.3,2.3,0,0,1-.78,1.729L7.568,23.54a1.847,1.847,0,0,1-2.439-2.773l9.752-8.579a.25.25,0,0,0,0-.376L5.129,3.233A1.847,1.847,0,0,1,7.568.46l11.148,9.808A2.31,2.31,0,0,1,19.5,12Z"}>

                            </path>
                            </svg>
                        </Link>
                    </div>
                    <div id={"right-bg"} className={"col-lg-8"} data-aos={"fade-left"}>
                        <div className="img-shifted shift-right vh-100 py-13 py-lg-15">
                            <div id={"landingBgCover"} className="bg-image bg-cover overlay overlay-white-gradient-top-90 overlay-20"
                                 style={{backgroundImage: `url(${landingImage})`}} data-jarallax data-speed={.8}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default LandingContent;