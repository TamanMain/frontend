import React from "react";
import "./button.css";

interface Props {
  name: string;
  className?: string;
  action?: (e: React.MouseEvent) => void;
}

class Button extends React.Component<Props> {
  render() {
    const { name, className, action } = this.props;
    return (
      <button
        type="button"
        className={"button " + (className ? className : "")}
        onClick={action}
      >
        <span>{name}</span>
      </button>
    );
  }
}

export default Button;
