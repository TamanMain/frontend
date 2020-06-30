import React from "react";
import "./button.css";
import Button from "./button";

interface Props {
  name: string;
  action?: (e: React.MouseEvent) => void;
}

class ButtonSecondary extends React.Component<Props> {
  render() {
    const { name, action } = this.props;
    return <Button name={name} action={action} className="button-secondary" />;
  }
}

export default ButtonSecondary;
