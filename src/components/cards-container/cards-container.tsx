import React from "react";
import Container from "../container/container";
import SmallCard from "../card/small-card";
import ProductsData from "../../libs/products-data";
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
            <a href="/search?q=baru+dipanen" className="cards-container-link">
              <span>Lihat Semua</span>
            </a>
          </div>
          <img
            src={"/images/header.jpg"}
            className="cards-container-image"
            alt=""
          />
          <div className="cards-container-list">
            {ProductsData.map((product) => {
              return <SmallCard product={product} key={product._id} />;
            })}
          </div>
        </div>
      </Container>
    );
  }
}

export default CardsContainer;
