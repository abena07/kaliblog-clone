import React from 'react';
import './Header.css';


const Header = (props) => {

    return (
            <header>
                <span className="nav-left">
                    <a href="/" className="brand-name">KaliBlog.io</a>
                </span>
                
                <span className="nav-right">
                    <a onClick={() => props.showArticles(true)} href="#allArticles" className="nav-link">Articles</a>
                    <a onClick={props.showAddArticle} href="#addArticle" className="add-article"><i className="material-icons">post_add</i></a>
                    <a onClick={props.logout} title="Logout" href="#logout" className="logout"><i className="material-icons">power_settings_new</i></a>
                </span>
            </header>
    )
}

export default Header;