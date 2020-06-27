import React from "react";
import nanas from "./images/nanas madu.jpg";
import "./product.css";
import Container from "../container/container";
import ProductDetails from "./product-details";

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <div className="product-images">
          <div className="product-images-list">
            <img src={nanas} alt="" />
          </div>
        </div>
        <Container>
          <ProductDetails
            name="Nanas Madu"
            quantity={1}
            unit="buah"
            price={14000}
            isDiscount={true}
            discount={35}
            discountPrice={9100}
          />
        </Container>
        <Container title="Informasi Produk">
          <div className="product-informations">
            <p>Nanas Madu</p>
            <p>
              Nanas Madu relatif berukuran lebih kecil dari jenis nanas lainnya,
              walaupun sama-sama berwarna kuning nanas madu memiliki rasa dan
              aroma yang lebih manis, berserat, lebih lunak daripada nanas
              lainnya. Biasanya tunggu matang hingga 1-2 hari terlebih dahulu
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default Product;
