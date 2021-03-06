import React from "react";
import "./Card.css";

import Screenshots from "./../../components/Screenshots/Screenshots.js";

const Card = props => {
  return (
    <div className="card">
      <p>{props.country} Home Feed</p>

      <div className="platforms">
        <div className="phone">
          <Screenshots screenshots={props.results.component.phone} />
        </div>
        <div className="tablet">
          <Screenshots screenshots={props.results.component.tablet} />
        </div>
      </div>

      <div className="info">
        <div className="category">Home Feed CTAs</div>
        <div className="total-number">13</div>
      </div>

      <div className="status">
        <div>Status</div>
        <div className="total-status">13 valid</div>
      </div>
    </div>
  );
};

export default Card;
