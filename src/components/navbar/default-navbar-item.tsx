import React from "react";
import { NavLink } from "react-router-dom";

interface NavBarBottomItemProps {
  link: string;
  name: string;
  icon: string;
}

class DefaultNavbarItem extends React.Component<NavBarBottomItemProps> {
  render() {
    const { link, name, icon } = this.props;
    return (
      <NavLink to={link} exact className="default-navbar-item">
        <img src={icon} alt="" />
        <span>{name}</span>
      </NavLink>
    );
  }
}

export default DefaultNavbarItem;
