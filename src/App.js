import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title="Hololive OwO" icon="fas fa-heart" />
        <div class="container">
          <Users />
        </div>
      </Fragment>
    );
  }
}

export default App;
