import React from "react";
import "./button.css";
import Button from "./button";

interface Props {
  name: string;
}

class ButtonSecondary extends React.Component<Props> {
  render() {
    return <Button name={this.props.name} className="button-secondary" />;
  }
}

export default ButtonSecondary;
