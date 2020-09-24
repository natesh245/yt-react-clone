import React from "react";
import "./trend-video.css";

function trendVideo(props) {
  return (
    <div className="video">
      <div className="thumbnail-container">
        <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className="video-desc">
        <h2>{props.title}</h2>
        <p>
          {props.channel} . {props.views} . {props.uploaded}
        </p>
        <p>
          {props.desc.length > 160
            ? props.desc.substring(0, 168).concat("...")
            : props.desc}
        </p>
      </div>
    </div>
  );
}

export default trendVideo;
