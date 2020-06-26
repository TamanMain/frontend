import React from "react";
import NavBarBottom from "./components/navbar/navbar-bottom";
import "./App.css";
import Categories from "./components/categories/categories";
import Slideshow from "./components/slideshow/Slideshow";
import CardsContainer from "./components/cards-container/cards-container";

function App() {
  return (
    <div className="app">
      <Slideshow />
      <Categories />
      <CardsContainer />
      <NavBarBottom />
    </div>
  );
}

export default App;
