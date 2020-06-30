import React from "react";
import DefaultNavbarItem from "./default-navbar-item";

import shop from "./images/shop.svg";
import favorite from "./images/favorite.svg";
import cart from "./images/cart.svg";
import chat from "./images/chat.svg";
import account from "./images/user.svg";

import "./default-navbar.css";
import NavbarBottom from "./navbar-Bottom";

class DefaultNavbar extends React.Component {
  render() {
    return (
      <NavbarBottom>
        <DefaultNavbarItem link="/" name="Belanja" icon={shop} />
        <DefaultNavbarItem link="/favorite" name="Disukai" icon={favorite} />
        <DefaultNavbarItem link="/cart" name="Keranjang" icon={cart} />
        <DefaultNavbarItem link="/chat" name="Pesan" icon={chat} />
        <DefaultNavbarItem link="/account" name="Akun" icon={account} />
      </NavbarBottom>
    );
  }
}

export default DefaultNavbar;
