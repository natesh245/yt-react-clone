import React, { Component } from "react";
import TrendVideo from "../../Components/TrendingVideo/trend-video";
import "./Trending.css";

import { ytTrending } from "../../yt-Data/yt-trend-data";
class Trending extends Component {
  render() {
    console.log("in render trending");
    const datas = [...ytTrending];

    return (
      <div className="trending">
        {datas.map((data, i) => {
          return (
            <TrendVideo
              key={i}
              thumbnail={data.thumbnail}
              title={data.title}
              desc={data.description}
              channel={data.channel}
              views={data.views}
              uploaded={data.upload}
            />
          );
        })}
      </div>
    );
  }
}

export default Trending;
