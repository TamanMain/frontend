import React from "react";
import "./navbar-bottom.css";

const NavbarBottom: React.FC = (props) => {
  return <div className="navbar-bottom">{props.children}</div>;
};

export default NavbarBottom;
