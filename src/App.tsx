import React from "react";
import NavBarBottom from "./components/navbar/navbar-bottom";
import "./App.css";
import GroupCategories from "./components/categories/categories";

function App() {
  return (
    <div className="app">
      <GroupCategories />
      <NavBarBottom />
    </div>
  );
}

export default App;
