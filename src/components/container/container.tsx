import React from "react";
import "./container.css";

export interface Props {}

class Container extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default Container;
