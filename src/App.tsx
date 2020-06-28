import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBarBottom from "./components/navbar/navbar-bottom";
import Categories from "./components/categories/categories";
import Slideshow from "./components/slideshow/Slideshow";
import CardsContainer from "./components/cards-container/cards-container";
import Product from "./components/product/product";
import ProductNotFound from "./components/product/product-not-found";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Slideshow />
          <Categories />
          <CardsContainer />
        </Route>
        <Route path="/favorite">Favorite</Route>
        <Route path="/cart">Cart</Route>
        <Route path="/chat">Chat</Route>
        <Route path="/account">Account</Route>

        <Route path="/p/:id">
          <Product />
        </Route>
        <Route path="/search">
          <ProductNotFound />
        </Route>
        <Route path="/">
          <ProductNotFound />
        </Route>
      </Switch>

      <NavBarBottom />
    </div>
  );
}

export default App;
