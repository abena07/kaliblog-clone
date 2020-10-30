import React, {useContext} from 'react';
import { Link } from "react-router-dom";

import {mainContext} from "../App";
import {authContext} from "../reducer/auth";
import profileIcon from '../assets/assets/images/profiles/profile_woman.svg';


const Header = props => {
    // const navLinks = {
    //     1: "active",
    //     2: "active",
    //     3: "active",
    //     4: "Contact"
    // }

    // props.active

    const main_store = useContext(mainContext);
    const auth_context = useContext(authContext);

    return (
        <header className={`navbar navbar-expand-lg align-items-center w-100 position-absolute z-index-10 navbar-${props.bg ? props.bg : 'light'} bg-${props.bg ? props.bg : ""}`} >
            <div className={"position-relative container-fluid"}>
                <Link to={'/'} className={"skip-to-main sr-only-focusable"} role={'button'}>
                Skip to main content</Link>
                <Link className={"navbar-brand mr-auto"} to={'/'} style={{color: props.logo}} aria-label={'Click to go back to Homepage'}>KaliBlog</Link>
                <button className={"navbar-toggler ml-auto"} type={'button'} data-toggle={'collapse'} data-target={'#navbarCollapse'} aria-expanded={'false'} aria-label={"Toggle navigation"}>
                    <span className={'navbar-toggler-icon'}></span>
                </button>
                {props.nav ? (
                    <div className={"collapse navbar-collapse"} id={'navbarCollapse'}>
                        <ul className={"navbar-nav ml-auto"}>
                            <li className={'nav-item'}>
                                <Link className={`nav-link ${props.active === 1 ? "active" : ""} `} to={"/"}>Home</Link>
                            </li>
                            <li className={"nav-item dropdown"}>
                                <Link className={`nav-link ${props.active === 2 ? "active" : ""}`} to={'/posts'}
                                   >Explore
                                </Link>
                            </li>
                            <li className={"nav-item dropdown"}>
                                <a className={`nav-link ${props.active === 1 ? "active" : ""} dropdown-toggle`} href={'#'} id={'navbarPages'} role={'button'} data-toggle={'dropdown'} aria-haspopup={'true'} aria-expanded={'false'}>
                                    Auth
                                </a>
                            </li>
                            <li className={"nav-item dropdown"}>
                                <a className={`nav-link ${props.active === 1 ? "active" : ""} `} href={'#'} id={'navbarDocs'} role={'button'} data-toggle={'dropdown'} aria-haspopup={'true'} aria-expanded={'false'}>
                                About</a>
                            </li>
                        {
                            !main_store.appState.isAuthenticated ?
                                (
                                    <li className="nav-item">
                                        <Link to={'/login'}
                                           className={"btn btn-sm btn-secondary text-uppercase mt-3 mt-lg-0 ml-lg-4 d-block d-lg-inline-block"}
                                           href={'#'}>
                                        Login/Signup</Link>
                                    </li>
                                    )
                                : <li className="nav-item dropdown">
                                    <a id={"user-dropdown"} href="#" className="nav-link dropdown-toggle rounded-circle text-center"
                                       role={"button"} data-toggle={"dropdown"} aria-haspopup={"true"}
                                       aria-expanded={"false"}
                                    >
                                        <img className={"rounded-circle shadow-lg"} width={25} src={profileIcon} alt="Profile Photo"/>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby={"user-dropdown"}>
                                        <h6 className="dropdown-header">{auth_context.user.firstName} {auth_context.user.lastName}</h6>
                                        <Link to="/new/post" className="text-left dropdown-item pt-0 pb-1">Write Story</Link>

                                        <a href="#" className="text-left dropdown-item pt-0 pb-1">Profile</a>
                                        <a href="#" className="text-left dropdown-item pt-0 pb-1">Settings</a>
                                        <a onClick={()=> main_store.logout()} href="#" className="text-left dropdown-item pt-0 pb-1">Logout</a>
                                    </div>
                                </li>
                        }
                        </ul>
                    </div>
                ) : null}
            </div>
        </header>
    )
}


export default Header;