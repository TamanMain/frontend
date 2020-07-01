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

const ProductList: React.FC<Props> = ({ products, title }) => {
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
};

export default ProductList;
