import React from "react";
import ProductsData from "../../libs/products-data";
import ImageSquare from "./../../components/image/image-square";
import Container from "../../components/container/container";
import CardDetails from "./../../components/card/card-details";
import ContainerWithTitle from "./../../components/container/container-with-title";
import "./product.css";
import PageNotFound from "../PageNotFound/page-not-found";

class Product extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const id = window.location.pathname.replace("/p/", "");
    const product = ProductsData.find((item) => item._id === id);

    return product ? (
      <React.Fragment>
        <ImageSquare imageUrl={"../" + product.images[0]} />
        <Container>
          <div className="mx-3">
            <CardDetails product={product} />
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
      </React.Fragment>
    ) : (
      <PageNotFound />
    );
  }
}

export default Product;
