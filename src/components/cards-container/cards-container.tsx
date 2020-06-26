import React from "react";
import Container from "../container/container";
import Card from "../card/card";

import image from "./image.jpg";
import kol from "./kol.jpg";

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
          <img src={image} className="cards-container-image" alt="" />
          <div className="cards-container-list">
            <Card
              image={kol}
              title="Kembang Kol"
              quantity="200 gram"
              price="Rp 27.800"
            />
            <Card
              image={kol}
              title="Baru Selesai Dipanen Dari Kebun"
              quantity="10 gram"
              price="Rp 14.900"
            />
            <Card
              image={kol}
              title="Kembang Kol Baru Selesai Dipanen Dari Kebun"
              quantity="10 gram"
              price="Rp 14.900"
            />
            <Card
              image={kol}
              title="Kembang Kol Baru Selesai Dipanen Dari Kebun"
              quantity="10 gram"
              price="Rp 14.900"
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default CardsContainer;
