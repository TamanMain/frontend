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
        <NavBarBottomItem link="/" name="Belanja" icon={shop} />
        <NavBarBottomItem link="/favorite" name="Disukai" icon={favorite} />
        <NavBarBottomItem link="/cart" name="Keranjang" icon={cart} />
        <NavBarBottomItem link="/chat" name="Pesan" icon={chat} />
        <NavBarBottomItem link="/account" name="Akun" icon={account} />
      </div>
    );
  }
}

export default NavBarBottom;
