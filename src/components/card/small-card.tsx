import React from "react";
import ProductObject from "../../libs/ProductObject";
import Card from "./card";
import "./small-card.css";

interface Props {
  product: ProductObject;
}

class SmallCard extends React.Component<Props> {
  render() {
    const { product } = this.props;
    return <Card product={product} cardWidthClass={"small-card"} />;
  }
}

export default SmallCard;
