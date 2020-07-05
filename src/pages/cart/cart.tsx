import React, { useState, useEffect } from "react";
import Axios from "axios";
import { AppState } from "../../store";
import { connect } from "react-redux";
import { CartState } from "../../store/cart/types";
import DefaultNavbar from "../../components/navbar/default-navbar";
import ProductList from "../../components/product-list/product-list";
import Product from "../../objects/Product";
import "./cart.css";

interface Props {
  cart: CartState;
}

const Cart: React.FC<Props> = ({ cart }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async (url: string) => {
      const { data } = await Axios.get(url);
      setProducts(data.products);
    };
    fetchProducts("http://192.168.0.101:5000/products");
  }, []);

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
