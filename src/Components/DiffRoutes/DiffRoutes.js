import React from "react";
import Home from "./../../Containers/Home/Home";
import Trending from "./../../Containers/Trending/Trending";
import { Switch, Route } from "react-router-dom";

import Search from "./../../Containers/Search/Search";

function DiffRoutes(props) {
  return (
    <div>
      <Switch>
        <Route path="/search">
          <Search Array={props.searchArray} />
        </Route>
        <Route path="/trending">
          <Trending />
        </Route>
        <Route
          path="/Subscription"
          render={() => <div>Subscription</div>}
        ></Route>
        <Route path="/library" render={() => <div>Library</div>}></Route>
        <Route path="/history" render={() => <div>History</div>}></Route>
        <Route
          path="/your-videos"
          render={() => <div>Your Videos</div>}
        ></Route>
        <Route
          path="/watch-later"
          render={() => <div>watch Later</div>}
        ></Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default DiffRoutes;
