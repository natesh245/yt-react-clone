import React from "react";
import Header from "./Header/Header";
import SideNav from "./SideNavBar/SideNav";

import Home from "./Home/Home";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="body-container">
          <SideNav />
          <div className="container">
            <Switch>
              <Route
                path="/trending"
                render={() => <div>Trending</div>}
              ></Route>
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
              <Route path="/" component={Home}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
