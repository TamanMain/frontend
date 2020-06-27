import React from "react";
import { NavLink } from "react-router-dom";

interface NavBarBottomItemProps {
  link: string;
  name: string;
  icon: string;
}

class NavBarBottomItem extends React.Component<NavBarBottomItemProps> {
  render() {
    const { link, name, icon } = this.props;
    return (
      <NavLink to={link} exact className="navbar-bottom-item">
        <img src={icon} alt={name} />
        <span>{name}</span>
      </NavLink>
    );
  }
}

export default NavBarBottomItem;
