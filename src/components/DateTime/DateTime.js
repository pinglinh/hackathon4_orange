import React from "react";
import "./DateTime.css";

const DateTime = () => {
  const dateAndTime = new Date();
  return <div>Last updated: {String(dateAndTime)}</div>;
};

export default DateTime;
