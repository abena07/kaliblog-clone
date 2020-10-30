import React from "react";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-primary text-white small">
            <div className="pt-6 pb-4 pt-lg-7 pb-lg-6">
                <div className="container">
                    <div className="row justify-content-md-between">
                        <div className="col-md-5 col-lg-4 d-flex flex-column justify-content-between">
                            <Link className={'text-light h2'} to={'/'}>KaliBlog</Link>
                            <div className="mt-4 mb-3 mt-lg-5 pt-lg-2 mx-auto mx-md-0"><a href="#"
                                                                                          className="text-reset text-decoration-none">
                                <svg width="15" height="15" className="mx-1" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24"><title>social-media-facebook</title>
                                    <path
                                        d="M18.14,7.17A.5.5,0,0,0,17.77,7H14V5.59c0-.28.06-.6.51-.6h3a.44.44,0,0,0,.35-.15A.5.5,0,0,0,18,4.5V.5a.5.5,0,0,0-.5-.5H13.17C8.37,0,8,4.1,8,5.35V7H5.5a.5.5,0,0,0-.5.5v4a.5.5,0,0,0,.5.5H8V23.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V12h3.35a.5.5,0,0,0,.5-.45l.42-4A.5.5,0,0,0,18.14,7.17Z"></path>
                                </svg>
                            </a><a href="#" className="text-white text-decoration-none">
                                <svg width="15" height="15" className="mx-1" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24"><title>social-media-twitter</title>
                                    <path
                                        d="M23.32,6.44a.5.5,0,0,0-.2-.87l-.79-.2A.5.5,0,0,1,22,4.67l.44-.89a.5.5,0,0,0-.58-.7l-2,.56a.5.5,0,0,1-.44-.08,5,5,0,0,0-3-1,5,5,0,0,0-5,5v.36a.25.25,0,0,1-.22.25c-2.81.33-5.5-1.1-8.4-4.44a.51.51,0,0,0-.51-.15A.5.5,0,0,0,2,4a7.58,7.58,0,0,0,.46,4.92.25.25,0,0,1-.26.36L1.08,9.06a.5.5,0,0,0-.57.59,5.15,5.15,0,0,0,2.37,3.78.25.25,0,0,1,0,.45l-.53.21a.5.5,0,0,0-.26.69,4.36,4.36,0,0,0,3.2,2.48.25.25,0,0,1,0,.47A10.94,10.94,0,0,1,1,18.56a.5.5,0,0,0-.2,1,20.06,20.06,0,0,0,8.14,1.93,12.58,12.58,0,0,0,7-2A12.5,12.5,0,0,0,21.5,9.06V8.19a.5.5,0,0,1,.18-.38Z"></path>
                                </svg>
                            </a><a href="#" className="text-white text-decoration-none">
                                <svg width="15" height="15" className="mx-1" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24"><title>professional-network-linkedin</title>
                                    <rect x="2" y="8.5" width="5" height="14" rx="0.5" ry="0.5"></rect>
                                    <ellipse cx="4.48" cy="4" rx="2.48" ry="2.5"></ellipse>
                                    <path
                                        d="M18.5,22.5h3A.5.5,0,0,0,22,22V13.6C22,9.83,19.87,8,16.89,8a4.21,4.21,0,0,0-3.17,1.27A.41.41,0,0,1,13,9a.5.5,0,0,0-.5-.5h-3A.5.5,0,0,0,9,9V22a.5.5,0,0,0,.5.5h3A.5.5,0,0,0,13,22V14.5a2.5,2.5,0,0,1,5,0V22A.5.5,0,0,0,18.5,22.5Z"></path>
                                </svg>
                            </a><a href="#" className="text-white text-decoration-none">
                                <svg width="15" height="15" className="mx-1" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24"><title>social-pinterest</title>
                                    <path
                                        d="M7.13,22.36a.4.4,0,0,0,.29.33h.11a.45.45,0,0,0,.36-.2,12.8,12.8,0,0,0,2.19-4c.09-.33.39-1.52.61-2.37a.25.25,0,0,1,.4-.13,4.12,4.12,0,0,0,2.53.88c3.9,0,6.73-3.57,6.73-8.48,0-3.51-2.94-7.13-7.86-7.13C7,1.29,3.65,5.23,3.65,9c0,2.35,1,4.15,2.62,4.82a.66.66,0,0,0,.94-.47l.24-1a.82.82,0,0,0-.22-.9,3.25,3.25,0,0,1-.73-2.2,5.47,5.47,0,0,1,5.67-5.5c2.93,0,4.75,1.67,4.75,4.36,0,3.5-1.53,6.14-3.56,6.14A1.73,1.73,0,0,1,12,13.7a1.58,1.58,0,0,1-.28-1.38c.13-.54.3-1.1.47-1.65A10.19,10.19,0,0,0,12.77,8,1.84,1.84,0,0,0,10.89,6C9.45,6,8.33,7.43,8.33,9.31a5.13,5.13,0,0,0,.32,1.79.5.5,0,0,1,0,.29L7.17,17.7A13.38,13.38,0,0,0,7.13,22.36Z"></path>
                                </svg>
                            </a><a href="#" className="text-white text-decoration-none">
                                <svg width="15" height="15" className="mx-1" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24"><title>designer-community-dribbble</title>
                                    <path
                                        d="M24,12A12,12,0,0,0,6.28,1.45l-.05,0A12.09,12.09,0,0,0,0,12a11.94,11.94,0,0,0,2.71,7.58l0,0h0A12,12,0,0,0,24,12ZM20.07,6.12A9.93,9.93,0,0,1,22,11.65c-.88-.09-1.82-.14-2.62-.14a24.12,24.12,0,0,0-4.17.38c-.27-.69-.56-1.37-.89-2A23.88,23.88,0,0,0,20.07,6.12ZM18.74,4.64a21.88,21.88,0,0,1-5.42,3.47A23.94,23.94,0,0,0,8.65,2.59a9.9,9.9,0,0,1,10.09,2ZM6.68,3.55a22,22,0,0,1,4.75,5.3A22,22,0,0,1,4.35,10c-.71,0-1.42,0-2.13-.11A10,10,0,0,1,6.68,3.55ZM2,11.92c.78.08,1.56.13,2.34.13a23.93,23.93,0,0,0,8.09-1.42q.43.84.78,1.71a23.78,23.78,0,0,0-9.59,5.11A9.9,9.9,0,0,1,2,11.92ZM4.87,19a21.79,21.79,0,0,1,9-4.78,22.1,22.1,0,0,1,.94,6.39c0,.33,0,.66,0,1A9.94,9.94,0,0,1,4.87,19Zm12,1.76s0-.1,0-.15a24.13,24.13,0,0,0-1-6.8,22.1,22.1,0,0,1,3.5-.3c.77,0,1.66.05,2.49.14A10,10,0,0,1,16.82,20.76Z"></path>
                                </svg>
                            </a></div>
                        </div>
                        <div className="col-md-7 col-lg-6 mt-5 mt-md-0">
                            <div className="row">
                                <div className="col-6 col-md-4 mb-4 mb-md-0"><h3
                                    className="h6 text-uppercase mb-3">Services</h3>
                                    <ul className="list-unstyled">
                                        <li className="mb-1"><a href="#" className="text-reset">Science & Technology</a></li>
                                        <li className="mb-1"><a href="#" className="text-reset">Education</a></li>
                                        <li className="mb-1"><a href="#" className="text-reset">Entertainment</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-4 mb-4 mb-md-0"><h3
                                    className="h6 text-uppercase mb-3">Company</h3>
                                    <ul className="list-unstyled">
                                        <li className="mb-1"><a href="#" className="text-reset">About Us</a></li>
                                        <li className="mb-1"><a href="#" className="text-reset">Contact Us</a></li>
                                        <li className="mb-1"><a href="#" className="text-reset">Hire Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-4"><h3 className="h6 text-uppercase mb-3">Help</h3>
                                    <ul className="list-unstyled">
                                        <li className="mb-1"><a href="#" className="text-reset">FAQs</a></li>
                                        <li className="mb-1"><a href="#" className="text-reset">Topics</a></li>
                                        <li className="mb-1"><a href="#" className="text-reset">Terms</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top border-gray py-3">
                <div className="container">
                    <div className="row justify-content-between small">
                        <div className="col-auto"><a href="#" className="text-reset">Privacy Policy</a> | <a href="#"
                                                                                                             className="text-reset">Cookie
                            Policy</a></div>
                        <div className="col-auto"><a data-scroll="" href="#" className="d-inline-block text-reset"
                                                     title="Up to the top">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>arrow-button-up-1</title>
                                <path
                                    d="M12,10.416a2.643,2.643,0,0,1,1.875.775l9.541,9.541a1.768,1.768,0,0,1-2.5,2.5l-8.739-8.739a.25.25,0,0,0-.354,0L3.084,23.232a1.768,1.768,0,0,1-2.5-2.5l9.541-9.541A2.643,2.643,0,0,1,12,10.416Z"></path>
                                <path
                                    d="M12,.25a2.643,2.643,0,0,1,1.875.775l9.541,9.541a1.768,1.768,0,0,1-2.5,2.5L12.177,4.327a.25.25,0,0,0-.354,0L3.084,13.066a1.768,1.768,0,0,1-2.5-2.5l9.541-9.541A2.643,2.643,0,0,1,12,.25Z"></path>
                            </svg>
                        </a></div>
                        <div className="col-auto"><span>© Kali Association of Scientists, 2020 KaliCom Ltd.</span></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;