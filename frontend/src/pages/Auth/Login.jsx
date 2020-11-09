import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { authContext } from '../../reducer/auth';
import { mainContext } from "../../App";

import Header from "../../widgets/Header";

import loginBg from '../../assets/assets/images/photos/photo-55.jpg';
import Loader from "../../widgets/Loader";


const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const auth_context = useContext(authContext);
    const main_context = useContext(mainContext);

    const isValid = () => {
        return email !== "" && password !== ""
    }

    const login = async (e) => {
        e.preventDefault();
        const user = {email: email, password: password};
        if (isValid()) {
            main_context.dispatchAppState({type: "SET_LOADING", is_loading: true});
            await axios.post('http://localhost:9000/api/auth/login/', user)
                .then(response=> {
                    console.log(response.data)
                    main_context.route('/');
                    main_context.dispatchAppState({type: "SET_AUTH", is_authenticated: true})
                    main_context.dispatchAppState({type: "SET_LOADING", is_loading: false})
                })
                .catch(error=> {
                    if (error.response) {
                        setErrorEmail(error.response.data.email);
                        setErrorPassword(error.response.data.password);
                    }
                    main_context.dispatchAppState({type: "SET_LOADING", is_loading: false})
                })
        }
    }
    return (
        <div>
            <Header logo={'#fff'} nav={false} />
            {
                main_context.appState.isLoading ? <Loader/> :
                    (
                        <main>
                            <section id="content">
                                <div className="bg-image bg-cover w-100 vh-100"
                                     style={{backgroundImage: `url(${loginBg})`}}>
                                </div>
                                <div className="container">
                                    <div className="row vh-100 text-center justify-content-center align-items-center">
                                        <div className="col-11 col-md-8 col-lg-5">
                                            <div className="row">
                                                <div className="square d-flex w-100 mt-5">
                                                    <form onSubmit={login}
                                                          className="square-inner bg-white border mx-auto p-4 p-lg-6 d-flex flex-column w-100 justify-content-center">
                                                        <h1>
                                                            Sign In</h1>
                                                        <div className="form-group">
                                                            <input value={email}
                                                                   onChange={(e) => setEmail(e.target.value)}
                                                                   className="form-control form-control-lg" type="email"
                                                                   placeholder="Email address"
                                                                   aria-label="Email address"/>
                                                            <p className="text-danger text-left">
                                                                <small>{errorEmail}</small></p>
                                                        </div>
                                                        <div className="form-group mb-5">
                                                            <input value={password}
                                                                   onChange={(e) => setPassword(e.target.value)}
                                                                   className="form-control form-control-lg"
                                                                   type="password"
                                                                   placeholder="Password" aria-label="Password"/>
                                                            <p className="text-danger text-left">
                                                                <small>{errorPassword}</small></p>
                                                        </div>
                                                        <div className="form-group">
                                                            <button type="submit"
                                                                    className="btn btn-primary btn-lg btn-block text-uppercase">
                                                                Sign In
                                                            </button>
                                                        </div>
                                                        <p className="small text-muted mb-0">
                                                            Don't have an account yet?
                                                            <Link to={"/signup"}
                                                                  className="text-secondary text-underline">
                                                                Sign Up</Link>
                                                        </p>
                                                    </form>
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


export default Login