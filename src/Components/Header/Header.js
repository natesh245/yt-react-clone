import React from "react";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header(props) {
  return (
    <div className="header">
      <div className="header__icon-logo">
        <MenuIcon onClick={() => props.toggleHandler()} />

        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="yt-logo"
          className="header__icon-logo-image"
        />
      </div>
      <form className="header__search-container" onSubmit={props.searchHandler}>
        <input
          type="text"
          placeholder="Search"
          className="header__search-input"
        />
        <div className="header__search-icon-container">
          <SearchIcon className="header__search-icon" />
        </div>
      </form>
      <div className="header__end-container">
        <VideoCallIcon className="header__end-icons" />
        <AppsIcon className="header__end-icons" />
        <NotificationsIcon className="header__end-icons" />
        <div className="avatar">
          <span className="avatar-span">N</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
