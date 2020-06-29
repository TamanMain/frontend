import React from "react";
import "./container.css";

interface Props {
  title: string;
}

class ContainerWithTitle extends React.Component<Props> {
  render() {
    return (
      <div className="container">
        <div className="container-title">{this.props.title}</div>
        {this.props.children}
      </div>
    );
  }
}

export default ContainerWithTitle;
