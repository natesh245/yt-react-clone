import React from "react";
import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNavBar/SideNav";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Containers/Home/Home";

import axios from "axios";

import Trending from "./Containers/Trending/Trending";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showNav: true,
      searchString: "",
    };

    this.toggleNavBar = this.toggleNavBar.bind(this);

    this.axios = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3/",
    });
  }

  toggleNavBar() {
    console.log("Clicked");
    if (this.state.showNav) {
      this.setState({ showNav: false });
    } else {
      this.setState({ showNav: true });
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header toggleHandler={this.toggleNavBar} />

          <div className="body-container">
            {this.state.showNav ? <SideNav /> : <SideBar />}
            <div className="container">
              <Switch>
                <Route path="/trending" component={Trending}></Route>
                <Route
                  path="/Subscription"
                  render={() => <div>Subscription</div>}
                ></Route>
                <Route
                  path="/library"
                  render={() => <div>Library</div>}
                ></Route>
                <Route
                  path="/history"
                  render={() => <div>History</div>}
                ></Route>
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

  componentDidMount() {
    this.axios
      .get("search", {
        params: {
          part: "snippet",
          q: "traversy media",
          maxResults: 25,
          key: process.env.REACT_APP_YT_API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data.items);
      });
  }
}

export default App;
