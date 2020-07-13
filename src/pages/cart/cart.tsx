import React, { useState, useEffect } from "react";
import Axios from "axios";
import { AppState } from "../../store";
import { connect } from "react-redux";
import { CartState } from "../../store/cart/types";
import DefaultNavbar from "../../components/navbar/default-navbar";
import ProductList from "../../components/product-list/product-list";
import Product from "../../objects/Product";
import config from "../../config";
import "./cart.css";

interface Props {
  cart: CartState;
}

const Cart: React.FC<Props> = ({ cart }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async (url: string) => {
    const { data } = await Axios.get(url);
    setProducts((products) => {
      const inProducts = products.find((p) => p._id === data._id);
      if (inProducts) {
        return [...products];
      } else {
        return [...products, data.data.items[0]];
      }
    });
  };

  useEffect(() => {
    for (let i = 0; i < cart.products.length; i++) {
      fetchProducts(config.API_URI + "/products/" + cart.products[i].id);
    }
  }, [cart.products]);

  return (
    <React.Fragment>
      <ProductList title="Keranjang Belanja" products={products} />
      <DefaultNavbar />
    </React.Fragment>
  );
};

const mapStateToProps = (state: AppState) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
