import React from "react";
import Container from "../container/container";
import ContainerWithTitle from "./../container/container-with-title";
import Product from "../../objects/Product";
import Card from "../card/card";
import "./product-list.css";

interface Props {
  products: Product[];
  title?: string;
}

const getCards = (products: Product[]) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => {
          return <Card product={product} key={product._id} />;
        })
      ) : (
        <div className="col-100 center">
          <i>No Product Found</i>
        </div>
      )}
    </div>
  );
};

const ProductList: React.FC<Props> = ({ products, title }) => {
  return title ? (
    <ContainerWithTitle title={title}>{getCards(products)}</ContainerWithTitle>
  ) : (
    <Container>{getCards(products)}</Container>
  );
};

export default ProductList;
