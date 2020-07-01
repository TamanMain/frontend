import React from "react";
import DefaultNavbar from "../../components/navbar/default-navbar";
import ProductList from "../../components/product-list/product-list";
import Product from "./../../libs/ProductObject";
import ProductsData from "../../data/products-data";
import account from "../../data/account-data.json";
import "./cart.css";

function getCart(products: Product[], filter?: number[]): Product[] {
  return products.filter((p) => filter?.includes(p._id));
}

const Cart: React.FC = () => {
  const cartProducts = getCart(ProductsData, account.cart);

  return (
    <React.Fragment>
      <ProductList title="Keranjang Belanja" products={cartProducts} />
      <DefaultNavbar />
    </React.Fragment>
  );
};

export default Cart;
