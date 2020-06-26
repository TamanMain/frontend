import React from "react";
import Group from "../group/group";
import GroupCategoriesItem from "./categories-item";

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

export interface Props {}

class GroupCategories extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const Item = GroupCategoriesItem;
    return (
      <Group>
        <div className="group-categories">
          <Item link="/" name="Sayuran" icon={sayur} />
          <Item link="/" name="Buah" icon={buah} />
          <Item link="/" name="Organik" icon={organik} />
          <Item link="/" name="Ikan" icon={ikan} />
          <Item link="/" name="Bumbu" icon={bumbu} />
          <Item link="/" name="Promo" icon={promo} />
          <Item link="/" name="Terlaris" icon={terlaris} />
          <Item link="/" name="Terbaru" icon={terbaru} />
          <Item link="/" name="Telur" icon={telur} />
        </div>
      </Group>
    );
  }
}

export default GroupCategories;
