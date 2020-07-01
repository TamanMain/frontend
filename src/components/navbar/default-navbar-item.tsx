import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  link: string;
  name: string;
  icon: string;
}

const DefaultNavbarItem: React.FC<Props> = ({ link, name, icon }) => {
  return (
    <NavLink to={link} exact className="default-navbar-item">
      <img src={icon} alt="" />
      <span>{name}</span>
    </NavLink>
  );
};

export default DefaultNavbarItem;
