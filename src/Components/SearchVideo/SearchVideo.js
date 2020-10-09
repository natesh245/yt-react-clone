import React from "react";
import "./SearchVideo.css";

function SearchVideo(props) {
  return (
    <div className="search-video">
      <div className="video-image">
        <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className="video-desc">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default SearchVideo;
