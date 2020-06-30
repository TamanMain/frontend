import React from "react";
import "./navbar-bottom.css";

const NavbarBottom: React.SFC = (props) => {
  return <div className="navbar-bottom">{props.children}</div>;
};

export default NavbarBottom;
