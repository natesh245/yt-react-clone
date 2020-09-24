import React from "react";
import "./SideNav.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <div className="side-nav">
      <ul className="side-nav__link-list">
        <NavLink exact to="/" className="side-nav__list-link">
          <li className="side-nav__list-item">
            <HomeIcon className="side-nav__icons" />
            Home
          </li>
        </NavLink>
        <NavLink to="/trending" className="side-nav__list-link">
          <li className="side-nav__list-item">
            <WhatshotIcon className="side-nav__icons" />
            Trending
          </li>
        </NavLink>
        <NavLink to="/subscription" className="side-nav__list-link">
          <li className="side-nav__list-item">
            <SubscriptionsIcon className="side-nav__icons" />
            Subscription
          </li>
        </NavLink>
      </ul>

      <ul className="side-nav__link-list">
        <NavLink exact to="/library" className="side-nav__list-link">
          <li className="side-nav__list-item">
            <VideoLibraryIcon className="side-nav__icons" />
            Library
          </li>
        </NavLink>
        <NavLink to="/history" className="side-nav__list-link">
          <li className="side-nav__list-item">
            <HistoryIcon className="side-nav__icons" />
            History
          </li>
        </NavLink>
        <NavLink to="/your-videos" className="side-nav__list-link">
          <li className="side-nav__list-item">
            <PlayCircleOutlineIcon className="side-nav__icons" />
            Your Videos
          </li>
        </NavLink>
        <NavLink to="/watch-later" className="side-nav__list-link">
          <li className="side-nav__list-item">
            <WatchLaterIcon className="side-nav__icons" />
            Watch later
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideNav;
