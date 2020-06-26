import React from "react";
import "./group.css";

export interface Props {}

class Group extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <div className="group">{this.props.children}</div>;
  }
}

export default Group;
