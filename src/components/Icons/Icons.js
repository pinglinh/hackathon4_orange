import React from "react";
import "./Icons.css";

const Icons = props => {
  return (
    <div className="icons-container">
      <img
        src={require("./../../images/Andriod.png")}
        alt="android icon"
        onClick={() => props.onClick("android")}
      />
      <img
        src={require("./../../images/ios.png")}
        alt="ios icon"
        onClick={() => props.onClick("ios")}
      />
      <img
        src={require("./../../images/Web.png")}
        alt="web icon"
        onClick={() => props.onClick("web")}
      />
    </div>
  );
};

export default Icons;
