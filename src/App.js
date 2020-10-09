import React from "react";
import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNavBar/SideNav";
import SideBar from "./Components/SideBar/SideBar";

import Routes from "./Components/DiffRoutes/DiffRoutes";

// import Search from "./Containers/Search/Search";

import axios from "axios";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showNav: true,
      searchString: "",
      searchArray: [],
    };

    this.toggleNavBar = this.toggleNavBar.bind(this);
    this.SearchHandler = this.SearchHandler.bind(this);

    this.axios = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3/",
    });
  }

  SearchHandler(event) {
    event.preventDefault();
    console.log(event.target.children[0].value);
    this.setState({
      searchString: event.target.children[0].value,
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
          <Header
            toggleHandler={this.toggleNavBar}
            searchHandler={this.SearchHandler}
          />

          <div className="body-container">
            {this.state.showNav ? <SideNav /> : <SideBar />}
            <div className="container">
              <Routes searchArray={this.state.searchArray} />
            </div>
          </div>
        </div>
      </Router>
    );
  }

  componentDidUpdate(prevProps, prevstate) {
    if (prevstate.searchString !== this.state.searchString) {
      this.axios
        .get("search", {
          params: {
            part: "snippet",
            q: this.state.searchString,
            maxResults: 25,
            key: process.env.REACT_APP_YT_API_KEY,
          },
        })
        .then((response) => {
          console.log(response.data.items);
          this.setState({ searchArray: response.data.items });
        });
    }
  }
}

export default App;
