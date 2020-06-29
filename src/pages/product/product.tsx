import React from "react";
import ProductList from "./../../libs/product-list";
import ImageSquare from "./../../components/image/image-square";
import Container from "../../components/container/container";
import CardDetails from "./../../components/card/card-details";
import "./product.css";
import ContainerWithTitle from "./../../components/container/container-with-title";

class Product extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const id = window.location.pathname.replace("/p/", "");
    const product = ProductList.find((item) => item._id === id);

    return product ? (
      <div>
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
      </div>
    ) : (
      "404"
    );
  }
}

export default Product;
