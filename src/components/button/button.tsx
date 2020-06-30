import React from "react";
import "./button.css";

interface Props {
  name: string;
  className?: string;
}

class Button extends React.Component<Props> {
  render() {
    const { name, className } = this.props;
    return (
      <button type="button" className={"button " + className}>
        <span>{name}</span>
      </button>
    );
  }
}

export default Button;
