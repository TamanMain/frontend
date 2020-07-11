import React, { useEffect, useState } from "react";
import Axios from "axios";
import ImageSquare from "./../../components/image/image-square";
import Container from "../../components/container/container";
import CardDetailsFluid from "./../../components/card/card-details-fluid";
import ContainerWithTitle from "./../../components/container/container-with-title";
import PageNotFound from "../PageNotFound/page-not-found";
import ProductNavbar from "../../components/navbar/product-navbar";
import { default as ProductObject } from "../../objects/Product";
import "./product.css";

const Product: React.FC = () => {
  const [product, setProduct] = useState<ProductObject>();
  const [notFound, setNotFound] = useState<string>();

  useEffect(() => {
    const fetchProducts = async (url: string) => {
      await Axios.get(url)
        .then(({ data }) => {
          setProduct(data.data.items[0]);
        })
        .catch(() => {
          setNotFound("Product not found");
        });
    };

    window.scrollTo(0, 0);
    const id = window.location.pathname;
    fetchProducts(process.env.REACT_APP_API_URI + id);
  }, []);

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
      <ProductNavbar product={product} />
    </React.Fragment>
  ) : notFound ? (
    <PageNotFound />
  ) : (
    <p>Loading...</p>
  );
};

export default Product;
