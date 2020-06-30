import React from "react";
import DefaultNavbar from "../../components/navbar/default-navbar";
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
        <CardsContainer />
        <CardsContainer />
        <CardsContainer />
        <DefaultNavbar />
      </React.Fragment>
    );
  }
}

export default Shop;
