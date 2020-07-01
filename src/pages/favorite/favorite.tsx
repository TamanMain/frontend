import React from "react";
import DefaultNavbar from "../../components/navbar/default-navbar";
import ProductList from "../../components/product-list/product-list";
import ProductsData from "./../../libs/products-data";
import "./favorite.css";

const Favorite: React.FC = () => {
  return (
    <React.Fragment>
      <ProductList title="Produk Disukai" products={ProductsData} />
      <DefaultNavbar />
    </React.Fragment>
  );
};

export default Favorite;
