import React from "react";
import NavBarBottom from "./components/navbar/navbar-bottom";
import Categories from "./components/categories/categories";
import Slideshow from "./components/slideshow/Slideshow";
import CardsContainer from "./components/cards-container/cards-container";
import Product from "./components/product/product";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Slideshow />
      <Categories />
      <CardsContainer />
      <NavBarBottom />
      <Product />
    </div>
  );
}

export default App;
