import React from "react";
import { AppState } from "../../store";
import { connect } from "react-redux";
import { CartState, CartProduct } from "../../store/cart/types";
import DefaultNavbar from "../../components/navbar/default-navbar";
import ProductList from "../../components/product-list/product-list";
import Product from "../../objects/Product";
import ProductsData from "../../data/products-data";

import "./cart.css";

interface Props {
  cart: CartState;
}

const Cart: React.FC<Props> = ({ cart }) => {
  const cartProducts = getCart(ProductsData, cart.products);

  return (
    <React.Fragment>
      <ProductList title="Keranjang Belanja" products={cartProducts} />
      <DefaultNavbar />
    </React.Fragment>
  );
};

function getCart(products: Product[], filter?: CartProduct[]): Product[] {
  return products.filter((p) => filter?.find((c) => c.id === p._id));
}

const mapStateToProps = (state: AppState) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
