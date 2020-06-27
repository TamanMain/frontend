import React from "react";
import Container from "../container/container";
import Card from "../card/card";
import ProductList from "../../libs/product-list";
import "./cards-container.css";

class CardsContainer extends React.Component {
  render() {
    return (
      <Container>
        <div className="cards-container">
          <div className="cards-container-header">
            <div className="card-container-details">
              <p className="cards-container-title">Baru Dipanen</p>
              <p className="cards-container-subtitle">
                Buah dan Sayuran yang baru dipanen
              </p>
            </div>
            <a href="/" className="cards-container-link">
              <span>Lihat Semua</span>
            </a>
          </div>
          <img
            src={"/images/header.jpg"}
            className="cards-container-image"
            alt=""
          />
          <div className="cards-container-list">
            {ProductList.map((product) => {
              return <Card product={product} />;
            })}
          </div>
        </div>
      </Container>
    );
  }
}

export default CardsContainer;
