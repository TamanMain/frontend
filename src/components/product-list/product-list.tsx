import React from "react";
import Container from "../container/container";
import ContainerWithTitle from "./../container/container-with-title";
import Product from "./../../libs/ProductObject";
import Card from "../card/card";
import "./product-list.css";

interface Props {
  products: Product[];
  title?: string;
}

class ProductList extends React.Component<Props> {
  render() {
    const { products, title } = this.props;

    return title ? (
      <ContainerWithTitle title={title}>
        <div className="product-list">
          {products.map((product) => {
            return <Card product={product} key={product._id} />;
          })}
        </div>
      </ContainerWithTitle>
    ) : (
      <Container>
        <div className="product-list">
          {products.map((product) => {
            return <Card product={product} key={product._id} />;
          })}
        </div>
      </Container>
    );
  }
}

export default ProductList;
