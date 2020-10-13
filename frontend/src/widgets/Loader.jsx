import React from "react";

import loader from '../assets/assets/images/loader-dual.svg';
import Header from "./Header";


const Loader = () => {
    const loaderStyle = {
        height: "100vh"
    }
    return (
        <div>
            <Header nav={true} />
            {/*<div style={loaderStyle} className="container">*/}
            {/*    <div className="row h-100 justify-content-center align-items-center">*/}
            {/*        <img width={80} src={loader} alt="Loading..."/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="preloader">
                <div className="preloader-shape"></div>
            </div>
        </div>
    )
}


export default Loader;