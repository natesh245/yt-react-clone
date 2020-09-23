import React from "react";
import Header from "./Header/Header";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="body-container">
          <div className="sideNav">
            <ul>
              <li>
                <Link to="/" className="Link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trending" className="Link">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="Link">
                  Subscriptions
                </Link>
              </li>
            </ul>
          </div>
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
              <Route path="/" render={() => <div>Home</div>}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
