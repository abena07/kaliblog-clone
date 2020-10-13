import React, {useReducer, useState} from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Blog from './components/Blog/Blog';
import DetailBlogPage from './components/DetailBlog/DetailBlogPage';
import AddArticle from './components/AddArticle/AddArticle';
import { blogPosts } from './components/Blog/posts';
import {blogReducer, initialState, blogContext} from './reducer/blogReducer';
// let authenticated = true;

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);
  const [currentDetailPost, setCurrentDetailPost] = useState({});
  const [showAddArticle, setShowAddArticle] = useState(false);
  const [posts, setPosts] = useState(blogPosts);

  const [users, setUsers] = useState([]);

  const handleAuthentication = (auth) => {
    setIsAuthenticated(auth);
    setShowBlog(auth);
    setShowAddArticle(false);
    setShowDetailView(false);
    setShowSignup(false);
  }

  const logout = () => {
    setIsAuthenticated(false);
    setShowBlog(false);
    setShowAddArticle(false);
    setShowDetailView(false);
    setShowSignup(false);
  }

  const showSignUpView = (e) =>{
    e.preventDefault();
    setShowSignup(true);
    setIsAuthenticated(true);
    console.log(e);
  }

  const openDetailBlog = (post) => {
    setShowBlog(false);
    setCurrentDetailPost(post);
    setShowDetailView(true);
  }

  const _showAddArticle = (e) => {
    setCurrentDetailPost({});
    setShowBlog(false);
    setShowDetailView(false);
    setShowAddArticle(true);
  }

  const addArticle = (article) => {
    setPosts(posts.push(article));
    setShowAddArticle(false);
    openDetailBlog(article);
  }

  const like = (id) => {
    let post = posts.filter((post) => post.id === id);
    post = post[0];
    const remaining_posts = posts.filter((item) => item.id !== post.id);
    post.upVotes += 1;
    remaining_posts.push(post);
    setPosts(remaining_posts);
  }

  const dislike = (id) => {
    let post = posts.filter((post) => post.id === id);
    post = post[0];
    post.downVotes += 1;
    const remain_posts = posts.filter((item) => item.id !== post.id)
    remain_posts.push(post)
    setPosts(remain_posts);
  }

  const [states, dispatchStates] = useReducer(blogReducer, initialState);

  return (
    <div className="main">
      <blogContext.Provider value={{states: states, dispatchStates: dispatchStates}}>
          <Route exact={true} path={'/'} render={() =>
              <Blog />
          }/>
          <Route path={'/posts/:id'} render={() =>
              <DetailBlogPage upVote={like} downVote={dislike} />
          }/>
          <Route path={'/login'} render={() => <Login openSignupView={showSignUpView} render={!isAuthenticated}
                                                      authenticate={handleAuthentication}/>
          }/>
          <Route path={'/signup'} render={() => <SignUp setIsAuthenticated={setIsAuthenticated} users={users}
                                                        setUser={setUsers} render={showSignup}/>
          }/>
          <Route path={'/post/add'} render={() => <AddArticle appendArticle={addArticle} posts={posts}
                                                              render={showAddArticle}/>
          }/>
      </blogContext.Provider>
    </div>
  );
}

export default App;
