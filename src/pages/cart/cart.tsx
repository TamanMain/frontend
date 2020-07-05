import React from "react";
import { AppState } from "../../store";
import { connect } from "react-redux";
import { Cart as TypeCart } from "../../store/cart/types";
import DefaultNavbar from "../../components/navbar/default-navbar";
import ProductList from "../../components/product-list/product-list";
import Product from "../../objects/Product";
import ProductsData from "../../data/products-data";

import "./cart.css";

interface Props {
  carts: TypeCart[];
}

const Cart: React.FC<Props> = ({ carts }) => {
  const cartProducts = getCart(ProductsData, carts);

  return (
    <React.Fragment>
      <ProductList title="Keranjang Belanja" products={cartProducts} />
      <DefaultNavbar />
    </React.Fragment>
  );
};

function getCart(products: Product[], filter?: TypeCart[]): Product[] {
  return products.filter((p) => filter?.find((c) => c.id === p._id));
}

const mapStateToProps = (state: AppState) => ({
  carts: state.cart.carts,
});

export default connect(mapStateToProps)(Cart);
