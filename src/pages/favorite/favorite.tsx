import React from "react";
import NavBarBottom from "../../components/navbar/navbar-bottom";
import ProductList from "../../components/product-list/product-list";
import ProductsData from "./../../libs/products-data";
import "./favorite.css";

class Favorite extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ProductList title="Produk Disukai" products={ProductsData} />
        <NavBarBottom />
      </React.Fragment>
    );
  }
}

export default Favorite;
