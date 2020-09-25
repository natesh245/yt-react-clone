import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import { NavLink } from "react-router-dom";

import "./SideBar.css";

function SideBar() {
  return (
    <div className="side-nav">
      <ul className="side-nav__link-list">
        <NavLink exact to="/" className="side-nav__list-link">
          <li className="side-nav__list-item">
            <HomeIcon className="side-nav__icons" />
            <div>Home</div>
          </li>
        </NavLink>
        <NavLink to="/trending" className="side-nav__list-link">
          <li className="side-nav__list-item">
            <WhatshotIcon className="side-nav__icons" />
            <div>Trending</div>
          </li>
        </NavLink>
        <NavLink to="/subscription" className="side-nav__list-link">
          <li className="side-nav__list-item">
            <SubscriptionsIcon className="side-nav__icons" />
            <div>Subscriptions</div>
          </li>
        </NavLink>
        <NavLink exact to="/library" className="side-nav__list-link">
          <li className="side-nav__list-item">
            <VideoLibraryIcon className="side-nav__icons" />
            <div>Library</div>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideBar;
