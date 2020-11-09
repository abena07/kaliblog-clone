import React, {useReducer} from 'react';
import { Route, useHistory } from "react-router-dom";

// Pages Import Here
import Home from './pages/Home/Home';
import Login from "./pages/Auth/Login";
import PostSingle from "./pages/Post/PostSingle/PostSingle";
import CreatePost from "./pages/Post/Create";
import PostList from "./pages/Post/List";
import AuthSuccess from "./pages/Auth/AuthSuccess";
import Signup from "./pages/Auth/Signup";

import { authContext, authReducer, initialUser } from './reducer/auth';
import {storeReducer, initialStore} from "./reducer/main";

// Styles here
import './assets/assets/css/theme.min.css';


import {blogReducer, initialPosts, blogContext} from "./reducer/blogReducer";


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

    return (
        <div>
            <mainContext.Provider value={{appState: appState, dispatchAppState: dispatchAppState, route: navigate, logout: logout}}>
                <authContext.Provider value={{user: user, setUser: setUser}}>
                    <Route exact={true} path={'/'} render={()=> <Home /> } />
                    <Route path={'/login'} render={()=> <Login /> } />
                    <Route path={'/signup'} render={()=> <Signup /> } />
                    <Route path={'/registration-success'} render={()=> <AuthSuccess /> } />
                    <blogContext.Provider value={{state: state, dispatchState: dispatchState}}>
                        <Route exact={true} path={'/posts'} render={()=> <PostList /> } />
                        <Route exact={true} path={'/new/post'} render={()=> <CreatePost /> } />
                        <Route path={'/posts/:id'} render={()=> <PostSingle /> } />
                    </blogContext.Provider>
                </authContext.Provider>
            </mainContext.Provider>

        </div>
    )
}


export default App;