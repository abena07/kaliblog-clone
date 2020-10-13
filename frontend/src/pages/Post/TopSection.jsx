import React, {useEffect} from "react";

import topImage from '../../assets/assets/images/photos/photo-33.jpg'
import {animateElements} from "../../utils";


const TopSection = () => {
    useEffect(()=> {
        const pictureImg = document.getElementById("picture-img");
        setTimeout(()=> animateElements([pictureImg]), 500)
    })
    return (
        <section className="bg-primary pt-11 pt-lg-12 text-white bg-layer-white-bottom-50-left-100">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Our Story</h1>
                        <a href="#">
                            <picture>
                                <source srcSet={topImage} type="image/jpg" />
                                    <source srcSet={topImage} type="image/jpg" />
                                        <img id={"picture-img"} src={topImage}
                                             className="h-auto img-fullplus" data-aos="fade-down" />
                            </picture>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default TopSection;