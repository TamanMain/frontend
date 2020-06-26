import React from "react";
import NavBarBottom from "./components/navbar/navbar-bottom";
import "./App.css";
import Categories from "./components/categories/categories";
import Slideshow from "./components/slideshow/Slideshow";

function App() {
  return (
    <div className="app">
      <Slideshow />
      <Categories />
      <NavBarBottom />
    </div>
  );
}

export default App;
