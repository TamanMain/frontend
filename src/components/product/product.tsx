import React from "react";
import Container from "../container/container";
import ProductDetails from "./product-details";
import ProductList from "./../../libs/product-list";
import "./product.css";

class Product extends React.Component {
  render() {
    const product = ProductList[0];
    return (
      <div className="product">
        <div className="product-images">
          <div className="product-images-list">
            <img src={product.images[0]} alt="" />
          </div>
        </div>
        <Container>
          <div className="product-details">
            <ProductDetails product={product} />
          </div>
        </Container>
        <Container title="Informasi Produk">
          <div className="product-informations">
            <p>{product.name}</p>
            <p>{product.description}</p>
          </div>
        </Container>
      </div>
    );
  }
}

export default Product;
