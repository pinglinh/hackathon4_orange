import React from "react";
import data from "./../../data.json";
import Screenshots from "./../../components/Screenshots/Screenshots.js";
import Card from "./../../components/Card/Card.js";

class Snapshots extends React.Component {
  constructor(props) {
    super();

    this.state = {
      screenshots: []
    };
  }

  render() {
    return <Screenshots screenshots={data.ios[0].results.component} />;
  }
}

export default Snapshots;
