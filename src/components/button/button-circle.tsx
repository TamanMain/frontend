import React from "react";
import Button from "./button";

interface Props {
  name: string;
  action?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonCircle: React.FC<Props> = ({ name, action }) => {
  return <Button name={name} action={action} className="button-circle" />;
};

export default ButtonCircle;
