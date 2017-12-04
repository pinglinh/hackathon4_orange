import React from "react";
import "./Screenshots.css";

export default class Screenshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.changeScreenshot = this.changeScreenshot.bind(this);
  }

  changeScreenshot() {
    this.setState({
      index: (this.state.index + 1) % this.props.screenshots.length
    });
  }

  render() {
    const imageSource =
      "http://127.0.0.1:3001/" + this.props.screenshots[this.state.index];
    return (
      <img
        src={imageSource}
        alt="screenshots"
        className="screenshots"
        onClick={this.changeScreenshot}
      />
    );
  }
}
