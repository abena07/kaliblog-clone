import React from "react";


const RelatedArticles = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Related Articles</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col">
                        <div className="swiper container">
                            <p className={'text-lg'}>No Related Article</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default RelatedArticles;