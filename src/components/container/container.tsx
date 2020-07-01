import React from "react";
import "./container.css";

const Container: React.FC = (props) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
