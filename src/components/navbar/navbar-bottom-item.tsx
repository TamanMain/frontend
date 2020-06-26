import React from "react";

interface NavBarBottomItemProps {
  link: string;
  name: string;
  icon: string;
}

class NavBarBottomItem extends React.Component<NavBarBottomItemProps> {
  render() {
    const { link, name, icon } = this.props;
    return (
      <a href={link} className="navbar-bottom-item">
        <img src={icon} alt={name} />
        <span>{name}</span>
      </a>
    );
  }
}

export default NavBarBottomItem;
