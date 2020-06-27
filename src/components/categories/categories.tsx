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
    const CItem = CategoriesItem;
    return (
      <Container>
        <div className="group-categories">
          <CItem link="/search?p=sayuran" name="Sayuran" icon={sayur} />
          <CItem link="/search?p=buah" name="Buah" icon={buah} />
          <CItem link="/search?p=organik" name="Organik" icon={organik} />
          <CItem link="/search?p=ikan" name="Ikan" icon={ikan} />
          <CItem link="/search?p=bumbu" name="Bumbu" icon={bumbu} />
          <CItem link="/search?p=promo" name="Promo" icon={promo} />
          <CItem link="/search?p=terlaris" name="Terlaris" icon={terlaris} />
          <CItem link="/search?p=terbaru" name="Terbaru" icon={terbaru} />
          <CItem link="/search?p=telur" name="Telur" icon={telur} />
        </div>
      </Container>
    );
  }
}

export default GroupCategories;
