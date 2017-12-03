import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="asos-logo">
        <img src={require("../../images/asos_logo3.png")} alt="asos logo" />
      </div>
    </header>
  );
};

export default Header;
