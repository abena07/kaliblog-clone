import React, {useContext, useState} from "react";
import axios from 'axios';

import Header from "../../widgets/Header";

import bgImg1 from '../../assets/assets/images/photos/photo-52.jpg';
import bgImg2 from '../../assets/assets/images/photos/photo-54.jpg';
import bgImg3 from '../../assets/assets/images/photos/photo-53.jpg';
import {mainContext} from "../../App";
import Loader from "../../widgets/Loader";

const Signup = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [agreed, setAgreed] = useState(false);

    const main_context = useContext(mainContext);

    const welcomeText =
        "Hey there! Join the community of passionate writers and readers to " +
        "share your experiences, ideas, knowledge, skills and more. " +
        "We love to share also, get the chance to read some of our innovative ideas " +
        "through this platform."

    const isValid = () => {
        return fName !== "" && lName !== "" && email !== "" && password !== "" && agreed;
    }

    const signup = (e) => {
        main_context.dispatchAppState({type: "SET_LOADING", is_loading: true})
        e.preventDefault();
        if (isValid()) {
            const user = {
                firstName: fName,
                lastName: lName,
                email: email,
                password: password
            }
            main_context.dispatchAppState({type: "SET_LOADING", is_loading: true})
            axios.post('/api/auth/signup/', user)
                .then(response => {
                    main_context.route('/registration-success');
                    main_context.dispatchAppState({type: "SET_LOADING", is_loading: false})
                })
                .catch(error => {
                    console.log(error);
                })
        }else {
            console.log('All fields are required')
        }
        main_context.dispatchAppState({type: "SET_LOADING", is_loading: false})
    }
    return (
        <div>
            <Header nav={false} />
            {
                main_context.appState.isLoading ? <Loader/> :
                    (
                        <main>
                            <section id="content">
                                <div className="container-fluid px-0">
                                    <div className="row no-gutters align-items-center justify-content-center">
                                        <form onSubmit={signup}
                                              className="col-lg px-5 px-lg-6 px-xl-10 pt-11 pb-6 py-lg-6">
                                            <h1 className="display-4">
                                                Welcome to KaliBlog.io</h1>
                                            <p>
                                                {welcomeText}
                                            </p>
                                            <div className="row mx-n2">
                                                <div className="col-md px-2 mb-3">
                                                    <input value={fName} onChange={(e) => setFName(e.target.value)}
                                                           className="form-control" type="text" placeholder="First name"
                                                           aria-label="First name"/>
                                                </div>
                                                <div className="col-md px-2 mb-3">
                                                    <input value={lName} onChange={(e) => setLName(e.target.value)}
                                                           className="form-control" type="text" placeholder="Last name"
                                                           aria-label="Last name"/>
                                                </div>
                                            </div>
                                            <div className="row mx-n2">
                                                <div className="col-md px-2 mb-3">
                                                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                                                           className="form-control" type="email"
                                                           placeholder="Email address" aria-label="Email address"/>
                                                </div>
                                                <div className="col-md px-2 mb-3">
                                                    <input value={password}
                                                           onChange={(e) => setPassword(e.target.value)}
                                                           className="form-control" type="password"
                                                           placeholder="Password" aria-label="Password"/>
                                                </div>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input onChange={() => setAgreed(!agreed)} type="checkbox"
                                                       className="custom-control-input" id="tc"/>
                                                <label className="custom-control-label font-size-5" htmlFor="tc">
                                                    Yes, I agree to the <a href="#" className="text-secondary">
                                                    Terms & Conditions</a>
                                                </label>
                                            </div>
                                            <div className="row align-items-center justify-content-between mt-5">
                                                <div className="col-12 col-md-auto mb-3 pr-0">
                                                    <button type="submit"
                                                            className="btn btn-primary text-uppercase d-lg-inline-flex align-items-center w-100">
                                                        Sign Up
                                                        <svg width={16} height={16} className="ml-2"
                                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                            <title>
                                                                arrow-button-right</title>
                                                            <path
                                                                d="M7.207,23.751,19.678,12.767h0a1.066,1.066,0,0,0,0-1.539L7.207.249A.987.987,0,0,0,5.793.356L4.236,2.206a1.028,1.028,0,0,0,.111,1.438L13.8,11.809a.25.25,0,0,1,0,.379l-9.45,8.168a1.021,1.021,0,0,0-.349.7,1,1,0,0,0,.238.741l1.558,1.851a.989.989,0,0,0,1.414.107Z"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="col-12 col-md-auto">
                                                    <p className="small text-muted mb-0">
                                                        or login with
                                                        <a href="#" className="text-reset text-decoration-none">
                                                            <svg width={22} height={22} className="ml-2"
                                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                <title>
                                                                    social-media-google</title>
                                                                <path
                                                                    d="M6.1,7.4a.5.5,0,0,0,.68-.06A7,7,0,0,1,17.1,7.21a.5.5,0,0,0,.71,0l2.92-2.74a.5.5,0,0,0,0-.71,12,12,0,0,0-17.83.4A.5.5,0,0,0,3,4.9Z"/>
                                                                <path
                                                                    d="M5.24,14.79a.5.5,0,0,0,.14-.53,6.89,6.89,0,0,1,0-4.46.5.5,0,0,0-.16-.55L1.95,6.64a.5.5,0,0,0-.76.17,11.93,11.93,0,0,0,.15,10.65.5.5,0,0,0,.78.14Z"/>
                                                                <path
                                                                    d="M24,10.5a.5.5,0,0,0-.5-.5h-10a.5.5,0,0,0-.5.5v4a.5.5,0,0,0,.5.5h4.84a6.79,6.79,0,0,1-1.14,1.67.5.5,0,0,0,0,.67l2.67,3a.5.5,0,0,0,.73,0A12,12,0,0,0,24,12.6Z"/>
                                                                <path
                                                                    d="M15.52,18.46a.5.5,0,0,0-.58-.12,6.93,6.93,0,0,1-8.1-1.63.5.5,0,0,0-.7,0l-3,2.68a.5.5,0,0,0,0,.71,12,12,0,0,0,15,2.25.5.5,0,0,0,.12-.76Z"/>
                                                            </svg>
                                                        </a>
                                                        <a href="#" className="text-reset text-decoration-none">
                                                            <svg width={22} height={22} className="ml-2"
                                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                <title>
                                                                    social-media-facebook-1</title>
                                                                <path
                                                                    d="M19.55,14.56a.5.5,0,0,1-.5.44H17a.5.5,0,0,0-.5.5v8a.5.5,0,0,0,.5.5h6a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H1A1,1,0,0,0,0,1V23a1,1,0,0,0,1,1H12a.5.5,0,0,0,.5-.5v-8A.5.5,0,0,0,12,15H10a.5.5,0,0,1-.5-.5v-3A.5.5,0,0,1,10,11h2a.5.5,0,0,0,.5-.5V9.19A5.69,5.69,0,0,1,18.19,3.5H19.5A.5.5,0,0,1,20,4V7a.5.5,0,0,1-.5.5H18.19A1.69,1.69,0,0,0,16.5,9.19V10.5a.5.5,0,0,0,.5.5h2.43a.5.5,0,0,1,.5.56Z"/>
                                                            </svg>
                                                        </a>
                                                        <a href="#" className="text-reset text-decoration-none">
                                                            <svg width={22} height={22} className="ml-2"
                                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                <title>
                                                                    social-media-twitter</title>
                                                                <path
                                                                    d="M23.32,6.44a.5.5,0,0,0-.2-.87l-.79-.2A.5.5,0,0,1,22,4.67l.44-.89a.5.5,0,0,0-.58-.7l-2,.56a.5.5,0,0,1-.44-.08,5,5,0,0,0-3-1,5,5,0,0,0-5,5v.36a.25.25,0,0,1-.22.25c-2.81.33-5.5-1.1-8.4-4.44a.51.51,0,0,0-.51-.15A.5.5,0,0,0,2,4a7.58,7.58,0,0,0,.46,4.92.25.25,0,0,1-.26.36L1.08,9.06a.5.5,0,0,0-.57.59,5.15,5.15,0,0,0,2.37,3.78.25.25,0,0,1,0,.45l-.53.21a.5.5,0,0,0-.26.69,4.36,4.36,0,0,0,3.2,2.48.25.25,0,0,1,0,.47A10.94,10.94,0,0,1,1,18.56a.5.5,0,0,0-.2,1,20.06,20.06,0,0,0,8.14,1.93,12.58,12.58,0,0,0,7-2A12.5,12.5,0,0,0,21.5,9.06V8.19a.5.5,0,0,1,.18-.38Z"/>
                                                            </svg>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="col-lg-6">
                                            <div className="swiper">
                                                <div className="swiper-container vh-100"
                                                     data-options='{"spaceBetween": 0, "loop": true, "effect": "fade", "speed": 1500, "autoplay": {"delay": 5000}}'>
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="bg-image bg-cover"
                                                                 style={{backgroundImage: `url(${bgImg1})`}}>
                                                                <div
                                                                    className="text-white px-5 d-flex h-100 font-weight-lighter font-italic align-items-end">
                                                                    <div className="w-75 mb-6">
                                                                        <p>
                                                                            Join the fun community and explore the art,
                                                                            science, beauty and creativity of reading
                                                                            experiences
                                                                            while sharing yours.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="bg-image bg-cover"
                                                                 style={{backgroundImage: `url(${bgImg2})`}}>
                                                                <div
                                                                    className="text-white px-5 d-flex h-100 font-weight-lighter font-italic align-items-end">
                                                                    <div className="w-75 mb-6">
                                                                        <p>
                                                                            Join the fun community and explore the art,
                                                                            science, beauty and creativity of reading
                                                                            experiences
                                                                            while sharing yours.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="bg-image bg-cover"
                                                                 style={{backgroundImage: `url(${bgImg3})`}}>
                                                                <div
                                                                    className="text-white px-5 d-flex h-100 font-weight-lighter font-italic align-items-end">
                                                                    <div className="w-75 mb-6">
                                                                        <p>
                                                                            Join the fun community and explore the art,
                                                                            science, beauty and creativity of reading
                                                                            experiences
                                                                            while sharing yours.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-pagination w-auto px-5 text-white mb-4">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                    )
            }
        </div>
    )
}


export default Signup;