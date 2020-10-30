import React, {useContext, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faComments} from "@fortawesome/free-solid-svg-icons";
import Output from "editorjs-react-renderer";
import Footer from "../../../widgets/Footer";
import {blogContext} from "../../../reducer/blogReducer";



const MainContent = props => {

    const [hoveredLike, setHoveredLike] = useState(false);
    const [hoveredDislike, setHoveredDislike] = useState(false);

    const blog_context = useContext(blogContext);

    const [liked, setLiked] = useState(null);

    const like = () => {
        setLiked(true)
    }

    const disLike = () => {
        setLiked(false);
    }

    const openSidebar = () => {
        blog_context.dispatchState({type: "SET_SIDEBAR_OPENED", opened: true});
    }

    return (
        <>
            <section className="py-6 py-lg-7">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 drop-caps">
                            {/*{props.content}*/}
                            <Output data={props.content} /><br /><br />
                            <hr className={'mt-5'}/>
                            <FontAwesomeIcon onClick={like} onMouseOut={()=> setHoveredLike(false)} onMouseOver={()=> {setHoveredLike(true)}} style={{cursor: "pointer", fontSize: hoveredLike ? 32 : 26, transition: 'all 0.2s ease-in-out'}} title={'Like'} className={`mr-4 mb-1 ${liked ? 'text-info' : 'text-dark'}`} icon={faThumbsUp} />
                            <FontAwesomeIcon onClick={disLike} onMouseOut={()=> setHoveredDislike(false)} onMouseOver={()=> {setHoveredDislike(true)}} style={{cursor: "pointer", fontSize: hoveredDislike ? 32 : 26, transition: 'all 0.2s ease-in-out'}} title={'Dislike'} className={`ml-3 ${liked === false ? 'text-info' : 'text-dark'}`} icon={faThumbsDown} />
                            <FontAwesomeIcon onClick={openSidebar} style={{fontSize: 28, cursor: "pointer"}} className={"float-right"} icon={faComments} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default MainContent;