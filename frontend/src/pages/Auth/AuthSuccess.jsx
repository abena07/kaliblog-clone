import React from 'react';
import {Link} from 'react-router-dom';

import Header from "../../widgets/Header";

import successBg from '../../assets/assets/images/photos/photo-56.jpg';


const AuthSuccess = () => {
    return (
        <div>
            <Header />
            <section id="content">
                <div className="bg-image bg-cover w-100 vh-100"
                     style={{backgroundImage: `url(${successBg})`}}>
                </div>
                <div className="container">
                    <div className="row vh-100 text-center justify-content-center align-items-center">
                        <div className="col-11 col-md-8 col-lg-5">
                            <div className="row">
                                <div className="square d-flex w-100 mt-5">
                                    <div
                                        className="square-inner bg-white border mx-auto p-4 p-lg-6 d-flex flex-column w-100 justify-content-center">
                                        <h1>
                                            Congratulation</h1>
                                        <p className="mb-2">
                                            {/*You have successfully created your account.<br />*/}
                                            An activation email has been sent your email. Please
                                            check your account
                                        </p>

                                        <p className="small text-muted mb-0">
                                            Activate your account and get started
                                        </p>
                                        <Link to="/login"
                                               className="text-secondary text-underline">
                                            Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default AuthSuccess;