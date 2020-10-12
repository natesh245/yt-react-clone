import React from "react";
import "./Search.css";
import SearchVideo from "./../../Components/SearchVideo/SearchVideo";
function Search(props) {
  return (
    <div className="search-container">
      {props.Array.map((arEl) => {
        return (
          <SearchVideo
            key={arEl.snippet.title}
            thumbnail={arEl.snippet.thumbnails.default.url}
            title={arEl.snippet.title}
            description={arEl.snippet.description}
          />
        );
      })}
    </div>
  );
}

export default Search;
