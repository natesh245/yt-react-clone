import React from "react";
import "./VideoCard.css";

function VideoCard(props) {
  return (
    <div className="video-card">
      <div className="video-card__image">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="video-card__desc">
        <div className="video-card__desc-img">
          <img
            src={props.channelimage}
            alt={props.title}
            className="channel-image"
          />
        </div>
        <div className="video-card__desc-right">
          <h2>{props.title}</h2>
          <p className="video-card__channel">{props.channel}</p>
          <p className="video-card__views">
            {props.views} . {props.uploaded}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
