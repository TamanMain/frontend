import React from "react";
import NavBarBottom from "../../components/navbar/navbar-bottom";
import Slideshow from "./../../components/slideshow/Slideshow";
import CardsContainer from "./../../components/cards-container/cards-container";
import Categories from "../../components/categories/categories";

import "./shop.css";

class Shop extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Slideshow />
        <Categories />
        <CardsContainer />
        <NavBarBottom />
      </React.Fragment>
    );
  }
}

export default Shop;
