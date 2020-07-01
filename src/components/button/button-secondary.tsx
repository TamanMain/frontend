import React from "react";
import "./button.css";
import Button from "./button";

interface Props {
  name: string;
  action?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonSecondary: React.FC<Props> = ({ name, action }) => {
  return <Button name={name} action={action} className="button-secondary" />;
};

export default ButtonSecondary;
