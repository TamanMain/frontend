import React from "react";
import Container from "../container/container";
import ProductDetails from "./product-details";
import ProductList from "./../../libs/product-list";
import "./product.css";

class Product extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const id = window.location.pathname.replace("/p/", "");
    const product = ProductList.find((item) => item._id === id);

    return product ? (
      <div className="product">
        <div className="product-images">
          <div className="product-images-list">
            <img src={"../" + product.images[0]} alt="" />
          </div>
        </div>
        <Container>
          <div className="mx-3">
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
    ) : (
      "404"
    );
  }
}

export default Product;
