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
            <div className="cards-container-title">
              <p>Baru Dipanen</p>
              <span>Buah dan Sayuran yang baru dipanen</span>
            </div>
            <a href="/" className="cards-container-link">
              See All »
            </a>
          </div>
          <img src={image} className="cards-container-image" />
          <div className="cards-container-list">
            <Card
              image={kol}
              title="Kembang Kol Baru Selesai Dipanen Dari Kebun"
              quantity="200 gram"
              price="Rp 27.800"
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
