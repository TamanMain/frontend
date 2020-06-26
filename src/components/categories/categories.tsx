import React from "react";
import Container from "../container/container";
import CategoriesItem from "./categories-item";

import sayur from "./images/sayur.png";
import buah from "./images/buah.png";
import organik from "./images/organik.jpg";
import ikan from "./images/ikan.jpg";
import bumbu from "./images/bumbu.jpg";
import promo from "./images/promo.jpg";
import terlaris from "./images/terlaris.jpg";
import terbaru from "./images/terbaru.jpg";
import telur from "./images/telur.jpg";

import "./categories.css";

class GroupCategories extends React.Component {
  render() {
    return (
      <Container>
        <div className="group-categories">
          <CategoriesItem link="/" name="Sayuran" icon={sayur} />
          <CategoriesItem link="/" name="Buah" icon={buah} />
          <CategoriesItem link="/" name="Organik" icon={organik} />
          <CategoriesItem link="/" name="Ikan" icon={ikan} />
          <CategoriesItem link="/" name="Bumbu" icon={bumbu} />
          <CategoriesItem link="/" name="Promo" icon={promo} />
          <CategoriesItem link="/" name="Terlaris" icon={terlaris} />
          <CategoriesItem link="/" name="Terbaru" icon={terbaru} />
          <CategoriesItem link="/" name="Telur" icon={telur} />
        </div>
      </Container>
    );
  }
}

export default GroupCategories;
