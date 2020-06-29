import React from "react";
import { Switch, Route } from "react-router-dom";

import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Chat from "./pages/chat/chat";
import Favorite from "./pages/favorite/favorite";
import Account from "./pages/account/account";

import Product from "./pages/product/product";
import SearchPage from "./pages/search/search-page";
import PageNotFound from "./pages/PageNotFound/page-not-found";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Shop />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/account">
          <Account />
        </Route>

        <Route path="/p/:id">
          <Product />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
