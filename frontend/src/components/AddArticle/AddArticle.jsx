import React, { useState } from 'react';
import './AddArticle.css';
import writeFontSvg from '../../assets/write_font.svg';
import notedLaptopSvg from '../../assets/noted_laptop.svg';
import publishPostSvg from '../../assets/publish_post.svg';


const AddArticle = (props) => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const getTodayDate = () => {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let today = new Date();
        return `${dayNames[today.getDay()]}, ${today.getDay()} ${monthNames[today.getMonth()]}, ${today.getFullYear()}`
        
    }

    const addArticle = (e) => {
        const article = {
            author: author,
            title: title,
            content: content,
            date: getTodayDate(),
            views: 89,
            readTime: 93,
            id: props.posts[props.posts.length-1].id+1
        }
        
        console.log(article);
        props.appendArticle(article)
    }
    return (
        props.render ? (
            <div className="add-post-container">
                <img id="writeFont" src={writeFontSvg} alt="Write Font Svg"/>
                <img src={notedLaptopSvg} alt="Noted Laptop Svg" id="notedLaptop"/>
                <img src={publishPostSvg} alt="Publish Post Svg" id="publishPost"/>
                <form method="post">
                    <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author Name. e.g. John Doe"/>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Article Title. e.g. State Management in react function components using useEffects."/>
                    <textarea onChange={(e) => setContent(e.target.value)} placeholder="Your Article content goes here ..." cols="50" rows="25"></textarea>
                    <div onClick={addArticle} className="submit">
                        <span>Publish</span>
                        <i className="material-icons">add_circle</i>
                    </div>
                </form>
            </div>
        ) : null
    )
}


export default AddArticle;