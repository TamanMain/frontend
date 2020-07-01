import React from "react";
import "./container.css";

interface Props {
  title: string;
}

const ContainerWithTitle: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="container">
      <div className="container-title">{title}</div>
      {children}
    </div>
  );
};

export default ContainerWithTitle;
