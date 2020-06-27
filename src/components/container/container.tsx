import React from "react";
import "./container.css";

interface Props {
  title?: string;
}

class Container extends React.Component<Props> {
  render() {
    return (
      <div className="container">
        {this.props.title ? (
          <div className="container-title">{this.props.title}</div>
        ) : null}
        {this.props.children}
      </div>
    );
  }
}

export default Container;
