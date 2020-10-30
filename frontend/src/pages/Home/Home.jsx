import React from 'react';
import {Link} from "react-router-dom";

import Header from '../../widgets/Header';
import LandingContent from "../../widgets/LandingContent";
import Footer from "../../widgets/Footer";
import Features from "./Features";


const JoinSection = () => {
    return (
        <section className="py-6 mt-6 py-lg-7 mt-lg-7 bg-light">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-xl-7 text-center text-lg-right"><h2 className="h3 mb-lg-0">Start your
                        journey of modern blogging with Kaliblog</h2></div>
                    <div className="col text-center text-lg-left">
                        <Link to={'/signup'}
                              className="btn btn-secondary text-uppercase">JOIN NOW</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}


const Home = () => {
    return (
        <>
            <Header nav={true} active={1}/>
            <main>
                <LandingContent/>
                <Features/>
                <JoinSection/>
            </main>
            <Footer/>
        </>
    )
}


export default Home;