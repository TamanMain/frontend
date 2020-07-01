import React from "react";
import "./button.css";

interface Props {
  name: string;
  className?: string;
  action?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ name, className, action }) => {
  return (
    <button
      type="button"
      className={"button " + (className ? className : "")}
      onClick={action}
    >
      <span>{name}</span>
    </button>
  );
};

export default Button;
