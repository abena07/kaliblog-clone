import React from 'react';


const RelatedBlogCard = (props) => {
    return (
        <div className="related-blog-card">
            <h3>{props.title}</h3>
            <p className="related-blog-content">{props.content.substring(0, 120)}</p>
            <p className="related-blog-footer">{props.footer}</p>
            <a href="#continue-reading">Continue Reading</a>
        </div>
    )
}


export default RelatedBlogCard;