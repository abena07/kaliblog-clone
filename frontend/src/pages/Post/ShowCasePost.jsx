import React, {useEffect} from "react";

import { animateElements } from '../../utils';


const ShowCasePost = () => {

    useEffect(()=> {
        const container = document.getElementById("content");
        setTimeout(()=> animateElements([container]), 1000)
    })
    return (
            <section id="content" data-aos="fade-up">
                <div className="container mb-7 mb-lg-10 mt-n7">
                    <div className="row">
                        <div className="col">
                            <div className="p-5 px-lg-7 py-lg-6 bg-white shadow">
                                <div className="row no-gutters">
                                    <div className="col-lg-8">
                                    <p className="small text-uppercase font-weight-bold mb-0">
                                    July 27, 2019</p>
                                    <h2>
                                        We love to write and share our our fascinating experience
                                        about almost everything and anything in any field.
                                    </h2>
                                </div>
                                <div className="col-lg-8 col-xl-9">
                                    <p className="lead mb-lg-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Curabitur sodales malesuada quam id
                                            malesuada. Curabitur ut ullamcorper libero. Sed
                                            vulputate, eros id varius volutpat, mauris lorem
                                            laoreet risus at elit. Aliquam ac pulvinar eros...
                                    </p>
                                </div>
                                <div className="col-lg-4 col-xl-3 d-flex justify-content-lg-end align-items-start">
                                    <a href="#" className="btn btn-secondary text-uppercase d-inline-flex align-items-center px-3 px-sm-5">
                                        Read more<svg width={20} height={20} className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <title>
                                        navigation-next-alternate</title>
                                        <path d="M23.7,10.209a1,1,0,0,0,0-1.414L20.2,5.3A1,1,0,0,0,18.5,6v1.75a.249.249,0,0,1-.25.25H12.5a4.005,4.005,0,0,0-4,4v2a1.5,1.5,0,0,0,3,0V12a1,1,0,0,1,1-1h5.75a.249.249,0,0,1,.25.25V13a1,1,0,0,0,1.708.707Z" />
                                        <path d="M16,12.5a1,1,0,0,0-1,1V18a.5.5,0,0,1-.5.5H2.5A.5.5,0,0,1,2,18V6a.5.5,0,0,1,.5-.5H15a1,1,0,1,0,2,0,2,2,0,0,0-2-2H2a2,2,0,0,0-2,2v13a2,2,0,0,0,2,2H15a2,2,0,0,0,2-2v-5A1,1,0,0,0,16,12.5Z" />
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ShowCasePost;