import React from "react";
import "./navbar-bottom.css";

class NavbarBottom extends React.Component {
  render() {
    return <div className="navbar-bottom">{this.props.children}</div>;
  }
}

export default NavbarBottom;
