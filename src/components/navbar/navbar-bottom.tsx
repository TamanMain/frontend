import React from "react";
import NavBarBottomItem from "./navbar-bottom-item";

import shop from "./images/shop.svg";
import favorite from "./images/favorite.svg";
import cart from "./images/cart.svg";
import chat from "./images/chat.svg";
import account from "./images/user.svg";

import "./navbar-bottom.css";

class NavBarBottom extends React.Component {
  render() {
    return (
      <div className="navbar-bottom">
        <NavBarBottomItem link="/" name="Shop" icon={shop} />
        <NavBarBottomItem link="/favorite" name="Favorite" icon={favorite} />
        <NavBarBottomItem link="/cart" name="Cart" icon={cart} />
        <NavBarBottomItem link="/chat" name="Chat" icon={chat} />
        <NavBarBottomItem link="/accunt" name="Account" icon={account} />
      </div>
    );
  }
}

export default NavBarBottom;
