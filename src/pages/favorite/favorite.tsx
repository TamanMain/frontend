import React from "react";
import DefaultNavbar from "../../components/navbar/default-navbar";
import ProductList from "../../components/product-list/product-list";
import ProductsData from "../../data/products-data";
import Product from "./../../libs/ProductObject";
import account from "../../data/account-data.json";
import "./favorite.css";

function getFavorite(products: Product[], filter: number[]): Product[] {
  return products.filter((p) => filter.includes(p._id));
}

const Favorite: React.FC = () => {
  const favProducts = getFavorite(ProductsData, account.favorite);

  return (
    <React.Fragment>
      <ProductList title="Produk Disukai" products={favProducts} />
      <DefaultNavbar />
    </React.Fragment>
  );
};

export default Favorite;
