import React, {useEffect, useReducer} from 'react';
import { Route, useHistory } from "react-router-dom";
import axios from 'axios';

// Pages Import Here
import Home from './pages/Auth/Home';
import Login from "./pages/Auth/Login";

import { authContext, authReducer, initialUser } from './reducer/auth';
import {storeReducer, initialStore} from "./reducer/main";

// Styles here
import './assets/assets/css/theme.min.css';
import useScript from "./custom-hooks/useScript";
import Signup from "./pages/Auth/Signup";
import {getAuthToken} from "./utils";
import Loader from "./widgets/Loader";
import AuthSuccess from "./pages/Auth/AuthSuccess";
import CreatePost from "./pages/Post/Create";
import PostList from "./pages/Post/List";
import {blogReducer, initialPosts, blogContext} from "./reducer/blogReducer";
import PostSingle from "./pages/Post/PostSingle";
// import

export const mainContext = React.createContext();

const App = () => {

    const [user, setUser] = useReducer(authReducer, initialUser);
    const [appState, dispatchAppState] = useReducer(storeReducer, initialStore)
    const [state, dispatchState] = useReducer(blogReducer, initialPosts);

    const history = useHistory() ;
    const navigate = route => {
        history.push(route);
    }

    const logout = () => {
        localStorage.clear();
        console.log("Logging out")
        setUser({
            type: "SET_USER", firstName: "",
            lastName: "", email: "",
            password: ""
        })
        dispatchAppState({type: "SET_AUTH", is_authenticated: false})
        navigate("/");
    }

    useEffect(()=> {
        if (getAuthToken() !== null){
            dispatchAppState({type: "SET_AUTH", is_authenticated: true})
            const token = `Token ${getAuthToken()}`;
            axios.post('http://localhost:9000/api/auth/get-user/', {},{
                headers: {
                    Authorization: token
                }
            })
                .then(response=> {
                    setUser({
                        type: "SET_USER",
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email
                    })
                })
                .catch(error=> {
                    console.log(error)
                })
        }
    },[])

    return (
        <div>
            {/*<h1 className="text-primary">A very big title</h1>*/}
            <mainContext.Provider value={{appState: appState, dispatchAppState: dispatchAppState, route: navigate, logout: logout}}>
                <authContext.Provider value={{user: user, setUser: setUser}}>
                    <Route exact={true} path={'/'} render={()=> <Home /> } />
                    <Route path={'/login'} render={()=> <Login /> } />
                    <Route path={'/signup'} render={()=> <Signup /> } />
                    <Route path={'/registration-success'} render={()=> <AuthSuccess /> } />
                    {/*<Route path={'/loading'} render={()=> <Loader /> } />*/}

                {/*    Blog Post Pages */}
                    <blogContext.Provider value={{state: state, dispatchState: dispatchState}}>
                        <Route path={'/posts/new'} render={()=> <CreatePost /> } />
                        <Route exact={true} path={'/posts/'} render={()=> <PostList /> } />
                        <Route path={'/posts/:id'} render={()=> <PostSingle /> } />
                    </blogContext.Provider>
                </authContext.Provider>
            </mainContext.Provider>

        </div>
    )
}


export default App;