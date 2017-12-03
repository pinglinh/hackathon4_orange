import React from "react";

export default class Snapshots extends React.Component {
  render() {
    console.log(this.props.screenshots);
    const imageSource = this.props.screenshots.length
      ? "http://127.0.0.1:8887/" + this.props.screenshots[0]
      : "";
    return (
      <div>
        <img src={imageSource} alt="screenshots" />
      </div>
    );
  }
}
