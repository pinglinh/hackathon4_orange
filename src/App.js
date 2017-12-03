import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header.js";
import Title from "./components/Title/Title.js";
import DateTime from "./components/DateTime/DateTime.js";
import Card from "./components/Card/Card.js";
import Icons from "./components/Icons/Icons.js";
import data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { platform: "ios" };
  }

  setPlatform(platform) {
    this.setState({ platform });
  }

  render() {
    let { platform } = this.state;
    // let platform = this.state.platform;

    return (
      <div className="App">
        <Header />

        <div className="title-date-time-icons">
          <div>
            <Title />
            <DateTime />
          </div>
          <Icons onClick={platform => this.setPlatform(platform)} />
        </div>

        <div className="card-container">
          {data[platform].map(cardData => <Card country={cardData.store} />)}
        </div>
      </div>
    );
  }
}

export default App;
