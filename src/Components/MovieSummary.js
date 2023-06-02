import React from "react";
import "../App.css";

const MovieSummary = (props) => {
    const { name, summary, img, language, genres } = props
    
    return (
        <div className="">
            <h3 className="heading">
                {name}
            </h3>
            <img className='movie-image' width={'50%'} src={img} alt="movie-img" />
            <div dangerouslySetInnerHTML={{ __html: summary }} className="movie-summary">
            </div>
        </div>
    )
}

export default MovieSummary;