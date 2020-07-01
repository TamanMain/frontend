import React from "react";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  name: string;
  icon: string;
}

const GroupCategoriesItem: React.FC<Props> = ({ link, name, icon }) => {
  return (
    <Link to={link} className="group-categories-item">
      <img src={icon} alt={name} />
      <span>{name}</span>
    </Link>
  );
};

export default GroupCategoriesItem;
