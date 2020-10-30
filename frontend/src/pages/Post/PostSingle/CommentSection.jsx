import React, {useContext, useState} from "react";
import {blogContext} from "../../../reducer/blogReducer";


const CommentSection = () => {
    const [focus, setFocus] = useState(false)

    const blog_context = useContext(blogContext);

    const commentStyles = {
        position: "fixed",
        top: 0,
        zIndex: 99,
        right: 0,
        height: "100vh",
        width: 380,
        transform: !blog_context.state.sidebarOpened ? "translateX(380px)" : "",
        transition: "all 0.3s ease-in-out"
    }

    const closeSidebar = () => {
        blog_context.dispatchState({type: "SET_OPENED_SIDEBAR", opened: false});
    }

    return (
        <div style={commentStyles}>
            <div style={{position: "absolute", width: "100%", height: "100%"}} className="card shadow-lg">
                <div className="card-head pl-5 pr-5 pt-5 pb-0">
                    <p style={{fontSize: 24}}>Responses <span onClick={closeSidebar} style={{cursor: "pointer"}} className="float-right">&times;</span></p>
                </div>
                <div className="card-body pt-0">
                    {/*{*/}
                        <input style={{display: !focus ? "block" : "none"}} onFocus={()=> setFocus(true)} placeholder={'What are your thoughts?'} type="text" className="form-control shadow border-0"/>
                            {/*(*/}
                                <div className="card shadow">
                                    <textarea style={{height: !focus ? 0 : 150, transition: "all 0.3s ease-out", resize: "none", boxShadow: "none"}} placeholder={'What are your thoughts?'} className="form-control border-0" ></textarea>
                                    <div style={{display: !focus ? "none" : "block"}} className="btn-group p-3">
                                        <button onClick={()=> setFocus(false)} className="btn shadow-sm btn-sm btn-soft-secondary mr-3">Cancel</button>
                                        <button className="btn shadow-sm btn-sm btn-soft-success ml-3">Save</button>
                                    </div>
                                </div>
                            {/*)*/}
                        {/*}*/}
                </div>
            </div>
        </div>
    )
}


export default CommentSection;