import "./PageTitle.css";
import React from "react";

export const PageTitle = props => {
  return (
    <div className="PageTitle">
      <h1>{props.text}</h1>
    </div>
  );
};
