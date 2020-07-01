import React, { useEffect } from "react";
import ProductsData from "../../data/products-data";
import ImageSquare from "./../../components/image/image-square";
import Container from "../../components/container/container";
import CardDetailsFluid from "./../../components/card/card-details-fluid";
import ContainerWithTitle from "./../../components/container/container-with-title";
import PageNotFound from "../PageNotFound/page-not-found";
import ProductNavbar from "../../components/navbar/product-navbar";
import "./product.css";

const Product: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // componentDidMount

  const id = window.location.pathname.replace("/p/", "");
  const product = ProductsData.find((item) => item._id === Number.parseInt(id));

  return product ? (
    <React.Fragment>
      <ImageSquare imageUrl={"../" + product.images[0]} />
      <Container>
        <div className="mx-3">
          <CardDetailsFluid product={product} />
        </div>
      </Container>
      <ContainerWithTitle title="Informasi Produk">
        <div className="product-informations">
          <div className="mx-3">
            <p>{product.name}</p>
            <p className="my-2">{product.description}</p>
          </div>
        </div>
      </ContainerWithTitle>
      <ProductNavbar />
    </React.Fragment>
  ) : (
    <PageNotFound />
  );
};

export default Product;
